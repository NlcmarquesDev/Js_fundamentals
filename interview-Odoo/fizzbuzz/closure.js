// Create a function which stores inside a scret word which cannot be changed or accessed from outside

const somefn = () => {
  const secret = 'secret';

  return () => secret;
}

const result = somefn();
console.log(result());