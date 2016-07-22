var fs = require("fs");
//var csv2array = require('csv2array');
var data = fs.readFileSync('Indicators.csv','utf8');
//var data = fs.readFileSync('Indicators.csv');
var stringData=data.toString();
data.forEach(function(datum) {
var myNewLine=csv2array(datum);
});
//console.log(stringData);

var arrayOne= stringData.split('\r\n');
//console.log(arrayOne);

var header=arrayOne[0].split(',');

var cnt_countryname,cnt_indicatorname,cnt_year,cnt_value;
cnt_countryname = header.indexOf('CountryName');
cnt_indicatorname = header.indexOf('IndicatorName');
cnt_year = header.indexOf('Year');
cnt_value = header.indexOf('Value');


var noOfRow = arrayOne.length;
var noOfCol = header.length;

var jArray=[];
var final_obj={};
var i=0,j=0;
for (i = 1; i < noOfRow-1; i++) {
for (j = 0; j< noOfCol; j++) {
    var myNewLine=arrayOne[i].split(',');
    //var myNewLine=csv2array(arrayOne[i]);
     //jArray.push( '{'+header[j]+':'+myNewLine[j]+'}');
 };
 if((myNewLine[cnt_countryname] == 'India') && (myNewLine[cnt_indicatorname] == 'Urban population (% of total)' || myNewLine[cnt_indicatorname] == 'Rural population (% of total)'))
 {
  //final_obj[header[cnt_countryname]]=myNewLine[cnt_countryname];
 final_obj[header[cnt_value]]=myNewLine[cnt_value];
 final_obj[header[cnt_year]]=myNewLine[cnt_year];
 jArray.push(final_obj);
}
 final_obj={};
};

console.log( jArray);

//Write


/*var file = 'India.json';
// console.log("Printignn final object",);
var obj = JSON.stringify(jArray);

fs.writeFileSync(file, obj);



//Asia

var jArray=[];
var final_obj={};
var i=0,j=0;
for (i = 1; i < noOfRow-1; i++) {

 for (j = 0; j< noOfCol; j++) {

     var myNewLine=arrayOne[i].split(',');
     //jArray.push( '{'+header[j]+':'+myNewLine[j]+'}');
 };
 if((myNewLine[cnt_countryname] == 'Arab World' || myNewLine[cnt_countryname] == 'East Asia & Pacific (all income levels)' || myNewLine[cnt_countryname] == 'East Asia & Pacific (developing only)' || myNewLine[cnt_countryname] == 'South Asia' ||  myNewLine[cnt_countryname] == 'Afghanistan' ||  myNewLine[cnt_countryname] == 'Armenia' || myNewLine[cnt_countryname] == 'Azerbaijan' || myNewLine[cnt_countryname] == 'Bahrain' ||
 myNewLine[cnt_countryname] == 'Bangladesh' || myNewLine[cnt_countryname] == 'Bhutan' || myNewLine[cnt_countryname] == 'Brunei Darussalam' || myNewLine[cnt_countryname] == 'Cambodia' || myNewLine[cnt_countryname] == 'China'|| myNewLine[cnt_countryname] ==  'Georgia'|| myNewLine[cnt_countryname] == 'Indonesia' || myNewLine[cnt_countryname] =='Iran, Islamic Rep.' ||
 myNewLine[cnt_countryname] =='Iraq'|| myNewLine[cnt_countryname] =='Israel'|| myNewLine[cnt_countryname] =='Japan' || myNewLine[cnt_countryname] =='Jordan'|| myNewLine[cnt_countryname] =='') && (myNewLine[cnt_indicatorname] == 'Urban population (% of total)' || myNewLine[cnt_indicatorname] == 'Rural population (% of total)'))
 {
  final_obj[header[cnt_countryname]]=myNewLine[cnt_countryname];


 final_obj[header[cnt_indicatorname]]=myNewLine[cnt_indicatorname];

 final_obj[header[cnt_year]]=myNewLine[cnt_year];
 jArray.push(final_obj);
}
 final_obj={};
};

console.log( jArray);

//Write


/*var file = 'India.json';
// console.log("Printignn final object",);
var obj = JSON.stringify(jArray);

fs.writeFileSync(file, obj);
*/
