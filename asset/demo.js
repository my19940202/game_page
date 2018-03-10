var fillStyle = ['rgb(255,154,2)','rgb(210,92,4)','rgb(255,154,0)','rgb(210,92,4)','rgb(255,154,0)','rgb(210,92,4)','rgb(255,154,0)','rgb(210,92,4)','rgb(255,154,0)','rgb(210,92,4)']
        ,fillText = ['超美化妆镜台灯','京东东礼品卡','碧然德滤水壶','ELLE保温杯礼盒','便携式胶囊咖啡机','户外很实用套装','当当当礼品卡','请找超级可爱助理MM解锁此礼包','x','x']
        ,width = 400
        ,height = 400
        ,c_x = 200
        ,c_y =200
        ,radius = 170 // 圆盘半径
        ,canvas = document.getElementById('bg')
        ,index =0
        ,timer = null
        ,running = false // 是否运行中
        ,speed = 500 // 速度
        ,isPrized =false // 是否已经抽好奖
        ,isBeginPrize = false // 是否开始抽奖
        ,stepping=0 // 步数，经过一个扇形为1步
        ,basecircle = 3 // 点击开始时，圆盘旋转的圈数，旋转玩指定圈数之后，再根据selected的值确定奖项
        ,selected =0; // 最终选中第几个扇形，也就是确定几等奖
    function setup(){
        drawCircle(false);
        
    }
    function drawCircle(isRunning){
        var deg = Math.PI/300;
        var startAngle = 0;
        var endAngle = 58;
        canvas.height = height;
        canvas.width = width;
        var ctx=canvas.getContext('2d');
        for(var i=0;i<10;i++){
            ctx.beginPath();

            // 正在运行的时候，改变当前扇形的颜色
            if(isRunning && index==i)
            {
                ctx.fillStyle = 'rgb(255,18,1)';
            }
            else
            {
                ctx.fillStyle = fillStyle[i];
            }

            // 绘制扇形
            ctx.moveTo(c_x,c_y);
            ctx.arc(c_x,c_y,radius,deg*startAngle,deg*endAngle,false);
            ctx.fill();

            // 绘制扇形上的文字
            ctx.font="12px Microsoft YaHei";
            ctx.fillStyle = '#000';
            ctx.textAlign = "center";
            ctx.fillText(fillText[i],200+Math.cos(deg*(startAngle+30))*150,200+Math.sin(deg*(startAngle+30))*150);
            startAngle +=60;
            endAngle +=60;
        }


        // 绘制中心圆
        ctx.beginPath();
        ctx.arc(200,200,50,0,2*Math.PI,1);
        ctx.fillStyle = 'rgb(255,255,255)';
        ctx.fill();

        // 绘制中心圆
        ctx.font="15px Microsoft YaHei";
        // 创建渐变
        var gradient=ctx.createLinearGradient(0,0,width,0);
        gradient.addColorStop("0","magenta");
        gradient.addColorStop("0.2","blue");
        gradient.addColorStop("0.4","red");
        // 用渐变填色
        ctx.textAlign = "center";
        ctx.fillStyle=gradient;
        ctx.fillText("start",200,195+0);
        ctx.fillText("立即抽奖",200,200+20);

        // 绘制中心园边框
        ctx.strokeStyle = 'rgb(0,0,0)';
        ctx.lineWidth = 1;
        ctx.stroke();
    }


    function rotate(){
        if(stepping==4){ // 4步之后开始加速
            clearTimer();
            speed = +100;
            timer = setInterval(rotate,speed);
        }

        if(basecircle>0 && index ==10){ // 基本圈数借宿以后，开始随机抽奖
            index = 0;
            basecircle--;
            if(basecircle == 0) // 开始随机抽奖
            {
                clearTimer();
                speed = 300;
                timer = setInterval(rotate,speed);
                isBeginPrize = true;              
            }
            
        }

        if(isBeginPrize && selected > 0) // 开始抽奖
        {
           
            if(--selected == 0) //到了选择的奖项之后
            {
                clearTimer();
                isStop = true;
                // 抽到奖了 弹出框提示一下
                $.get("http://10.145.78.238:8811?path=getprize",function(data, status){
                    console.log(data, status);
                    if (status == 'success') {
                        disp_prompt(data.result);
                    } else {
                        alert('服务异常');
                    }
                });
            }
            else
            {
                clearTimer();
                speed += 100;
                timer = setInterval(rotate,speed);
            }

        }

        drawCircle(true);
        index++;
        stepping++;
    }

    //  抽奖提示
    function disp_prompt(result) {
        var name = prompt('恭喜抽到了奖品:' + result + ', 请输入您的名字登记(邮箱前缀)');
        var reqStr = 'path=submit&name=' + name + '&result=' + result;
        if (name && name != '') {
            $.get('http://10.145.78.238:8811?' + reqStr,function(data, status){
                if (status == 'success') {
                    isPrized = true;
                    alert('提交成功');
                } else {
                    alert('提交异常');
                }
            });
        }
    }

    // 初始化抽奖参数
    function init()
    {
        basecircle = 4;
         selected =  (Math.floor(Math.random() * 10) + 1 );//输出1-10的随机数

        running= true;
        isBeginPrize = false;

        index = index++;
          
        stepping = 0;
        speed = 300;
    }

    function mouseDown_Start(e){
        console.log("click");
        var local = getPointOnCanvas(canvas, e.pageX, e.pageY);

        if(local.x > 100 && local.x < 300 && local.y>100 && local.y<300) {
            if(isPrized){
                alert("已经抽过奖了")
                return;
            }
            if(running){
                return;
            }
            init();
            timer = setInterval(rotate,speed);
            
        }
    }


    function clearTimer(){
        
        clearInterval(timer);
        timer = null;
    }

    function getPointOnCanvas(canvas, x, y) {

        var bbox =canvas.getBoundingClientRect();

        return { x:x- bbox.left *(canvas.width / bbox.width),

            y:y - bbox.top  * (canvas.height / bbox.height)

        };

    }

    setup();

    canvas.addEventListener("mousedown",mouseDown_Start,false);