//Jasmine describe statement : Describes the test
 describe('App angular::', function() {
    //before Each :  This piece of code executes before all it statement
    beforeEach(function() {
            var ptor = protractor.getInstance();
            ptor.get('https://localhost:3000');
    });
    //Jasmine it statement : What "it" will do.
    it('Verify that the user is logged in', function() {
	//Delete all cookies
        browser.driver.manage().deleteAllCookies();
		
		  element(by.css('.AddEmployeeLink[type="button"]')).click();
		  
		  //Wait for the current URL to change to welcome
        browser.driver.wait(function() {
            return browser.driver.getCurrentUrl().then(function(url) {
                return (/welcome/).test(url);
            });
        });
		//Jasmine expect statement : compare actual and expected value
	expect(browser.getCurrentUrl()).toEqual('http://localhost:3000/#/add');
    });
	});