var items = [];
var running = false;
var reqNum = 0;
var userList = [
    'baiyang09',
'bizhining',
'caijingjing',
'cairui',
'caiyinhui',
'caochen',
'caomin02',
'changyuan02',
'chendongjin',
'chenhui08',
'chenhui14',
'chenjiale',
'chenlong16',
'chenmingfang',
'chenqing05',
'chenshumin',
'chentiancheng01',
'chenwei43',
'chenwenhui01',
'chenxin22',
'chenzhonglin',
'cuilingmeicuilingmei',
'cuishanshan01',
'cuixuezhao',
'dailing01',
'daixin03',
'daiyoupeng',
'dangyue',
'dengshiwen',
'dingcanbiao',
'dingtingting',
'dongbingxin',
'donghongyan',
'dongjuanjuan',
'dongnan',
'doujingning',
'duanyanan',
'duling',
'duwei03',
'duxin03',
'fangwei03',
'fangyilong',
'fanjia',
'fanjiajun01',
'fanwenjing01',
'fenghuazhi',
'fengkeju',
'fengnian',
'fuxue02',
'ganyuan',
'gaobin02',
'gaopeipei',
'gaoxin05',
'gaoyonghong',
'gaoyucai',
'gaoyulan',
'gengxiaolei',
'gezhiming',
'gujunjie',
'guodongni',
'guofujie',
'guohuiqin',
'guoshujing',
'guoyan04',
'guoyanan02',
'guoying',
'guozixu',
'guxue01',
'hanjiaqi',
'hanjiaqi_bj',
'hanmei01',
'hansiyu01',
'hanxu13',
'hanxuelei',
'haoxiao01',
'hehong',
'hejian05',
'helinlin',
'hezongwei',
'houdanyang01',
'houjinyi',
'houjunxin',
'houxiaolan',
'houxufei',
'huangdi01',
'huanghuimin',
'huangjiayan01',
'huanglingyue',
'huangruojia',
'huangshan03',
'huangshan04',
'huangting02',
'huangyingyu',
'hudi01',
'hulidan',
'huqinshu',
'huyaohua',
'huyue03',
'jiacoffee',
'jiangdengfeng',
'jiangjingjing01',
'jiangkexia',
'jiangkexin01',
'jiangshan06',
'jiangting02',
'jiangxingxiong',
'jiangyang04',
'jiangyongzhou',
'jiangyue',
'jiangzhemin',
'jiaoshanshan',
'jiaruqi',
'jingyanying',
'laiyanping',
'leiyu06',
'li_hui',
'lianghongmei',
'liangjie04',
'liangqunru',
'liangziyu',
'liantian',
'lianzi',
'libaoying',
'libowen',
'licancan',
'lichanglong01',
'lichengxiang',
'lida02',
'lifeifei02',
'lifeifei02_bj',
'ligang03',
'lihao33',
'lijian19',
'lijinzhi02',
'lijun13',
'likang03',
'lili47',
'lili52',
'lilili02',
'limengjiang',
'lina16',
'lingchenjun',
'lingfengxin',
'linxiaowei',
'linxiaowei_bj',
'linyanjun01',
'linyun',
'liqi12',
'liqian05',
'liqianzhong',
'liqin09',
'lishilong01',
'lishufen01',
'lisiying01',
'liubojun',
'liuboyuan',
'liufang10',
'liuhaiyang03',
'liuheng01',
'liujia04',
'liujia04_bj',
'liujia50',
'liujiaying1004',
'liujiaying1004_bj',
'liujing40',
'liujinghua01',
'liujinghui01',
'liulan04',
'liulei01',
'liulei42',
'liuningxia',
'liupeidong',
'liuqing16',
'liusha',
'liushan02',
'liushihao',
'liuwei28',
'liuwenjuan',
'liuxia01',
'liuxin17',
'liuxingchen02',
'liuyan18',
'liuyang60',
'liuyanyan02',
'liuye06',
'liuyingxia01',
'liuyu08',
'liuyuan05',
'lixiao27',
'lixiaozhuo',
'lixinyu12',
'liyafei',
'liyan03',
'liyan03_bj',
'liyang24',
'liyaning01',
'liyongcai',
'liyuening',
'liyuqiang01',
'lizhiwei04',
'louhanqing',
'lujianfei',
'lulei05',
'lumeng03',
'luojiayou',
'luojinli',
'luoshuangshuang',
'luoting',
'luoyan02',
'luwei04',
'lvxing',
'mabaoyun',
'macancan',
'machao06',
'mahong01',
'majinxiu',
'mameng01',
'mawen',
'maying05',
'miaosiyu',
'miaoyujia',
'moziqun',
'niewei01',
'ningchongjun',
'niuxingzhi01',
'ouyang',
'pangfei',
'pengminxia',
'pengweidong',
'qianzhidong',
'qiaojiaojun01',
'qihaifeng01',
'qinjuan',
'qinpeng01',
'qiupeng01',
'qixue',
'qiyuezhen',
'quhaijia',
'ranran',
'ranxiaoqiang',
'renjie02',
'shangjingwen',
'shenbin',
'shidandan',
'shiduowei',
'shijingjing',
'shilei20',
'shiqiongru',
'shiyanping',
'songbaizhu',
'songjing02',
'songjingwei01',
'songkeyan',
'songmingyang',
'songxin04',
'sunbei',
'sunjiaxin01',
'sunjing11',
'sunjingjing',
'sunmiao02',
'sunning02',
'sunxiadi',
'sunxiaozong',
'sunyan02',
'sunyan11',
'sunyi06',
'sunyijia01',
'sunzhaorong',
'tangfeifei',
'tangyanchun01',
'tangyaqian',
'taotao',
'taotao_bj',
'tengbeibei',
'tiandan01',
'tianhuimin',
'tongshuyan',
'tongxue02',
'v_duantianyu',
'v_zhengyue02',
'wangan03',
'wangbei04',
'wangchengye',
'wangdongmei06',
'wangfang18',
'wangfeng34',
'wanghailong07',
'wanghong12',
'wangjiakun',
'wangjiang04',
'wangjiao10',
'wangjijian',
'wangjijian_bj',
'wangjinbao',
'wangjing51',
'wangjingjing01',
'wangkai47',
'wangli35',
'wanglin04',
'wanglinlin05',
'wangmeng08',
'wangmengjie',
'wangqian25',
'wangqingqing',
'wangruonan',
'wangruoxi',
'wangshuping02',
'wangtianxian',
'wangwenjing01',
'wangwenjing01_bj',
'wangxi08',
'wangxiao18',
'wangyan17',
'wangyan57',
'wangyatian',
'wangying35',
'wangzhen28',
'wangzhenjun',
'wangzhiyun',
'wangzihan05',
'wangzilu02',
'wanye',
'weigeng',
'weilai02',
'weiziran',
'wenandi',
'wenhaichao',
'wubin07',
'wubingqi01',
'wuchaofen',
'wuchenxia',
'wucong02',
'wuhaijing02',
'wuhuancai',
'wuhuiyun',
'wulina03',
'wuxinxin',
'wuxinxin_bj',
'wuyanan04',
'wuying02',
'wuzichun01',
'xiangheng',
'xiangtao',
'xiaoyang05',
'xiecuiqing',
'xiedongrun',
'xiehongrui',
'xieyingying',
'xieyulin',
'xingyanjun',
'xiongyujun',
'xujunyi',
'xujunyi_sh',
'xuxiang06',
'xuyan14',
'xuyangyang02',
'xuzhichao',
'yangdonglei',
'yangjianqiao',
'yangling05',
'yangliu07',
'yangshengli',
'yangshuhan02',
'yangxiaowei01',
'yangxiyu',
'yangying02',
'yangyuanjiao',
'yanhan',
'yanhuihong',
'yanxingxing01',
'yaona',
'yedan',
'yeling02',
'yinjingyi',
'yuandonglong',
'yuanjun02',
'yuannannan',
'yuannannan_bj',
'yuanqiuyan',
'yuanyaqi',
'yuanyongfang',
'yuboyang01',
'yudeshui02',
'yuhai',
'yujingjing01',
'yukaisheng',
'yuliwei01',
'yuna02',
'yuyan02',
'yuyang23',
'yuyaqin01',
'zhandaoji',
'zhanghao01',
'zhangheng11',
'zhangjia09',
'zhangjian19',
'zhangjing40',
'zhangli13',
'zhangli38',
'zhanglihong',
'zhanglingdong',
'zhangmeijing',
'zhangmengying01',
'zhangmingli01',
'zhangqiaowei',
'zhangqinghua02',
'zhangruixia01',
'zhangshuaichao',
'zhangsijie',
'zhangsimi',
'zhangting31',
'zhangtong05',
'zhangwanpeng',
'zhangwei20',
'zhangwen09',
'zhangxiaotian',
'zhangxiaotian_bj',
'zhangxiaoyan13',
'zhangxueyang',
'zhangyue32',
'zhangzhigang05',
'zhaodongbin',
'zhaodonghai',
'zhaodonghai_bj',
'zhaokun04',
'zhaolei15',
'zhaopeng14',
'zhaotingxiao',
'zhaoxin18',
'zhaoxinyu',
'zhaoxuewei',
'zhaoyu',
'zhaozelong',
'zhaozelong_sh',
'zhaozifan',
'zhenghongbo01',
'zhengxiao07',
'zhenliyong',
'zhoujin06',
'zhoujingwen01',
'zhoutong05',
'zhouxiaojing',
'zhouya02',
'zhouyuyang',
'zhudarong',
'zhuhan03',
'zhukexin',
'zhulei04',
'zhuli03',
'zhuman',
'zhuyinan',
'zourenbo',
'zuojianhui'
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
                    alert('抽奖活动已经活动已结束~~');
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
