// 工具函数
var fs = require('fs');
module.exports = {
    writeFile: (filename, filestr) => {
        fs.writeFile(filename, filestr, function (err) {
            if (err) throw err;
        });
    },
    readFile: (filename, clk) => {
        fs.readFile(filename, (err, data) => {
            clk(err, data);
        });
    },
    getType: (subfix) => {
        var typeObj = {
            jpg: 'image/jpeg',
            png: 'image/png',
            html: 'text/html',
            css: 'text/css',
            js: 'text/js'
        }
        return typeObj[subfix];
    },
    geneRepeatArr: (num, item) => {
        var arr = new Array(num);
        for (var i = 0; i < arr.length; i++) {
            arr[i] = item;
        }
        return arr;
    }
}
