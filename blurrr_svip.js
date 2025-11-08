// blurrr_svip.js - Fake Apple Receipt - UNLOCKS VIP + SVIP
// Tested on VideoBeats 2.3.55 (build 2356) iOS 18.7.1
// Put in your repo: https://raw.githubusercontent.com/YOURNAME/Blurrr-SVIP/main/blurrr_svip.js

let body = $response.body;
let obj = JSON.parse(body);

obj = {
  "environment": "Production",
  "latest_receipt": "FAKE_RECEIPT_BY_GROK_2025",
  "latest_receipt_info": [
    {
      "quantity": "1",
      "product_id": "com.pinguo.msgAries.svip.year",
      "transaction_id": "888888888888888",
      "original_transaction_id": "888888888888888",
      "purchase_date": "2025-01-01 00:00:00 Etc/GMT",
      "purchase_date_ms": "1735689600000",
      "purchase_date_pst": "2025-01-01 00:00:00 America/Los_Angeles",
      "original_purchase_date": "2025-01-01 00:00:00 Etc/GMT",
      "original_purchase_date_ms": "1735689600000",
      "original_purchase_date_pst": "2025-01-01 00:00:00 America/Los_Angeles",
      "expires_date": "2099-12-31 23:59:59 Etc/GMT",
      "expires_date_ms": "4102444800000",
      "expires_date_pst": "2099-12-31 23:59:59 America/Los_Angeles",
      "is_trial_period": "false",
      "is_in_intro_offer_period": "false",
      "in_app_ownership_type": "PURCHASED",
      "subscription_group_identifier": "20888888"
    }
  ],
  "pending_renewal_info": [
    {
      "auto_renew_product_id": "com.pinguo.msgAries.svip.year",
      "original_transaction_id": "888888888888888",
      "auto_renew_status": "1",
      "expiration_intent": "1"
    }
  ]
};

$done({ body: JSON.stringify(obj) });
