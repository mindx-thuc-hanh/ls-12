
// // let, const -> no hoisting

// // 
// const age = 18
// let age1 = 20
// console.log(age)
// console.log(age1)



// // var -> hoisting

// var name;
// console.log(name)
// name = 'Mindx'


// sum(1, 2)


// // function -> hoisting
// const sum = function(a, b) {
// 	console.log("sum 2 numbers");
// 	return a + b;
// }


const day = "4"
const month = "8"
const hour = '15'
const minute = '45'
const second = '30'

// => Today is: 04/08 - 15:45:30

// "" ''
// ``
// console.log(`Today is 0${day}/0${month} - ${hour}:${minute}:${second} `)

// function tag(string1, string2,string3) {
//     console.log(string1)
//     console.log(string2)
//     console.log(string3)
// }

// tag`Today is 0${day}/0${month} - ${hour}:${minute}:${second}`


// rest(...), spread(...)

// 1. spread
// -> 


// 
// primitive value (nguyen thuy - tham tri) vs reference value (tham chieu)

// string

// number

// boolean

// null

// undefined

// symbol

// 
// let a = "Mindx"

// const b = a

// a = "MindA"

// console.log(b)

// const a = {
//     name: "Mindx"
// }

// const b = a // memory allocating

// a.name = "MindA"
// a.age = 18


// console.log(b)




//
const student = {
    name: "Student1",
    className: "Mindx",
    address: "HCM",
    age: 18,
}

// const { age, ...student2 } = student
// console.log(age)
// console.log(student2)




// const student1 = student

// const name = student1.name
// const className = student1.className
// const age = student1.age
// const address = student1.address


// const {
//     // name: "Student1",
//     //     className: "Mindx",
//     //     age: 18,
//     //     address: "HCM"
//     name,
//     className,
//     age,
//     address
// } = student
// console.log(name)
// console.log(className)
// console.log(age)
// console.log(address)

// const arr = [3, 4, 7, 2, 1]

// const [a, b, c, d, e] = arr

// console.log(a, b, c, d, e)





// const student1 = structuredClone(student) //
const student1 = { ...student } //

function sum(title, ...nums) {
    // return num

    const _sum = nums.reduce((prev, cur, index, arr) => {
        const result = prev + cur
        return result
    }, 0)
    console.log(`${title}:${_sum}`)
}

sum("My sum of nums", 5, 10, 3, 5, 10, 3, 5, 10, 3, 5, 10, 3, 5, 10, 3, 5, 10, 3, 5, 10, 3, 5, 10,)
// // array 
// delete (student.age)
// student.address.ward = "Phuong 3"

// console.log(student)
// console.log(student1)
const bills = [{
    item: "product1",
    total: 150,
}, {
    item: "product4",
    total: 30,
}, {
    item: "product2",
    total: 41,
}, {
    item: "product6",
    total: 700,
}, {
    item: "product8",
    total: 19,
    
}, {
    item: "product10",
    total: 22,
}]

// const result = bills.reduce((prev, cur, index) => {
//     return prev + cur.total
// }, 0)


const inCart = [{
    item:"product8",
    cart:[{
        name:"Item1"
    }]
},{
    item:"product10",
    cart:[{
        name:"Item2"
    }]
},{
    item:"product6",
    cart:[{
        name:"Item0"
    }]
},]
const newArrWithCart = bills.map(v => {
    return {
        ...v,
        cart: []
    }
})

console.log(newArrWithCart)




