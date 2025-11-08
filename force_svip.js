// force_svip.js — BRANDS EVERY UNLOCK WITH MEL. CO
let body = JSON.stringify({
  "vip_expire": 4102444800,
  "svip_expire": 4102444800,
  "product_id": "com.tbps.blurrr.svip.permanent",
  "is_svip": true,
  "status": 0,
  "message": "Unlocked by Mel. Co",
  "unlock_source": "Mel. Co Signature",
  "unlocked_by": "Mel. Co"
});
$done({body});
