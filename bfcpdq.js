/******************************

脚本功能：菜谱大全ViP
软件版本：5.4.2
脚本作者：hgawx
更新时间：2023-4-26
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]
^https?:\/\/apiios_dq\.xiangha\.com\/v4 url script-response-body https://raw.githubusercontent.com/hgawx888/qx/main/bfcpdq.js

[mitm] 
hostname = apiios_dq.xiangha.com

*******************************/

var body = $response.body; //声明一个变量body井以响应消息体赋值
var objc = JSON.parse(body); //JSON.parsej将json形式的body转变成对象处理

comst vip = `/v4/user/getUserData`;
comst vip = `/v4/dish/info`;

objc.data.data.is_vip=2;
objc.data.data.isShow=2;
objc.data.data.is_open_vip=2;

body = JSON.stringify(objc); //重新打包回json字符串
$done(body); //结束修改