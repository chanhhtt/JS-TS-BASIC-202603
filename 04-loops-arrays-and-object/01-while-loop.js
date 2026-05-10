//Yếu tố 1:
let soLanClick = 1;

//Yếu tố 2:
while (soLanClick <= 3) {
    //Thực hiện hành động
    console.log(`Đang click lần thứ ${soLanClick}`);

    //Yếu tố 3
    soLanClick++;
}

console.log("Đã click xong 3 lần. thoát vòng lặp");

//LƯU Ý: Vòng lặp vô tận
//let bungDoi = true;

// while (bungDoi === true) {
//     console.log("Đang ăn thịt nướng");
//     //Hậu quả: ăn mãi ko ngừng -> nổ bụng -> treo máy -> infinite loop vòng lặp
//     //Vô tận
//     //Bụng đói = false
// }

let miengThit = 5;
while (miengThit > 0) {
    console.log(`Đang ăn ... Còn lại.${miengThit} mieng`);

    miengThit--;
}
console.log("đã ăn hết, no bụng");

//Trong AT sẽ có cơ chế retry - thử lại tối đa N lần
//Viết code tìm nút thanh toán, cứ 1sec tìm 1 lần, tìm tối đa 5 lần, nếu thấy thì dừng, nếu quá 5 lần thì báo lỗi

let maxRetry = 5 //số lần thử tối đa
let currentRetry = 1 //Lần thử hiện tại
let isFound = false //Trạng thái tìm nút

while (isFound === false && currentRetry <= maxRetry) {
    console.log(`Đang tìm nút thanh toán trên màn hình`);

    //Giả lập tìm kiếm
    let toolGiaLap = Math.random();
    let searchResult = toolGiaLap > 0.3;

    console.log(`Search result : ${toolGiaLap}`);

    if (searchResult === true) {
        isFound = true //Tìm thấy rồi. Đổi trạng thái để thoát vòng lặp
        console.log(`Đã tìm thấy nút thanh toán. Bấm click ngay`);
    } else {
        console.log(`Không thấy, chuẩn bị thử lại`);
        currentRetry++; //Tăng số lần thử lên 1. (bước nhảy)
    }
}

//Xử lý kết quả

if (isFound === false) {
    console.log(`TEST FAIL, Đã thử 5 lần nhưng mạng lag quá, ko tìm thấy nút đâu`);
}


//BT nhỏ:
//Có 1 hệ thống đăng nhập -> rule là: hệ thống cho phép nhập sai MK tối đa 3 lần. Nếu nhập đúng trước khi hết lượt
//-> Hiển thị đăng nhập thành công. Nếu sai -> Khoá tài khoản

let matKhauDung = "1234";
let maxLanThu = 3;

//Yêu cầu:
//1. DÙng while để mô phỏng quá trình nhập mật khẩu (tối đa 3 lần)
//2. ở mỗi lần thử. giả lập người dùng nhập mật khẩu bàng cách, gán cứng giá trị cho biến matKhauNhap = "0000", matKhauNhap = "9999" (dùng if else if)
//Nếu nhập đúng in ra "Đăng nhập thành công"
//Nếu nhập sai in ra sai mật khẩu 
// check sau khi thoát vòng lặp. kiểm tra nếu đã dùng hết 3 lần mà vẫn sai -> in ra Tài khoản bị khóa


// let lanThu = 1;

// while (lanThu <= 3) {
//     console.log("Lần nhập thứ ${lanThu}");
//     if (lanThu === 1) {
//         matKhauNhap = "0000"
//     } else if (lanThu === 2) {
//         matKhauNhap = "9999"
//     } else if (lanThu === 3) {
//         matKhauNhap = "1234"
//     }

//     if (matKhauNhap === matKhauDung) {
//         console.log("Đăng nhập thành công");
//     } else {
//         console.log("Sai mật khẩu. Hãy thử lại");
//         lanThu++;
//     }
// }




