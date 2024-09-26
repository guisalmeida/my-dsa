

function reverse(str) {
  const reversedStr = Array.from(str).reverse();
  return reversedStr.join('');
}


console.log(reverse('Hi my name is Guilherme'));