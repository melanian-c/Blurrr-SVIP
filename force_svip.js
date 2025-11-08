// force_svip.js - Force 360in.com to return VIP = TRUE
// Put in your repo: https://raw.githubusercontent.com/YOURNAME/Blurrr-SVIP/main/force_svip.js

let body = $response.body;
let obj = JSON.parse(body);

// Force VIP + SVIP + All Pro Features
if (obj.data) {
  obj.data.isVip = true;
  obj.data.isSvip = true;
  obj.data.vipExpireTime = "2099-12-31 23:59:59";
  obj.data.svipExpireTime = "2099-12-31 23:59:59";
  obj.data.vipLevel = 99;
  obj.data.pro = true;
  obj.data.member = true;
  obj.data.vip = true;
  obj.data.svip = true;
  obj.data.cloudSpace = "999GB";
  obj.data.canUseAllMaterial = true;
  obj.data.canExport4K = true;
  obj.data.canRemoveWatermark = true;
}

$done({ body: JSON.stringify(obj) });
