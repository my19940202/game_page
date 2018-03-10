var items = [];
var running = false;
var reqNum = 0;
// qingqiu
var api = '/?';
if (!localStorage.getItem('prized')) {
    localStorage.setItem('prized', 0);
}

for (var i = 0; i < 8; i++) {
    items.push($('.rect' + i))
}

// 轮播效果
var timer = null;
function highlighter (idx) {
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
        var maxNum =  8 + Math.floor(Math.random() * 16);
        console.log(maxNum, "maxNum");
        timer = setInterval(function() {
            console.log(idx, maxNum)
            if (idx > maxNum) {
                timer = clearInterval(timer);
                running = false;
                getprize();
            }
            highlighter(idx % 8);
            idx++;
        }, 400);   
    }
})

function getprize() {

    if (localStorage.getItem('prized') == 1) {
        return;
    }
    
    // reqNum++;
    $.get(api + 'path=getprize', function(data, status){
        if (status == 'success') {
            if (data.result) {
                if (data.result == '游戏已经结束') {
                    alert("游戏已经结束");
                    return;
                } else {
                    disp_prompt(data.result, data.idx);

                }
            } else {
                alert('服务异常,请重试');    
            }
        } else {
            alert('服务异常');
        }
    });
}

//  抽奖提示
function disp_prompt(result, idx) {
    var name = prompt('恭喜抽到了奖品:' + result + ', 请输入您的名字登记(邮箱前缀)');
    var reqStr = 'path=submit&name=' + name + '&result=' + result + '&idx=' + idx;
    if (name && name != '') {
        $.get(api + reqStr,function(data, status){
            if (status == 'success') {
                localStorage.setItem('prized', 1);
                alert('提交成功');
            } else {
                alert('提交异常');
            }
        });
    } else {
        alert('名字异常');
    }
}