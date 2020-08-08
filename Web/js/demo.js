/*
* 方法调用的js
*/
/*
* 获取浏览器地址栏中的query值
* @params key [String] 想要获取的key值
*/
function getLocationQuery (key){
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i=0;i<vars.length;i++) {
        var pair = vars[i].split("=");
        if(pair[0] == key){
            return pair[1];
        }
    }
    return false;
} 

function getAppName()
{
	var url = window.location.href;
	var array = url.split("://", 2);
	var str  = array[1]
	var name = str.split("/", 5)
	
	return name[1]
}
function getSession()
{
	var url = window.location.href;
	var index = url.indexOf("session");
	var params = url.substr(index);
	var sessionStr = params.split("&")[0];
	var session = sessionStr.split("=")[1];

	return session
}


function colorChange() 
{
     document.getElementById("open_stream").style.color = "#4169E1";
	 document.getElementById("close_stream").style.color = "#4169E1";
}


function bind (sdevInterface) {
    // 无插件不支持开启和关闭流
    document.getElementById('close_stream').onclick = function () {
        sdevInterface.close();
    };

    // 无插件不支持开启和关闭流
    document.getElementById('open_stream').onclick = function () {
        sdevInterface.open();
    };
}

var isPlugin = false; // 设定当前是否是控件版本模式，只有控件的绘制，才会返回shapeID
var sdevCanvasWrap = document.getElementById('sdev_stream_wrap'); // 放置视频元素的容器
/*var sdev = new SDEV(sdevCanvasWrap, 640, 480, {
    isH5: !isPlugin // SDEV类新增扩展字段，如果不增加该字段，则默认识别当前设备的播放模式，如果不在设备开发环境中则默认h5
});*/  // 构造一个SDEV类

var sdev = new SDEV(sdevCanvasWrap, 640, 480);

document.getElementById('open_stream').onclick = function () {

    var session = getLocationQuery('session');
    // 这里做一个强制转换处理，实际开发中，应该根据真实的端口进行拉流
    if (isPlugin) {
        port = 80;
    } else {
        port = 554;
    }

    // 初始化的参数设置
    var initOption = {
        ip: "172.27.2.81",
        port: port, // 端口缺省，无插件默认554， 控件默认80
        sub: 0,
        username: "admin",
        password: "admin123",
        loginType: "ip",
        session: session
    }

    sdev.init(initOption, function (res) {
        // console.log(res);
    });
    
    // 绑定事件
    bind(sdev);
	createCanvas();
	createGrid();
}	

function createCanvas(){
	var otest = document.getElementById("sdev_stream_wrap").getElementsByTagName("div")[0];
	var canvastest = document.createElement('canvas'); 
	canvastest.id ="myCanvas";
	// canvastest.width = 640;
	// canvastest.height = 480;
	canvastest.style.position ="absolute";
	canvastest.style.border = "1px solid blue"; 
	canvastest.style.background="none";
	canvastest.style.zIndex = "5";
	canvastest.style.display = "inherit";
	otest.appendChild(canvastest); 
	
	var myCanvas = document.createElement('canvas'); 
	myCanvas.id ="canvas";
	myCanvas.width = 640;
	myCanvas.height = 480;
	myCanvas.style.position ="absolute";
	myCanvas.style.border = "1px solid blue"; 
	myCanvas.style.background="none";
	myCanvas.style.zIndex = "4";
	otest.appendChild(myCanvas); 
}
var left_topx,left_topy,right_bottomx,right_bottomy;
function createGrid(){
	 function MyPaint(id,color='red'){

        var canvas = document.getElementById(id);

        this.canvas = canvas;

        this.color = color;

        this.ctx = this.canvas.getContext('2d');

        this.p1= {};

        this.p2 = {};

    }

    MyPaint.prototype.paintRect = function(){

        var myPaint = this;

        this.canvas.addEventListener('mousedown',function(e){

            console.info('mousedown',this);

            this.p1.x = e.offsetX;

            this.p1.y = e.offsetY;

            this.canvas.addEventListener("mousemove",myDrect);

            this.canvas.addEventListener("mouseup",function(){

                console.info("mouseup");

                console.info(myDrect);

                this.removeEventListener("mousemove",myDrect);

            })

        }.bind(this));



        function  myDrect(e){

            myPaint.p2.x = e.offsetX;

            myPaint.p2.y = e.offsetY;

            myPaint.ctx.width = myPaint.width;

            myPaint.ctx.height = myPaint.height;

            myPaint.ctx.fillStyle = '#FF0000';

            myPaint.ctx.strokeStyle = '#FF0000';

            var width = Math.abs(myPaint.p1.x-myPaint.p2.x);

            var height = Math.abs(myPaint.p1.y-myPaint.p2.y);

            myPaint.ctx.clearRect(0,0,myPaint.canvas.width,myPaint.canvas.height);

            myPaint.ctx.beginPath();
            if(myPaint.p2.x>=myPaint.p1.x&&myPaint.p2.y>=myPaint.p1.y){
                    myPaint.ctx.rect(myPaint.p1.x,myPaint.p1.y,width,height);
					txt="("+myPaint.p1.x.toString()+","+myPaint.p1.y.toString()+")"+","+"("+myPaint.p2.x.toString()+","+myPaint.p2.y.toString()+")";
					$("#p1").val(txt);
					left_topx = myPaint.p1.x;
					left_topy = myPaint.p1.y;
					right_bottomx = myPaint.p2.x;
					right_bottomy = myPaint.p2.y;
            }


            myPaint.ctx.stroke();

            myPaint.ctx.save();

        }

    }

    var  mp = new MyPaint('myCanvas');

    mp.paintRect();
}

function clearCanvas()
{  
	var c=document.getElementById("canvas"); 
    var cxt=c.getContext("2d");  
    c.height=c.height;  
}  

function saveConfig(){
	refreshDraw();
	gridDraw();
    var m = document.getElementById("getMValue").value;
    var n = document.getElementById("getNValue").value;
	var sens = document.getElementById("getSensValue").value;
	if( m=='' || n =='' || sens == '' || left_topx == ''|| left_topx == null)
	{
		alert("请注意参数输入完整");
		return false;
	}

	var url = window.location.origin + "/DHOP_API/" + getAppName()+ "/save?lx=" + left_topx + "&ly=" + left_topy +"&rx=" + right_bottomx + "&ry=" + right_bottomy +"&col=" + m + "&row=" + n + "&sens="+ sens + "&session=" + getSession();
	var xmlhttp;
	if (window.XMLHttpRequest)
	{
		// code for IE7+, Firefox, Chrome, Opera, Safari
		xmlhttp=new XMLHttpRequest();
	}
	else
	{
		// code for IE6, IE5
		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.onreadystatechange=function()
	{
		if (xmlhttp.readyState==4 && xmlhttp.status==200)
		{
		}
	}
	xmlhttp.open("GET",url,true);
	xmlhttp.send();
}

function refresh(refreshFlag){
	var url = window.location.origin + "/DHOP_API/"+ getAppName() + "/refresh" + "&session=" + getSession() ;
	
	var xmlhttp;
	if (window.XMLHttpRequest)
	{
		// code for IE7+, Firefox, Chrome, Opera, Safari
		xmlhttp=new XMLHttpRequest();
	}
	else
	{
		// code for IE6, IE5
		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.onreadystatechange=function()
	{
		if (xmlhttp.readyState==4 && xmlhttp.status==200)
		{
			var respstr = xmlhttp.responseText;
			var vals = respstr.split(",");
			var i = 0;
			var revRefresh = new Array();
			for (i = 0; i < vals.length; i++)
			{
				var kv = vals[i].split("=");
				revRefresh.push(kv[1]);
			}	
			if (vals.length <= 8){
				var coordinate = "";
				coordinate = "(" + revRefresh[1] + "," + revRefresh[2] + ")" + "," + "(" + revRefresh[3] + "," + revRefresh[4] + ")"; 
				$("#p1").val(coordinate);
				left_topx = parseInt(revRefresh[1]);
				left_topy = parseInt(revRefresh[2]);
				right_bottomx = parseInt(revRefresh[3]);
				right_bottomy = parseInt(revRefresh[4]);
				col = parseInt(revRefresh[5]);
				row = parseInt(revRefresh[6]);
				$("#getMValue").val(col);
				$("#getNValue").val(row);	
				$("#getSensValue").val(parseInt(revRefresh[7]));	
				if(refreshFlag==1)
				{
					refreshDraw();
					gridDraw();
				}
			}
			else 
			{
				alert("really?");
			}
			
		}
	}
	xmlhttp.open("GET",url,true);
	xmlhttp.send();
}

function refreshDraw()
{
	var c=document.getElementById("myCanvas"); 
	var ctx=c.getContext("2d");
	c.height=c.height;
	ctx.strokeStyle ="red";
	ctx.strokeRect( left_topx, left_topy, right_bottomx-left_topx, right_bottomy-left_topy);
	ctx.closePath();	
}

function gridDraw()
	{
		clearCanvas();
        var grid_cols = document.getElementById("getMValue").value;
        var grid_rows = document.getElementById("getNValue").value;
		//获取上下文
		var canvas=document.getElementById("canvas");
		var ctx=canvas.getContext("2d");
	
		var cell_height=canvas.height/grid_rows;
		var cell_width=canvas.width/grid_cols;
		ctx.lineWidth=0.2;
		ctx.strokeStyle="#a0a0a0";
		//结束边框描绘
		ctx.beginPath();
		//准备画横线
		for(var col=0;col<=grid_cols;col++)
			{
				var x=col*cell_width;
				ctx.moveTo(x,0);
				ctx.lineTo(x,canvas.height);
			}
			//准备画竖线
			for(var row=0;row<=grid_rows;row++)
				{
					var y=row*cell_height;
					ctx.moveTo(0,y);
					ctx.lineTo(canvas.width,y);
				}
				//完成描绘
				ctx.stroke();
	}
/*
* 所有sdev类，都应该在load方法内部或之后执行
*/
//用来加载配置参数，为0不画框，为1画框
var refreshFlag=0;
sdev.onload(function (options) {
    // 当前没有控件
    if (options.code == 0x20000402) {
        // console.log(sdev.PLUGINS_LINK); // 当前下载控件的地址
        if ('ActiveXObject' in window) { // ie下
            sdev.debugPlugin('object', {
                classid: 'CLSID:FAE76D9C-01D6-4B9B-955F-0B8A2FC5E8C7'
            })
        } else { // 非ie下
            sdev.debugPlugin('embed', {
                type: 'application/media-plugin-version-3.3.6220717.0'
            });
        }
    }
	refresh(refreshFlag);
    // 实例加载完成后，会返回当前的播放模式
    if (sdev.isH5Play) {
        isPlugin = false; // 这个是在demo中设置的全局变量
    } else {
        isPlugin = true;
    }
})

var detection;

/**
 * 开启定时器
 */
function startInterval() {
	if (detection == undefined) {
		detection = self.setInterval("detectionMoving()", 700);
	}
}

/**
 * 清除定时器
 */
function clearedInterval() {
	if (detection != undefined) {
		detection = window.clearInterval(detection);
	}
}
var sleep = function(time) {
    var startTime = new Date().getTime() + parseInt(time, 10);
    while(new Date().getTime() < startTime) {}
};

function detectionMoving() {
        //连续两次请求,获得两张图片
        var baseurl = window.location.origin + "/DHOP_API/" + getAppName() + "/snapshot" + "&session=" + getSession();
		var firsturl = baseurl + "&id=" + Math.random() * 100;
        $("#firstImg").attr("src", firsturl);
		sleep(300);
		var securl = baseurl + "&id=" + Math.random() * 100;
        $("#secImg").attr("src", securl);
}

/*
*		
* 控件一般是装在C:\Program Files\webrec\Torch下
* type字段的设置就是 'application/media-plugin-version-' + 你的控件文件夹名
* classid字段 'CLSID:' + 你的控件文件夹内plugin.data文件中Classid字段
* 例如，plugin.data中"Classid":"FAE76D9C-01D6-4B9B-955F-0B8A2FC5E8C7"
* 那么debugPlugin中传入的classid字段值为 classid: 'CLSID:FAE76D9C-01D6-4B9B-955F-0B8A2FC5E8C7'
* 这个大写的CLSID,不能写错
* 如果找不到这个文件夹
* 可以在设备中，安装好控件，然后在html元素中，找到控件元素，从上面把type或者classid复制过来
*/
