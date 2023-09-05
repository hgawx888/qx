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

var body = $response['body'];
var url = $request['url'];
var obj = JSON['parse'](body);
const vip = '/loginAuto';
if (url['indexOf'](vip) != -0x1) {
    obj['data']['is_vip'] = 0x1;
    obj['data']['vip_end_time'] = '2088-09-11 19:36:44';
    obj['data']['vip_start_time'] = '2088-09-11 19:36:44';
    obj['data']['nickname'] = '彭于晏解锁';
    body = JSON['stringify'](obj);
}
$done({
    'body': body
});