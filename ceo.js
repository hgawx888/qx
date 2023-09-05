/******************************

脚本功能：CEO周课+解锁VIP
下载地址：http://mtw.so/6rDbGg
软件版本：1.7.2
脚本作者：彭于晏
更新时间：2022-9-11
问题反馈：QQ+89996462
QQ会员群：779392027
TG反馈群：https://t.me/plus8889
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

^https:\/\/user\.xiaozaoapp\.com\/app\/ceouser\/loginAuto url script-response-body https://raw.githubusercontent.com/hgawx888/qx/main/ceo.js

[mitm] 
hostname = user.xiaozaoapp.com


*******************************/

var body = $response.body;
var objk = JSON.parse(body);

objk = {
  "errcode" : 200,
  "data" : {
    "is_hide" : 0,
    "profile" : "",
    "company" : "",
    "is_set_password" : 0,
    "nickname" : "彭于晏解锁",
    "is_reg" : 0,
    "vip_end_time" : "2088-09-11 19:36:44",
    "is_cancel" : 0,
    "channel_name" : "",
    "user_secret" : "2504900.b414c5a2i9RpTNd536b80dc58ae64185449a90",
    "rc_token" : "Aub3udkdrTVW9TAZpT7DQHC1W+w8uIw/aT4tzWQQsC0=@ro3r.cn.rongnav.com;ro3r.cn.rongcfg.com",
    "job" : "",
    "vip_start_time" : "2088-09-11 19:36:44",
    "is_vip" : 1,
    "token" : "TK_J8it27_2504900",
    "uid" : "2504900",
    "email" : "",
    "mobile" : "17876273604",
    "rand_password" : "kpIvYLvt6SBmLVto",
    "avatar" : "avatar/11.png",
    "avatar_large" : "avatar/11.png",
    "usercode" : "2514900",
    "is_wechat_binded" : 0,
    "username" : "17876273604"
  },
  "msg" : "操作成功",
  "ret_code" : 200,
  "current_time" : "2023-09-05 23:05:18"
}


body = JSON.stringify(objk);

$done({
    body
});