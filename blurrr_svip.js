// blurrr_svip.js — LIFETIME SVIP + VIP + BRANDED BY MEL. CO
let obj = {
  "environment": "Production",
  "status": 0,
  "latest_receipt_info": [
    {
      "product_id": "com.tbps.blurrr.pro.yearly",
      "expires_date_ms": "4102444800000",
      "transaction_id": "MELCO666"
    },
    {
      "product_id": "com.tbps.blurrr.svip.permanent",
      "expires_date_ms": "4102444800000",
      "transaction_id": "MELCO999"
    }
  ],
  "receipt": {
    "in_app": [
      {
        "product_id": "com.tbps.blurrr.svip.permanent",
        "original_transaction_id": "MELCO999",
        "purchase_date_ms": "1735689600000",
        "expires_date_ms": "4102444800000",
        "is_trial_period": "false"
      }
    ]
  }
};
$done({body: JSON.stringify(obj)});
