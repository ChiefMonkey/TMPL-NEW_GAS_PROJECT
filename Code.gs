function onOpen()
{
  var ui = SpreadsheetApp.getUi();
  ui.createMenu("Custom Menu")
    .addItem("☎ Help & Support","openHelpSite")
    .addSeparator()
    .addItem("", "")
    .addToUi();
} // onOpen()

//Open a website URL - use with openUrl()
function openHelpSite(){
  openUrl(HELP_SITE_LINK);
}//openHelpSite()

//Open a URL in a new tab.
function openUrl( url ){
  var html = HtmlService.createHtmlOutput('<html><script>'
  +'window.close = function(){window.setTimeout(function(){google.script.host.close()},9)};'
  +'var a = document.createElement("a"); a.href="'+url+'"; a.target="_blank";'
  +'if(document.createEvent){'
  +'  var event=document.createEvent("MouseEvents");'
  +'  if(navigator.userAgent.toLowerCase().indexOf("firefox")>-1){window.document.body.append(a)}'                          
  +'  event.initEvent("click",true,true); a.dispatchEvent(event);'
  +'}else{ a.click() }'
  +'close();'
  +'</script>'
  // Offer URL as clickable link in case above code fails.
  +'<body style="word-break:break-word;font-family:sans-serif;"><p>Oops...looks like you have popups blocked. <a href="https://support.google.com/chrome/answer/95472" target="_blank" onclick="window.close()">Learn how to enable popups</a> </p>' 
  +'<p><a href="'+url+'" target="_blank" onclick="window.close()">Click here to open a blank form</a>.</p></body>'
  +'<script>google.script.host.setHeight(130);google.script.host.setWidth(410)</script>'
  +'</html>')
  .setWidth( 410 ).setHeight( 1 );
  SpreadsheetApp.getUi().showModalDialog( html, "Opening..." );
}//openUrl()