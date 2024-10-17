const dataset = JSON.parse(JSON.stringify(require("..//testdata/registerUser-testdata.json")));

module.exports = {
   
  GenerateRandomText: async function () {
    console.log("**********Inside GenerateRandomText********");
    var count = 7;
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < count; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
 charactersLength));
   }
   return result;
  },

  
};