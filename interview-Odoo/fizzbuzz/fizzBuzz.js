let inputUser = 100

//multiples of 3 and 5 presnt fizzBuzz
//multiple 3 presnt fizz
//multiples of 5 presnt buzz

for (var i = 1; i <= inputUser; i++) { 

  if (i % 3 == 0 && i % 5 == 0) {
    console.log("FizzBuzz")
  } else if (i % 5 == 0) {
    console.log('Buzz');
  } else if (i % 3 == 0) { 
    console.log('Fizz');
  } else {
    console.log(i);
  }

}

