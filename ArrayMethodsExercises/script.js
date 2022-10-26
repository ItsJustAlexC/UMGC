//forEach

//doubleValues
function doubleValues(arr){
    let newArr = [];
    arr.forEach(el => {
        newArr.push(el * 2);
    });
    return newArr;
}
console.log(doubleValues([1,2,3]));

//onlyEvenValues
function onlyEvenValues(arr){
    let newArr = [];
    arr.forEach(el => {
        if(el % 2 == 0){
            newArr.push(el);
        }
    });
    return newArr;
}

console.log(onlyEvenValues([5,1,2,3,10]));

//showFirstAndLast
function showFirstAndLast(arr){
    let newArr = [];
    arr.forEach(el => {
        newArr.push(el[0] + el[el.length - 1]);
    });
    return newArr;
}
console.log(showFirstAndLast(['colt','matt','tim','test']));

//addKeyAndValue
function addKeyAndValue(arr, key, val){
    let newArr = [];
    arr.forEach(el => {
        el[key] = val;
        newArr.push(el);
        
    });
    return newArr;
}
console.log(addKeyAndValue([{name: 'Elie'},{name: 'Tim'},{name: 'Matt'},{name: 'Colt'}],'title','instructor'));

//vowelCount
function vowelCount(string){
    let strArr = [...string.toLowerCase()];
    let newArr = [];
    let newObj = {};
    
    strArr.forEach(el => {
        ['a','e','i','o','u'].includes(el) ? newArr.push(el) : '';
    });
    
    newArr.forEach(el => {
        el in newObj ? newObj[el]++ : newObj[el] = 1;
    })

    return newObj;
}
console.log(vowelCount('I Am awesome and so are you'));

//map

//doubleValuesWithMap
function doubleValuesWithMap(arr){
    let newArr = arr.map(el => {
        return el * 2;
    })
    return newArr; 
}
console.log(doubleValuesWithMap([1,2,3]));

//valTimesIndex
function valTimesIndex(arr){
    let newArr = arr.map(el => {
        return el * arr.indexOf(el);
    })
    return newArr;
}
console.log(valTimesIndex([1, 2, 3]))

//extractKey
function extractKey(arr, str){
    let newArr = arr.map(el => {
        return el[str];
    });
    return newArr;
}
console.log(extractKey([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}],'name'));

//extractFullName
function extractFullName(arr){
    let newArr = arr.map(el => {
        console.log(el);
        return `${el['first']} ${el['last']}`;
    })
    return newArr;
}
console.log(extractFullName([
    {first: 'Elie', last: 'Schoppik'}, 
    {first: 'Tim', last:"Garcia"}, 
    {first: 'Matt', last:"Lane"}, 
    {first: 'Colt', last:"Steele"}]))

//filter

//filterByValue
function filterByValue(arr, str){
    let newArr = arr.filter(el => {
        return str in el;
    })
    return newArr;
}
console.log(filterByValue([
    {first: 'Elie', last:"Schoppik"},
    {first: 'Tim', last:"Garcia", isCatOwner: true},
    {first: 'Matt', last:"Lane"},
    {first: 'Colt', last:"Steele", isCatOwner: true}],
    'isCatOwner'));

//find
function find(arr, val){
    let num = arr.filter(el => {
        return el === val ? el : undefined;
    });
    return num[0];
}
console.log(find([1,2,3,4,5,6], 2))

//findInObj
function findInObj(arr, str, bool){
    let newArr = arr.filter(el => {
        return str in el && el[str] === bool;
    })
    return newArr[0];
}
console.log(findInObj([
      {first: 'Elie', last:"Schoppik"},
      {first: 'Tim', last:"Garcia", isCatOwner: true},
      {first: 'att', last:"Lane"},
      {first: 'Colt', last:"Steele", isCatOwner: true}],
    'isCatOwner',
    true));

//removeVowels
function removeVowels(str){
    let newStr = [...str.toLowerCase()].filter(el => {
        return !['a','e','i','o','u'].includes(el);
    })
    return newStr.join('');
}
console.log(removeVowels('Elie'))

//doubleOddNumbers
function doubleOddNumbers(arr){
    let newArr = arr.filter(el => {
        return el % 2 == 1
    }).map(el => {
        return el * 2;
    })
    return newArr;
}
console.log(doubleOddNumbers([1,2,3,4,5,6]));

//some every

//hasOddNumber
function hasOddNumber(arr){
    return arr.some(el => {
        return el % 2 == 1;
    })
}
console.log(hasOddNumber([2,2,2,2,2,4]));

//hasAZero
function hasAZero(num){
    let arr = [...num.toString()];
    return arr.some(el => {
        return el == 0;
    })
}

console.log(hasAZero(1212121));

//hasOnlyOddNumbers
function hasOnlyOddNumbers(arr){
    return arr.every(el => {
        return el % 2 == 1;
    })
}

console.log(hasOnlyOddNumbers([1,2,3,5,7]));

//hasNoDuplicates
function hasNoDuplicates(arr){
    
}


//hasCertainKey
function hasCertainKey(arr, key){
    return arr.every(el => {
        return key in el;
    })
}
let arr = [
    {title: "Instructor", first: 'Elie', last:"Schoppik"},
    {title: "Instructor", first: 'Tim', last:"Garcia", isCatOwner: true},
    {title: "Instructor", first: 'Matt', last:"Lane"},
    {title: "Instructor", first: 'Colt', last:"Steele", isCatOwner: true}
  ]

console.log(hasCertainKey(arr,'isCatOwner'));

//hasCertainValue
function hasCertainValue(arr, key, value){
    return arr.every(el => {
        return el[key] === value;
    })
}

console.log(hasCertainValue(arr,'first','Elie'))
