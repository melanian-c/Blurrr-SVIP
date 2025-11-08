// melco_instant_unlock.js - Click any VIP button → Instant Unlock
// Put in your repo: https://raw.githubusercontent.com/YOURNAME/Blurrr-SVIP/main/melco_instant_unlock.js

if ($request.url.includes('purchase') || 
    $request.url.includes('subscribe') || 
    $request.url.includes('vip') || 
    $request.url.includes('svip') || 
    $request.url.includes('restore') || 
    $request.url.includes('membership')) {

  $done({
    url: "https://buy.itunes.apple.com/verifyReceipt",
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({})
  });
} else {
  $done({});
}
