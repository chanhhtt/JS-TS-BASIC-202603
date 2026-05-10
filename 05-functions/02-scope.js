let tenMoiTruong = "STAGING";
let baseUrl = "https://staging.neko.vn";

function chayTest() {
    console.log(`Đang chạy test trên ${tenMoiTruong}`);
    console.log(`URL: ${baseUrl}`);
}

function chayTestKhac() {
    console.log(`Hàm khác cũng thấy ${tenMoiTruong}`);
}

chayTest();
chayTestKhac();

//Nguy hiểm của global nếu cả 2 đều sửa global -> dẫm chân lên nhau
let soLanClick = 0;
function testDangNhap() {
    soLanClick = 5;
}

function testDangKy() {
    soLanClick = 10;
}

testDangNhap();
testDangKy();
console.log(soLanClick);


function taoTaiKhoan() {
    let matKhauBaoMat = "Secret123";
    let token = "abc-xyz";

    console.log(`Mật khẩu là ${matKhauBaoMat}`);
    console.log(`Token: ${token}`);
}

taoTaiKhoan();

// console.log(matKhauBaoMat);


//Mỗi lần gọi hàm = tạo scope hàm hoàn toàn mới
function demSoLan() {
    let count = 0;
    count++;
    console.log(count);
}
//count mới đc tạo -> tăng lên 1 ròi tèo
demSoLan();

//count moi dc tao lai -> tang len 1 roi teo
demSoLan();


if (true) {
    let theNhieuTien = "Visa platium";
    const soTien = 99999999999999;
    console.log(theNhieuTien);
}

// console.log(theNhieuTien);

for (let i = 0; i < 3; i++) {
    let tenSanPham = `SP - ${i}`;
    console.log(tenSanPham);
}

// console.log(tenSanPham);

// //var
// if (true) {
//   var biMat = "Tôi lọt ra ngoài";
// }

// console.log(biMat);


///Scope = vung song cua bien
if (true) {
    let secret = 123;
}

const user222 = {
    //property -thuộc tính bên trong object
    //JS ko tự biến tên thành biến riêng trong scope hiện tại
    ten: "neko",
};

console.log(user222.ten);
//Trong scope hiện tại JS chỉ biết chắc chắn có biến user222
const { ten } = user222;

let mau = "Đỏ";

function ngoai() {
    //function scope của ngoai() - hàm cha
  let size = "Lớn";

  function trong() {
    //function scope của hàm con
    //trong() tìm biến theo scope chain
    let gia = 1000;
    //tìm thấy ngay tại chỗ vì gia là function scope trong()
    console.log(gia);
    //ko có ở đây -> leo ra ngoài tìm -> lớn
    console.log(size);
    //ko có ở đây -> leo ra ngoài tìm -> global()
    console.log(mau);
  }
  trong();
  //lỗi vì sao: thằng cha ko nhìn được thằng con
  console.log(gia);
}
ngoai();
console.log(size);
