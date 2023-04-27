/******************************

脚本功能：魔音配音ViP
软件版本：1.2.2
脚本作者：hgawx
更新时间：2023-4-23
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]
^https?:\/\/ipmapi\.intbull\.com\/v1\/scenic\/user\/info.*? url script-response-body https://raw.githubusercontent.com/hgawx888/qx/main/bjmypy.js

[mitm] 
hostname = ipmapi.intbull.com

*******************************/

var body = $response.body;
var objc = JSON.parse(body);

objc = {
  "code": 200,
  "sign": "fb13c0710477f1d976a72693c4e36060ee49bd75",
  "content": "查询成功",
  "data": {
    "userId": "19712468",
    "nickName": "17876273604",
    "sex": 0,
    "province": null,
    "city": null,
    "country": null,
    "openId": "17876273604",
    "unionId": "",
    "headUrl": null,
    "appId": "75",
    "alipayId": null,
    "createTime": "2022-05-30 17:54:09",
    "createTimeTimestamp": "1653904449",
    "updateTime": "2022-05-30 17:54:09",
    "phoneNum": "17876273604",
    "token": "YzczNzE0YzRhMWYzMDk3YmZhNjJiMDM5OGY5YjdkY2E4NTBjNzY2OC4xNjYyNTQ0NDQ5",
    "status": "0",
    "remark": null,
    "vipGrade": 1,
    "vipExpireDate": -1,
    "userType": 0,
    "rank": 0,
    "authorizationCode": "76863443526"
  }
};

body = JSON.stringify(objc);
$done({ body });
