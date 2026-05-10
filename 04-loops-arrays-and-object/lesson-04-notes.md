## Vòng lặp `while`

- Dịch sang tiếng Việt là: **"trong khi..."**
- Logic:
  - Trong khi **bụng còn đói** thì **đi lấy thêm thức ăn**.

### Cú pháp

Vòng lặp `while` có 3 yếu tố cốt lõi:

```js
// Biến khởi tạo: khai báo trước khi vào vòng lặp
let bienDem = giaTriBanDau;

while (dieuKienLap) {
  // Khối lệnh thực thi
  thucHienHanhDong();

  // Bước nhảy: cập nhật biến đếm
  capNhatBienDem();
}
```

- **Yếu tố 1: Biến khởi tạo**
  - Đây là **vạch xuất phát** của vòng lặp.
  - Ví dụ: `let soLanClick = 1;`
  - Nghĩa là bắt đầu click từ lần đầu tiên.

- **Yếu tố 2: Điều kiện lặp**
  - Nằm trong **dấu ngoặc tròn `()`**.
  - Đây là phần **kiểm tra điều kiện**:
    - Nếu **truthy** thì code bên trong vòng lặp được chạy.
    - Nếu **falsy** thì vòng lặp kết thúc.
  - Ví dụ: `soLanClick <= 3`

- **Yếu tố 3: Bước nhảy**
  - Đây là **cửa thoát hiểm** của vòng lặp.
  - Bắt buộc phải nằm bên trong **dấu ngoặc nhọn `{}`**.
  - Nhiệm vụ là **thay đổi biến khởi tạo** để đến một thời điểm nào đó.điều kiện lặp trở thành `false`, từ đó vòng lặp dừng lại.
  - Ví dụ: soLanClick++

QUY TẮC VÀNG: Dùng WHILE khi bạn không biết trước số lần lặp, bạn chỉ biết điều kiện để dừng
while(chưa buồn ngủ){
    thì lướt video tiếp
}

## Mảng (Array)
Bản chất, nếu:
 let ten = "Hoang"
thì ten chỉ chứa 1 giá trị

- Có thể hiểu array như là 1 cái tủ đựng đồ cso nhiều ngăn kéo
  - Chỉ có 1 tên chung (giống tên biến)
  - Có thể chứa vô số món đồ bên trong (mỗi ngăn kéo là 1 món)
  - Các món đồ đc đặt cạnh nhau và có thứ tự

- Cú pháp:
  - Dùng dấu ngoặc vuông []
  - Các phần tử được đặt bên trong dấu ngoặc vuông và cách nhau bởi dấu phẩy

- Ví dụ:

  //Array chứa toàn string (danh sách tk test)
  let danhSachUser = ["admin", "test_01", "user_vip"];

  //Array chứa toàn number
  let danhSachGia = [1000, 2000, 3000];

  //Array rỗng
  let danhSachLoi = [];

- **LƯU Ý**: Trong nhiều ngôn ngữ khác, ARRAY chỉ đựng 1 loại kiểu dữ liệu. Nhưng JS có thể chứa nhiều kiểu dữ liệu khác nhau

  let thapCam = ["Neko", 30, true null] 
  
  - Tuy nhiên, NGHIÊM CẤM SỬ DỤNG NHƯ NÀY
  - Nên giữ cho dữ liệu đồng nhất để dễ xử lý

- **Cú pháp để lấy phần tử**
  - Cú pháp:
  tênBien [viTri] 
    - index bắt dầu = 0
  
  - Ví dụ:
  let sanPham = ["aoThun", "quanJean"];
  
  console.log(sanPham[1]); //"quanJean"
  console.log(sanPham[10]); //undefined

- **Bộ đồ nghề xử lý**
 - A. length
    - Đếm số lượng phần tử
    - Cú pháp: tenMang.Length() 
    - Trả ra number là tổng số phần tử trong mảng
    
    Vì index = 0, nên phần tử cuối cùng của Mảng luôn nằm ở vị trí length -1

 - B. push()
    - Nhét đồ vào cuối mảng
    - Cú pháp: tenMang.push(giaTri) 
    - Đầu ra: số lượng phần tử mới của mảng sau khi thêm 
    - Tác dụng phụ -> mảng gốc bị thay đổi

 - C. includes 
    - Kiểm tra phần tử có tồn tại ko
    - Cú pháp: tenMang.includes(giaTri)

 - D. .pop() 
    - Rút phần tử cuối cùng ra ngoài
    - Đầu ra phần tử cuối cùng và bị rút ra
    - Tác dụng phụ: mảng gốc bị thay đổi

 - E. shift() 
    - Rút phần tử đầu tiên ra ngoài
    - Tác dụng phụ: mảng gốc bị thay đổi

 - F. unshift() 
    - Thêm phần tử vào đầu mảng
    - Tác dụng phụ: mảng gốc bị thay đổi

 - G. join() 
    - Gộp tất cả phần tử thành 1 chuỗi
    - Cú pháp: tenMang.join(ki tu noi)

 - H.indexOf()
    - Trả ra index nếu tìm thấy, 
    - Trả -1 nếu ko có

## Object
là 1 cái tủ có dán nhãn => khi mình muốn lấy 1 cái ngăn kéo -> thì lấy qua tên ngăn kéo
- **Quy tắc vàng:**
    - Dùng array khi bạn có 1 danh sách nhiều thứ giống nhau (danh sách user, giá..)
    - Dùng object khi cần 1 mô tả chi tiết 1 thứ duy nhất (1 user, 1 sản phẩm, 1 cấu hình test)


- **Cú pháp:**
    - Dùng dấu ngoặc nhọn `{}`.
    - Bên trong là các cặp **key - value** và ngăn cách nhau bằng dấu phẩy.

- **Key và value:**
    - **Key**: tên thuộc tính, giống như nhãn dán trên ngăn kéo.
    - **Value**: dữ liệu nằm trong ngăn kéo, có thể là `string`, `number`, `boolean`, `array`, hoặc `function`.

    Ví dụ:
    let userTest = {
        hoTen: "Neko Nguyen",
        tuoi: 30,
        isVip: true,
        quyenHan: ["read", "write"]
    }


- **Quy tắc đặt tên key:**
    - Nếu key là tên hợp lệ theo quy tắc đặt tên biến, thường **không cần dấu nháy**.
    - Nếu key chứa **dấu cách** hoặc **dấu gạch ngang `-`**, phải bọc trong dấu nháy kép.

- **Cách truy xuất dữ liệu:**
    - **A. Dùng dấu chấm `.`** - cách dùng phổ biến nhất
      - Cú pháp:
        ```js
        tenObject.key;
        ```
      - Dùng khi key là tên hợp lệ.

- **B. Dùng dấu ngoặc vuông `[]`**
      - Cú pháp:
        ```js
        tenObject["tenKey"];
        ```
      - Dùng khi key có dấu cách, dấu gạch ngang, hoặc cần truy cập động.
- **Thêm, sửa, xóa (CRUD) dữ liệu trong object**
    - Có thể thêm, cập nhật, hoặc xóa thuộc tính bằng dấu chấm hoặc dấu ngoặc vuông.

- **Các phương thức thường dùng của object:**
    A. Object.keys() -> gom tất cả key thành 1 mảng
    B. Object.values() -> gom tất cả giá trị thành 1 mảng
    C. Object.entries()-> gom cả nhãn lẫn giá trị
    D. Object.hasOwn()-> kiểm tra key có phải của chính nó hay ko
- **Cú pháp `Object.hasOwn()`:**: 
    Object.hasOwn(tenObject, "tenKey")

## Array of Object
Cấu trúc này đc bao bên ngoài ngoặc vuông mảng [], bên trong trong chứa object {}

## Vòng lặp for - lặp lại có cấu trúc
- A. Vòng lặp for cổ điển
    - Giống như cụ tổ, mạnh mẽ nhất và xuất hiện ở hầu hết mọi ngôn ngữ lập trình

    - **Cú pháp**
    for ([1.khởi tạo]; [2.Điều kiện dừng]; [3.Bước nhảy]){
        khối lệnh bên trong
    }

    [1]. khởi tạo: Tạo biến đếm, chỉ chạy đúng 1 lần duy nhất
    [2]. Điều kiện dừng: Kiểm tra trước mỗi vòng, true -> chạy tiếp, false -> dừng
    [3]. Bước nhảy: Cập nhật biến đếm sau mỗi vòng. Thường là i++, i--;
    Ba phần cách nhay bởi dấu chấm phẩy ; (ko phải dấu ,)

- B.Vòng lặp for...of (dành cho array)
    -**Cú pháp**
    for (let phanTu of danhSach) {
        phanTu tự động nhận giá trị của từng phần tử trong danhSach
    }

    danhSach: 1 array (hoặc 1 string)
    phanTu: biến tạm, tự động nhận GIÁ TRỊ của từng phần tử trong mỗi vòng lặp
    of: từ khóa
    
    - Không dùng được cho Object

- C. for ... in (dành riêng cho object)
    - Sẽ duyệt thẳng qua từng tên thuộc tính (key) mà ko cần biến hình
    - Cú pháp
    for (let key in tenObject) {

    }

    tenObject: Object mà đang muốn duyệt qua
    key: Biến tạm, tự động nhận tên thuộc tính (key), trong mỗi vòng lặp

    - Không dùng cho array


## Break và continue -
Khi chạy vòng lặp - .đôi khi mình muốn can thiệp ngay giữa chừng
    -> Tìm thấy rồi, mà ko cần tìm nữa -> dừng ngay (break)
    -> Cái này ko quan tâm, bỏ qua đi -> nhảy sang vòng lặp tiếp theo (continue)

    - Được dùng trong:
    for cổ điển, while, for of, for in...
    -for each -> ko dùng đc

    -**Syntax**
    //break
    for (...) {
        if (điều kiện) {
            break //nhảy ra ngoài vòng lặp, chạy code phía dưới
        }
        //code ở đây
    }
    Với break:
    - thoát khỏi vòng lặp nên code ở dưới break trong lần đó ko chạy
    - các lần sau cx ko chạy luôn

    //continue
    for (...) {
        if (điều kiện) {
                continue //
            }
        //bỏ qua dòng code ở đây sẽ ko đc chạy
    }
    Với continue: 
    - ko thoát vòng lặp, chỉ bỏ qua phần code phía dưới trong lần lặp hiện tại
    - sau đó nhảy sang lần lặp tiếp theo




//Dùng vòng lặp nào cho array và Object
//While ko biết trước số lần lặp -> lặp đến khi điều kiện sai
//for cổ điển: biết chính xác số lần lặp -> kiểm soát tuyệt đối biến đếm i
//có array, chỉ cần giá trị -> for ... of
//có array, cần cả index -> for cổ điển
//duyệt object -> dùng for of + biến hình hoặc for in