
const {EYLandingPage} = require('./EYLandingPage');
const {DynamicsLoginPage} = require('./DynamicsLoginPage');

class EYPoManager
{
    constructor(page)
    {
       this.page = page       
       this.EYLandingPage = new EYLandingPage(this.page); 
       this.DynamicsLoginPage = new DynamicsLoginPage(this.page);      
    }
    
    getEYLandingPage()
    {
        return this.EYLandingPage;
    }    
    getDynamicsLoginPage()
    {
        return this.DynamicsLoginPage;
    }
}

module.exports = {EYPoManager};