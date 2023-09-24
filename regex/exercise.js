const quote = "What is this? A center for ants?";

const pattern = /ant/;

const checkPattern = pattern.test(quote);
console.log(checkPattern);

const matchPattern = quote.match(pattern);
console.log(matchPattern);

console.log("--------------------------------");
const email = "monkey@trees.com";

const emailPattern = /\w*@\w*\.com$/g;

const checkEmailPattern = emailPattern.test(email);
console.log(checkEmailPattern);
const matchEmailPattern = email.match(emailPattern);
console.log(matchEmailPattern);

console.log("--------------------------------");

const phoneNumber = "020-282-6940";

const phonePattern = /\d*-\d*-\d*/;

const checkPhone = phonePattern.test(phoneNumber);
console.log(checkPhone);
const matchPhone = phoneNumber.match(phonePattern);
console.log(matchPhone);
