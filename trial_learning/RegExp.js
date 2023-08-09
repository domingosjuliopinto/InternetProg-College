console.log("hello");
// let pat=new RegExp('blue');
pat = /blue/;
let str="The Blue Blue bird blinks";
let ans=pat.test(str);
console.log(ans);

// let pat=new RegExp('blue');
pat1 = /[A-Z]lu[0-9]/;
let str1="This Blue  bird blinks";
// let ans=pat.test(str);
// console.log(ans);
// console.log(pat.source);
// let ans=pat.exec(str);
// console.log(ans);
// console.log(ans.index);
// console.log(ans.input);
// let ans=str.match(pat);
// console.log(ans);
// ans=str.replace(pat,'flew');
// console.log(ans)
let res=pat1.exec(str1);
console.log(res);