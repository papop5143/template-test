// Function & Arrow Functions


//console.log(("small" || "large"));

//console.log(("large" || "small"));

//การใช้ var let
  //var จะเป็น global scope เมื่อเปลี่ยน ตัว var เอาไปใส่ local อาจทำให้เกิด bug
   //ใช้ let แทน เพื่อป้องกันการเกิดปัญหาดังกล่าวโดย let จะแบ่ง local&global
//let name = 'nan'
/*if (true) {
    var name = 'bint'
    console.log(name)
}console.log(name)*/

//const person = {};
//person = {name;'john'}; error เพราะ มันทับกับค่า const
/*person.name = 'john'; // ไม่error หากประกาศอ้อมๆผ่าน person.property
console.log(person)*/

//multi-line string
//ประกาศหลายบรรทัดได้แล้วผ่านตัว ' ` '
/*const str = 'in es6' + 
'multi-line is okay.';
const str2 = `in es6 
multi-line is 
okay.`;
console.log(str)
console.log(str2)*/

// expression interpolation การแทรกตัวหรือกำหนดแปรใน string ผ่าน ${ตัวแปร}
/*const firstname = 'john';
const lastname = 'doe';
const date = new Date();
const great = 'hello' + ' '+ firstname + ' ' + lastname +' '+ 'fuckyou'+ date;
const es6great = `hello ${firstname+' '+lastname} fuck you ${date}`
console.log(great)
console.log(es6great)*/

//destructuring assignment การดึงค่าในที่ต่างๆมาเก็บในตัวแปรเดี่ยวๆ
//array destructuring
//ปกติ
/*const arr = [1,2];
const a = arr[0];
const b = arr[1];
// 
const [c,d] = arr;
console.log(c,d)

const one2five = [1,2,3,4,5];
const [a1,b1,c1] = one2five;
console.log(a1,b1,c1)
const [, , , ,d1] = one2five
console.log(d1)
//rest parameter เอาตัวที่เหลือมาเก็บไว้ในมัน
const [a2,b2,...rest] = one2five
console.log(rest)*/

//rest parameter in function ทำให้รับ parameter ได้ไม่จำกัด
/*function howManyArgs(...args){
    console.log(args.length);
}

howManyArgs(1);
howManyArgs(1,2);
howManyArgs(1,2,3);

function mutiply(multiple,...array){
    for (var i=0 ; i< array.length; i++){
        array[i] *= multiple;
    }
    console.log(array);
}
mutiply(2,3,2,1,2,3,2,1,3);
mutiply(4,5,4,5);*/

//spread operators กระจายarray ไปให้ตัวแปรต่างๆ

/*function add(x,y,z){
    return x+y+z;

}
const sum1 = add(1,2,3);
console.log('1|',sum1)

const numbers = [2,3,4,5];
const sum2= add(numbers[0],numbers[1],numbers[2],numbers[3]);
const sum3= add(...numbers);
console.log('2|',sum2);
console.log('3|',sum3);

const arr = [2,4,6];
const append = [...arr,1,2,3,];
console.log('append|',append)*/

//spread object
/*var obj1 = {foo:'bar',x:42}
var obj2 = {foo:'baz', y:13}

var cloneobj = {...obj1,...obj2};
console.log('cloneobj|',cloneobj);

var {foo,x,y} = obj1;
console.log(foo,x,y);

var {foo: foo2, x: x2, y: y2} = obj1;
console.log(foo2,x2,y2);*/

//default paramenter
/*function howareyou(mood = 'happy'){
    console.log(mood);
}
howareyou();//happy
howareyou('sad');//sad

let [x,y]=[1,2];
console.log('1|',x,y)

let [x2,y2 = 3]=[1];
console.log('2|',x2,y2)

let [x3 = 5,y3 = 4] = []
console.log('3|',x3,y3)*/

