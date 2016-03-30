
module.exports = {

		  'Step One' : function (client) {
    client
      .url('http://localhost:3000/#/home')
      .waitForElementVisible('body', 1000)
      .click('#AddEmployeeLink')
      //.end();
  },
  
  'Step Two' : function (client) {
    client
      .url('http://localhost:3000/#/add')
	   .waitForElementVisible('body', 1000)
      .setValue('input[name=code]', '753')
	  .setValue('input[name=name]', 'Rupali')
	  .setValue('input[name=city]', 'pune')
      .click('#SubmitEmployee')
      //.end();
  },
  'Step Three' : function (client) {
    client
      .url('http://localhost:3000/#/list')
      .waitForElementVisible('body', 1000)
      .click('#ListEmployeeLink')
      //.end();
  }
  
  
  
  
  
  
  
};

