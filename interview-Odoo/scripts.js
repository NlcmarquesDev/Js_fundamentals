
function HTMLElements(input) 
  const stack = []; // Cria uma array vazia para acompanhar as tags de abertura
  const tagRegex = /<\/?([a-zA-Z0-9]+)>/g; // Expressão regular para encontrar tags HTML
  const matches = input.match(tagRegex); // Encontra todas as correspondências de tags na entrada

  // Se não houver correspondências de tags, não há problema, então retornamos "true"
  // if (!matches) {
  //   return "true";
  // }

  // // Loop pelas correspondências de tags encontradas na entrada
  for (const match of matches) {
    
    const tag = match.replace(/<\/?([a-zA-Z0-9]+)>/, "$1"); // Extrai o nome da tag

    // Se a correspondência não começar com "</", é uma tag de abertura
    if (!match.startsWith("</")) {
      stack.push(tag); // Empurra a tag de abertura na array
    } else {
      // Se a array estiver vazia, significa que há uma tag de fechamento sem tag de abertura correspondente
      if (stack.length === 0) {
        return tag;
      }

      // Se a última tag na array for igual à tag de fechamento atual
      if (stack[stack.length - 1] === tag) {
        stack.pop(); //  a tag correspondente
      } else {
        return stack[stack.length - 1]; // A tag de fechamento não corresponde à última tag de abertura
      }
    }
  }

  //Após percorrer todas as tags, se a array estiver vazia, todas as tags foram fechadas corretamente
  if (stack.length === 0) {
    return "true";
  } else {
    return stack[stack.length - 1]; // Alguma tag de abertura não foi fechada
  }
}
console.log(HTMLElements("<div><b><p>hello world</p><b></div>")); // Output: "true"
console.log(HTMLElements("<div><i>hello</i>world</div>")); // Output: "div"