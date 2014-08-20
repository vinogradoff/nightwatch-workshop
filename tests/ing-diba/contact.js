module.exports = {
  "Contact ING-DiBa" : function (browser) {
	  console.log("hello world");
    browser
      .url("http://www.ing-diba.de")
      .click('.u-visible-large+ .u-visible-large')
	  .useXpath()
	  .assert.elementPresent("//ul[contains(@class,'pw12-tabs')]/li[position()=3]/a[@id='tab-adresse']")
	  .useCss()
	  .assert.elementPresent("#tab-adresse","third tab in contact windows exists")
	  .assert.containsText("#tab-adresse","Anschrift","tab name is Anschrift")
	  .saveScreenshot("screen1.png")
	  .end()
  }
};
