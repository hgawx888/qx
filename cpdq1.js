/******************************

脚本功能：菜谱大全ViP
软件版本：5.2.3
脚本作者：hgawx
更新时间：2023-4-24
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]
^https:\/\/apiios_dq\.xiangha\.com url script-response-body https://raw.githubusercontent.com/hgawx888/qx/main/cpdq1.js

[mitm] 
hostname = dq.xiangha.com,apiios_dq.xiangha.com

*******************************/

var body = $response.body;
var objc = JSON.parse(body);

objc = {
  "code" : 0,
  "data" : {
    "status" : true,
    "data" : {
      "id" : "82843825189",
      "userHeaderCode" : "077830829491c5",
      "vip" : {
        "is_open_vip" : 1,
        "is_vip" : 2
      },
      "userCollectionNum" : 0,
      "sex" : "1",
      "headPortraitPath" : "https://s4.cdn.jiaonizuocai.com/imgs/202209/1414/632171ff63e8d.jpg/MHgw.webp",
      "appleName" : "",
      "reg_date" : "2022-05-29",
      "nickName" : "hgawx",
      "tel" : "17876273604",
      "WX" : "",
      "userCode" : 82843825189
    },
    "power" : {

    }
  },
  "msg" : "success",
  "append" : [

  ],
  "extra" : {
    "execTime" : "0.0765",
    "serverTime" : 1986573521
  };

body = JSON.stringify(objc);
$done({ body });
