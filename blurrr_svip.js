// Blurrr VIP + SVIP Lifetime Unlock – 2025 Working Version
// Tested on iOS 18.1 + Blurrr 2.3.55 → SVIP UNLOCKED FOREVER
// Works with Shadowrocket / Surge / Quantumult X

let url = $request.url;
if (!url.includes("verifyReceipt")) $done({});

let obj = {
  "environment": "Production",
  "status": 0,
  "receipt": {
    "in_app": [
      {
        "product_id": "com.tbps.blurrr.pro.yearly",
        "transaction_id": "490000000000001",
        "original_transaction_id": "490000000000001",
        "purchase_date_ms": "1735689600000",
        "expires_date_ms": "4102444800000",
        "is_trial_period": "false"
      },
      {
        "product_id": "com.tbps.blurrr.svip.permanent",
        "transaction_id": "490000000000002",
        "original_transaction_id": "490000000000002",
        "purchase_date_ms": "1735689600000",
        "expires_date_ms": "4102444800000",
        "is_trial_period": "false"
      }
    ]
  },
  "latest_receipt_info": [
    {
      "product_id": "com.tbps.blurrr.pro.yearly",
      "expires_date_ms": "4102444800000"
    },
    {
      "product_id": "com.tbps.blurrr.svip.permanent",
      "expires_date_ms": "4102444800000"
    }
  ]
};

$done({ body: JSON.stringify(obj) });
