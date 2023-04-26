/******************************
⚠️如果放远程，请把bfcpq.js替换成运程链接⚠️
  🧚🏻‍♂️作者：🍡魔法师、木木🍡
  wx交流群：1077223830
🫧脚本名称:菜谱大全vip
🫧建议配合working copy一起食用
✈️working copy下载地址https://apps.apple.com/app/id896694807✈️
***************************
%¥
[rewrite_local]
^https?:\/\/apiios_dq\.xiangha\.com\/v4\/user\/getUserData|https?:\/\/apiios_dq\.xiangha\.com\/v4\/dish\/info.*? url script-response-body https://raw.githubusercontent.com/hgawx888/qx/main/bjcpdq.js


[mitm]
hostname = apiios_dq.xiangha.com,apiios_dq.xiangha.com
%¥
*******************************/
var body=$response.body;
body = body.replace(/"is_vip\":\d/g,'"is_vip":2');
body = body.replace(/"isShow\":"\d+"/g,'"isShow":"2"');
body = body.replace(/"is_open_vip\":\d/g,'"is_open_vip":2');
$done(body);