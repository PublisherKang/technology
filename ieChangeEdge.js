// IE 스크립트 활성화시 Edge로 브라우저 변경
if(navigator.userAgent.indexOf("Trident") > 0){ 
    console.log("exLog");
    window.location = 'microsoft-edge:' + "https://mintway.io";
}
else if(/MSIE \d |Trident.*rv:/.test(navigator.userAgent)){
    console.log("exLog");
    window.location = 'microsoft-edge:' + url;
}