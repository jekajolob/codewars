//https://www.codewars.com/kata/57e3f79c9cb119374600046b/train/javascript

function hello(name) {
    if(!name){
        return "Hello, World!"
    }else{
        name = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
        return `Hello, ${name}!`
    }
  }

  console.log(hello(''))
  console.log(hello('JohnS'))