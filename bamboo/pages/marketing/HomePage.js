/**
 * Created by brysonbreivik on 2/4/16.
 */

var homePage = function() {

    /* Identify Elements */
    const MARKETING_HOME_PAGE_URL = "www.stage.bamboohr.com";
    const TRY_IT_TOP_SECTION = element(by.id("tryIt"));

    /* Create Methods To Use For Page */

    this.validateMarketingHomePage = function () {
        it('Will first get stage, and then assert that the page loads', function () {
            console.log('TEST')
            browser.get(MARKETING_HOME_PAGE_URL);
        })
    }


};
module.exports = new homePage();