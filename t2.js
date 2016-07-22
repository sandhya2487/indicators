var fs = require("fs");

var data = fs.readFileSync('Indicators.csv');
var stringData=data.toString();

console.log(stringData);
var arrayOne= stringData.split('\r\n');

var header=arrayOne[0].split(',');



var noOfRow=arrayOne.length;
var noOfCol=header.length;

var jArray=[];

var i=0,j=0;
for (i = 1; i < noOfRow-1; i++) {

 var obj = {};
 var myNewLine=arrayOne[i].split(',');

 for (j = 0; j< noOfCol; j++) {
     var headerText = header[j].substring(0,header[j].length);
     var valueText = myNewLine[j].substring(0,myNewLine[j].length);
     obj[headerText] = valueText;
 };
 jArray.push(obj);
};

console.log( jArray);
