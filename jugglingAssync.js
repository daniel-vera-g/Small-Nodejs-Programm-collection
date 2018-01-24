
/**
 * A Programm that:
 * Makes a HTTP Get request
 * Logs the data received to the console
 * Using Promises
 * */

const http = require("http");

// use slice function to get the url's to make a query to
let urls = process.argv.slice(2, process.argv.length)

/**
 * Function to fetch the data from the get request
 * @param  {stiring} url Url to make the request to
 */
let fetchData = function(url){
  // New Promise to make the http request
  return new Promise(function(resolve, reject){
    // http get request
    http.get(url, (res)=> {
      let result = '';
      res.setEncoding('utf8');
      
      res.on('data', (chunk) => {
        result += chunk;  
      })

      res.on('end', () => {
        resolve(result);
      })

    }).on('error', (e) => {
      reject(e);
    })

  })
}

//map the urls to the fetchData function
let resultItems = urls.map(fetchData);

// Call Promise and get items when everything fullifilled
Promise.all(resultItems).
then(function(result){

  // when every promise is resolved loop through the results
  result.forEach(function(resultItem){
    console.log(resultItem); 
  })

}).catch(function(err){
  throw err;
})