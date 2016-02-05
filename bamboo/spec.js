// spec.js
beforeEach(function () {
    return browser.ignoreSynchronization = true;
});
describe('Protractor Demo App', function() {
    it('should not let invalid user log in', function() {
        browser.get('http://brysontest.local.bamboohr.com/');

        element(by.id('lemail')).sendKeys('bbreivik@bamboohr.com');
        element(by.id('password')).sendKeys('Testing2');
        element(by.buttonText('Log In')).click();
        element(by.id('message')).isPresent();



        element(by.id('lemail')).sendKeys('automationtester+work@bamboohr.com');
        element(by.id('password')).sendKeys('Testing2');
        element(by.buttonText('Log In')).click();

        element(by.id('nav-tabs')).isPresent();

    });
});
