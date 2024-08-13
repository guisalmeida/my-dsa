// Create a function that reverses a string
// "Hi my name is Guilherme"
// "emrehliuG si eman ym iH"

function reverse (str) {
    const strArr = Array.from(str).reverse()
    console.log(str);
    return strArr.join("")
}

console.log(reverse("Hi my name is Guilherme"));