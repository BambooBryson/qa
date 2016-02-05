/**
 * Created by brysonbreivik on 2/4/16.
 */
// spec.js
var marketingHome = require('../pages/marketing/HomePage.js');
beforeEach(function () {
    console.log('beforeEach Has started.');
    marketingHome.validateMarketingHomePage();
    console.log('method is done... was it skipped?');
    return browser.ignoreSynchronization = true;
});
describe('Signing A Customer Up', function() {
    it('first I will just do a test to make sure I can get this to work at all.', function() {

        console.log('beforeEach has finished');

    });
});
