var items = [];
var running = false;
var reqNum = 0;

var api = '/?';
if (!localStorage.getItem('prized')) {
    localStorage.setItem('prized', 0);
}

// 禁用控制台
// setInterval(startDebug, 100);
// function startDebug() { debugger; }

for (var i = 0; i < 8; i++) {
    items.push($('.rect' + i))
}

// 轮播效果
var timer = null;
function highlighter(idx) {
    for (var i = 0; i < items.length; i++) {
       // items[i]
        if (items[i].attr('class').indexOf(idx.toString()) !== -1) {
            items[i].addClass('highlight')
        } else {
            items[i].removeClass('highlight')
        }
   }
}

var idx = 0;
$('.btn').click(function () {
    if (localStorage.getItem('prized') == 1) {
        alert(' 已经抽过奖了');
    }
    if (localStorage.getItem('prized') == 0 && !running) {
        idx = 0;
        running = true;
        var maxNum = 8 + Math.floor(Math.random() * 16);
        timer = setInterval(() => {
            if (idx > maxNum) {
                timer = clearInterval(timer);
                running = false;
                getprize();
            }
            highlighter(idx % 8);
            idx++;
        }, 200);
    }
});

function getprize() {

    if (localStorage.getItem('prized') == 1) {
        return;
    }

    $.get(api + 'path=getprize', function(data, status){
        if (status == 'success') {
            if (data.result) {
                if (data.result == '游戏已经结束') {
                    alert('抽奖活动已经活动已结束~~');
                    return;
                } else {
                    dispModal(data.result, data.idx);
                }
            } else {
                alert('服务异常,请重试');    
            }
        } else {
            alert('服务异常');
        }
    });
}

// 抽奖提示
let mask = document.querySelector('.mask');
function dispModal(result, idx) {
    let imgMap = {
        '超美化妆镜台灯': 'images',
        '京东东礼品卡': 'images',
        '碧然德滤水壶': 'images',
        'ELLE保温杯礼盒': 'images',
        '便携式胶囊咖啡机': 'images',
        '户外很实用套装': 'images',
        '当当当礼品卡': 'images',
        '请找超级可爱助理MM解锁此礼包': 'images'
    };
    mask.style.display = 'block';
    // set title
    document.getElementById('title').innerHTML = '恭喜抽到了奖品:' + result;
    // set img
    document.getElementById('img').src = './gift/' + imgMap[result] + '.jpg';
    window.result = result;
    window.idx = idx;
}
let submitBtn = document.getElementById('submitBtn');
submitBtn.addEventListener('click', () => {
    if (localStorage.getItem('prized') == 1) {
        alert(' 已经抽过奖了');
    }
    let name = document.getElementById('submit').value;
    if (name && name != '') {
        var reqStr = 'path=submit&name=' + name + '&result=' + window.result + '&idx=' + window.idx;
        $.get(api + reqStr, function (data, status) {
            if (status == 'success') {
                localStorage.setItem('prized', 1);
                alert('提交成功');
                setTimeout(() => {
                    mask.style.display = 'none';
                }, 500);
            } else {
                alert('提交异常');
            }
        });
    } else {
        alert('名字异常');
    }
});