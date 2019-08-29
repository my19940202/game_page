// 工具函数
const fs = require('fs');
module.exports = {
    writeFile: (filename, filestr, opt, cb) => {
        fs.writeFile(filename, filestr, opt, function (err, data) {
            cb(err, data);
        });
    },
    readFile: (filename, cb) => {
        fs.readFile(filename, (err, data) => {
            cb(err, data);
        });
    },
    getType: (subfix) => {
        let typeObj = {
            jpg: 'image/jpeg',
            png: 'image/png',
            html: 'text/html',
            css: 'text/css',
            js: 'text/js',
            txt: 'text/plain;charset=utf-8'
        }
        return typeObj[subfix];
    },
    geneRepeatArr: (num, item) => {
        let arr = new Array(num);
        for (let i = 0; i < arr.length; i++) {
            arr[i] = item;
        }
        return arr;
    }
};
