module.exports = {


'Delete Data' : function (client) {
    client
      .url('http://localhost:3000/#/home')
      .waitForElementVisible('body', 1000)
      .click('#ListEmployeeLink')
	  .pause(1000)
	  .getText("body > div.ng-scope > div > div > form > table > thead > tr:nth-child(2) > td:nth-child(2)",function(result){
		  this.assert.equal(result.value,"tamanna")
		  
	  })
	  .click("#45")
	  .pause(2000)
      //.end();
  }
  
 }
 