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

//The ^ reverses the logig
// re = /[^GF]ray/; 
// ['Gray','Fray','gray','fray','Cray','GFray','FGray'].forEach(function(item){
//   str = item;
//   reTest(re, str);
// });

//Placing the  ^ before the bracket means that it must start with
// re = /^[GF]ray/; 
// ['Gray','Fray','gray','fray','Cray','GFray','FGray'].forEach(function(item){
//   str = item;
//   reTest(re, str);
// });

// re = /[A-Z]ray/; 
// ['Gray','Fray','gray','fray','Cray','GFray','FGray', 'FDFEDFEFDFDFray'].forEach(function(item){
//   str = item;
//   reTest(re, str);
// });

// re = /[a-z]ray/; 
// ['Gray','Fray','gray','fray','Cray','GFray','FGray', 'dddddray'].forEach(function(item){
//   str = item;
//   reTest(re, str);
// });

//match any letter
// re = /[A-Za-z]ray/; 
// ['Gray','Fray','gray','fray','Cray','GFray','FGray', 'dddddray'].forEach(function(item){
//   str = item;
//   reTest(re, str);
// });

// re = /[0-9]ray/; 
// ['0ray','1ray','gray','42342ray'].forEach(function(item){
//   str = item;
//   reTest(re, str);
// });



//Braces { Quantifiers }
// re = /Hel{2}o/; 
// ['Hello', 'Helo', 'Helllo'].forEach(function(item){
//   str = item;
//   reTest(re, str);
// });

//requires 2-4 l chars
// re = /Hel{2,4}o/; 
// ['Hello', 'Helo', 'Helllo', 'Hellllo', 'Helllllo'].forEach(function(item){
//   str = item;
//   reTest(re, str);
// });

//requires 2 or more l chars
// re = /Hel{2,}o/; 
// ['Hello', 'Helo', 'Helllo', 'Hellllo', 'Hellllllllllo'].forEach(function(item){
//   str = item;
//   reTest(re, str);
// });



//Parentheses are used for grouping
re = /([0-9]x){3}/; 
// ['1x2x3x', '1x2x3x4x5x6x', '123xxx','242x34234234x2432x'].forEach(function(item){
//   str = item;
//   reTest(re, str);
// });

// ^ and $ means it must end after
// re = /^([0-9]x){3}$/; 
// ['1x2x3x', '1x2x3x4x5x6x', '123xxx','242x34234234x2432x'].forEach(function(item){
//   str = item;
//   reTest(re, str);
// });




//shorthand Character classes

// re = /\w/;    //Word character (letter number or _)
// ['1x2x3x', '1x2x3x4x5x6x', '__', '123**xxx','~~'].forEach(function(item){
//   str = item;
//   reTest(re, str);
// });

// re = /\w+/;    //Word character (letter number or _) The + mans one or more. (I don't really understand this one)
// ['1x2x3x', '1x2x3x4x5x6x', '__', '123**xxx','~~'].forEach(function(item){
//   str = item;
//   reTest(re, str);
// });


// re = /\W/;    //Non-Word character (letter number or _) The + mans one or more. (I don't really understand this one)
// ['1x2x3x', '    ', '__', '123**xxx','~~'].forEach(function(item){
//   str = item;
//   reTest(re, str);
// });

// re = /\d/;    //Digit
// ['1', '    ', '__', '55555','22332y23'].forEach(function(item){
//   str = item;
//   reTest(re, str);
// });

// re = /\d+/;    //Digit + checkes the whole string
// ['1', '    ', '__', '55555','22332y23'].forEach(function(item){
//   str = item;
//   reTest(re, str);
// });

// re = /\D/;    //Non-Digit
// ['1', '    ', '__', '55555','22332y23'].forEach(function(item){
//   str = item;
//   reTest(re, str);
// });

// re = /\s/;    //White Space
// ['1', '    ', '__', '55555','22332y23'].forEach(function(item){
//   str = item;
//   reTest(re, str);
// });

// re = /\S/;    //Not White Space
// ['1', '    ', '__', '55555','22332y23'].forEach(function(item){
//   str = item;
//   reTest(re, str);
// });


// re = /Hell\b/i;    //Word Boundaries 
// ['Hell', 'Hello', 'living-hell'].forEach(function(item){
//   str = item;
//   reTest(re, str);
// });



//Assersions

// re = /x(?=y)/;    //y must follow x
// ['x', 'xs', 'xy', 'dfdfsdfxysdfsdf'].forEach(function(item){
//   str = item;
//   reTest(re, str);
// });

re = /x(?!y)/;    //y must NOT follow x
['x', 'xs', 'xy', 'dfdfsdfxysdfsdf'].forEach(function(item){
  str = item;
  reTest(re, str);
});

// const result = re.exec(str);
// console.log(result);



function reTest(re, str){
  if(re.test(str)){
    console.log(`"${str}" matches ${re.source}`);
  }
  else{
    console.log(`"${str}" does NOT match ${re.source}`);
  }
}

//reTest(re, str);