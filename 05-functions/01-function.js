//taiKhoan và matKhau là tham số (cái phễu chờ sẵn)
function dangNhap(taiKhoan, matKhau) {
    console.log(`Đăng nhập user: ${taiKhoan}`);
    console.log(`Đăng nhập password: ${matKhau}`);
    console.log(`Click nút login`);
}

console.log("TC01");

//Khởi động hàm và nhét nguyên liệu thật (đối số) vào:
dangNhap("adminNeko", "abc");
console.log("TC02");
dangNhap("adminNeko2", "abc2");

function tinhTongTien(a, b) {
    const result = a + b;
    console.log(result);
    return result;
}

let tienThanhToan = tinhTongTien(100, 2);
console.log(tienThanhToan)


//trong function
//return result -> trả giá trị ra bên ngoài -> tienThanhToan


function laySoMayMan() {
    return 8;
}
let ketQua = laySoMayMan();


function layTenHienThi() {
    return "neko";
}

let tenHienThiUi = layTenHienThi();

function laAdult(tuoi) {
    return tuoi >= 18
}

console.log(laAdult(20));
console.log(laAdult(6));

function demoReturn() {
    console.log("Bat dau");
    return "Xong";
    console.log("Dong nay se khong chay");
}

console.log(demoReturn());


//ví dụ
//Yêu cầu viết 1 hàm tên là cleanPrice(rawString). Hàm này nhận vào là 1 chuỗi giá tiền lấy từ UI
// *ví dụ " Giá: 25.000.000 VND  ". Hàm phải tự động dọn dẹp và return về 1 số number nguyên
// (ví dụ 25000000)
//nếu đầu vào là falsy thì trả về ko luôn cho an toàn

// test case
// sp1 = "  Giá: 1.500.000 VND  ";
// sp2 = "   250.000 VND";
// sp3 = "";
// //output
// 15000000
// 250000
// 0

function cleanPrice(rawString) {
    if (!rawString) {
        return 0;
    }
    let cleanNumber = rawString.replace("Giá:", "").replace("VND", "").replaceAll(".", "").trim();
    return Number(cleanNumber);
}
let sp1 = "  Giá: 1.500.000 VND  ";
let sp2 = "   250.000 VND";
let sp3 = "";
console.log(cleanPrice(sp1));
console.log(cleanPrice(sp2));
console.log(cleanPrice(sp3));

xinChao()

//tạo hàm sau
function xinChao() {
    console.log('Hoisting');
}
//hoisting function declaration
// let loginStatus = checkLoginStatus();
// console.log(loginStatus);

// function checkLoginStatus() {
//     return true;
// }

const checkLoginStatus = function () {
    return true;
};

const loginStatus = checkLoginStatus();

console.log(loginStatus);


function tinh(a, b) {
    return a + b;
}

function tinh(a, b) {
    return a * b;
}
console.log(tinh(2, 3));

// const tinh2 = function (a, b) {
//     return a + b;
// };

// const tinh2 = function (a, b) {
//     return a * b;
// };

const utils = {
    lamSach: function (text) {
        return text.trim().toLowerCase();
    },
};

console.log(utils.lamSach("  Hello  "));

const moiTruong = "staging";
const layUrl = moiTruong === "staging"
    ? function () {
        return "https://staging.neko.vn";
    }
    : function () {
        return "https://neko.vn";
    }

console.log(layUrl());


/// Viết theo kiểu function expression (cũ)

const tinhTongExpression = function (a, b) {
    return a + b;
};

//chuyển sang arrow
const tinhTongArrow = (a, b) => {
    return a + b;
};

//rút gọn nữa
const tinhTongsieungan = (a, b) => a + b;

//cách sử dụng thực tế
//Câu hỏi lúc nào dùng loại nào??
//Viết method bên trong Object

const sanPham = {
    ten: "iphone 17",
    gia: 200000,

    //Cách 1: function expression kiểu cổ điển
    hienThiExpression: function () {
        console.log(`${this.ten} - ${this.gia} VND`);
    },

    //Cách 2: để viết 1 hàm method shorthand -> Nên dùng
    hienThiShorthand() {
        console.log(`${this.ten} - ${this.gia} VND`);
    },

    //Cách 3: ko sử dụng arrow khi viết method trong object
    hienThiArrow: () => {
        console.log(`${this.ten} - ${this.gia} VND`);
    },
};
sanPham.hienThiExpression();
sanPham.hienThiShorthand();
sanPham.hienThiArrow();

//Method ở trong object hay sử dụng trong các trường
// ví dụ 1 object có cả data lẫn hành vi. ví dụ 1 object tên cart có dữ liệu item và method getSummary() để mô tả chính nó
const cart = {
    item: 3,
    getSummary() {
        return `có ${this.item} sản phẩm`;
    },
};

console.log(cart.getSummary());

//object config: ví dụ object có cấu hình, timeout, baseurl -> có 1 method buildUrl () để ghép link hoàn chỉnh
//object formatter có các method formatPrice, formatDate() -> objet tiện ích

//ví dụ: 1 object cụ thể, viết nhanh dùng ngay -> method bên trong object là hợp lý -> (Thường tỉ lệ sử dụng trong AT là ít)
//nhưng nếu nhiều object cùng form như cart1, cart2, cart3 -> dùng Class dễ tổ chức hơn


//B. Truyền hàm làm call back -> call back là truyền 1 hàm vào chỗ khác để nó được gọi sau
// -> arrow function là lựa chọn ưu tiên hàng đầu
const giaSanPham = [150000, 2000, 40000];

//declaration
function locGiaCao(gia) {
    return gia > 20000;
}
const ketQua1 = giaSanPham.filter(locGiaCao);

//expression
const ketQua2 = giaSanPham.filter(function (gia) {
    return gia > 20000;
});

//arrow
const ketQua3 = giaSanPham.filter((gia) => gia > 20000);


//Sự thật là arrow function hoàn toàn thay thế function expression ở rất nhiều code base
// cả 2 đều dùng const và ko có hoisting nhưng arrow thì ngắn hơn gấp bội
// function expression chỉ xuất hiện ở 1 số trường hợp
// code cũ khi arrow chưa ra đời thì ngta dùng nhiều
// -> KẾT LUẬN code mới chỉ nhớ 2 loại: declaration và arrow


// Nếu khai 2 hàm cùng tên, hàm khai báo sau sẽ ghi đè hàm trước
function guiThongBao(message) {
    console.log(`${message}`);
}

function guiThongBao(message, userID) {
    console.log(`${message}, ${userID}`);
}

guiThongBao("deloy xong");
guiThongBao("deloy xong", 101);


function guiThongBao(message, target) {
    if (typeof target === "undefined") {
        console.log(`${message}`);
        return;
    }
    if (typeof target === "number") {
        console.log(`${message}, ${target}`);
        return;
    }

    console.log(`target ko hợp lệ`);
}

guiThongBao("deployxong");
guiThongBao("deployxong", 101);

// Đây là phong cách viết 1 hàm nhiều cách gọi
//return ở đây gióng như
// "xử lý xong trường hợp này rồi -> thoát hàm luôn"


function timSo(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 5) {
            break;
        }
        console.log(arr[i]);
    }
    console.log("Đã xong");
}
//break ở dây chỉ dừng for, ko kết thúc function ngay

function timSo2(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 5) {
            return;
        }
        console.log(arr[i]);
    }
    console.log("Đã xong");
}
// gặp 5 là kết thúc luôn cả hàm

timSo([1, 2, 3, 4, 5, 6, 7]);
timSo2([1, 2, 3, 4, 5, 6, 7]);


function dangNhap(user, pass, moiTruong = "staging") {
    console.log(`${moiTruong} Đăng nhập: ${user} - ${pass}`);
}

dangNhap("admin", "123456");

dangNhap("admin", "123456", "dev");

function taoTestUser(ten, tuoi = 25, email, vaiTro = "tester") {
    console.log(`${ten}, ${tuoi}, ${email}, ${vaiTro}`);
}

taoTestUser("neko", "neko`vn.com");
taoTestUser("neko", undefined, "neko`vn.com");

//rest parameters
function tongTien(...danhSachGia) {
    //danhSachGia là 1 mảng
    let tong = 0;
    for (const gia of danhSachGia) {
        tong += gia;
    }
    return tong;
}

console.log(tongTien(100000));
console.log(tongTien(1000, 2000, 3000, 4000));


//Hàm nhận vào duy nhất 1 object là options
//C1
function taoUser(options) {
    //bóc tách (destructuring) object ra từng biến riêng biệt
    const { ten, tuoi = 25, email, vaiTro = "tester" } = options;
    console.log(`${ten}, ${tuoi}, ${email}, ${vaiTro}`);
}

//C2
function taoUser2({ ten, tuoi = 25, email, vaiTro = "test" }) {
    console.log(`${ten}, ${tuoi}, ${email}, ${vaiTro}`);
}

//gọi hàm
taoUser({
    ten: "neko",
    email: "neko@vn.com",
})


taoUser2({
    ten: "neko",
    tuoi: 100,
    email: "neko@vn.com",
});


// const danhSach = ["admin", "123456", "staging"];
// const user = danhSach[0];
// const pass = danhSach[1];

//destruct
const [user, pass, moiTruong2] = ["admin", "123456", "staging"];
console.log(user);
console.log(pass);
console.log(moiTruong2);

//bỏ qua phần tử ko cần
const [firstName, , city] = ["Neko", 25, "hanoi"];
console.log(firstName);
console.log(city);

const [a, b, c = "n/a"] = ["hello", "world"];
//giá trị mặc định
console.log(c);

//object destruct
//=> cú pháp gặp nhiều nhất -> bóc tách thuộc tính object ra biến riêng biệt theo tên thuộc tính
// (ko theo thứ tự như array)

//const response = { status: 200, body: "ok", headers: {} };

//const status = response.status;
const { status, body } = { status: 200, body: "ok", headers: {} };

console.log(status);
console.log(body);


//đổi tên biến

const { status: statusCode, body: noiDung } = {
    status: 200,
    body: "ok",
    headers: {},
};
console.log(statusCode);

console.log(noiDung);


//giá trị mặc định + đổi tên

const { ten, tuoi = 18, vaiTro: role = "viewer" } = { ten: "neko" };

console.log(ten);
console.log(tuoi);
console.log(role);


//destruct trong tham số hàm
function hienThiUser({ ten, email, tuoi = 18 }) {
    console.log(`${ten}, ${email}, ${tuoi}`);
}

hienThiUser({ ten: "Neko", email: "a" });
//const { ten: ten2, email, tuoi: tuoi2 = 18 } = { ten: "Neko", email: "a" };

//destruct lồng (nested)
const apiResponse = {
    data: {
        user: { name: "neko", email: "neko@123" },
        token: "123",
    },
    status: 200,
};

// const {
//   data: {
//     user: { name, email },
//     token,
//   },
//   status: status2,
// } = apiResponse;

// console.log(name);
// console.log(token);
// console.log(status2);


// // // Ví dụ dữ liệu đầu vào
// // Khi chạy automation test, ta nhận được một danh sách kết quả như sau:
const testRuns = [
    [
        " login smoke ",
        { browser: "   chromium   ", env: "  staging  " },
        "  PASS ",
    ],
    [
        " checkout payment ",
        { browser: "   firefox   ", env: "  prod  " },
        "  FAIL ",
    ],
    [
        " search product ",
        { browser: "   webkit   ", env: "  staging  " },
        "  PASS ",
    ],
    ["  ", { browser: "   chromium   ", env: "  dev  " }, "  PASS "],
];

// // Bài toán
// // Viết hàm taoBaoCaoTest(testRuns) để tạo báo cáo từ danh sách kết quả test.

// // Yêu cầu
// // - Dùng destructuring để bóc tách từng phần tử trong mảng.
// // - Gợi ý:
// //   const [rawTestName, { browser, env }, rawStatus] = item
// // - Tương ứng:
// //   + rawTestName: tên test thô
// //   + { browser, env }: thông tin môi trường chạy
// //   + rawStatus: trạng thái test thô

// // Rule xử lý
// // - Nếu testName rỗng thì tăng invalid và bỏ qua dòng đó.
// // - Nếu status không phải PASS hoặc FAIL thì tăng invalid và bỏ qua.
// // - Nếu dữ liệu hợp lệ:
// //   + Tạo chuỗi theo định dạng: testName - browser - env
// //   + Ví dụ: login smoke - chromium - staging
// //   + Nếu PASS thì đưa vào mảng passed.
// //   + Nếu FAIL thì đưa vào mảng failed.

// // Kết quả mong đợi
// // Hàm cần trả về dữ liệu theo dạng:
// // return {
// //   totalValid: 3,
// //   invalid: 1,
// //   passed: [
// //     "login smoke - chromium - staging"
// //     "search product - webkit - staging
// //   ],
// //   failed: [
// //     "checkout payment - firefox - prod"
// //   ]
// // }


function taoBaoCaoTest(testRuns) {
    //Khai báo các biến cần sử dụng
    let totalValid = 0;
    const passed = [];
    const failed = [];
    let invalid = 0;

    for (const item of testRuns) {
        const [rawTestName, { browser, env }, rawStatus] = item;
        const testName = rawTestName.trim();
        const browserName = browser.trim();
        const envName = env.trim();
        const status = rawStatus.trim().toUpperCase();
        if (testName === "") {
            invalid++;
            continue;
        }

        if (status !== "PASS" && status !== "FAIL") {
            invalid++;
            continue;
        }
        const reportItem = `${testName} - ${browserName} - ${envName}`;
        if (status === "PASS") {
            passed.push(reportItem);
        } else {
            failed.push(reportItem);
        }
    }

    return {
        totalValid: passed.length + failed.length,
        invalid: invalid,
        passed: passed,
        failed: failed,
    }
}
console.log(taoBaoCaoTest(testRuns));

//spread operator - sao chép và gộp mảng
const mangGoc = [1, 2, 3];
//clone mảng gốc -> dùng spread operator
const mangSaoChep = [...mangGoc];
mangSaoChep.push(9999);

console.log(mangGoc);
console.log(mangSaoChep);

//gộp 2 mảng lại thành 1
const mang1 = ["A", "B"];
const mang2 = ["C", "D"];

const mangGop = [...mang1, ...mang2];
console.log(mangGop);

//[0,...,4,5]
//Chèn phần tử vào giữa
const mangMoi = [0, ...mangGoc, 4, 5];

//spread với object - Sao chép và ghi đè

const configMacDinh = {
    baseUrl: 'https://staging.neko.vn',
    timeout: 30000,
    headless: true,
    retries: 2,
};

//ghi đè 2 field và giữ nguyên phần còn lại
const configProd = {
    ...configMacDinh,
    baseUrl: "https://neko.vn",
    retries: 0,
};

console.log(configProd);

const configDebug = { ...configMacDinh, headless: false };

//spread trong tham số hàm
const danhSachGia = [10000, 20000, 30000];

const giaMax = Math.max(...danhSachGia);
//const giaMax = Math.max(10000, 20000, 30000);
//console.log(giaMax);

//Bài tập
// Cho dữ liệu đầu vào như sau:

// Cấu hình mặc định của bài tập
const configMacDinhBaiTap = {
    baseUrl: "https://staging.neko.vn", // Địa chỉ mặc định đang trỏ tới môi trường staging
    timeout: 30000, // Thời gian chờ tối đa là 30 giây
    headless: true, // Chạy trình duyệt ở chế độ không hiển thị giao diện
    retries: 2, // Số lần thử lại khi có lỗi
};

// Cấu hình dùng để ghi đè một số giá trị mặc định
const configGhiDe = {
    timeout: 10000,
    headless: false,
};

// Danh sách tag mặc định
const tagsMacDinh = [" smoke  ", "  login "];

// Danh sách tag cần thêm
const tagsThem = ["  checkout  ", "  smoke  ", "  regression "];

// Mảng thời gian phản hồi
const tocDoPhanHoi = [1200, 3400, 800, 1500];

// Tên suite thô, chưa được làm sạch
const tenSuiteRaw = "  Payment  Flow  ";

// Yêu cầu
// Viết hàm taoCauHinhChayTest().
// - Dùng object spread để tạo configCuoi từ configMacDinhBaiTap và configGhiDe.
// - Dùng array spread để gộp tagsMacDinh và tagsThem thành một mảng mới.
// - Sau đó xử lý mảng mới bằng cách loại bỏ tag rỗng và chuyển về chữ thường và có thể xử lý tag trùng (dùng includes)
// - Làm sạch tenSuiteRaw.
// - Nếu tenSuiteRaw rỗng thì dùng giá trị mặc định là "unknown-suite".
// - Tìm thời gian phản hồi lớn nhất bằng spread với Math.max.
// - Trả về object có dạng sau:

// Kết quả mong đợi
// {
//   suiteName: "Payment Flow",
//   config: {
//     baseUrl: "https://staging.neko.vn", // Địa chỉ mặc định đang trỏ tới môi trường staging
//     timeout: 10000, // Thời gian chờ tối đa là 30 giây
//     headless: false, // Chạy trình duyệt ở chế độ không hiển thị giao diện
//     retries: 2,
//   },
//   tags: ["smoke", "login", "checkout", "regression"],
//   slowestRespone: 3400
// }
//ví dụ mình có 1 mảng làm sạch -> mình muốn check là có trùng hay ko. mình sẽ check xem mảnh đó có !includes thì
// push vào mảng làm sạch


function taoCauHinhChayTest() {
    const configCuoi = {
        ...configMacDinhBaiTap,
        ...configGhiDe,
    };
    const tatCaTags = [...tagsMacDinh, ...tagsThem];

    let tagsDaLamSach = [];
    for (const tag of tatCaTags) {
        let cleanTag = tag.trim().toLowerCase();
        if (cleanTag === "") {
            continue;
        }
        if (!tagsDaLamSach.includes(cleanTag)) {
            tagsDaLamSach.push(cleanTag);
        }
    }

    let tenSuite = tenSuiteRaw.trim().replace("  ", " ");
    if (tenSuite === "") {
        tenSuite = "unknown-suite";
    };

    const maxRespone = Math.max(...tocDoPhanHoi);

    return {
        tenSuite,
        config: configCuoi,
        tagsDaLamSach,
        maxRespone,
    };
};
console.log(taoCauHinhChayTest());

//Ví dụ call back
//Bước 1: tạo "số điện thoại" -> call back
function quayLaiAn() {
    console.log("Tao quay lại ăn đây");
}

//Bước 2: Bồi bàn nhận call back làm tham số
function choBanTrong(soDienThoaiCuaKhach) {
    console.log("Đang dọn bàn....");

    //Bước 3: xử lý xong -> lôi hàm ra và gọi để chạy
    //Đây chính là lúc callback được gọi lại
    soDienThoaiCuaKhach();
}

//Bước 4: Chạy -> ko có () sau quayLaiAn
choBanTrong(quayLaiAn);


function layDuLieuTest() {
    return "Dữ liệu test";
}
// có ngoặc tròn () --> hàm chạy ngay -> lấy kết quả -> ly sinh tố
const ketQuaChay = layDuLieuTest();
console.log(ketQuaChay);
console.log(typeof ketQuaChay);

//ko có ngoặc () -> giao bản vẽ -> lấy bản thân cái máy
const copyHam = layDuLieuTest;
console.log(copyHam);
console.log(typeof copyHam);

console.log(copyHam());

//Callback có tham số
//Hàm nhận callback có thể truyền dữ liệu ngược lại cho callback khi gọi

function thongBaoKetQua(tenBaiTest, ketQua) {
    console.log(`${tenBaiTest} - ${ketQua}`);
}

function chayTest(tenTest, callback) {
    console.log(`đang chạy ${tenTest}`);

    //Giả lập: pass nếu test chứa login, fail nếu ko

    const pass = tenTest.includes("login");
    if (pass) {
        callback(tenTest, "Chạy passed");
    } else {
        callback(tenTest, "chạy fail");
    }
    // callBack(tenTest, pass ? "Chạy passed" : "chạy fail");
}


chayTest("login thành công", thongBaoKetQua);

chayTest("đăng kí thiếu email", thongBaoKetQua);

function inThongBao() {
    console.log("đã đợi xong");
}
//Cách 1
// setTimeout(inThongBao, 5000);

//Cách 2
// setTimeout(function () {
//     console.log("đã đợi xong");
// }, 3000);

//cách 3 -> dùng arrow function
// setTimeout(() => {
//   console.log("đã đợi xong");
// }, 3000);

//ứng dụng thực tế
//Call back thường xảy ra ở các hàm xử lý array

const giaSanPhamUI = [100000, 250000, 500000];
function giaNhanDoi(gia) {
    return gia * 2;
}
const giaMoi = giaSanPhamUI.map(giaNhanDoi)

// const giaMoi = giaSanPhamUI.map((gia) => {
//     return gia * 2;
// });
console.log(giaMoi);


// const users = [
//     { ho: "nguyen", ten: "neko" },
//     { ho: "Tran", ten: "New" },
// ];

// const hoTen = users.map((u) => {
//     return `${u.ho} ${u.ten}`;
// });

// console.log(hoTen);


const sanPhamUI = [
    { ten: "Chuột", gia: 150000, tonKho: true },
    { ten: "Bàn phím", gia: 500000, tonKho: false },
    { ten: "Màn hình", gia: 3000000, tonKho: true },
    { ten: "Tai nghe", gia: 200000, tonKho: true },
];

//Lọc các sản phẩm còn hàng
//dùng for lọc các sản phẩm còn hàng
//Đầu ra là 1 mảng mới

// let sanPhamConHang = [];
// for (const sanPham of sanPhamUI) {
//     if (sanPham.tonKho) {
//         sanPhamConHang.push(sanPham);
//     };
// };
// console.log(sanPhamConHang);

const sanPhamConHangFilter = sanPhamUI.filter((sanPham) => {
    return sanPham.tonKho === true;
});

//Lọc giá nhỏ hơn 200000
const sanPhamFilterGia = sanPhamUI.filter((sanPham) => {
    return sanPham.gia < 200000;
});

//Kết hợp nhiều điều kiện 
//<200000 và còn hàng
const sanPhamDaFilter = sanPhamUI.filter((sanPham) => {
    return sanPham.gia < 200000 && sanPham.tonKho === true;
});


const users = [
    { id: 1, ten: "neko", role: "admin" },
    { id: 2, ten: "mew", role: "tester" },
    { id: 3, ten: "Cat", role: "tester" },
];

//Tìm phần tử có role là admin
const userLaAdmin = users.find((user) => user.role === "admin");
console.log(userLaAdmin);