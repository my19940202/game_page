var http = require('http');
var urllib = require('url');
var log4js = require('log4js');
var conf = require('./config/conf.js');
var util = require('./util.js');
log4js.configure('./config/log.js');
var log = log4js.getLogger('game');

process.on('uncaughtException', function (err) {
        log.fatal(err);
        log.fatal(err.stack);
});

// 奖池init
var prize = [];
for(key in conf.prizeList) {
    prize = prize.concat(util.geneRepeatArr(conf.prizeList[key], key));
}

var result = null;
// 随机获取奖品
function getPrize() {
    var min = 0;
    var max = prize.length; 
    var idx = Math.round(Math.random() * (max - min)) + min;
    result = prize[idx];
    if (max === 0) {
        result = "游戏已经结束";
    }
    return {
        result: result,
        prize: prize,
        idx: idx
    };
}

http.createServer(function(req, res) {
    var params = urllib.parse(req.url, true);
    // get prize
    if (params.query
            && params.query.path
            && params.query.path == 'getprize') {
        var str = JSON.stringify(getPrize());
        res.writeHead(200, {
            'Content-Type': 'application/json'
        });
        res.end(str);
        log.info(
            'url=' + req.url
        );
    }

    // submit
    if (params.query 
            && params.query.path
            && params.query.path == 'submit'
            && params.query.idx
            && params.query.name
            && params.query.result) {
        // res.writeHead(200, {
        //     'Access-Control-Allow-Origin': '*'
        // });
        res.end('ok');
        // 删除抽中奖品
        prize.splice(parseInt(params.query.idx, 10), 1);
        log.info(
            'url=' + req.url + 'prize_len=' + prize.length
        );   
    }

    // 处理页面里面用到的静态文件
    if (params.path 
            && params.path
            && params.path.indexOf('asset') !== -1) {
        var subfix = params.path.split('.')[1];
        util.readFile('.' + params.path, (err, data) => {
            res.writeHead(200, {
                'Content-Type': util.getType(subfix),
            });
            res.end(data);
        })
        log.info(
            'file_req=' + params.path
        );   
    }
}).listen(conf.port);

