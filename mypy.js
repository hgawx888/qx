/******************************

脚本功能：魔音配音ViP
软件版本：1.2.2
脚本作者：hgawx
更新时间：2023-4-23
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]
^https?:\/\/ipmapi\.intbull\.com\/v1\/scenic\/user\/info.*? url script-response-body https://raw.githubusercontent.com/hgawx888/qx/main/mypy.js

[mitm] 
hostname = ipmapi.intbull.com

*******************************/
var body=$response.body;
body = body.replace(/"vipGrade\":\d+/g,'"vipGrade":1');
$done(body);