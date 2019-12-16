var number = 1234678905;
var digit = 5;
var str = number + "";
var length = str.length;
var newDigit = number%10;
var newnumber = number;

for (var i=0; i<length; i++) {
  if (newDigit === digit) {
  console.log("Yes - " + newDigit);
  break;
  };
newnumber = (newnumber - newDigit)/10;
newDigit = newnumber % 10;
};
      if (newDigit !== digit) {
      console.log("No");
      };