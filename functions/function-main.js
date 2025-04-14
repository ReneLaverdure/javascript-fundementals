
// Function declaration
function a(){
    console.log(this)
}

//Function expression
const greeting = function(){
    console.log('greeting im a function epression')
}

// arrow functions
const b = () => {
    console.log(this)
}


const testObj = {
    a: "im a context",
    c: function() {
        console.log(this)
    }
}

testObj.c()