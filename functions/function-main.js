
main('nic', 'manic', 098, 765)

// Function declaration
function main(x,y, ...rest) {
  console.log(x, y)
  console.log(rest)
  console.log("=======")
  console.log(arguments)
}


main(123,456,'rene', 'laverdure')
