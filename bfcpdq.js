/*******************************

脚本功能：菜谱大全ViP
软件版本：5.4.2
脚本作者：hgawx
更新时间：2023-4-26
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

******************************** 

[rewrite_local]
^https?:\/\/apiios_dq\.xiangha\.com\/v4\/user\/getUserData|https?:\/\/apiios_dq\.xiangha\.com\/v4\/dish\/info.*? url script-response-body https://raw.githubusercontent.com/hgawx888/qx/main/bfcpdq.js


[mitm]
hostname = apiios_dq.xiangha.com

*******************************/
var body=$response.body;
body = body.replace(/"is_vip\":\d/g,'"is_vip":2');
body = body.replace(/"isShow\":"\d+"/g,'"isShow":"2"');
body = body.replace(/"is_open_vip\":\d/g,'"is_open_vip":2');
$done(body);