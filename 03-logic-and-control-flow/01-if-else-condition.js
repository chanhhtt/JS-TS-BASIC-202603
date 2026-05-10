let password = "123456";

if (password.length >=6){
    console.log("Hợp lệ");
} else{
    console.log("Ko hợp lệ");
}

// let age = 20;
// let hasTicket = true;

// if (age > 18 && hasTicket) {
//     console.log("Được vào");
// }

// viết tách ra thành 1 biến
let age = 20;
let hasTicket = true;
let canEnterCinema = age >=18 && hasTicket;

if (canEnterCinema) {
    console.log("Được vào");
}

// Ứng dụng ví dụ trong AT
// Dữ liệu từ UI
let successMessage = "Đăng nhập thành công"

if (successMessage === "Đăng nhập thành công!"){
    console.log("TEST PASS: Người dùng đc vào trang chủ");
} else {
    console.log("TEST PASS: Hiển thị sai thông báo hoặc đăng nhập thất bại"); 
}

//

let score = 95;

if (score >= 50){
    console.log("Đậu");
} else if (score >= 90) {
    console.log("XS");
}

//Ứng dụng trong AT
let statusCode = 404;

if (statusCode === 200) {
    console.log("API hoạt động ok");
} else if (statusCode === 400) {
    console.log("Lỗi dữ liệu gửi lên (Bad request)");
} else if (statusCode === 404) {
    console.log("Ko tìm thấy đường dẫn, Not Found");
} else {
    //Dành cho tất cả các TH còn lại (VD: 502, 503)
    console.log("Server đang gặp lỗi");
}

//BT nhỏ
let loginStatus = "locked";

//1. nếu loginStatus === 'sucess' -> in 'TEst pass: login thành công'
//2. nếu loginStatus  === 'locked' -> 'Tài khoản bị khóa'
//3. Các TH còn lại -> in 'Test fail: login thất bại'

if (loginStatus === 'sucess') {
    console.log("Test pass: login thành công");
} else if (loginStatus === 'locked') {
    console.log("Tài khoản bị khóa");
} else {
    console.log("Test fail: login thất bại");
}

//mình sẽ trả kêt quả result dựa trên score2
let score2 = 95;
// let result;

if (score2 >= 90){
    console.log("XS");
} else if (score2 >= 50) {
    console.log("Đậu");
} else {
    result = "Tèo";
}

let result = score2 >= 90 ? "XS" : score2 >=50 ? "Đậu" : "Tèo";
console.log(result);

let diem = 8;
// let trangThai;

// if (diem >= 5) {
//   trangThai = "PASS";
// } else {
//   trangThai = "FAIL";
// }

//viêt tắt
let trangThai = diem >= 5 ? "PASS" : "FAIL";

console.log(trangThai);

//gán text
let isSaving = true;

let buttonText = isSaving ? "Đang lưu" : "Lưu";

//Chọn config

let isCI = false
let reportMode = isCI ? "html" : "list"

//hiển thị nhãn
let hasBug = true;
let statusLabel = hasBug ? "Có bug" : "Ổn";


//ví dụ sử dụng if/else ưu tiên
// if (isLoginSuccess) {
//   console.log("PASS");

//   takeScreenShot();
//   goToDashBoard();
// } else {
//   console.log("FAIL");
//   takseScreenshot();
// }


//
let failedTests = 2;
// let suiteStatus = 
//     failed === 0 ? "PASS" : failed <= 2 ? "WARNING" : "FAIL";

// YC -> Viết lại đoạn code trên bằng if/ else if/ else
let suiteStatus;
if (failedTests === 0) {
    suiteStatus = "PASS";
} else if (failedTests <= 2) {
    suiteStatus = "WARNING";
} else {
   suiteStatus = "FAIL";
}

console.log(suiteStatus);

let age3 = 18;

if (age3) {
  console.log("Điều kiện đúng");
}

console.log(typeof age3);

if ("0") {
  console.log("Có chạy vào đây hay ko với string 0");
}
if (0) {
  console.log("Có chạy vào đây hay ko");
}

let soLuong = "0";
if (soLuong) {
    console.log("Có sản phẩm");
}

// fix
// if (Number(soLuong)) {
//     ...
// } else {
//     ...
// }


let userName = "    ";

if (userName) {
  console.log("Đã nhập username");
}

if (userName.trim()) {
  console.log("Đã nhập");
} else {
  console.log("username rỗng");
}

//Ví dụ AT
//
//Dữ liệu lấy từ web ("", hoặc 'https://github.com...')
let githubLink = "";

// if (githubLink !== "" && githubLink !== null && githubLink !== undefined) {
//     console.log("User đã upload github Link");
// } else {
//     console.log("Chưa upload");
// }


if (githubLink) {
  console.log("User đã upload github link");
} else {
  console.log("Chưa upload");
}

//
let rawUserName = "   ";
// mình cần check xem là rawUserName có hợp lệ hay ko?
// Nếu rỗng là ko hợp lệ và ngược lại
if (rawUserName.trim()) {
  console.log("Hợp lệ");
} else {
  console.log("Ko hợp lệ");
}


let role = "admin";

switch (role) {
  case "admin":
    console.log("Cấp quyền truy cập vào toàn bộ hệ thống");
    break;
  case "editor":
    console.log("Cấp quyền chỉnh sửa");
    break;

  default:
    console.log("Lỗi role ko hợp lệ");
}


let denGiaoThong = "Đỏ";

switch (denGiaoThong) {
  case "Đỏ":
    console.log("Dừng lại");
  case "Vàng":
    console.log("Đi chậm lại");
  case "Xanh":
    console.log("Đi thôi");
    break;
}


// Không thể dùng switch vì switch chỉ so sánh === chính xác
// Nhưng if/else có thể check trong khoảng
// let score5 = 75

// if (score5 >= 90){
//     console.log();
// } else if (score5 >= 70){

// }

//
let httpStatus = 404;

switch (httpStatus) {
  case 200:
    console.log("OK");
    break;
  case 301:
    console.log("Redirect");
    break;
  default:
    console.log("Unknow status");
}


let isVip = true;

switch (isVip) {
  case true:
    console.log("VIP");
    break;
  case false:
    console.log("BT");
    break;
}



let browserName = "firefox";
switch (browserName) {
  case "chrome":
  case "edge":
    // gom nhóm
    console.log("Khởi động driver ");
    break;
}
