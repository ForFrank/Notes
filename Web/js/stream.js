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


// 绘制的回调，最新的回调数据都会在这里
var drawCallback = function (arg) {
    if (arg.event.type != "drawFinish") {
        return;
    }
}
// 由于请求canvas绘图库文件是异步请求，所以要等onload之后，才可以

/**
 * 绘制垂直直线
 * @param sdevInterface
 * @param point
 */
function drawVerticalLine(sdevInterface,point){
    sdevInterface.DrawVerticalLine(point);
}

/**
 * 绘制水平直线
 * @param sdevInterface
 * @param point
 */
function drawHorizontalLine(sdevInterface,point){
    sdevInterface.DrawHorizLine(point);
}

/**
 * 绘制任意直线
 * @param sdevInterface
 * @param point
 */
function drawLine(sdevInterface,point){
    sdevInterface.DrawLine(point);
}

/**
 * 绘制折线
 * @param sdevInterface
 * @param point
 */
function drawPolyLine(sdevInterface,point) {
    sdevInterface.DrawPolyLine(point);
}

/**
 * 绘制矩形
 * @param sdevInterface
 * @param point
 */
function drawRectangle(sdevInterface,point){
    sdevInterface.DrawRectangle(point);
}

/**
 * 绘制多边形
 * @param sdevInterface
 * @param point
 */
function drawPolygon(sdevInterface,points) {
    sdevInterface.DrawPolygon(points);
}

var isPlugin = false; // 设定当前是否是控件版本模式，只有控件的绘制，才会返回shapeID
var sdevCanvasWrap = document.getElementById('sdev_stream_wrap'); // 放置视频元素的容器

var sdev = new SDEV(sdevCanvasWrap, 480, 320);
var canvas;
var width;
var height;
// 登录
/*document.getElementById('login_btn').onclick = function () {
/!*    var loginType = document.getElementById('login_type').value;
    var userName = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var session = document.getElementById('session').value || getLocationQuery('session');
    var ip = document.getElementById('ip').value;
    var port = document.getElementById('port').value - 0; // 无插件登录的默认端口是554这个需要注意

    // 这里做一个强制转换处理，实际开发中，应该根据真实的端口进行拉流
    if (isPlugin) {
        port = 80;
    } else {
        port = 554;
    }*!/

    // 初始化的参数设置
    var initOption = {
        ip: "172.27.131.133",
        port:554, // 端口缺省，无插件默认554， 控件默认80
        sub: 0,
        username: "admin",
        password: "admin123",
        loginType: "session",
        session: getLocationQuery('session')
    }

    sdev.init(initOption, function (res) {
        console.log(res);
    });
}*/
/**
 * 登录
 */
function login(){
    // 初始化的参数设置
    var initOption = {
        ip: window.location.hostname,
        port:554, // 端口缺省，无插件默认554， 控件默认80
        sub: 0,
        username: "admin",
        password: "admin123",
        loginType: "session",
        session: getLocationQuery('session')
    }

    sdev.init(initOption, function (res) {
        console.log(res);
    });
}
function drawGrid(row,column){
}

/*
* 所有sdev类，都应该在load方法内部或之后执行
*/

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

    // 实例加载完成后，会返回当前的播放模式
    if (sdev.isH5Play) {
        isPlugin = false; // 这个是在demo中设置的全局变量
    } else {
        isPlugin = true;
    }
}, function (res) {
    // 控件版本此处可以不写, 但是无插件版本的需要此内容
    drawCallback(res);
})
login()

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