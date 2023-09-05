/******************************

脚本功能：CEO周课+解锁VIP
下载地址：http://mtw.so/6rDbGg
软件版本：1.7.2
脚本作者：hgawx
更新时间：2023-04-26
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
    obj['data']['vip_end_time'] = '2099-09-09 08:08:00';
    obj['data']['vip_start_time'] = '2099-09-09 08:08:00';
    obj['data']['nickname'] = 'hgawx';
    body = JSON['stringify'](obj);
}
$done({
    'body': body
});