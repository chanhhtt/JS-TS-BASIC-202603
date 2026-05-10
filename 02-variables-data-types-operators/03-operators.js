console.log(10+5);
console.log("10"+5);
console.log("10"-5);

//Lúc đầu giỏ hàng rỗng
let tongTien = 0;

const giaAo = 25000;
//tongTien = 0 + 25000
tongTien += giaAo

const giaQuan = 30000;
//tongTien = 25000 + 30000
tongTien += giaQuan;

console.log(`Tổng hoá đơn: ${tongTien}`);

let passwordLength = 5;
let isPasswordValid = passwordLength >= 8;
console.log(isPasswordValid);


console.log(10 === "10");
console.log(0 === false);


let isEmailCorrect = true;
let isPasswordCorrect = false;

let canLogin = isEmailCorrect && isPasswordCorrect;
console.log(canLogin);

//Nhập sai tên
let searchByName = false;

//Nhập đúng mã sản phẩm
let searchBySKU = true;

let isProductFound = searchByName || searchBySKU;
console.log(`Tìm thấy sản phẩm ${isProductFound}`);

let userAge = 20;
let passwordInput = "Neko1234";
let isTermAccepted = true; 

// 1. tao bien isAgeValid de kiem tra tuoi >=18 hay ko
// 2. tao bien isPasswordValid kie tra mk co dung 8kt

// ket hop toan bo dieu kien de tao bien isSubmitButtonEnabled

// in ra console,log

let isAgeValid = userAge >= 18;

let isPassWordValid = passwordInput.length === 8;

let isSubmitButtonEnabled = isAgeValid && isPassWordValid && isTermAccepted;
console.log(isSubmitButtonEnabled);

//postfix

let a = 5;
let ketQua1 = a++;

//Biểu thức a++ trả ra 5
//Sau khi dùng xong, a mới tăng lên
console.log(ketQua1);
console.log(a);

//prefix
let b = 5;
let ketQua2 = ++b;

console.log(ketQua2);
console.log(b);

// //Giải thich
// b tang len 6 truoc
// bieu thuc ++b  tra ra 6

let x1 = 5;
console.log(x1++);


let count = 0;
count++;
//++count, count += 1, count = count + 1
console.log(count);

// let i = 3;
// //vừa làm 2 việc 1 lúc
// // tính toán và cập nhật biến
// // -> lí do khó đọc. vì nhìn nhanh ko biết
// // nhân 3 hay 4
// //sau dòng này i còn giá trị nào
// //khó debug
// let resultPostFix = i++ * 2;

// console.log(resultPostFix);
// console.log(i);


let i = 3;
let resultPostFix = i * 2;
++i;

///
//ví dụ mình đang test logic retry của nút submit.
// 1 bạn mới trong team viết đoạn code sau để vừa log vừa giảm/tăng số lần thử

let retries = 2;

// let firstLog = retries++;

// let secondLog = ++retries;

// let canRetry = retries-- > 3;

// console.log(firstLog);

// console.log(secondLog);

// console.log(canRetry);

// console.log(retries);

//đoán output 4 dòng
//viết lại theo cách rõ ràng
console.log("Kết quả");

let firstLog = retries;
retries++;

++retries;

let secondLog = retries;

let canRetry = retries > 3;

console.log(firstLog);

console.log(secondLog);

console.log(canRetry);

console.log(retries);


//bài tập
//mình có 1 promotion -> Rule: Nếu khách hàng > 18 và là thành viên VIP, thì được giảm 30% giá vé, ngược lại vẫn giữ nguyên

let rawAge = " 25 tuổi";
let rawisVIP = "true";
let rawTicketPrice = "  500.000 đ ";

//yêu cầu
// 1. làm sạch và ép kiểu
// 2. kiểm tra điều kiện. Nếu đủ tính giá sau giảm 30% -> nếu ko giữ nguyên
// 3. in kết quả

let age = rawAge.trim().slice(0,-5)
let isageValid = Number(age) > 18;
console.log(isageValid);

let isVIP = rawisVIP === "true";
console.log(isVIP);

let isDiscountEnable = isageValid && isVIP
console.log(`Đủ điều kiện giảm giá: ${isDiscountEnable}`);

let ticketPrice = rawTicketPrice.trim().replace("đ","").replaceAll(".","")
let priceDiscounted = Number(ticketPrice) * (100-30)/100;
console.log(`Giá vé nếu được giảm là ${priceDiscounted}`);