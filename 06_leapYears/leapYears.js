const leapYears = function(year) {
   let leapYear = true;
   let notLeapYear = false;

   if(year % 4 === 0 && year % 400 === 0){
    return leapYear;
   }
   else if(year % 4 === 0 && year % 100 === 0){
    return notLeapYear;
   }
   else if(year % 4 === 0){
    return leapYear;
   }
   else{
    return notLeapYear;
   }

}
// Do not edit below this line
module.exports = leapYears;
