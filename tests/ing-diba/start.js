module.exports = {
  "Startpage ING-DiBa" : function (browser) {
    browser
      .url("http://www.ing-diba.de")
      .assert.visible('.header__logo')
	  .assert.containsText('.header-actions__item:nth-child(1)','Start')
	  .saveScreenshot("screen1.png")
	  .end()
  }
};
