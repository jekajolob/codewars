// https://www.codewars.com/kata/55ea5304685da2fb40000018/train/javascript

function heggeleggleggo(word){
    let arr = []
    for(i = 0; i < word.length; i++){
        if(!/[aeiou]/i.test(word[i]) && word[i] !== ' '){
            arr.push(word[i]+'egg')
        }else{
            arr.push(word[i])
        }

    }
    return arr.join('');
  }


  console.log(heggeleggleggo("hello")) //heggeleggleggo 
  console.log(heggeleggleggo("code here")) //ceggodegge heggeregge
