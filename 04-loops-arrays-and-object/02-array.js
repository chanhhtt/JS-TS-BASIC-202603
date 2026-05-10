let sanPham = ["AoThun", "AoSoMi", "MuLuoiTrai"];

console.log(sanPham[1]);
console.log(sanPham[2]);
console.log(sanPham[0]);

console.log(sanPham[10]);


let ketQuaTimKiem = ["iphone 13", "iphone 20"];

console.log(ketQuaTimKiem.length);

let danhSachLoi = [];
//Chạy test ... phát hiện ra lỗi
danhSachLoi.push("Nút đăng nhập ko bấm được");
danhSachLoi.push("Sai màu chữ ở footer");

console.log(danhSachLoi);

let cacTrangThaiChoChoPhep = ["Pending", "Approved", "Shipped"];
let trangThaiThucTe = "Approved";

if (cacTrangThaiChoChoPhep.includes(trangThaiThucTe)) {
    console.log("TEST PASS: TRANG THAI HIEN THI DUNG LOGIC");
} else {
    console.log("TEST FAIL");
}

let lichSuDuyetWeb = ["Trang chủ", "sản phẩm", "giỏ hàng"];

let trangVuaThoat = lichSuDuyetWeb.pop();
console.log(lichSuDuyetWeb);
console.log(trangVuaThoat);

let hangChoHoTro = ["Khách A", "Khách B", "Khách C"];
let khachHangDuocXuLy = hangChoHoTro.shift();

console.log(hangChoHoTro);
console.log(khachHangDuocXuLy);

let danhSachUuTien = ["Bug Thường", "Bug Giao diện"];

danhSachUuTien.unshift("Bug siêu to khổng lồ");
console.log(danhSachUuTien);

let tags = ["automation", "playwright", "javascrift"];

let tagString = tags.join(", ");

console.log(tagString);

let danhSachMenu = ["Home", "About", "Services"];

console.log(danhSachMenu.indexOf("About"));

let gioHang = [
    "Bàn phím cơ",
    "Chuột gamin",
    "Màn hình 27 inch",
    "Tai nghe bluetooth",
];
//1. In ra tổng số sản phẩm
//2. In ra sản phẩm đầu tiên
//3. In ra tên sản phẩm cuối cùng
//4. thêm 1 cái lót chuột vào cuối giỏ hàng
console.log(gioHang.length);
console.log(gioHang[0]);
console.log(gioHang[gioHang.length - 1]);
gioHang.push("lót chuột");
console.log(gioHang);
