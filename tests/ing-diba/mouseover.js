module.exports = {
  "Contact ING-DiBa" : function (browser) {
    browser
      .url("http://www.ing-diba.de")
      .click('.u-visible-large+ .u-visible-large')
	  .moveToElement("#tab-adresse",10,10)
	  .assert.cssProperty("#tab-adresse","color","rgba(255, 102, 0, 1)") //"#f60")
	  .saveScreenshot("screen1.png")
	  .end()
  }
};
