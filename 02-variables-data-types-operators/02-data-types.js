
let loiChao = 'Xin chao buoi sang';
let loiChao2 = "Xin chao";
let myName = "I'm Trang";

const tenHocVien = "Trang";
//Khai báo hằng số để lưu tên học viên

//Template literal
//Dùng dấu backtick (`) để chèn biến vào giữa câu hoặc một chuỗi khác
const loiGioiThieu = `Tên tôi là ${tenHocVien}`;
//Tạo câu giới thiệu có chiều giá trị của biến

//Output
console.log(loiGioiThieu); //In câu giới thiệu ra màn hình console

//Kiểu number
let tuoi = 30;

const Pi = 3.14;

let ketQua = (tuoi - 5) *2;
console.log(ketQua);


//Kiểu boolean
let denDangbat = true; //đèn sáng
let daTotNghiep = false; //Chưa tốt nghiệp


//.length
let matKhau = "123456";
console.log(matKhau.length);

let emailWeb = " user01 ";
let emailChuan = emailWeb.trim()
console.log(emailChuan);


//toUpperCase() và tolowerCase()

// IPHoNE 15 - data test lại là iphone 15
//Giải pháp chuyển cả 2 cùng về 1 kiểu (thường là lowercase) rồi mới so sánh

let tenSanPham = 'iPhOne 15';
console.log(tenSanPham.toLowerCase());

//includes
let thongBao = "Đăng nhập thất bại. Sai mật khẩu";

console.log(thongBao.includes('Thành công'));
console.log(thongBao.includes('mật khẩu'));

let msg = "login Error: invalid password";

console.log(msg.includes("Error"));
console.log(msg.includes("error"));

//Giải pháp chuyển cả 2 về cùng 1 kiểu nếu ko rõ có viết hoa hay ko
console.log(msg.toLowerCase().includes("error"));

//includes có check khoảng trắng
console.log(msg.includes(" Error"));
console.log(msg.includes(" "));

//equalIngorecase trong JS
let a = "Hello"

let b = "hello"

console.log(a.toLocaleLowerCase() === b.toLocaleLowerCase());

//replace
let giaTien = "100$";

let giaTienSo = giaTien.replace("$", "");

console.log(giaTienSo);

let tien = "1.000.000";

console.log(tien.replace(".",""));

console.log(tien.replaceAll(".",""));

let urlUI = "https://shopee.vn/product/1234";
console.log(urlUI.indexOf("product"));

let errorMsg = "Error 404: Page not found";

let pos = errorMsg.indexOf(":");

console.log(errorMsg.substring(errorMsg.indexOf(":") + 2));

let rawText = "    Order ID: ORD-2026-123 | Status: Success   ";

// yêu cầu lấy ra được ORD-2026-123
// dùng indexOf + length + slice để lấy
let textSach = rawText.replaceAll(" ","");
console.log(textSach);
let textStart = textSach.indexOf(":");
let textEnd = textSach.indexOf("|");
console.log(textSach.substring(textStart + 1, textEnd));

//Number()

let s1 = "100";
console.log(Number(s1));

let s2 = "100px";
console.log(Number(s2));
console.log(parseInt(s2));
console.log(parseInt("10.099"));

// convert thanh 0
// console.log(Number(""));
// => if (str.trim()===""){'xu ly logic'}


console.log((19.956).toFixed(2));
console.log((19.952).toFixed(2));
console.log((19.9).toFixed(2));

let min = 50;
let max = 55;
let soLuong = Math.floor(Math.random() * (max - min + 1) + min);
console.log(soLuong);

//min, max
console.log(Math.max(19,4,6,12));
console.log(Math.min(19,4,6,12));

//abs: Giá trị tuyệt đối
console.log(Math.abs(-15));

let ngay = 5;
//ép kiểu
let chuoiNgay = String(ngay);
console.log(chuoiNgay.padStart(2,0));

//SP-00005
let orderNumber = 5;
let orderNumberStr = String (orderNumber);
let orderId = orderNumberStr.padStart(5,"0");
console.log(`SP-${orderId}`);

let sanPham = "iphone 18";
let gia = "10000$";
console.log(sanPham.padEnd(20,".") + gia);

let userName = "Neko";
let age = 18;
console.log("Tên: " + userName + " - Tuổi: " + age);
console.log("Tên:", userName, "Tuổi:", age);
console.log(`Tên: ${userName} - Tuổi: ${age+1}`);

console.log(Number(""));

let slug = "Playwright Basic First test"
let sluglower = slug.toLowerCase();
let slugend = sluglower.replaceAll(" ", "-");

let amount = 9.5;
//Trả về "009.50"

console.log(amount.toFixed(2).padStart(6,0));

let price = 54000000;
console.log(price.toLocaleString("vi-VN"));
console.log(price.toLocaleString("en-US"));

let moneyText = price.toLocaleString("vi-VN",{
    style: "currency",
    currency: "VND",
});
console.log(moneyText);
// 54.000.000 ₫

//54M -> 54.000.000 dùng slice
const str = "54000000"
let result = str.slice(0,-6) + "." + str.slice(-6,-3) + "." + str.slice(-3);
console.log(result);