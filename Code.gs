function onOpen()
{
  var menu = SpreadsheetApp.getUi();
  menu.createMenu("Shoosh Monkey")
    .addItem("☎ Help & Support","openHelpSite")
    .addSeparator()
    .addItem("Show Sidebar", "showSidebar")
    .addToUi();
} // onOpen()