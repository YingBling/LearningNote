// var reverseString = function(s){
//     var str=''
//     for(let i=s.length-1;i>-1;i--){
//         str+=s[i]
//     }
//     return str;
// }

// function reverseString(s){
//     var str='', str2='',len=s.length
//     for(let i=len-1, j=0; i>-1;i--,j++){
//         if(j<i){
//             str+=s[i]
//             str2=s[j] + str2
//         }else if(j==i){
//             str+=s[i]
//         }else{
//             break;
//         }
//     }
//     return str+str2
// }

// console.log(reverseString("hello"))
// for (let a of 'hello'){
//     console.log(a)
// }

// function result(n,m){
//     let count = 0, base = 1, round = n
//     while(round>=m){
//         let weight = round % 10
//         round = Math.floor(round / 10)
//         if(weight>m){
//             count += (round+1) * base
//         }else if(weight === m){
//             count += round * base + (n%base) +1
//         }else{
//             count += round *base
//         }
//         base *= 10
//     }
//     return count 
// }

// console.log(result(12,1))

// function foo() {
//     return a++;
// }
// function foo2() {
//     var a = 0;
//     return foo();
// }
//     console.log(foo2()); 
//     console.log(typeof a); 
//     var a = 1;
//     console.log(a);
//     function a() {};
//     console.log(a++);

// var list = []

function digital_root(n) {
    // ...
    
    while(parseInt(n/10)!=0){
      sn = String(n);
      var ans = 0
      for(let i=0;i<sn.length;i++){
        var temp = n%10;
        ans += n%10;
        n = parseInt(n/10);
        // console.log(temp,ans);
      }
      n = ans;
    }
    
    console.log(ans);
  }
digital_root(456)