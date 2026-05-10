Quy tắc đặt tên:
Ưu tiên tên tiếng Anh
Ưu tiên ko dấu,
Ưu tiên ko khoảng trắng
Ko nhét quá nhiều kiểu đặt tên khác nhau

Quy ước đặt tên là sử dụng kebab-case
Tên file/folder -> test-data -> 
price-parser.js (sử dụng dấu - giữa các từ)
PriceParse -> tên class

Gõ cd .. để quay lại một cấp

Users/hoanghuyentrang/Documents/202603-PW-JS-TS/
01-intro-and-setup/01-hello-world.js
cd
Khi mở terminal, thư mục hiện tại sẽ là thư mục gốc
Gõ 'cd' rồi nhấn 'Tab' để tự động đi vào thư mục cần chạy
'ls' = list , dùng để hiển thị các file trong thư mục hiện tại 
Gõ 'node <ten-file>.js' để chạy file JavaScript
Extension đã thiết lập sẵn môi trường Node.js để chạy được File


Command +/ để comment hoặc bỏ comment code (trên window thì bấm Ctrl +/)

Bài 2: Biến - Dữ liệu cơ bản - Thao tác dữ liệu - Các phép toán
- Công dụng của biến là để lưu trữ dữ liệu (giá trị) để máy tính có thể nhớ và sử dụng lại sau này.
- Cách "khai báo" biến:
  - Cú pháp: `[từ khóa] [tên biến] = [giá trị]`
  - A. `let` (chiếc hộp linh hoạt)
    - Dùng khi bạn biết giá trị của biến có thể thay đổi trong tương lai.
  - B. `const` (chiếc hộp niêm phong)
    - Viết tắt của `constant` (hằng số).
    - Dùng khi bạn muốn giá trị này không bao giờ thay đổi sau khi đã khai báo.
- Chỉ dùng `let` khi khai báo biến lần đầu; những lần sau chỉ cần gọi tên biến, không cần dùng lại `let`.
- Dùng `console.log(tên_biến)` để in giá trị của biến ra màn hình, giúp kiểm tra và debug.

- Các quy tắc đặt tên biến:
  1. Không dùng ký tự đặc biệt; không dùng dấu gạch ngang `-`, chỉ nên dùng dấu gạch dưới `_`.
  2. Không được bắt đầu tên biến bằng số.
  3. Không chứa khoảng trắng.
  4. Không được dùng từ khóa của JavaScript (`reserved keywords`).

5. Quy tắc ngầm: tuân thủ `naming convention`.
   - Vi phạm quy tắc này thì code vẫn chạy, nhưng đồng nghiệp sẽ đánh giá chúng ta là amateur (nghiệp dư).
   - Không nên viết: `let thongtinhocvien = 'abc'`
   - `snake_case`: `let thong_tin_hoc_vien = 'abc'`
     - Tạm chấp nhận được, nhưng thường dùng nhiều hơn trong Python/SQL.
   - `PascalCase`: `let ThongTinHocVien = 'abc'`
     - Thường chỉ dùng cho class, không dùng cho biến.
   - `camelCase` (chuẩn trong JS/TS): `let thongTinHocVien = 'abc'`
     - Đây là cách viết chuẩn.

- Nghệ thuật đặt tên (Clean Code)
  - Hãy đặt tên sao cho chỉ cần đọc là hiểu biến đó đang chứa gì.

- Tránh đặt tên vô nghĩa
  - Không nên:
    - `let d = 10`
  - Nên:
    - `let daysToFinish = 10` // số ngày để hoàn thành

- Đặt tên biến boolean rõ nghĩa (`true`/`false`)
  - Không nên:
    - `let check = true`
    - `let open = false` // khó hiểu: đang mở hay là lệnh mở?
  - Nên:
    - `let isOpen = false` // cửa có đang mở không?
    - `let hasPermission = true` // có quyền truy cập không?

- Dùng tiếng Anh hay tiếng Việt?
  - Tốt nhất là dùng tiếng Anh:
    - `fullName`, `age`
  - Có thể chấp nhận tiếng Việt không dấu:
    - `hoTen`, `tuoi`
  - Tuyệt đối tránh:
    - Tiếng Việt có dấu: `let sốTiền = 10` // dễ lỗi mã hóa
    - Nửa Tây nửa Ta: `let soMoney = 10` // thiếu nhất quán

- Kiểu dữ liệu (data types)
- Nhóm kiểu dữ liệu nguyên thuỷ (primitive types)
 - 'string' (chuỗi ký tự)
    - Được bao bọc bằng dấu nháy đơn (`'`) hoặc dấu nháy kép (`"`).
    - Có thể dùng dấu backtick (`` ` ``).
    - Nếu là chuỗi bình thường và không cần nhúng biến, có thể dùng cả dấu nháy đơn (`'...'`) hoặc dấu nháy kép (`"..."`).
    - Dùng dấu nháy kép (`"..."`) khi bên trong chuỗi có dấu nháy đơn (`'`).
    - Dùng dấu nháy đơn (`'...'`) khi bên trong chuỗi có dấu nháy kép (`"`).
    - Nếu cần nhúng biến, dùng dấu backtick (`` `...${tenBien}...` ``).

    sẽ có những extension để format code cho đẹp ví dụ như là
    prettier /eslint 

  - Number(số)
    - Nó ko phân biệt số nguyên (10) hay số thập phân (3.14) => tất cả đều gọi cùng là 'number'
    - quy tắc đóng gói của 'number': viết trực tiếp, ko bao quanh bởi bất kỳ ký tự nào cả.

  -Boolean (luận lý) - cái công tắc đèn
    - nó chỉ có 2 trạng tháo duy nhất: bật true - hoặc tắt false
    - quy tắc đóng gói của boolean: viết trực tiếp `true` hoặc `false`, không bao quanh bởi bất kỳ ký tự nào cả.


Hộp đồ nghề xử lý string

1. .length - dùng để đếm xem chuỗi có bn ký tự (tính cả dấu cách)
  - cú pháp: tenBien.length 
  - Lưu ý ko có dấu ngoặc () vì đây là thuộc tính, ko phải method (hành động trong javascript gọi là method)

2. trim() - cái kéo cắt tỉa - nó sẽ làm sạch khoảng trắng ở hai đầu
  - input: " admin@example.com " -> "admin@example.com"
  - cú pháp: tenbien.trim()

3. toUpperCase() và toLowerCase() - Máy biến hình
  - dùng để biến tất cả thành chữ Hoa hoặc chữ Thường
  - Cú pháp: tenBien.toUpperCase() hoặc tenBien.tolowerCase()

4. includes() - kính lúp tìm kiếm
  - kiểm tra xem 1 chuỗi con có nằm trong chuỗi mẹ hay ko (có check dấu cách)
  - kết quả: trả về true hoặc false
  - cú pháp: tenBien.includes("chuoicon")

phân biệt Hoa/thường (Case - sentitive). 
  - includes so khớp chính xác từng ký tự, bao gồm cả chữ Hoa và chữ thường
  - VD: 'Error' và 'error' là 2 chuỗi khác nhau

5. replace - xoá và sửa lỗi
  - có đặc điểm là mặc định nó chỉ thay thế cho chỗ ĐẦU TIÊN nó tìm thấy
  - cú pháp: tenBien.replace("cũ", "mới")
  - nếu muốn xoá bỏ kí tự cũ thì dùng cú pháp tenBien.replace("cũ", "")

replaceAll() - máy hút bụi công nghiệp

indexOf() - máy dò vị trí
  - tìm vị trí (index) tìm vị trí (index) đầu tiên của 1 chuỗi con bên trong chuỗi mẹ.
  - Nếu ko tìm thấy trả về -1
  - cú pháp: chuoime.indexOf("chuỗi con")
  - Kết quả: trả về số ("vị trí bắt đầu tính từ 0")

8. .subString() - slice()
  - cắt lấy 1 phần của chuỗi dựa trên vị trí bắt đầu và vị trí kết thúc
  - điểm cực kỳ quan trọng
  - start: được tính vào
  - end: ko được tính vào

let text = "ABCDEFG"
text.slice(1,4) -> trả kết quả BCD

  - Cú pháp: chuoi.substring(batdau, ketthuc): cắt từ bắt đầu đến trước kết thúc
             chuoi.slice(batdau, ketthuc) - cắt tương tự nhưng hỗ trợ số âm

let maDon = "ORD-2026-00567"
substring(4,8) -> 2026

let fileName = "report_2026.pdf";
fileName.slice(-4) ->.pdf

  - muốn lấy đuôi chuỗi, đuôi file -> slice
  - cắt đơn giản từ trái qua phải -> cái nào cx được
  - nếu truyền vào ko có end() thì nó sẽ lấy từ vị trí start đến hết chuỗi
  - nhận 1 tham số -> nó lấy từ vị trí đó đến hết chuỗi


Tư duy kết hợp nhiều string method

Hãy đổi sang kiểu tư duy theo quy trình:
  1. Dữ liệu có bẩn ko -> dùng trim(), replace(), replaceAll(), toLowerCase()
  2. Mình có cần biết sự tồn tại hay ko -> dùng includes()
  3. Mốc bắt đầu nằm ở đâu: indexOf()
  4. Sau khi biết vị trí rồi, cần cắt đoạn nào: slice(), substring()
  5. Kết quả cuối cùng có cần chuẩn hoá nữa ko: trim(), toLowercase(),  split()
  
  => Công thức tư duy: LÀM SẠCH -> TÌM MỐC -> CẮT/TÁCH -> CHUẨN HÓA -> KIỂM TRA



Hộp đồ nghề xử lý Number
"100" -> 100

Ép kiểu

Để tính toán bắt buộc phải chuyển về number
A. Number()
  - Nó cố gắng biến toàn bộ chuỗi thành số. 
  - Nếu chuỗi dù có chứa chỉ 1 kí tự lạ -> báo lỗi NaN (Not a Number)
  - Cú pháp: Number(tenBien) hoặc Number("chuoi")
  - Lưu ý: Number của chuỗi rỗng trả về số 0. Number("") -> 0

B. parseInt() - máy lọc số nguyên
  - Nó đọc từ trái sang phải, gặp số thì lấy, gặp chữ thì stop -> bỏ qua phần thập phân
  - Cú pháp: parseInt(tenBien) hoặc parseInt("chuoi")

C. parseFloat() - máy lọc số thập phân
-> giống parseInt nhưng lấy cả phần thập phân


1 số phương thức làm việc với Number
- toFixed() - chốt số thập phân ()
  - giữ lại n số sau dấu phẩy
  - Cú pháp: so.toFixed(số chữ số thập phân muốn lấy) -> Tự động làm tròn -> Nhìn vào chữ số ngay sau vị trí bạn muốn giữ
    VD: console.log(19,956).toFixed(2)  -> 19.96
  
  >= 5 -> Làm tròn lên
  < 5  -> Làm tròn xuống
  - Thiếu thì thêm số 0

## Đối tượng toán học (Math Object)
Làm tròn nguyên
Math.round(): Làm tròn theo quy tắc toán học ()
Math.celi(): Làm tròn lên trần nhà, luôn tăng. VD: 4.1 -> 5
Math.floor(): Làm tròn xuống 4.9 -> 4

Tạo số ngẫu nhiên

Math.random() -> trả về 1 số lẻ từ 0 -> nhỏ hơn 1 (VD: 0,1123, 0.999999)

Tạo số ngẫu nhiên từ min -> max
Công thức: math.floor(Math.random() * (max - min + 1) + min)

VD: ta muốn random từ 50 đến 55 (50,51,52,53,54,55)


min, max
abs: Giá trị tuyệt đối 

padStart(), partEnd()

Ngày tháng: 01, 02,... (1,2)
Mã đơn hàng: SP-0005 (ko phải là SP-5)
Đồng hồ: 00:05

.padStart lấp đầy chỗ trống phía trước
hàm này dùng để chèn thêm kí tự vào đầu chuỗi cho đến khi chuỗi đó đạt đủ độ dài mong muốn

Lưu ý padStart là phương thức của String() -> ko phải number, muốn dùng phải ép kiểu số sang chuỗi trước
Cú pháp; chuoi.padStart(độ dài mong muốn, kí tự chèn)

Độ dài tổng bao gồm cả đệm
muốn độ dài là n nếu thiếu thì bù kí tự chèn vào


Mình nhớ hàm nào

- Đầu vào hiện tại là text hay number:
  Nếu là text phải nghĩ tới ép kiểu
- Cần ép kiểu nghiêm khắc hay linh hoạt
  Number(), parseInt(), parseFloat()
- Sau khi thành số rồi => Cần tính gì
  Cộng, trừ, nhân, chia, min, max
- Có cần làm tròn ko?
- Có cần hiển thị đẹp ko?
  toFixed(), padStart(), padEnd()

In ra màn hình(console.log)

1. Cách 1: Nối chuỗi bằng dấu cộng (+)
2. Cách 2: Ngăn cách bằng dấu phẩy
3. Cách 3: Dùng backtick - hay gọi là template literal


Method chaining là gì
có 1 chuỗi slug = "Playwright Basic First test"
-> đầu ra là playwright-basic-first-test
nhận định: trim -> toLowerCase -> replaceAll
method chaining: gọi nhiều method liên tiếp trên cùng 1 kiểu giá trị
-> bước sau lấy chính kết quả đó làm đầu vào
let slug = "abc"
let trim = slug.trim()
let toLC = trim().toLowerCase()
let result = toLC.replaceAll(" ", "-");

Có thể viết ngắn gọn bằng method chaining
const slug = "Playwright Basic First test"
console.log(slug.trim().toLowerCase().replaceAll(" ", "-"));

## method Chaining là gì
-> text.trim().includes("sale").toLowerCase() -> sai
-> text.trim().toLowerCase().includes("sale")

54000000 -> 54.000.000 (slice)
to LocaleString() -> hãy hiển thị số này theo thói quen của 1 quốc gia/ ngôn ngữ cụ thể
ví dụ: cùng số 54M -> VN: 54.000.000 -> Mỹ: 54,000,000
Cú pháp: so.toLocaleString(locale, options)
locale: chuẩn vùng/ ngôn ngữ, ví dụ: vi-VN, en-US
options: cấu hình thêm như tiền tệ, số lẻ, phần trăm

let text = "ABCDEFGH"
//01234567
//-8-7-6-5-4-3-2-1

Bạn chỉ cần nhớ:
start: được lấy
end: ko được lấy
nếu là số âm, hãy đổi sang vị trí dương trước (bằng cách lấy length + với số âm)
nếu chỉ là 1 tham số, thì đó là start, end = đến hết chuỗi

mình muốn lấy DEFGH
dùng slice lấy như nào??
slice có thể nhận vào 1 tham số (start) -> nếu ko có end, nó sẽ lấy đến hết chuỗi
dùng slice 1 tham số, dùng số dương
slice(3) -> start = 3 ko có end -> bắt đầu index = 3
-> lấy đến hết chuỗi


lấy GH
nhưng dùng tham số âm
slice(-2)
đổi sang dương => 8 + (-2) = 6
-> bắt đầu index(6) -> là chữ G -> lấy đến hết -> GH


Toán tử (Operator)
Phép cộng: (+)
đây là phép toán nguye hiểm nhất vì có tính chất lưỡng cực
  - Nếu cả 2 là số: Nó làm toán (10+5=15)
  - Nếu 1 trong 2 là chuỗi (string): Nó sẽ nối chuỗi => keo dán ("10"+5 -> 105)

Phép trừ: (-)
  - JS luôn cố gắng ép kiểu chuỗi thành số khi gặp dấu trừ

Phép nhân, chia tương tự phép trừ

Phép chia lấy dư 
  - Trả về phần dư của phép chia
  - 10 % 3 = 1 (10 chia 3 đc 3 dư 1)
  - 10 % 2 = (10 chia 2 đc 5 dư 0)
  -> dùng để check các số là lẻ hay chẵn

Toán tử gán
  - dùng dấu bằng
  - quy tắc phải sang trái

  let diemSo = 10
  
  diemSo = diemSo + 5
  //B1: Tính bên phải trước (10 + 5 = 15)
  //B2: Gán 15 ngược lại vào hộp điểm số

  toán tử gán rút gọn
  rất hay gặp case x = x + 5,
  1. = -> x= 10 -> x = 10
  2. += -> x += 5 tương đương x = x + 5
  3. -= -> x -= 5 tương đương x = x - 5
  4. *= -> x *= 5 tương đương x = x * 5

Toán tử so sánh

- `>`: lớn hơn
- `<`: nhỏ hơn
- `>=`: lớn hơn hoặc bằng
- `<=`: nhỏ hơn hoặc bằng
  trả về boolean

- `==` và `===` đều dùng để so sánh bằng nhau.
- `===` là so sánh tuyệt đối, nghĩa là hai giá trị phải **đồng nhất về cả giá trị và kiểu dữ liệu**.

-- so sánh khác nhau
!==

- Không nên sử dụng `==`:
  - Đây là phép so sánh lỏng lẻo.
  - Chỉ ưu tiên so sánh **giá trị**, không kiểm tra chặt chẽ **kiểu dữ liệu**.
  - Nếu kiểu dữ liệu khác nhau, JavaScript sẽ tự động ép kiểu để cố gắng so sánh.

- Nên sử dụng `===`:
  - Đây là phép so sánh nghiêm ngặt.
  - Kiểm tra cả **giá trị** lẫn **kiểu dữ liệu**.

Toán tử logic
Phép VÀ (&& - logic AND)
Quy tắc: chỉ trả về TRUE khi TẤT CẢ điều kiện là true, chỉ cần 1 cái false -> FALSE

Phép HOẶC (|| - logic hoặc)
Quy tắc: chỉ trả về TRUE nếu có ít nhất 1 điều kiện là true, chỉ trả về false -> khi TẤT CẢ điều kiện là fasle

Phép phủ định (! - LOGIC NOT)
  - Quy tắc: Đảo ngược giá trị Boolean. Đang true thì thành false và ngược lại
  
  - Cách đọc toán tử ! cho đúng
    3 Cách đọc quen thuộc:
      Không
      Không phải
      Phủ định của
    
    Ví dụ: 
      spin loading -> check xem nó có quay tròn hay ko
      !isLoading -> đọc là ko loading, ko phải đang loading
      !isSucess -> ko thành công
      !hasPermission -> ko có quyền
    
    Mẹo: hãy dịch luôn thành 1 câu phủ định

Tư duy đọc code. Trước khi hỏi AI, hay add console.log, debug -> chúng ta nên áp dụng tư duy đọc code từ trên xuống để hiểu đc logic

Toán tử tăng/giảm (prefix và post fix)
Cú pháp:
postfix (i++): trả về giá trị cũ của i, rồi SAU ĐÓ mới tăng i lên 1
prefix (++i): tăng i lên 1 trước, rồi mới trả về giá trị mới

sẻ ra 2 câu hỏi
giá trị của cả biểu thức i++ hoặc ++i là gì?
giá trị cuối cùng của biến i sau khi dòng code chạy là gì

Nơi dùng toán tử được nhét vào:
- Phép gán: let y = i++
- Phép tính: total = ++i * 2
- hàm console.log(i++)
- điều kiện if(i++ > 5)
ĐIỂM MẤU CHỐT: Nơi đang dùng nó luôn nhận giá trị của cả biểu thức, chứ ko phải cứ nhìn biến sau cùng là đủ

//BEST PRACTICE -> là nên viết 1 đòng riêng biệt
LƯU Ý KHI DÙNG ++/ --
Khi ++/-- đứng 1 mình trên 1 dòng riêng biệt, nó hoàn toàn vô hại, prefix hay postfix đều cho KẾT QUẢ giống nhau


Ý CHÍNH KHI CODE
1 dòng chỉ nên làm 1 việc chính
phép tính riêng
cập nhật biến riêng
