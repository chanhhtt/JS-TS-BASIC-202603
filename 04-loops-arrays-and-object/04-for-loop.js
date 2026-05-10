for (let i = 1; i <= 5; i++) {
    console.log(`Đang chạy vòng thứ ${i}`);
}

// 
let soLuongAccount = 3;
for (let i = 1; i <= soLuongAccount; i++) {
    let emailTest = `nguoiDung_${i}@gmail.com`;
    console.log(`Đã tạo tài khoản ${emailTest}`);
}

//Duyệt array bằng index
let sanPham2 = ["Quần đùi", "Áo cộc", "váy"];

for (let i = 0; i < sanPham2.length; i++) {
    console.log(`sản phẩm #${i + 1} : ${sanPham2[i]}`);
}

//Duyệt object
let config2 = {
    browser: "Firefox",
    timeout: 2000,
    headless: true,
};

// Object ko dùng đc for cổ điển
let keys = Object.keys(config2);
// ["browser", "timeout", "headless"]
for (let i = 0; i < keys.length; i++) {
    let key = keys[i];
    let value = config2[key];
    console.log(`${key}: ${value}`);
}

/*
Trace thực thi:
1. Tạo object config2 với 3 thuộc tính:
   - browser = "Firefox"
   - timeout = 2000
   - headless = true

2. Gọi Object.keys(config2) để lấy mảng tên thuộc tính:
   keys = ["browser", "timeout", "headless"]

3. Vòng lặp for bắt đầu với i = 0, điều kiện i < keys.length (3).
   - Lần 1: i = 0
     key = "browser"
     value = config2["browser"] = "Firefox"
     In ra: browser: Firefox

   - Lần 2: i = 1
     key = "timeout"
     value = config2["timeout"] = 2000
     In ra: timeout: 2000

   - Lần 3: i = 2
     key = "headless"
     value = config2["headless"] = true
     In ra: headless: true

4. Sau lần lặp cuối, i tăng thành 3.
   Điều kiện 3 < 3 là sai nên vòng lặp dừng.

Kết quả in ra console:
browser: Firefox
timeout: 2000
headless: true
*/
// mô phỏng vòng lặp 1
// i =0 => i vẫn nhỏ hơn i < 3
// keys[0]; ->browser
// config2['browser'] -> firefox


//Những lỗi kinh điển hay gặp
let arr = ["A", "B", "C"];
console.log(`Độ dài của mảng ${arr.length}`)

//in ra console log 3 phần tử trong mảng

for (let i = 0; i <= arr.length; i++) {
    console.log(arr[i]);
}

//Vòng lặp chạy
//Đầu tiên i=0 -> i <= 3 (0<=3) -> arr[0]
//Lần 2 i=1 -> i <= 3 (1<=3) -> arr[1]
//Lần thứ i=3 -> i <= 3 (3<=3) -> arr[3] -> undefined
//-> Sửa i<3

//Biến i chỉ tồn tại trong dấu ngoặc nhọn -> Khi ra ngoài ko tồn tại

//BT: Muốn tạo nhanh 5 mã đơn hàng để test màn hình quản lý đơn hàng
//Dữ liệu đầu vào
let soLuongDon = 5;

//Yêu cầu
//1. Dùng for cổ điển lặp từ 1 đến 5
//Mỗi vòng tạo biến maDonHang theo mẫu ORDER-1, ORDER-2
// in từng mã đơn hàng ra màn hình

for (let i = 1; i <= soLuongDon; i++) {
    let maDonHang = `ORDER-${i}`;
    console.log(maDonHang);
}

let fruits = ["Táo", "Cam", "ổi"];

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

//viết theo cách mới 
for (let fruit of fruits) {
    console.log(fruit);
}

//Cách dùng thường gặp
//duyệt array đơn giản
//Duyệt string
let matKhau = "Neko@123";

for (let kyTu of matKhau) {
    console.log(`Ký tự: ${kyTu}`);
}

//Duyệt array of object
let danhSachUsers = [
    { ten: "Neko", role: "admin" },
    { ten: "Neko2", role: "guest" },
    { ten: "Neko3", role: "user" },
];

for (let user of danhSachUsers) {
    console.log(`${user.ten} - Quyền ${user.role}`);
}

let config = { browser: "Chrome", timeout: 5000 };
console.log(Object.entries(config));
// [ [ 'browser', 'Chrome' ], [ 'timeout', 5000 ] ]

for (let cap of Object.entries(config)) {
    // cap = [ 'browser', 'Chrome' ]
    //cap = [ 'timeout', 5000 ]
    console.log(`${cap[0]} - ${cap[1]}`);
}

//
let danhSachUrl = ["/login", "/dashboard", "/profile"];

// dùng for...of... mỗi vòng kpawj lấy ra 1 url và in ra câu Đang kiểm tra: url
for (let url of danhSachUrl) {
    console.log(`Đang kiểm tra: ${url}`);
}

for (let key in config) {
    console.log(`${key} - ${config[key]}`);

}

//Dùng vòng lặp nào cho array và Object
//While ko biết trước số lần lặp -> lặp đến khi điều kiện sai
//for cổ điển: biết chính xác số lần lặp -> kiểm soát tuyệt đối biến đếm i
//có array, chỉ cần giá trị -> for ... of
//có array, cần cả index -> for cổ điển
//duyệt object -> dùng for of + biến hình hoặc for in


//Ví dụ:
let products = [
    { ten: "iphone", gia: 200000 },
    { ten: "airpods", gia: 300000 },
    { ten: "macbook", gia: 10000 },
];

//Yêu cầu: sử dụng for of + for in để in tên và giá của products
// Mỗi lần lặp cần có dấu --- phân cách  giữa các sp đầu ra

// ten: iphone
// gia: 200000
// ---
// ten: airpods
// gia:30000
// ---

for (let product of products) {
    for (let key in product) {
        console.log(`${key}: ${product[key]}`);
    }
    console.log(`---`);
};

//break
// từ 1 -> 100 mình muốn tìm số chia hết cho 7 đầu tiên
for (let i = 1; i <= 100; i++) {
    if (i % 7 === 0) {
        console.log(`Tìm thấy ${i}`)
        break;
    }
}

let sanPhams = [
    { ten: "iphone", conHang: true },
    { ten: "airpods", conHang: false },
    { ten: "macbook", conHang: true },
];

//Tìm sản phẩm hết hàng đầu tiên
for (let sanPham of sanPhams) {
    if (sanPham.conHang === false) {
        console.log(`Sản phẩm hết hàng đầu tiên: ${sanPham.ten}`);
        break;
    }
};

//Dùng dấu phủ định
for (let sanPham of sanPhams) {
    if (!sanPham.conHang) {
        console.log(`Sản phẩm hết hàng đầu tiên: ${sanPham.ten}`);
        break;
    }
};


//continue
for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        continue;
    }
    console.log(`Số lẻ ${i}`);
}


//Muốn bỏ qua sp hết hàng, in ra sp còn hàng
for (let sanPham of sanPhams) {
    if (!sanPham.conHang) {
        continue;
    }
    console.log(`Sản phẩm còn hàng: ${sanPham.ten}`);
};


let userInfo = {
    ten: "neko",
    email: "neko@gmail.com",
    password: "abc123",
    role: "admin",
};

let fieldAnDi = ["password"];

// dùng includes và continue trong array -> bỏ qua field nhạy cảm dựa trên array fieldAndi
// -> in ra key và value hợp lệ
for (let key in userInfo) {
    if (fieldAnDi.includes(key)) {
        continue;
    }
    console.log(`${key}: ${userInfo[key]}`);
}

//Ví dụ:
//Mìnnh đang test trang Tiki, lấy đc danh sách giá 6 sp.
//Yêu cầu: Lọc ra nx sp có giá lớn hơn 100K và đếm xem có bao nhiêu sản phẩm là sp vip

let danhSachGia = [5000, 120000, 80000, 30000, 25000, 50000];

//Yêu cầu
// tạo 1 array rỗng danhSachVip
/// Nếu giá > 100000 thì ta cho sản phẩm vào dnah sách vip
// và làm tiếp yêu cầu đề bài, là in ra danh sách vip và số lượng
// let danhSachVip = [];
// for (let i = 0; i < 6; i++) {
//     if (danhSachGia[i] > 100000) {
//         let danhSachVip = danhSachVip.push(danhSachGia[i]);
//         let soLuongVip = danhSachVip.length;
//     }
// }
// console.log(`Danh sách Vip: ${danhSachVip}`);
// console.log(`Số lượng Vip: ${soLuongVip}`);
