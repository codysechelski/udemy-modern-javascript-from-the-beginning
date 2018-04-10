let re;
let str;



// re = /hello/;
// str = 'Hello world';

// re = /hello/;
// str = 'hello world';

// re = /hello/i;
// str = 'Hello world';

//METACHARACTER SYMBOLS

//Must start with
// re = /^h/i;     
// ['Hello World', 'hell or high water', 'Does not start with an h'].forEach(function (item) {
//   str = item;
//   reTest(re, str);
// })

 //Must end with
// re = /world$/i;    
// ['Hello World'].forEach(function (item) {
//   str = item;
//   reTest(re, str);
// })


//Must start and end with
//re = /^hello$/i;
// ['Hello', 'hello', 'hello, I said, HELLO'].forEach(function (item) {
//   str = item;
//   reTest(re, str);
// })


//Must any one character
//  re = /^h.llo$/i;     
// ['Hello', 'H3llo'].forEach(function (item) {
//   str = item;
//   reTest(re, str);
// });


//Must any character 0 or more times
// re = /h*llo/i;
// ['Hello', 'H323llo'].forEach(function (item) {
//   str = item;
//   reTest(re, str);
// });

// re = /gre?a?y/;       //Option character
// ['gray', 'grey', 'gr3y', "greay", 'gry'].forEach(function(item){
//   str = item;
//   reTest(re, str);
// });

//  re = /gre?a?y\?/;       //Escape Characters
// ['gray', 'grey', 'gray?', 'grey?'].forEach(function(item){
//   str = item;
//   reTest(re, str);
// });

//Character Sets - Must be an a or an e
// re = /gr[ae]y/i;
// ['gray','grey','greay','gr3y','gry'].forEach(function(item){
//   str = item;
//   reTest(re, str);
// });

// re = /[GF]ray/;
// ['Gray','Fray','gray','fray','Cray','GFray','FGray'].forEach(function(item){
//   str = item;
//   reTest(re, str);
// });







function reTest(re, str){
  if(re.test(str)){
    console.log(`"${str}" matches ${re.source}`);
  }
  else{
    console.log(`"${str}" does NOT match ${re.source}`);
  }
}

//reTest(re, str);