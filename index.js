//Peter Welter 
//Exam 3
//4/22/2019

var read = require('read-data');
var data =read.sync('data.json');



//console.log(JSON.stringify(data));

//for(i = 0; i < data.length; i++){  //For loop for the array
    //console.log(data['items']['fname'], data['items'][i]['age']);      //Prints out blank spots
//}

for(i = 0; i < data['items'].length; i++){// Read into the the items object instead of the file 
    //console.log(JSON.stringify(items['fname'], items['age']));// Outputs but ends up outputing the entire object
    console.log(data['items'][i]['fname'], data['items'][i]['age']);//console log the data

}//End of for loop