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
        '小夜灯': {
            img: 'images',
            desc: '希望它能温暖你每一个加班的夜~恭喜你抽到了小夜灯！'
        },
        '坚果蓝牙音箱': {
            img: 'images',
            desc: '时尚达人怎么能少了它？恭喜你抽到了坚果蓝牙音箱！'
        },
        '花点时间月卡套餐': {
            img: 'images',
            desc: '恭喜你抽到了花点时间月卡！时尚达人怎么能少了它？'
        },
        '大闸蟹礼券': {
            img: 'images',
            desc: '天呐！你太幸运了！恭喜你抽到了终极大奖：大闸蟹礼卷！'
        }
    };
    mask.style.display = 'block';
    // set title
    document.getElementById('title').innerHTML = imgMap[result].desc;
    // set img
    document.getElementById('img').src = './gift/' + imgMap[result].img + '.jpg';
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