const fs = require('fs');
const customer = require('./testdata/Sample.json');
console.log(customer.validPassword);
fs.readFile('./testdata/Sample.json','utf-8', (err, jsonString) => {
    
    if (err) {
        console.log("File read failed:", err);
        return;
      }else{
        try {
            const data = JSON.parse(jsonString);
            console.log(" **** Reading data***");
            console.log(data.validUsername);
    console.log(data.validUsername);
        } catch (error) {
            console.log("Error parsing JSON string:", error);
        }
      }
    
  });

  const newObject = {
    name: 'Satya',
    code: 12345 ,
  }

  const jsonString = JSON.stringify(newObject);
  console.log(jsonString);
  fs.writeFile('./newCustomer.json',JSON.stringify(newObject, null, 2), err => {
    if (err) {
        console.log(err);
    }else{
        console.log('file successfully loaded');
    }
  })