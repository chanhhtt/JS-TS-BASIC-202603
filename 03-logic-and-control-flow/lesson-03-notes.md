## Rẽ nhánh kịch bản - if/else
- Cấu trúc `if/else` dùng để diễn đạt ý nghĩa: **nếu... thì... ngược lại...**

**Cú pháp:**

```js
if (điều kiện đúng) {
  // làm việc A
} else {
  // làm việc B
}
```

- Tạm thời, có thể hiểu **điều kiện** là một biểu thức trả về giá trị Boolean: `true` hoặc `false`.
- Ví dụ:
  - `age > 18`
  - `score < 5`
  - `status === 'success'`

- Nếu điều kiện cho ra `true` → chương trình đi vào khối `if`.
- Nếu điều kiện cho ra `false` → chương trình đi vào khối `else`.

Có nên viết điều kiện thành 1 biến riêng không?

Có. Nên làm như vậy khi:

- Điều kiện bắt đầu dài.
- Bạn muốn tên biến thể hiện rõ ý nghĩa nghiệp vụ.

Nên cố gắng cô lập các test case thành từng khối riêng và tránh để chúng phụ thuộc vào nhau.

## Cấu trúc `if / else if / else` - Ngã tư nhiều lối rẽ

### Cấu trúc

```js
if (đk1) {
  // Chạy nếu đk1 đúng
} else if (đk2) {
  // Chạy nếu đk1 sai, nhưng đk2 đúng
} else if (đk3) {
  // Chạy nếu các đk trên đều sai, nhưng đk3 đúng
} else {
  // Chạy nếu tất cả các đk trên đều sai
}
```

### Quy tắc

- Luôn bắt đầu bằng `if`.
- Có thể có `0`, `1`, hoặc nhiều `else if`.
- `else` là tùy chọn, không bắt buộc.
- Nếu có `else` thì nó luôn đứng cuối cùng.
- Trong toàn bộ cụm này, máy tính chỉ chạy **1 nhánh duy nhất**.
- Điều kiện nào đúng **đầu tiên** thì chương trình chạy vào nhánh đó và **bỏ qua tất cả các nhánh bên dưới**, dù các nhánh sau cũng đúng.

## Toán tử 3 ngôi - Lối tắt của `if/else`

Gọi là toán tử 3 ngôi vì nó có 3 thành phần.

### Cú pháp

```js
let bien = dieuKien ? giaTriNeuDung : giaTriNeuSai;
```

### Ý nghĩa

- Dấu `?` dùng để hỏi điều kiện đúng hay sai.
- Dấu `:` dùng để ngăn cách giữa:
  - giá trị khi đúng ở bên trái
  - giá trị khi sai ở bên phải

Cách đọc:

- Nếu điều kiện đúng thì lấy vế bên trái dấu `:`.
- Nếu điều kiện sai thì lấy vế bên phải.

## Best practice - Khi nào dùng

### Ưu tiên toán tử 3 ngôi khi

- Bạn chỉ cần chọn **1 giá trị**.
- Bài toán chỉ có **2 kết quả**.
- Mỗi nhánh đều ngắn và đọc là hiểu ngay.

Rất phù hợp cho các trường hợp:

- Gán text cho biến
- Chọn config
- `return` một giá trị ngắn
- Hiển thị nhãn đơn giản

### Ưu tiên `if/else` khi

- Trong mỗi nhánh có nhiều hành động.
- Bạn cần `console.log`, `click`, `screenshot`, gọi API, ...
- Bạn muốn code rõ ràng theo từng bước.
- Bạn biết logic này sẽ còn được mở rộng thêm.

Truthy và Falsy

Bình thường, câu lệnh `if (điều_kiện)` yêu cầu phần bên trong là kiểu Boolean (`true` hoặc `false`).

Tuy nhiên, nếu bạn đưa vào một `string`, `number`, `object`,... thì JavaScript thường không báo lỗi ngay. Thay vào đó, nó sẽ thực hiện một bước ngầm gọi là **ép kiểu sang Boolean**.

Hiểu đơn giản
if (giá trị bất kỳ) {
    ...
}

JavaScript sẽ xử lý theo kiểu:

- Giá trị đó đã là `true` hoặc `false` chưa?
- Nếu chưa, nó sẽ tạm thời đổi giá trị đó sang Boolean.
- Nếu kết quả là `true` thì vào `if`, ngược lại thì không.

`if` không hỏi giá trị đó thuộc kiểu dữ liệu gì. Nó chỉ hỏi:

> Trong ngữ cảnh điều kiện, giá trị này nên được xem là **đúng** hay **sai**?

Đó là lý do xuất hiện hai khái niệm:
- **Truthy**: không phải Boolean thật, nhưng khi đưa vào `if` thì được xem là `true`.
- **Falsy**: không phải Boolean thật, nhưng khi đưa vào `if` thì được xem là `false`.

## QUY TẮC
- Những giá trị mang ý nghĩa rỗng, không có gì, hoặc không hợp lệ thường bị ép thành `false` → gọi là **falsy**.
- Còn hầu hết những giá trị còn lại sẽ bị ép thành `true` → gọi là **truthy**.

## 6 giá trị falsy trong JavaScript
- false
- 0 (số 0)
- "" (chuỗi rỗng)
- null (rỗng)
- underfined (chưa xác định)
- NaN (lỗi số học)

## Còn lại đều là truthy

Tất cả các giá trị khác đều được coi là **truthy**, nhưng có một số trường hợp dễ gây hiểu nhầm:

### String dễ đánh lừa
"0": Một chuỗi chứa số 0 -> TRUTHY
"false" -> TRUTHY
" " -> TRUTHY

### Object/array
- []: 1 cái mảng rỗng -> TRUTHY
- {}: 1 cái object rỗng -> TRUTHY

## Lưu ý khi sử dụng

- Nếu biến đã mang ý nghĩa đúng/sai sẵn, như `isLoggedIn`, `hasPermission`,... thì nên dùng trực tiếp.
- Nếu dữ liệu là số, chuỗi, mảng,... thì chỉ nên dựa vào truthy/falsy khi ý nghĩa của nó thực sự rõ ràng.

## Switch Case
Mình cứ tưởng tượng switch case hoạt động y như 1 chiếc máy bán nc tự động
- Bạn nhét tiền và bấm mã switch()
- Máy sẽ dò tìm đúng ô chứa mã số đó case()
- Nhả ra chai nc (code thực thi)
- Nếu bấm mã ko tồn tại, hì refund hay thông báo lỗi (default)

## cú pháp
switch (biểu thức): nơi bạn truyền vào biến cần kiểm tra
case giá trị: điểm dừng (lưu ý dấu : ở cuối)
break lệnh ngắt: gặp lệnh này sẽ thoát khỏi switch
default: giống như else

Nếu ko có break -> thì sẽ chạy đúng vào case đầu tiên khớp nhưng sau đó nó chạy tuột xuống tất cả các case dưới mà ko thèm kiểm tra điều kiện

## Khi nào dùng switch/ Khi nào dùng if/else

Điều kiện: Dùng if else khi điều kiện đa dạng, phức tạp (>, <, >=)  điều kiện lồng nhau, nhiều biến
dùng switch case khi có 1 biểu thức duy nhất trong switch, rồi mỗi case là 1 GIÁ TRỊ CỐ ĐỊNH để so khớp ===

Số lượng: ít nhánh (2-3 trường hợp)
switch case: rất nhiều nhánh từ 4 trường hợp
Nói ngắn gọn: SWITCH KO MẠNH Ở ĐK LOGIC mà mạnh ở so khớp nhiều giá TRỊ CỐ ĐỊNH CỦA 1 biến hay biểu thức


