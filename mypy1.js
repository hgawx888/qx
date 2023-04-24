/******************************
⚠️如果放远程，请把mypy1.js替换成运程链接⚠️
  🧚🏻‍♂️作者：🍡魔法师、木木🍡
  wx交流群：1077223830
🫧脚本名称:魔音配音vip
🫧建议配合working copy一起食用
✈️working copy下载地址https://apps.apple.com/app/id896694807✈️
*******************************
%¥
[rewrite_local]
^https?:\/\/ipmapi\.intbull\.com\/v1\/scenic\/user\/info.*? url script-response-body https://raw.githubusercontent.com/hgawx888/qx/main/mypy1.js


[mitm]
hostname = ipmapi.intbull.com
%¥
*******************************/
var body=$response.body;
body = body.replace(/"vipGrade\": 0,'"vipGrade": 1,');
$done(body);
