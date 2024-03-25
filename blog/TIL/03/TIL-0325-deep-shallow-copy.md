## 배경
##### 아래와 같은 원시값은 값을 복사 할 때 복사된 값을 다른 메모리에 할당 하기 때문에 원래의 값과 복사된 값이 서로에게 영향을 미치지 않음.
##### 이러한 원시값들은 모두 변경이 불가능하며, 각각의 자체적인 데이터 가짐.
##### 예를 들어, 변수에 원시값을 할당하면 변수에는 해당 원시값이 직접 저장되기에 한 변수의 값을 변경해도 다른 변수에 영향 없음. 
##### (string, number, boolean, undefined, null, symbol)

```
const a = 1;
let b = a;

b = 2

console.log(a); //1
console.log(b); //2
```

하지만 참조값 (Object & Array)은 변수가 객체의 주소를 가리키는 값이기 때문에 복사된 값(주소)이 같은 값을 가리킴.

 
```
// 객체
var person = {
    name: "John",
    age: 30
};

var anotherPerson = person; // 객체 참조값 복사

anotherPerson.name = "Jane"; // anotherPerson을 변경
console.log(person.name); // 출력: "Jane" - 원본 객체도 변경됨


// 배열
var fruits = ["Apple", "Banana", "Orange"];

var otherFruits = fruits; // 배열 참조값 복사

otherFruits[0] = "Grapes"; // otherFruits를 변경
console.log(fruits[0]); // 출력: "Grapes" - 원본 배열도 변경됨
```


##### 특징 때문에 객체를 복사하는 방법은 크게 두가지 (얕은 복사, 깊은 복사)로 나뉜다.


## 얕은 복사 (Shallow Copy)
얕은 복사는 원본 객체의 속성을 새로운 객체로 복사하지만, 그 속성들이 객체일 경우에는 참조 주소만 복사.
즉, 원본 객체와 복사본 객체는 동일한 객체를 참조 >이는 복사된 객체가 원본 객체의 변경에 영향을 받을 수 있음을 의미.
 

### 방법:
#### 1. Object Assign

```
// Object Assign 
const obj = {
  a: 1,
  b: {
    c: 2,
  },
};

const copiedObj = Object.assign({}, obj);

copiedObj.b.c = 3

obj === copiedObj // false
obj.b.c === copiedObj.b.c // true

```


#### 2. Spread Operator
```
// Spread Operator 
const obj = {
  a: 1,
  b: {
    c: 2,
  },
};

const copiedObj = {...obj}

copiedObj.b.c = 3

obj === copiedObj // false
obj.b.c === copiedObj.b.c // true

```

## 깊은 복사 (Deep Copy)
깊은 복사는 모든 단계의 객체와 속성을 완전히 복사 >  따라서 원본 객체의 변경이 복사본에 영향 없음.
 

##### 1. JSON.Parse(JSON.stringify(obj))

```
// JSON.parse & JSON.stringify
const obj = {
  a: 1,
  b: {
    c: 2,
  },
};

const copiedObj = JSON.parse(JSON.stringify(obj));

copiedObj.b.c = 3

obj.b.c === copiedObj.b.c //false
```




#### 2. lodash > cloneDeep

```
const obj = {
  a: 1,
  b: {
    c: 2,
  },
};

const copiedObj = _.cloneDeep(obj);

copiedObj.b.c = 3

obj.b.c === copiedObj.b.c //false
```
 