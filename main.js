/*let age=20
if ( age <=18) {
    console.log("you are elegible.");
}
else {
   console.log ("you are not elegible.");
}
let a=5
let b=2
let isequale =(a==b);
console.log(isequale);
let isnotequale=(a!=b);
console.log(isnotequale);
let isgreaterthen=(a>b);
console.log(isgreaterthen);
let islessthen=(a<b);
console.log(islessthen);*/
var urduMarks = 80;
var englishMarks = 70;
var pakistanStudies = 80;
var mathsMarks = 90;
var totalMarks = 400;
var obtainedMarks = urduMarks + englishMarks + pakistanStudies + mathsMarks;
var percentage = (obtainedMarks / totalMarks) * 100;
console.log("urduMarks:", urduMarks);
console.log("englishMarks:", englishMarks);
console.log("pakistanStudies", pakistanStudies);
console.log("mathsMarks", mathsMarks);
console.log("totalMarks", totalMarks);
console.log("percentage", percentage);
console.log("obtainedMarks:", obtainedMarks);
if (percentage >= 80) {
    console.log("grade A");
}
else if (percentage >= 70) {
    console.log("grade B");
}
else if (percentage >= 60) {
    console.log("grade C");
}
else {
    console.log("fail");
}
//let weather="raining";
//if (weather==="raining") {console.log("wear a raincot.");
//}else if (weather==="cloudy"){
//   console.log("wear a light jacket.");
//}else {
//  console.log("wear sun glasses.")
//}
