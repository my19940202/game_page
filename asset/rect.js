var items = [];
var running = false;
var reqNum = 0;
var userList = [
    'yudeshui02',
    'zhangqiaowei',
    'wangxiao18',
    'hezongwei',
    'sunyijia01',
    'daixin03',
    'mahong01',
    'houdanyang01',
    'shidandan',
    'xuyan14',
    'wubin07',
    'yangshuhan02',
    'weilai02',
    'yuanyaqi',
    'zhangheng11',
    'zhangyue32',
    'qiyuezhen',
    'wangchengye',
    'niewei01',
    'zhangli13',
    'yuyaqin01',
    'zhenliyong',
    'shiduowei',
    'zhanghao01',
    'liyafei',
    'hudi01',
    'jiangyang04',
    'doujingning',
    'xiedongrun',
    'sunyan11',
    'chenhui08',
    'lianghongmei',
    'tangyanchun01',
    'songjingwei01',
    'guozixu',
    'liqin09',
    'duanyanan',
    'zhouya02',
    'zhuman',
    'jiangdengfeng',
    'linyun',
    'lixinyu12',
    'fengkeju',
    'miaosiyu',
    'lili47',
    'liuyang60',
    'daiyoupeng',
    'hulidan',
    'wubingqi01',
    'luoshuangshuang',
    'huyue03',
    'xieyingying',
    'moziqun',
    'xiongyujun',
    'fuxue02',
    'tianhuimin',
    'cairui',
    'lihao33',
    'lida02',
    'liuyu08',
    'liuyan18',
    'hehong',
    'hanjiaqi_bj',
    'wangshuping02',
    'liulan04',
    'liufang10',
    'weigeng',
    'luojinli',
    'ganyuan',
    'yuliwei01',
    'zhulei04',
    'zhangshuaichao',
    'wangxi08',
    'chenjiale',
    'zhanglingdong',
    'zhuyinan',
    'guxue01',
    'yuhai',
    'chenlong16',
    'zuojianhui',
    'shilei20',
    'zhangxiaoyan13',
    'gaoyonghong',
    'huyaohua',
    'zhangjia09',
    'v_zhengyue02',
    'wuzichun01',
    'jiangting02',
    'caijingjing',
    'zhanglihong',
    'quhaijia',
    'linxiaowei_bj',
    'hanxuelei',
    'duwei03',
    'miaoyujia',
    'zhaozelong_sh',
    'liuxia01',
    'v_duantianyu',
    'liujiaying1004_bj',
    'liujia50',
    'liyuqiang01',
    'jiacoffee',
    'tengbeibei',
    'ranran',
    'wangjing51',
    'fanwenjing01',
    'huanghuimin',
    'donghongyan',
    'liuyuan05',
    'liuhaiyang03',
    'wuhuancai',
    'tiandan01',
    'zhangmengying01',
    'zhangmingli01',
    'jiangkexia',
    'mameng01',
    'caiyinhui',
    'dingtingting',
    'liuningxia',
    'zhangtong05',
    'luoyan02',
    'gengxiaolei',
    'dailing01',
    'huangjiayan01',
    'tongxue02',
    'dingcanbiao',
    'wenhaichao',
    'yanxingxing01',
    'machao06',
    'louhanqing',
    'sunning02',
    'sunjiaxin01',
    'gaoyulan',
    'lichanglong01',
    'zhaolei15',
    'zhangting31',
    'zhangzhigang05',
    'jiangkexin01',
    'liulei42',
    'yedan',
    'li_hui',
    'leiyu06',
    'wangjiao10',
    'fengnian',
    'zhaozifan',
    'lulei05',
    'zhangmeijing',
    'yuboyang01',
    'pengweidong',
    'jiangyue',
    'sunmiao02',
    'chenzhonglin',
    'liujia04_bj',
    'songkeyan',
    'lina16',
    'libaoying',
    'licancan',
    'huangruojia',
    'yinjingyi',
    'tangyaqian',
    'houjunxin',
    'jiangshan06',
    'qinjuan',
    'xiecuiqing',
    'dongbingxin',
    'zhenghongbo01',
    'gujunjie',
    'shijingjing',
    'wanye',
    'wangli35',
    'liupeidong',
    'guoyanan02',
    'wangqingqing',
    'liqi12',
    'limengjiang',
    'liuqing16',
    'yeling02',
    'yujingjing01',
    'pengminxia',
    'yuyang23',
    'xuyangyang02',
    'liqianzhong',
    'wangmeng08',
    'wuhaijing02',
    'zhengxiao07',
    'liuheng01',
    'lixiao27',
    'chenwei43',
    'wangruoxi',
    'pangfei',
    'liujinghui01',
    'caomin02',
    'sunzhaorong',
    'houjinyi',
    'weiziran',
    'yuanqiuyan',
    'gaobin02',
    'yangxiaowei01',
    'wangjiang04',
    'qinpeng01',
    'helinlin',
    'dongnan',
    'hansiyu01',
    'liyan03_bj',
    'zhaoxin18',
    'huangyingyu',
    'fangyilong',
    'zhangwanpeng',
    'chenxin22',
    'guoyan04',
    'lijinzhi02',
    'haoxiao01',
    'qiaojiaojun01',
    'qianzhidong',
    'jingyanying',
    'niuxingzhi01',
    'luoting',
    'hanxu13',
    'zhaoxinyu',
    'wanghong12',
    'wangjingjing01',
    'wuchaofen',
    'renjie02',
    'huangting02',
    'chenshumin',
    'xiaoyang05',
    'cuixuezhao',
    'xiangtao',
    'jiaoshanshan',
    'cuishanshan01',
    'liuxin17',
    'xiangheng',
    'majinxiu',
    'houxufei',
    'xieyulin',
    'zhangjing40',
    'liulei01',
    'liushan02',
    'houxiaolan',
    'sunyi06',
    'yangling05',
    'zhaoxuewei',
    'liangziyu',
    'xuzhichao',
    'wanglin04',
    'wangyan17',
    'zhuhan03',
    'jiaruqi',
    'fangwei03',
    'wangjinbao',
    'zhangsimi',
    'liuyanyan02',
    'xiehongrui',
    'liyang24',
    'yangyuanjiao',
    'mawen',
    'zhangxueyang',
    'liuwei28',
    'wangzilu02',
    'wuyanan04',
    'liuxingchen02',
    'liangqunru',
    'lvxing',
    'luwei04',
    'yanhan',
    'songbaizhu',
    'yuyan02',
    'lishilong01',
    'fanjia',
    'zhukexin',
    'yangdonglei',
    'liubojun',
    'songxin04',
    'liyongcai',
    'liuboyuan',
    'chenwenhui01',
    'lili52',
    'zhangqinghua02',
    'luojiayou',
    'wangyatian',
    'yuandonglong',
    'yangliu07',
    'gezhiming',
    'lisiying01',
    'wangfang18',
    'guoying',
    'taotao_bj',
    'wanghailong07',
    'zhudarong',
    'wangruonan',
    'wangying35',
    'wuxinxin_bj',
    'sunjingjing',
    'wuying02',
    'gaopeipei',
    'zhoujin06',
    'duxin03',
    'chenhui14',
    'jiangjingjing01',
    'guofujie',
    'wuchenxia',
    'liujing40',
    'wulina03',
    'xuxiang06',
    'shangjingwen',
    'zhandaoji',
    'hejian05',
    'wangzhiyun',
    'yukaisheng',
    'huqinshu',
    'lianzi',
    'lumeng03',
    'jiangxingxiong',
    'chenmingfang',
    'liuye06',
    'wangkai47',
    'guohuiqin',
    'wangzhenjun',
    'mabaoyun',
    'ouyang',
    'lujianfei',
    'liushihao',
    'chendongjin',
    'huangshan04',
    'caochen',
    'zhouyuyang',
    'duling',
    'baiyang09',
    'cuilingmeicuilingmei',
    'zhaokun04',
    'lichengxiang',
    'liangjie04',
    'libowen',
    'liqian05',
    'zhoujingwen01',
    'zourenbo',
    'liuyingxia01',
    'zhouxiaojing',
    'guoshujing',
    'wangzihan05',
    'zhaotingxiao',
    'zhaoyu',
    'changyuan02',
    'huangdi01',
    'lishufen01',
    'lizhiwei04',
    'zhangsijie',
    'liyuening',
    'lilili02',
    'yuanjun02',
    'wangbei04',
    'macancan',
    'shenbin',
    'yuannannan_bj',
    'yuanyongfang',
    'yaona',
    'wanglinlin05',
    'wucong02',
    'hanmei01',
    'zhangruixia01',
    'laiyanping',
    'yangshengli',
    'wangjijian_bj',
    'wenandi',
    'ligang03',
    'gaoyucai',
    'lifeifei02_bj',
    'qixue',
    'tangfeifei',
    'lijun13',
    'yanhuihong',
    'dengshiwen',
    'wangan03',
    'wuhuiyun',
    'shiyanping',
    'wangwenjing01_bj',
    'dongjuanjuan',
    'zhoutong05',
    'tongshuyan',
    'wangdongmei06',
    'qiupeng01',
    'liuwenjuan',
    'shiqiongru',
    'zhangli38',
    'dangyue',
    'wangqian25',
    'lijian19',
    'chentiancheng01',
    'zhaodongbin',
    'songjing02',
    'liujinghua01',
    'guodongni',
    'wangjiakun',
    'liyaning01',
    'lixiaozhuo',
    'wangfeng34',
    'liantian',
    'wangmengjie',
    'fanjiajun01',
    'zhaodonghai_bj',
    'zhuli03',
    'gaoxin05',
    'yuna02',
    'linyanjun01',
    'zhangwei20',
    'lingchenjun',
    'zhangwen09',
    'wangtianxian',
    'qihaifeng01',
    'liusha',
    'yangjianqiao',
    'likang03',
    'jiangzhemin',
    'yangying02',
    'zhangjian19',
    'fenghuazhi',
    'jiangyongzhou',
    'huanglingyue',
    'huangshan03',
    'xujunyi_sh',
    'ranxiaoqiang',
    'yangxiyu',
    'sunyan02',
    'lingfengxin',
    'maying05',
    'zhaopeng14',
    'bizhining',
    'chenqing05',
    'sunxiadi',
    'sunxiaozong',
    'xingyanjun',
    'sunjing11',
    'sunbei',
    'ningchongjun',
    'wangyan57',
    'wangzhen28',
    'zhangxiaotian_bj',
    'songmingyang'
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
