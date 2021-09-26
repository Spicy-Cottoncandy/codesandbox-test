/**
  const, let
*/
// var val1 = "var変数";
// console.log(val1);

// // var変数は上書き可能
// val1 = "var変数を上書き";
// console.log(val1);

// // var変数は再宣言が可能
// var val1 = "var変数を再宣言";
// console.log(val1);

// let val2 = "let変数";
// console.log(val2);

// //letは上書きが可能
// val2 = "let変数の上書き";
// console.log(val2);

// //letは再宣言が不可能
// let val2 = "letを再宣言";

// const val3 = "const変数";
// console.log(val3);

// //const変数は上書き不可能
// // val3 = "上書き";
// // console.log(val3);

// //constは再宣言不可能
// const val3 = "再宣言";
// console.log(val3);

//constで定義しても、オブジェクトのプロパティは更新できる。
// const val4 = {
//   name: "なまえ",
//   age: 20
// };

// val4.address = "住所";

// val4.name = "変更";
// console.log(val4);

//constで定義しても、配列は更新できる。
// const val5 = ["dog", "cat"];
// val5[0] = "bird";
// val5.push("monkey");
// console.log(val5);

/**
 * テンプレート文字列
 */

// const name = "なまえ";
// const age = 20;
// //「私の名前はなまえです。年齢は20歳です。」

// //従来の方法
// const message1 = "私の名前は" + name + "です。年齢は" + age + "です。";
// console.log(message1);

// //テンプレート文字列を使う方法
// const message2 = `私の名前は${name}です。年齢は${age}です。`;
// console.log(message2);

/**
 * アロー関数
 */
// function func1(str) {
//   return str;
// }

// const func1 = function (str) {
//   return str;
// };
// console.log(func1("func1です"));

//アロー関数
// const func2 = (str) => {
//   return str;
// };

//単一式の場合は{}とreturnがいらない。
// const func2 = (str) => str;
// console.log(func2("func2です"));

// const func3 = (num1, num2) => {
//   return num1 + num2;
// };
// const func3 = (num1, num2) => num1 + num2;

// console.log(func3(10, 20));

/**
 * 分割代入
 */
// const myProfile = {
//   name: "なまえ",
//   age: 20
// };

// const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}です。`;
// console.log(message1);

// // {}のなかに、オブジェクトの同じ要素名を指定すると、値を代入してくれる。
// // 独自の要素名は指定できない。
// const { name, age } = myProfile;
// const message2 = `名前は${name}です。年齢は${age}です。`;
// console.log(message2);

// const myProfile = ["なまえ", 20];

// const message3 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}です。`;
// console.log(message3);

// //配列の順番で代入してくれる。変数名は自由。
// const [name, age] = myProfile;
// const message4 = `名前は${name}です。年齢は${age}です。`;
// console.log(message4);

/**
 * デフォルト値
 */
// const sayhello = (name = "ゲスト") => console.log(`こんにちは ${name}さん。`);
// sayhello("なまえ");

/**
 * スプレッド構文 ...
 */
// 配列の展開
// const arr1 = [1, 2];
// console.log(arr1);
// console.log(...arr1);

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1);

// まとめる
// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

// 配列のコピーや結合
// const arr4 = [10, 20];
// const arr5 = [30, 40];

// //値を代入するので、オブジェクトは別になる。
// const arr6 = [...arr4];
// arr6[0] = 10000;
// console.log(arr6);
// console.log(arr4);

// const arr7 = [...arr4, ...arr5];
// console.log(arr7);

// //これはオブジェクトコピーなので、別の変数とならない。
// const arr8 = arr4;
// arr8[0] = 100;
// console.log(arr8);
// console.log(arr4); //arr4も変わる。

/**
 * mapやfilterを使った配列の処理
 */
//map
// const nameArr = ["田中", "山田", "鈴木"];
// for (let index = 0; index < nameArr.length; index++) {
//   console.log(`${index + 1}番目は${nameArr[index]}です。`);
// }

// //mapの関数で指定した引数に配列の要素を順番に格納して処理してくれる。
// // const nameArr2 = nameArr.map((name) => {
// //   return name;
// // });
// // console.log(nameArr2);

// //第1引数:配列の要素, 第2引数:添え字, 第3引数:配列そのもの, それ以降はundefinedとなる。
// nameArr.map((name, name2, name3, name4) => {
//   console.log(name, name2, name3, name4);
// });

// nameArr.map((name, index) => {
//   console.log(`${index + 1}番目は${nameArr[index]}です。`);
// });

//filter
// const numArr = [1, 2, 3, 4, 5];

// //配列の要素が条件式に一致すればrerurnされる。
// const newNumArr = numArr.filter((num) => {
//   return num % 2 === 1;
// });
// console.log(newNumArr);
// const newNameArr = nameArr.map((name) => {
//   if (name === "鈴木") {
//     return name;
//   } else {
//     return `${name}さん`;
//   }
// });
// console.log(newNameArr);

/**
 * 三項演算子
 */
// 条件 ? true : false
// const val1 = 1 > 0 ? "trueです。" : "falseです。";
// console.log(val1);

// const num = "1300";
// console.log(num.toLocaleString());

// const formattedNum = typeof num === "number" ? num.toLocaleString() : "数値を入力してください。";
// console.log(formattedNum);

//関数のreturnに使用する。
// const checkSum = (num1, num2) => {
//   return num1 + num2 > 100 ? "100を超えた。" : "超えていません。";
// };

// console.log(checkSum(50, 60));
// console.log(checkSum(50, 40));

/**
 * 論理演算子の本当の意味 && ||
 */
// const flag1 = true;
// const flag2 = false;

// if (flag1 || flag2) {
//   console.log("1か2はtrue.");
// }
// if (flag1 && flag2) {
//   console.log("1と2はtrue.");
// }

// //左辺がfalseなら右辺を返す。
// const num = 100;
// const fee = num || "金額未設定です";
// console.log(fee);

// 左辺がtrueなら、右辺を返す。
const num3 = 100;
const fee2 = num3 && "何か設定されました。";
console.log(fee2);
