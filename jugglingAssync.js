/**
 * A Programm that:
 * Makes a HTTP Get request
 * Logs the data received to the console
 * */

const http = require("http");
let result = [];
let counter;

/**
 * function that logs the results to the screen
 */
let LogResults = () => {
    // Loop through the results and log them to the console
    for (let i = 0; i < 3; i++) {
     console.log(result[i]);
    };
}
/**
 * Function to handle the HTTP Request procideur
 * @param  {string} index
 */
let getReq = (index) => {  

  /**
   * make get HTTP request
   */
  http.get(process.argv[2+index], function(res) {
    //  set encoding to utf8
    res.setEncoding("utf8");
  
    //  put each part of data we get to the text obeject
    res.on("data", function(data) {
      data = data.toString();
      result[index] = data;
    });

    //when the index is 3 print the data
    if (index = 3) {
      LogResults();
    }
  
    // do this when an error occurs
    res.on("error", function(error) {
      console.log(error);
    });
  });
}

// Loop to loop through the different urls and pass the index
for (let i = 0; i < 3; i++) {
  getReq(i);
}