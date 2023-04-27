/******************************

脚本功能：菜谱大全ViP
软件版本：5.4.2
脚本作者：hgawx
更新时间：2023-4-26
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]
^https?:\/\/apiios_dq\.xiangha\.com\/v4\/user\/getUserData|https?:\/\/apiios_dq\.xiangha\.com\/v4\/dish\/info.*? url script-response-body https://raw.githubusercontent.com/hgawx888/qx/main/bjcpdq.js

[mitm] 
hostname = apiios_dq.xiangha.com

*******************************/

var body = $response.body;
var hgawx = JSON.parse(body);

hgawx = {
  "code": 0,
  "msg": "success",
  "data": {
    "status": true,
    "data": {
      "nickName": "霍玉曼",
      "id": "82843825189",
      "headPortraitPath": "https:\/\/s4.cdn.jiaonizuocai.com\/imgs\/202209\/1414\/632171ff63e8d.jpg\/MHgw.webp",
      "sex": "1",
      "tel": "17876273604",
      "WX": "",
      "appleName": "",
      "vip": {
        "is_vip": 2,
        "is_open_vip": 2
      },
      "userCollectionNum": 0,
      "userHeaderCode": "78523082949c59",
      "userCode": 82843825189,
      "reg_date": "2022-05-29"
    },
    "power": {}
  },
  "append": [],
  "extra": {
    "execTime": "0.0884",
    "serverTime": 1682590320
  }
}
{
  "code": 0,
  "msg": "success",
  "data": {
    "makes": [{
      "num": "1",
      "info": "",
      "img": "https:\/\/s4.cdn.jiaonizuocai.com\/caipu\/201802\/937\/1517552110.jpg\/NTAwX2MyXzA.webp",
      "video": []
    }],
    "all_click": "50.4万",
    "favorites": "4400",
    "share_img": "https:\/\/s4.cdn.jiaonizuocai.com\/caipu\/201801\/3117\/311740172295.jpg\/NjAwX2MyXzQwMA.webp",
    "code": 99870790,
    "health_str": "姜：降逆止呕、化痰止咳、散寒解表\n",
    "burden": [{
      "appurl": "",
      "name": "干辣椒段",
      "content": "2汤匙",
      "type": "1"
    }, {
      "appurl": "",
      "name": "新会陈皮",
      "content": "5g",
      "type": "1"
    }, {
      "appurl": "姜",
      "name": "姜",
      "content": "1块",
      "type": "1"
    }, {
      "appurl": "",
      "name": "啤酒",
      "content": "1听",
      "type": "1"
    }, {
      "appurl": "",
      "name": "牛柳",
      "content": "半斤",
      "type": "1"
    }, {
      "appurl": "芝麻油",
      "name": "香油",
      "content": "1汤匙",
      "type": "2"
    }, {
      "appurl": "冰糖",
      "name": "冰糖",
      "content": "2块",
      "type": "2"
    }, {
      "appurl": "八角",
      "name": "八角",
      "content": "2个",
      "type": "2"
    }, {
      "appurl": "酱油",
      "name": "酱油",
      "content": "2汤匙",
      "type": "2"
    }, {
      "appurl": "花椒",
      "name": "花椒",
      "content": "0.5汤匙",
      "type": "2"
    }, {
      "appurl": "丁香",
      "name": "丁香",
      "content": "1茶匙",
      "type": "2"
    }],
    "name": "陈皮牛柳",
    "img": "https:\/\/s4.cdn.jiaonizuocai.com\/caipu\/201801\/3117\/311740172295.jpg\/NjAwX2MyXzQwMA.webp",
    "remark": "\n【推荐理由】\n1*肉更鲜更嫩香气十足\n2. 大厨详解关键三步，牛柳干香不柴更入味\n3. 大厨揭秘独家配比，酱香浓郁滋味层次超丰富\n4. 橙皮巧手做容器，造型新颖惹人爱\n\n【烹饪时间】\n30分钟\n\n【用量换算】\n1汤匙≈15ml；1茶匙≈3g\n\n【原料选择】\n1. 牛肉：选用牛柳或米龙肉均可，肉质细嫩，口感更好\n2. 陈皮：选用新会陈皮，香味浓郁。如果买不到也可以在药店购买普通陈皮，量需要适量加大\n\n【烹制要点】\n1. 脂溶性调料，如八角、丁香、花椒、辣椒、陈皮等一定要炒香后再加入牛肉\n2. 炸制前挤干肉中水分，4到5成热时贴油面下锅，炸到牛肉纤维凸显即可捞出\n3. 啤酒中富含二氧化碳，可以松化牛肉，让牛肉纤维组织变得细腻柔软，口感更好",
    "info": "",
    "tagIds": "",
    "rec": [],
    "video": {
      "id": "130503",
      "customerId": "9801100",
      "time": "518.720000",
      "formatTime": "08:38",
      "size": "660085140",
      "width": "1920",
      "height": "1080",
      "ratio": "0",
      "img": "https:\/\/s4.cdn.jiaonizuocai.com\/img\/201802\/2615\/s\/5a93b76be353f.png\/MjUwX2MxXzA.webp",
      "gif": "https:\/\/s4.cdn.jiaonizuocai.com\/img\/201802\/26155a93b76be353f.gif\/MHgw.webp",
      "default": "https:\/\/v5.cdn.jiaonizuocai.com\/video\/201802\/2615\/y_rt2\/5a93b76be353f\/eGg0ODBw.m3u8?v=1.1&sign=df2f29e37625cb9d10583f6ed436c22e&t=644a517b",
      "url": {
        "270p": "https:\/\/v5.cdn.jiaonizuocai.com\/video\/201802\/2615\/y_rt2\/5a93b76be353f\/eGg0ODBw.m3u8?v=1.1&sign=df2f29e37625cb9d10583f6ed436c22e&t=644a517b",
        "360p": "https:\/\/v5.cdn.jiaonizuocai.com\/video\/201802\/2615\/y_rt2\/5a93b76be353f\/eGg0ODBw.m3u8?v=1.1&sign=df2f29e37625cb9d10583f6ed436c22e&t=644a517b",
        "480p": "https:\/\/v5.cdn.jiaonizuocai.com\/video\/201802\/2615\/y_rt2\/5a93b76be353f\/eGg0ODBw.m3u8?v=1.1&sign=df2f29e37625cb9d10583f6ed436c22e&t=644a517b",
        "720p": "https:\/\/v5.cdn.jiaonizuocai.com\/video\/201802\/2615\/y_rt2\/5a93b76be353f\/eGg0ODBw.m3u8?v=1.1&sign=df2f29e37625cb9d10583f6ed436c22e&t=644a517b",
        "1080p": "https:\/\/v5.cdn.jiaonizuocai.com\/video\/201802\/2615\/y_rt2\/5a93b76be353f\/eGg0ODBw.m3u8?v=1.1&sign=df2f29e37625cb9d10583f6ed436c22e&t=644a517b"
      }
    },
    "type": "2",
    "shareJson": "{\"code\":99870790,\"type\":2,\"from\":\"\\u83dc\\u8c31\\u9875\"}",
    "id": "998540",
    "judgeId": 1,
    "isVip": "2",
    "burdenStr": "干辣椒段、新会陈皮、姜、啤酒、牛柳、香油、冰糖、八角、酱油、花椒、丁香",
    "power": {
      "detail": {
        "video": {
          "common": {
            "text": "完整视频请开会员,图文做法下方免费看",
            "button1": "开通会员",
            "button2": "会员免费观看",
            "isShow": "2",
            "url": "https:\/\/appweb_dq.xiangha.com\/Center\/pay\/home?fullScreen=2"
          },
          "fields": {
            "time": "0"
          }
        }
      }
    }
  },
  "append": [],
  "extra": {
    "execTime": "0.0590",
    "serverTime": 1682590324
  }
}

body = JSON.stringify(hgawx);
$done({ body });
