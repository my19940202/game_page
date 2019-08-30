/**
 * @file 活动抽奖页面
 * @author xishengbo
 */

const http = require('http');
const urllib = require('url');
const log4js = require('log4js');
const conf = require('./config/conf.js');
const util = require('./util.js');

log4js.configure({
    appenders: {
        everything: {type: 'file', filename: 'game.log'}
    },
    categories: {
        default: {appenders: ['everything'], level: 'trace'}
    }
  });

const log = log4js.getLogger();

process.on('uncaughtException', function (err) {
        log.fatal(err);
        log.fatal(err.stack);
});

// 奖池init
let prize = [];
for (key in conf.prizeList) {
    prize = prize.concat(util.geneRepeatArr(conf.prizeList[key], key));
}

let result = null;
// 随机获取奖品
function getPrize() {
    let min = 0;
    let max = prize.length; 
    let idx = Math.round(Math.random() * (max - min)) + min;
    result = prize[idx];
    if (max === 0) {
        result = '游戏已经结束';
    }
    return {
        result: result,
        prize: prize,
        idx: idx
    };
}

util.writeFile('./asset/prize.txt', '\n', null, (err, data) => {});

http.createServer((req, res) => {
    console.log('server receive request');
    let params = urllib.parse(req.url, true);

    // 获取奖品信息的接口
    if (params.query && params.query.path === 'getprize') {
        let str = JSON.stringify(getPrize());
        res.writeHead(200, {
            'Content-Type': 'application/json'
        });
        res.end(str);
        log.info(
            'url=' + req.url
        );
    }

    // 提交领取奖品接口(姓名和奖品)
    if (params.query
            && params.query.path === 'submit'
            && params.query.idx
            && params.query.name
            && params.query.result) {
        // 删除抽中奖品
        prize.splice(parseInt(params.query.idx, 10), 1);
        log.trace(
            'url=' + req.url + 'prize_len=' + prize.length
        );
        // TODO加时间
        let fileStr = new Date().toLocaleString() + ','
            + params.query.name + ','
            + params.query.result + '\n';
        util.writeFile('./asset/prize.txt', fileStr, {flag: 'a'}, (err, data) => {
            res.end('ok');
            console.log('req end');
        });
    }

    // 处理页面里面用到的静态文件
    if (params.path && params.path.indexOf('asset') !== -1) {
        let subfix = params.path.split('.')[1];
        util.readFile('.' + params.path, (err, data) => {
            res.writeHead(200, {
                'Content-Type': util.getType(subfix)
            });
            res.end(data);
        });
        log.info(
            'file_req=' + params.path
        );
    }
}).listen(conf.port);

