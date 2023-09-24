function BracketMatcher(str) {
  const char = str.split("");
  let paraOpen = 0;
  let paraClose = 0;
  char.map((char) => {
    if (char === "(") {
      paraOpen++;
    } else if (char === ")") {
      paraClose++;
    }
  });
  return paraOpen === paraClose ? 1 : 0;
}

// keep this function call here
console.log(BracketMatcher("(coder)(byte))"));
console.log(BracketMatcher("(c(oder)) b(yte)"));
