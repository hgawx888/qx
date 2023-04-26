/******************************

脚本功能：菜谱大全ViP
软件版本：5.4.2
脚本作者：hgawx
更新时间：2023-4-26
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]
^https?:\/\/apiios_dq\.xiangha\.com\/v4\/(user\/getUserData|dish\/info) url script-response-body https://raw.githubusercontent.com/hgawx888/qx/main/bjcpdq.js

[mitm] 
hostname = apiios_dq.xiangha.com

*******************************/

var body = $response.body;
var objc = JSON.parse(body);

objc = {
  "rules" : [
    {
      "action" : "body",
      "matchField" : "",
      "field" : "",
      "value" : "\"is_vip\":2",
      "matchValue" : "\"is_vip\":\\d",
      "destiontion" : "response",
      "isRegex" : false
    },
    {
      "action" : "body",
      "matchField" : "",
      "field" : "",
      "value" : "\"isShow\":\"2\"",
      "matchValue" : "\"isShow\":\"\\d+\"",
      "destiontion" : "response",
      "isRegex" : false
    },
    {
      "action" : "body",
      "matchField" : "",
      "field" : "",
      "value" : "\"is_open_vip\":2",
      "matchValue" : "\"is_open_vip\":\\d",
      "destiontion" : "response",
      "isRegex" : false
    }
  ],
  "enabled" : true,
  "name" : "菜谱大全vip",
  "description" : "",
  "locations" : [
    {
      "method" : "POST",
      "scheme" : "https",
      "enabled" : true,
      "port" : 443,
      "query" : "",
      "host" : "apiios_dq.xiangha.com",
      "path" : "\/v4\/user\/getUserData"
    },
    {
      "method" : "POST",
      "scheme" : "https",
      "enabled" : true,
      "port" : 443,
      "query" : "",
      "host" : "apiios_dq.xiangha.com",
      "path" : "\/v4\/dish\/info"
    }
  ]
};

body = JSON.stringify(objc);
$done({ body });
