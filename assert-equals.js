
//function keyword with name of assertEquals.
//contains expect and actual as parameters in round brackets.
module.exports = function assertEquals(expect, actual) {

if (expect instanceof Array) {

  if (!Array) {

    throw new Error(`Expected an Array but instead found type ${typeof actual}`)

} else if (expect.length !== actual.length) {

    throw new Error(`Expected array length ${expect.length} but found ${actual.length}`)

} else {

    expect.forEach((el, i) => {

   if (el != actual[i]) {

    throw new Error(`Expected ${el} but found ${actual[i]}`)

    }
})

}

} else if (expect != Array) {

  if (typeof expect !== typeof actual) {

    throw new Error(`Expected type ${typeof expect} but found type ${typeof actual}`)
}
  else if (expect !== actual) {

    throw new Error(`Expected ${expect} but found ${actual}`)
}
}
}

