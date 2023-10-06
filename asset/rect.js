var items = [];
var running = false;
var reqNum = 0;
// 抽奖用户
var userList = [
    'taichenggang',
    'dongbingxin',
    'ganyuan',
    'lichengxiang'
];
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
        alert('已经抽过奖了');
        return;
    }
    let username = checkUserName();
    if (username === '') {
        return;
    }

    if (localStorage.getItem('prized') === '0' && !running) {
        idx = 0;
        running = true;
        var maxNum = 8 + Math.floor(Math.random() * 16);
        timer = setInterval(() => {
            if (idx > maxNum) {
                timer = clearInterval(timer);
                running = false;
                getprize(username);
            }
            highlighter(idx % 8);
            idx++;
        }, 200);
    }
});

function getprize(username) {
    if (localStorage.getItem('prized') == 1) {
        return;
    }

    $.get(api + 'path=getprize', (data, status) => {
        if (status === 'success') {
            if (data.result) {
                if (data.result === '游戏已经结束') {
                    alert('抽奖活动已结束~~');
                    return;
                } else {
                    // 发送中奖请求
                    lockPrice(username, data.result, data.idx);
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
function dispModal(result) {
    let imgMap = {
        '小夜灯': {
            img: 'light',
            desc: '希望它能温暖你每一个加班的夜~恭喜你抽到了小夜灯！'
        },
        '坚果蓝牙音箱': {
            img: 'yingxiang',
            desc: '时尚达人怎么能少了它？恭喜你抽到了坚果蓝牙音箱！'
        },
        '花点时间月卡套餐': {
            img: 'flower',
            desc: '我猜屏幕前面的你一定很好看！～恭喜你抽到了花点时间月卡！'
        },
        '大闸蟹礼券': {
            img: 'pangxie',
            desc: '天呐！你太幸运了！恭喜你抽到了终极大奖：大闸蟹礼卷！'
        }
    };
    mask.style.display = 'block';
    // set title
    document.getElementById('title').innerHTML = imgMap[result].desc;
    // set img
    document.getElementById('img').src = './gift/' + imgMap[result].img + '.jpg';
}
let confirmBtn = document.getElementById('confirmBtn');
confirmBtn.addEventListener('click', () => {
    mask.style.display = 'none';
});

// 用户输入校验
function checkUserName(params) {
    let input = $('#username').val().trim();

    let ret = '';
    if (input === '') {
        alert('请输入邮箱前缀');
        return ret;
    }
    if (input !== '' && userList.includes(input)) {
        ret = input;
    }
    else {
        alert('邮箱前缀不属于该部门');
    }
    return ret;
}

function lockPrice(name, result, idx) {
    let reqStr = 'path=submit&name=' + name
        + '&result=' + result
        + '&idx=' + idx;
    $.get(api + reqStr, function (data, status) {
        if (status === 'success') {
            localStorage.setItem('prized', 1);
            setTimeout(() => {
                dispModal(result, idx);
            }, 500);
        } else {
            alert('抽奖异常,请重试');
        }
    });
}
