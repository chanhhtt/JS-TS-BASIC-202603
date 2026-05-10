// Bài 1
// Tình huống: Bạn viết script test tự động kiểm tra API /users/1. Server trả về response, bạn cần kiểm tra toàn bộ dữ liệu: tìm field rỗng, kiểm tra kiểu dữ liệu sai.

// Dữ liệu đầu vào:

let apiResponse = {
    userId: 101,
    username: "neko_tester",
    email: null,
    isActive: "true",  // Bug: phải là boolean, không phải string
    phone: "",
    role: "admin"
};

// Yêu cầu:

// Với mỗi key, kiểm tra:
// Giá trị có phải null hoặc "" (chuỗi rỗng) không? → In cảnh báo trường rỗng.
// Nếu key là "isActive", kiểm tra typeof có phải "boolean" không? → In cảnh báo sai kiểu.
// Đếm tổng số lỗi tìm được.
// Trong bài này, 1 lỗi = 1 lần vi phạm 1 quy tắc kiểm tra.

let soLoi = 0;

for (let key in apiResponse) {
    if (apiResponse[key] === "" || apiResponse[key] === null) {
        //Phần này có nên check điều kiện !apiResponse[key] không ạ?
        // vì đề bài chỉ bảo check null hoặc ""
        console.log(`${key} là trường rỗng`);
        soLoi++;
    };
};

if (typeof apiResponse.isActive !== "boolean") {
    console.log("isActive sai kiểu");
    soLoi++;
};

console.log(`Tổng số lỗi: ${soLoi}`);



// Bài 2
// Tình huống: Bạn có danh sách URL cần test. Một số URL bị rỗng (bỏ qua), một số trả về status bình thường, nhưng nếu gặp URL trả về lỗi 500 thì dừng ngay vì server đã sập, test tiếp vô nghĩa.

// Dữ liệu đầu vào:

let testUrls = [
    { url: "/api/users", status: 200 },
    { url: "", status: null },
    { url: "/api/products", status: 200 },
    { url: "/api/orders", status: 500 },
    { url: "/api/reviews", status: 200 }
];
// Yêu cầu:

// Nếu url rỗng ("") → dùng continue bỏ qua, in cảnh báo “URL rỗng”.
// Nếu status === 500 → in lỗi nghiêm trọng, dùng break dừng ngay.
// Nếu bình thường → in kết quả PASS.
// Đếm tổng URL đã test được (không tính URL bị bỏ qua).

let tongUrlTest = 0;

for (let testUrl of testUrls) {
    if (testUrl.url === "") {
        console.log('URL rỗng');
        continue;
    };

    if (testUrl.status === 500) {
        console.log(`Lỗi nghiêm trọng tại: ${testUrl.url}`);
        tongUrlTest++;
        break;
    };

    console.log(`PASS: ${testUrl.url}`);
    tongUrlTest++;
}

console.log(`Tổng số URL đã test không tính URL bị bỏ qua: ${tongUrlTest}`);