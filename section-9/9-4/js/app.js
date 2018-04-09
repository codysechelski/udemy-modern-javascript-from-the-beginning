let re;
let str;



// re = /hello/;
// str = 'Hello world';

// re = /hello/;
// str = 'hello world';

// re = /hello/i;
// str = 'Hello world';

//Metacharacter Symbols
////////////////////////////////////////////////////////
// re = /^h/i;     //Must start with
// str = 'Hello World';

// re = /world$/i;     //Must end with
// str = 'Hello World';

// re = /^hello$/i;     //Must start and end with
// str = 'Hello';

// re = /^h.llo$/i;     //Must any one character
// //str = 'Hello';
// str = 'H3llo';

// re = /h*llo/i;     //Must any character 0 or more times
// //str = 'Hello';
// str = 'H323llo';

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

re = /[GF]ray/;
['Gray','Fray','gray','fray','Cray','GFray','FGray'].forEach(function(item){
  str = item;
  reTest(re, str);
});
////////////////////////////////////////////////////////


// const result = re.exec(str);
// console.log(result);



function reTest(re, str){
  if(re.test(str)){
    console.log(`${str} matches ${re.source}`);
  }
  else{
    console.log(`${str} does NOT match ${re.source}`);
  }
}

//reTest(re, str);