// melco_instant_unlock.js — ANY "Subscribe" or "Renew" button = FREE SVIP + BRANDED
if ($request.url.includes("purchase") || 
    $request.url.includes("subscribe") || 
    $request.url.includes("membership") || 
    $request.url.includes("payment")) {

  let body = JSON.stringify({
    "status": 0,
    "is_svip": true,
    "svip_expire": 4102444800,
    "vip_expire": 4102444800,
    "message": "Unlocked by Mel. Co",
    "unlock_source": "Mel. Co Instant Unlock",
    "unlocked_by": "Mel. Co",
    "product_id": "com.tbps.blurrr.svip.permanent"
  });

  $done({status: 200, headers: {"Content-Type": "application/json"}, body});
}
