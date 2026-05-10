
//Bài 1	
// Tình huống Automation: Bạn cần kiểm tra xem tính năng Giảm giá (Discount) trên trang Shopee hoạt động có đúng logic toán học không.

// Dữ liệu đầu vào:

// Giá gốc (Lấy từ UI - String): " 1.000.000 đ "
// Phần trăm giảm (Lấy từ DB - Number): 20 (tức là 20%)
// Giá sau giảm (Lấy từ UI - String): " 800.000 đ "
// Yêu cầu: Viết code để:

// Làm sạch và chuyển đổi Giá gốc về Number.
// Tính toán giá mong đợi: Giá gốc * (100 - 20) / 100.


// Dữ liệu đầu vào:
let giaGocUI = " 1.000.000 đ ";
let phanTramGiam = 20;
let giaSauGiam = " 800.000 đ "

//Làm sạch Giá gốc
let giaGocSach = giaGocUI.replaceAll(" ", "").replaceAll(".", "").replace("đ", "");

//Chuyển đổi Giá gốc về Number
let giaGocSo = Number(giaGocSach);

console.log(giaGocSo);

//Tính toán giá mong đợi

let giaMongDoi = giaGocSo * (100 - phanTramGiam) / 100;

console.log(giaMongDoi);

//Làm sạch Giá sau giảm
let giaSauSach = giaSauGiam.replaceAll(" ", "").replaceAll(".", "").replace("đ", "");

//Check tính năng Discount có hoạt động đúng logic toán học không
// -> Hoạt động đúng khi giá mong đợi bằng giá sau giảm
console.log(Number(giaSauSach) === giaMongDoi);


//Bài 2
// Bạn đang viết script test cho trang thương mại điện tử. Bạn lấy được thông tin đơn hàng từ giao diện web, nhưng dữ liệu trả về rất “bẩn” (lẫn lộn chữ, số, ký tự lạ, khoảng trắng).
// Nhiệm vụ của bạn là làm sạch chúng, tính toán tổng tiền, và in ra một cái Hóa đơn (Receipt) chuẩn chỉnh.

// Dữ liệu đầu vào
// let tenSanPham = ""   macbook pro m3   "";
// let giaGoc = ""Price: 30,000,000 vnđ"";
// let soLuong = ""Sl: 2 máy"";
// let maGiamGia = ""DISCOUNT CODE: 10% OFF"";

// Bạn phải viết code xử lý để khi chạy console.log, màn hình hiện ra y hệt như sau:
// HÓA ĐƠN THANH TOÁN - ID: #0002
// Sản phẩm: MACBOOK PRO M3
// Đơn giá: 30000000
// Số lượng: 2
// Tổng tiền (Gốc): 60000000
// Giảm giá: 10%
// THÀNH TIỀN: 54.000.000 VNĐ


// Dữ liệu đầu vào
let tenSanPham = "   macbook pro m3   ";
let giaGoc = "Price: 30,000,000 vnđ";
let soLuong = "Sl: 2 máy";
let maGiamGia = "DISCOUNT CODE: 10% OFF";

//1.Dòng đầu hoá đơn

// Tạo ID hoá đơn
let soHoaDon = 2
let soID = String(soHoaDon).padStart(4, 0);

// In dòng đầu
console.log(`HÓA ĐƠN THANH TOÁN - ID: #${soID}`);


//2.Dòng thứ 2

// Làm sạch tên sản phẩm
let tenSach = tenSanPham.trim();

// Sửa tên sản phẩm viết chữ in Hoa
let tenVietHoa = tenSach.toUpperCase();

// In dòng hai
console.log(`Sản phẩm: ${tenVietHoa}`);


//3.Dòng thứ 3

// Xác định vị trí dấu : trong biến giá gốc
let textStart = giaGoc.indexOf(":");

// Xác định vị trí vnđ
let textEnd = giaGoc.indexOf("vnđ");

// Xác định giá đơn giá
let donGiaGoc = giaGoc.substring(textStart + 2, textEnd - 1);

// Loại bỏ dấu phảy trong đơn giá
let donGia = donGiaGoc.replaceAll(",", "");

// In dòng ba
console.log(`Đơn giá: ${donGia}`);


//4.Dòng thứ 4

// Xác định vị trí dấu : trong biến số lượng
let pos = soLuong.indexOf(":")

// Xác định số lượng máy
let soMay = soLuong.substring(pos+2, pos+3);

//In dòng bốn
console.log(`Số lượng: ${soMay}`);


//5.Dòng thứ 5

//　Tính tổng số tiền gốc
let tongGoc = donGia * soMay;

// In dòng năm
console.log(`Tổng tiền (Gốc): ${tongGoc}`);


//6. Dòng thứ 6

// Xác định vị trí dấu : trong biến mã giảm giá
let textCodeStart = maGiamGia.indexOf(":");

// Xác định vị trí ký tự % trong biến mã giảm giá
let textCodeEnd = maGiamGia.indexOf("%");

// Xác định phần trăm giảm
let phanTramStr = maGiamGia.substring(textCodeStart + 2, textCodeEnd);

//Chuyển đổi phần trăm về Number
let phanTram = Number(phanTramStr);

//In dòng sáu
console.log(`Giảm giá: ${phanTram}%`);


//7.Dòng cuối


// Tính thành tiền sau khi được giảm giá
let thanhTien = tongGoc * (100 - phanTram) / 100;

//In dòng cuối
console.log(`THÀNH TIỀN: ${thanhTien} VNĐ`);


