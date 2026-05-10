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
// Đúng: replaceAll(" ","") bỏ khoảng trắng, replaceAll(".","") bỏ dấu chấm, replace("đ","") bỏ chữ đ
// Góp ý: replaceAll(" ","") bỏ TẤT CẢ khoảng trắng — ở đây đúng nhưng nên dùng trim() để chỉ bỏ 2 đầu
//    Nếu dữ liệu có khoảng trắng hợp lệ ở giữa (ví dụ tên sản phẩm) thì replaceAll(" ","") sẽ xóa luôn
let giaGocSach = giaGocUI.replaceAll(" ", "").replaceAll(".", "").replace("đ", "");

//Chuyển đổi Giá gốc về Number
let giaGocSo = Number(giaGocSach);

console.log(giaGocSo);

//Tính toán giá mong đợi
// Công thức đúng, kết quả 800000
let giaMongDoi = giaGocSo * (100 - phanTramGiam) / 100;

console.log(giaMongDoi);

//Làm sạch Giá sau giảm
// Chủ động xử lý thêm giá sau giảm — tốt
let giaSauSach = giaSauGiam.replaceAll(" ", "").replaceAll(".", "").replace("đ", "");

//Check tính năng Discount có hoạt động đúng logic toán học không
// -> Hoạt động đúng khi giá mong đợi bằng giá sau giảm
// Hay! So sánh bằng === — đúng tư duy Automation Testing, kiểm tra expected vs actual
console.log(Number(giaSauSach) === giaMongDoi);


//Bài 2
// Bạn đang viết script test cho trang thương mại điện tử. Bạn lấy được thông tin đơn hàng từ giao diện web, nhưng dữ liệu trả về rất "bẩn" (lẫn lộn chữ, số, ký tự lạ, khoảng trắng).
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
// Hay! Dùng padStart(4, 0) để tự động thêm số 0 phía trước cho đủ 4 chữ số
// Ví dụ: "2" -> "0002", "15" -> "0015" — linh hoạt hơn hardcode "#0002"
let soHoaDon = 2
let soID = String(soHoaDon).padStart(4, 0);

// In dòng đầu — đúng format
console.log(`HÓA ĐƠN THANH TOÁN - ID: #${soID}`);


//2.Dòng thứ 2

// Làm sạch tên sản phẩm
let tenSach = tenSanPham.trim();

// Sửa tên sản phẩm viết chữ in Hoa
let tenVietHoa = tenSach.toUpperCase();

// In dòng hai — đúng
console.log(`Sản phẩm: ${tenVietHoa}`);


//3.Dòng thứ 3

// Xác định vị trí dấu : trong biến giá gốc
let textStart = giaGoc.indexOf(":");

// Xác định vị trí vnđ — dùng indexOf("vnđ") cả từ, an toàn
let textEnd = giaGoc.indexOf("vnđ");

// Xác định giá đơn giá
// substring(start + 2, end - 1) — cắt đúng phần số
let donGiaGoc = giaGoc.substring(textStart + 2, textEnd - 1);

// Loại bỏ dấu phảy trong đơn giá — đúng
let donGia = donGiaGoc.replaceAll(",", "");

// In dòng ba — đúng
console.log(`Đơn giá: ${donGia}`);


//4.Dòng thứ 4

// Xác định vị trí dấu : trong biến số lượng
let pos = soLuong.indexOf(":")

// Xác định số lượng máy
// Góp ý: substring(pos+2, pos+3) hardcode lấy 1 ký tự — chỉ đúng cho số 1 chữ số
//    Nếu số lượng là 10, 20... (2 chữ số) sẽ chỉ lấy được "1" hoặc "2"
//    Gợi ý: dùng indexOf("máy") làm vị trí kết thúc, hoặc parseInt(soLuong.substring(pos+2))
let soMay = soLuong.substring(pos+2, pos+3);

//In dòng bốn — đúng
console.log(`Số lượng: ${soMay}`);


//5.Dòng thứ 5

//　Tính tổng số tiền gốc
// Đúng: 30000000 x 2 = 60000000
// JS tự ép kiểu String thành Number khi nhân
let tongGoc = donGia * soMay;

// In dòng năm — đúng
console.log(`Tổng tiền (Gốc): ${tongGoc}`);


//6. Dòng thứ 6

// Xác định vị trí dấu : trong biến mã giảm giá
let textCodeStart = maGiamGia.indexOf(":");

// Xác định vị trí ký tự % trong biến mã giảm giá
let textCodeEnd = maGiamGia.indexOf("%");

// Xác định phần trăm giảm — substring cắt đúng "10"
let phanTramStr = maGiamGia.substring(textCodeStart + 2, textCodeEnd);

//Chuyển đổi phần trăm về Number — đúng
let phanTram = Number(phanTramStr);

//In dòng sáu — đúng
console.log(`Giảm giá: ${phanTram}%`);


//7.Dòng cuối

// Tính thành tiền sau khi được giảm giá
// Công thức đúng: 60000000 x (100-10) / 100 = 54000000
let thanhTien = tongGoc * (100 - phanTram) / 100;

//In dòng cuối
console.log(`THÀNH TIỀN: ${thanhTien} VNĐ`);
// Góp ý: thiếu format tiền — in ra "54000000 VNĐ" thay vì "54.000.000 VNĐ"
// Gợi ý: chuyển thành chuỗi rồi dùng slice chèn dấu chấm:
//    let str = String(thanhTien);
//    let formatted = str.slice(0,-6) + "." + str.slice(-6,-3) + "." + str.slice(-3);
//    console.log(`THÀNH TIỀN: ${formatted} VNĐ`);

// ===================================================
// TỔNG KẾT REVIEW — HUYỀN TRANG
// ===================================================
// Bài 1: Đạt — Xử lý đúng, công thức đúng, chủ động so sánh ===
// Bài 2: Gần đạt — Logic rất tốt, code rõ ràng, chỉ thiếu format tiền
//
// Điểm tốt:
//   - Bài 1: chủ động so sánh === kiểm tra Discount — tư duy Automation tốt
//   - Code cực kỳ rõ ràng: chia từng dòng hóa đơn riêng (dòng 1, dòng 2...), comment từng bước
//   - Dùng padStart(4, 0) tạo ID — sáng tạo, linh hoạt hơn hardcode "#0002"
//   - Dùng indexOf("vnđ") cả từ thay vì indexOf("v") — an toàn
//   - Biến đặt tên rõ nghĩa (giaGocSach, tenVietHoa, donGiaGoc...)
//
// Cần cải thiện:
//   - replaceAll(" ","") bỏ tất cả khoảng trắng — nên dùng trim() chỉ bỏ 2 đầu
//   - substring(pos+2, pos+3) hardcode lấy 1 ký tự cho số lượng — chỉ đúng cho số 1 chữ số
//   - Thiếu format tiền cho THÀNH TIỀN (54.000.000)
// ===================================================
