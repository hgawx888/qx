/******************************

脚本功能：Noted-录音笔记+解锁订阅
下载地址：http://mtw.so/5XgNfB
软件版本：3.8.5
脚本作者：hgawx888
更新时间：2023-9-4
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩⚠️⚠️⚠️


*******************************

[rewrite_local]

^https:\/\/subscription-api\.notedapp\.io\/api\/verifyReceipt url script-response-body https://raw.githubusercontent.com/hgawx888/qx/main/Noted.js

[mitm] 
hostname = subscription-api.notedapp.io
*******************************/

var body = $response.body;
var objk = JSON.parse(body);

objk = {
  "environment": "Production",
  "receipt": {
    "receipt_type": "Production",
    "adam_id": 1149425482,
    "app_item_id": 1149425482,
    "bundle_id": "com.digitalworkroom.noted",
    "application_version": "480",
    "download_id": 501333573438869250,
    "version_external_identifier": 847529357,
    "receipt_creation_date": "2023-09-04 14:21:30 Etc/GMT",
    "receipt_creation_date_ms": "1693837290000",
    "receipt_creation_date_pst": "2023-09-04 07:21:30 America/Los_Angeles",
    "request_date": "2023-09-04 14:24:57 Etc/GMT",
    "request_date_ms": "1693837497860",
    "request_date_pst": "2023-09-04 07:24:57 America/Los_Angeles",
    "original_purchase_date": "2022-04-21 05:50:53 Etc/GMT",
    "original_purchase_date_ms": "1650520253000",
    "original_purchase_date_pst": "2022-04-20 22:50:53 America/Los_Angeles",
    "original_application_version": "480",
    "in_app": [{
      "quantity": "1",
      "product_id": "com.digitalworkroom.noted.plus.year",
      "transaction_id": "220001221969591",
      "original_transaction_id": "220001221969591",
      "purchase_date": "2022-04-21 07:04:28 Etc/GMT",
      "purchase_date_ms": "1650524668000",
      "purchase_date_pst": "2022-04-21 00:04:28 America/Los_Angeles",
      "original_purchase_date": "2022-04-21 07:04:29 Etc/GMT",
      "original_purchase_date_ms": "1650524669000",
      "original_purchase_date_pst": "2022-04-21 00:04:29 America/Los_Angeles",
      "expires_date": "2099-12-24 07:04:28 Etc/GMT",
      "expires_date_ms": "3800000000000",
      "expires_date_pst": "2099-12-24 00:04:28 America/Los_Angeles",
      "web_order_line_item_id": "220000536094382",
      "is_trial_period": "true",
      "is_in_intro_offer_period": "false",
      "in_app_ownership_type": "PURCHASED"
    }]
  },
  "latest_receipt_info": {
    "quantity": "1",
    "product_id": "com.digitalworkroom.noted.plus.year",
    "transaction_id": "220001221969591",
    "original_transaction_id": "220001221969591",
    "purchase_date": "2022-04-21 07:04:28 Etc/GMT",
    "purchase_date_ms": "1650524668000",
    "purchase_date_pst": "2022-04-21 00:04:28 America/Los_Angeles",
    "original_purchase_date": "2022-04-21 07:04:29 Etc/GMT",
    "original_purchase_date_ms": "1650524669000",
    "original_purchase_date_pst": "2022-04-21 00:04:29 America/Los_Angeles",
    "expires_date": "2099-12-24 07:04:28 Etc/GMT",
    "expires_date_ms": "3800000000000",
    "expires_date_pst": "2099-12-24 00:04:28 America/Los_Angeles",
    "web_order_line_item_id": "220000536094382",
    "is_trial_period": "true",
    "is_in_intro_offer_period": "false",
    "in_app_ownership_type": "PURCHASED",
    "subscription_group_identifier": "20421642",
    "expires_date_formatted": "2099-12-24 07:04:28 Etc/GMT"
  },
  "latest_receipt": "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",
  "pending_renewal_info": {
    "expiration_intent": "1",
    "auto_renew_product_id": "com.digitalworkroom.noted.plus.year",
    "is_in_billing_retry_period": false,
    "product_id": "com.digitalworkroom.noted.plus.year",
    "original_transaction_id": "220001221969591",
    "auto_renew_status": "0"
  },
  "status": 0,
  "hasFreeTrial": true,
  "valid": true
}


body = JSON.stringify(objk);

$done({
    body
});