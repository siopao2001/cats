const fs = require('fs');

const breedDetailsFromFile = function(breed, functionToRun) {
  console.log('breedDetailsFromFile: Calling readFile...');
  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
    console.log("In readFile's Callback: it has the data.");
  
    if (!error) functionToRun(data);
  });
  
};

let printBreed = breed => {
 console.log('return value: ', breed)
}

breedDetailsFromFile('Bombay', printBreed);