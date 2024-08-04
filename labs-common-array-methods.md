
# Quick reminding
2.1. mutate array methods - bien dong => Làm thay đổi giá trị ban đầu của mảng
- push
- pop
- shift
- unshift
- splice
- sort

2.2. immutate array methods - bat bien dong => Không làm thay đổi giá trị ban đầu của mảng
- map
- forEach
- filter
- find
- findIndex


# Hands-on:
## Pre-exercise: 
 > Tải extension "Better comment"
 > Đọc từ trên xuống và thử giải trước kết quả 
```js
// Cho danh sách thông tin hoá đơn tương ứng
// id: Mã số của người dùng
// name: Nhãn
// total: Tổng hoá đơn
const bills = [{
    id: 1,
    name: 'Mindx1',
    total: 1200
},
{
    id: 2,
    name: 'Mindx1',
    total: 3000
},
{
    id: 3,
    name: 'Mindx1',
    total: 200
},
{
    id: 4,
    name: 'Mindx1',
    total: 100
},
{
    id: 5,
    name: 'Mindx1',
    total: 10
}]

const initialCart = [] // object -> array object -> pass by reference 


//TODOS: Bài tập: Thêm 1 trường giỏ hàng vào mảng trên với giá trị là initialCart


// Bài giải của bạn:
[YOUR_CODE_HERE]
// ! Thử giải trước khi đọc bài giải mẫu

// Bài giải mẫu
const newBills = bills.map((value, index) => {
    value.cart = structuredClone(initialCart) // -> store memory allocation
    return value
})

// Cho mảng 2 tương ứng danh sách các giỏ hàng mới của người dùng cần cập nhật vào bills tương ứng:
// id: Mã số của người dùng
// items: Danh sách các item mới cần cập nhật
const incomingCart = [{
    id: 3,
    items: [
        {
            label: 'product1',
        }
    ]
},
{
    id: 5,
    items: [
        {
            label: 'product2',
        }
    ]
},
{
    id: 7,
    items: [
        {
            label: 'product3',
        },
        {
            label: 'product5',
        },
    ]
}]

//TODOS: Bài tập: Cập nhật lại hoá đơn (bills) của người dùng với mảng gía trị trên

// Bài giải của bạn:
[YOUR_CODE_HERE]
//
// ! Thử tự giải trước khi đọc bài giải mẫu


// Bài giải mẫu
incomingCart.forEach(v => {
    const currentUser = bills.find(a => a.id === v.id)
    if (!currentUser) {
        bills.push({
            id: v.id,
            cart: [...v.items]
        })
    } else {
        currentUser.cart = [...v.items]
    }
})


//TODOS: Bài tập: Filter các hoá đơn có giá tiền(total) trên 200

// Bài giải của bạn:
[YOUR_CODE_HERE]
// ! Thử tự giải trước khi đọc bài giải mẫu

// Bài giải mẫu
// 
const filtered = bills.filter(v => v.total >= 200)


```