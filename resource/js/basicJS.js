function max(n1,n2){
    if(n1>n2){
        return n1;
    }
    else {
        return n2;
    } 
}


function maxOfThree(n1,n2,n3){
   return max(max(n1,n2),n3);
}


function isVowel(char){
   return 'AEIOU'.indexOf(char.toUpperCase()) !== -1;
}


function sum(...arr) {
    return arr.reduce((accumulator,item)=> {return accumulator+item});
}
function multiply(...arr) {
    return arr.reduce(
        (accumulator,item)=>{ return accumulator*item}
    );
}
function reverse(word) {
    let reversedWord = "";
    for(let i = word.length-1;i>=0;--i){
        reversedWord += word[i];
    }
    return reversedWord;
}


function findLongestWord(...words) {
    return words.reduce((longestWord="",word)=>{return max(longestWord.length,word.length)})
}
function filterLongWords(i,...words) {
    let str = [];
    str=words.filter(word=>word.length>i);
    return str;
}


function findShortestWord(...words) {
    return words.reduce((shortestWord,currentword)=>
    {
        return currentword.length < shortestWord.length ? currentword : shortestWord;
    })
}

//slides map/filter/reduce

const multiplyMap = (...arr)=>{ return arr.map(elem=>elem*10)};
const arrayFilter= (...arr)=>{return arr.filter(num=>num===3)};
const arrayReduce = (...arr)=>{return arr.reduce(
    (accumulator,elem)=>{return accumulator*elem}
)};


function myFunctionArrayTest(expected, found) {
    console.assert(JSON.stringify(expected) === JSON.stringify(found()), "TEST FAILED.  Expected " + expected + " found " + found());
    if (JSON.stringify(expected) === JSON.stringify(found())) {
        return "TEST SUCCEEDED";
    } else {
        return "TEST FAILED.  Expected " + expected + " found " + found();
    }
}
function myFunctionTest(expected,found){
    console.assert(expected===found(),"TEST FAILED.  Expected " + expected + " found " + found());
    if(expected===found()){
        return "TEST SUCCEEDED";
    }
    else{
        return "TEST FAILED.  Expected " + expected + " found " + found();
    }
}

console.log("Expected output of max(9,5) is 9 "+myFunctionTest(9, ()=>max( 9, 5)));
console.log("Expected output of maxOfThree(10,8,15) is 15 "+myFunctionTest(15, ()=>maxOfThree( 10,8, 15)));
console.log("Expected output of maxOfThree(30,10,20) is 30 "+myFunctionTest(30, ()=>maxOfThree( 30,10, 20)));
console.log("Expected output of maxOfThree(30,10,20) is 30 "+myFunctionTest(10, ()=>maxOfThree( 30,10, 20)));


console.log("---------------------------");
console.log("Expected output of isVowel(i) is true "+myFunctionTest(true, ()=>isVowel("i")));
console.log("Expected output of isVowel(w) is false "+myFunctionTest(false, ()=>isVowel("w")));
console.log("Expected output of isVowel(o) is true "+myFunctionTest(false, ()=>isVowel("o")));



console.log("---------------------------");
console.log("Expected output of sum([5,5,6,6]) is 22 "+myFunctionTest(22, ()=>sum(5,5,6,6))); 

 
console.log("Expected output of multiply([2,3,4,5]) is 120 "+myFunctionTest(120, ()=>multiply(2,3,4,5)));
console.log("Expected output of multiply([2,3,4,5]) is 100 "+myFunctionTest(100, ()=>multiply(2,3,4,5)));

 
console.log("Expected output of reverse(\"abcdef\") is fedcba "+myFunctionTest("fedcba", ()=>reverse("abcdef")));
console.log("Expected output of reverse(\"abcdef\") is fedcb "+myFunctionTest("fedcb", ()=>reverse("abcdef")));
 
console.log("Expected output of findLongestWord([WAP,Course,Javascript]) is 10 "+myFunctionTest(10, ()=>findLongestWord("WAP","Course","Javascript")));
console.log("Expected output of findLongestWord([WAP,Course,Javascript]) is 5 "+myFunctionTest(5, ()=>findLongestWord("WAP","Course","Javascript")));


console.log("---------------------------");
console.log("Expected output of filterLongWords(4,[WAP,Course,Javascript]) is [Course,Javascript] "+myFunctionArrayTest(['Course','Javascript'], ()=>filterLongWords(3,'WAP','Course','Javascript')));
console.log("Expected output of filterLongWords(4,[WAP,Course,Javascript]) is [Course,Javascript] "+myFunctionArrayTest(['WAP','Course','Javascript'], ()=>filterLongWords(3,'WAP','Course','Javascript')));


console.log("---------------------------");
console.log("Expected output of multiplyMap([1,3,5,3,3]) is [10,30,50,30,30] "+myFunctionArrayTest([10,30,50,30,30], ()=>multiplyMap(1,3,5,3,3)));
console.log("Expected output of multiplyMap([1,3,5,3,3]) is [10,30,50] "+myFunctionArrayTest([10,30,50], ()=>multiplyMap(1,3,5,3,3)));

 
console.log("Expected output of arrayFilter([1,3,5,3,3]) is [3,3,3] "+myFunctionArrayTest([3,3,3], ()=>arrayFilter(1,3,5,3,3)));
console.log("Expected output of arrayFilter([1,3,5,3,3]) is [3,3] "+myFunctionArrayTest([3,3], ()=>arrayFilter(1,3,5,3,3)));
 
console.log("Expected output of arrayReduce([1,3,5,3,3]) is 135 "+myFunctionTest(135, ()=>arrayReduce(1,3,5,3,3)));
console.log("Expected output of arrayReduce([1,3,5,3,3]) is 120 "+myFunctionTest(120, ()=>arrayReduce(1,3,5,3,3)));

function longestNoSpace(...str){
    return str.filter(word=>word.indexOf(" ")===-1)
            .map(word=>word.length)
            .reduce((word,currentword)=>{
                return currentword > word ? currentword : word;
            },0);
}
console.log(longestNoSpace("hello","world!"));