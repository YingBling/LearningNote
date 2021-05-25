今天发现一个有意思刷 JS 题的网站！[codewars](https://www.codewars.com/dashboard)
希望能够快速学会 JS 语法。今天做了一道题。6kyu_Sum of Digits / Digital Root
主要意思是给定一个数字 n，需要把 n 的各位数字加起来，如果得到的结果不是一位数，那么需要再把得到的结果的各位数字加起来。
题目简单，主要是为了熟悉 JS 语法。

```JavaScript
function digital_root(n) {
    if(n<10){
        return n;
    }
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
```

做完了之后的测试样例如下：

```javascript
describe("Basic tests", function () {
  it("Should pass basic tests", function () {
    Test.assertEquals(digital_root(16), 7);
    Test.assertEquals(digital_root(195), 6);
    Test.assertEquals(digital_root(992), 2);
    Test.assertEquals(digital_root(999999999999), 9);
    Test.assertEquals(digital_root(167346), 9);
    Test.assertEquals(digital_root(10), 1);
    Test.assertEquals(digital_root(0), 0);
  });
});

describe("Random tests", function () {
  it("Should pass random tests", function () {
    function digital_root_sol(n) {
      return n > 0 ? 1 + ((parseInt(n) - 1) % 9) : 0;
    }

    for (let i = 0; i < 100; i++) {
      let n = Math.floor(Math.random() * 1000000);
      Test.assertEquals(digital_root(n), digital_root_sol(n));
    }
  });
});
```

遇到的问题：

1. JavaScript 可以通过不同的方式来输出数据：

   - 使用 window.alert() 弹出警告框。
   - 使用 document.write() 方法将内容写到 HTML 文档中。
   - 使用 innerHTML 写入到 HTML 元素。
   - 使用 console.log() 写入到浏览器的控制台。

2. JavaScript 的字面量：一般固定值称为字面量。

   - 数字(Number)字面量可以是整数（900）、小数（4.13）、科学计数（123e5）
   - 字符串(String)字面量可以用单引号，或双引号。eg:‘olivia’，“olivia”
   - 数组(Array)字面量定义数组
   - 对象(Object)字面量定义对象
   - 函数(Function)字面量定义函数
   - 表达式字面量：用于计算

   字面量是不可修改的值，并且可以直接使用（但不推荐直接使用）。

   变量可以用来保存字面量，而且变量的值可以任意改变。

   声明变量：var / let

3. 注释：// 或 /\*\*/
4. js 严格区分大小写，每一条语句用‘;’结尾。

   通常我们在每条可执行的语句结尾添加分号。

   使用分号的另一用处是在一行中编写多条语句。

5. 可以一条语句，声明多个变量

```javascript
// 方法一
var lastname = "Doe",
  age = 30,
  job = "carpenter";
// 方法二：声明可以跨行
var lastname = "Doe",
  age = 30,
  job = "carpenter";
// 错误示范！一条语句中声明的多个变量不可以同时赋同一个值:
var x,
  y,
  z = 1; // x,y为undefined,z为1
```

6. 如果重新声明 JavaScript 变量，该变量的值不会丢失：

在以下两条语句执行后，变量 carname 的值依然是 "Volvo"：

```javascript
var carname = "Volvo";
var carname;
```

7. 地板除、天花板除

```javascript
// 地板除
console.log(parseInt(6 / 4)); // 1
console.log(Math.floor(6 / 4)); //1
// 正常除
console.log(parseIntFloat(6 / 4)); // 1.5
console.log(6 / 4); //1.5
// 天花板除
console.log(Math.ceil(6.4)); //2
```
