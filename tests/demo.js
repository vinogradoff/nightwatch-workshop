module.exports = {
  "Demo test ING-DiBa" : function (browser) {
    browser
      .url("http://www.ing-diba.de")
      //.waitForElementVisible('body', 1000)
      .assert.visible('.header__logo')
  },
  "Demo fail" : function (browser) {
    browser
      .verify.elementPresent('.not_exists', "Element .not_exists does not exist")
	  .click('.button_not_exists')
	  .verify.elementNotPresent('.not_exists')
  },
  "Demo fail 2" : function (browser) {
    browser
      .assert.elementPresent('.not_exists')
      .verify.elementNotPresent('.not_exists')
	  .click('.header__logo')
      .end();
  }
};
