
Function: Tư duy nó như 1 cái máy xay sinh tố

mình tưởng tượng function 1 máy xay có 3 thành phần cốt lõi
- Đầu vào (input/parameter): Bạn cho trái cây, đường sữa, (nguyên liệu)
- Quy trình xử lý (body): Lưỡi dao quay, trộn đều mọi thứ (logic code)
- đầu ra (output/return): Nó rót cho chúng ta 1 ly sinh tố (kết quả)

TC1
console.log("Nhập username: abc")
console.log("Nhập matkhau: abc")

TC2
console.log("Nhập username: abc2")
console.log("Nhập matkhau: abc3")

TC1
console.log("Nhập username: abc3")
console.log("Nhập matkhau: abc4")

Điểm mấu chốt của function giải quyết
- Phần giống nhau được gomm vào 1 nơi
- Mỗi lần cần dùng chỉ việc gọi lại
- Gắn liền với tư duy DRY: đừng lặp lại cùng 1 đoạn code ở nhiều nơi

Có 3 loại function ở trong JS
- Cú pháp cơ bản thì ta sẽ dùng sau đây là function declaration (hàm tự định nghĩa)

## Cú pháp
function tenHam(đầu vào){
    //body
    //đầu ra
}

### Đầu vào (parameter)

- **Tham số (parameter):** là chỗ trống được khai báo sẵn khi ta tạo function.
- **Đối số (argument):** là giá trị thật được truyền vào khi function chạy.

### Body

- Là nơi chứa logic xử lý của code.

### `return` - Đầu ra

- `return` dùng để trả kết quả từ bên trong function ra bên ngoài.
- Giá trị trả về có thể là:
  - `number`
  - `string`
  - `boolean`
  - `object`
  - `array`
  - ...

- Nơi gọi hàm sẽ nhận lại giá trị đó.
- Khi function gặp `return`, nó sẽ dừng ngay tại đó.

Hoisting

//Gọi hàm trước khi khởi tạo
xinChao()

//tạo hàm sau
function xinChao(){
    console.log('Hoisting');
}
Ứng dụng
- Viết các kịch bản test ở đầu và vứt hết các hàm hỗ trợ (helper, clean data) -> vất hết các hàm hỗ trợ xuống tít dưới cùng của files cho đỡ chật chỗ
- Hoisting ko phải áp dụng cho tất cả các hàm, nó phụ thuộc vào mình viết hàm kiểu nào
Các môn phái viết hàm trong JS

- Phái cổ điển: function declaration (hàm khai báo)
    - Đây là cách viết truyền thống giống như cta học ở đầu buổi function, bắt buộc phải bắt đầu bằng chữ function và có 1 cái tên
    - Hỗ trợ 100% hoisting
    - Ưu điểm:  - được hoisting, gọi ở đâu cũng chạy, 
                - tên hàm rõ ràng -> code dễ đọc, dễ debug (lỗi sẽ hiện tên hàm trong stack trace)
    - Nhược điểm:   - Cú pháp dài dòng hơn so với arrow function
                    - có this riêng -> có thể ảnh hưởng khi dùng call back (học sau)

- Môn phái thực dụng: function expression
    - Cú pháp:
    const tenHam = function(){
        ....thân hàm
    }
    - Không được hỗ trợ hoisting
    - Ưu điểm:
        - An toàn hơn nhờ const; với declaration có thể vô tình khai báo trùng tên hàm ở chỗ khác -> hàm cũ bị ghi đè âm thầm mà ko hề báo lỗi
        - Linh hoạt - truyền hàm như 1 món đồ: vì hàm được cất trong biến -> Có thể truyền vào hàm khác
    - Nhược điểm:
        - ko có hoisting
        - cú pháp dài dòng, vẫn phải viết chữ function

- Arrow function (hàm mũi tên)
    - là phiên bản nâng cấp của function expression nhưng rút gọn tối đa cú pháp
    - Cú pháp:
    // Dạng đầy đủ:
    const tenHam = (thamso1,...) => {
        //thân hàm
    }

    //Dạng rút gọn
    const tenHam = (thamso1)=> Console.log('abc')
    Ko có chữ function như ở expression, thêm dấu mũi tên => vào giữa dấu () và {}
    - Ko hỗ trợ hoisting
    - Ưu điểm:
        - Cú pháp siêu ngắn -> rất hay sử dụng khi viết call back (.map, filter())
        - Ko có this riêng -> an toàn khi sử dụng với setTimeout, .forEach...()
    - Nhược điểm:
        - Ko có hoisting
        - Ko có this riêng -> lưu ý khi viết với object
        - Khi debug lỗi sẽ ko hiển tên trong stack trace


Kỹ thuật xử lý tham số nâng cao
Cách viết hàm cơ bản -> nâng cao hơn 1 chút vì thực tế ko đơn giản

- Function overloading - 1 hàm nhiều cách gọi
    - 1 số ngôn ngữ như Java, C# bạn có thể tạo nhiều hàm cùng tên, nhưng khác nhau về số lượng hoặc kiểu tham số nhưng JS ko hỗ trợ overloading kiểu đó
    => Cách giải quyết: Dùng 1 hàm duy nhất, rồi tự kiểm tra dữ liệu đầu vào để xử lý theo từng trường hợp

- Default Parameter (giá trị mặc định)
    - Khi người gọi ko truyền đủ tham số, JS tự động gán giá trị mặc định
    -  Lưu ý: 
    Chỉ hoạt động tốt khi tham số mặc định nằm cuối , nếu tham số giữa bị thiếu, bạn bắt buộc truyền undefined hoặc null làm giữ chỗ
    -> QUY TẮC luôn đặt tham số default ở cuối. Nếu có nhiều hơn 3 tham số thì có thể dùng option object(học sau)

- Rest parameter (...args) -> nhận bao nhiêu tham số cũng được
    - Dấu ... () gom tất cả tham số vào 1 mảng

- Option object 
    - Nếu 1 hàm có nhiều hơn 3 tham số, thay vì truyền các tham số lẻ tẻ, dễ truyền nhầm thứ tự -> Gói tất cả vào 1 object
    - Đây là pattern nâng cao hay sử dụng

Destructuring và spread operator
const {page} = await browser.newContext()
{...defaultConfig, timeout:4000}

Destructuring - Phân rã
- Cú pháp cho phép bóc tách giá trị từ array hoặc object thành các biến riêng lẻ chỉ trong 1 dòng code

Array destruct 
- bóc tách giá trị từ mảng

Spread Operator - rải đều ra
- đặc tính là có dấu ... đặt trước tên biến của 1 array hoặc 1 object để trải phẳng toàn bộ nội dung của nó ra
- Thuộc tính trùng tên: bên phải ghi đè bên trái
- Spread ko sửa object cũ, mà tạo object mới

Hàm CallBack (Gọi lại)
Tới 1 nhà hàng -> đông khách
Thằng order bảo là -> ông vất lại số điện thoại cho tôi -> khi nào có bàn thì tôi sẽ GỌI LẠI (CALL BACK) cho ông
Đưa số điện thoại
Thằng order tiếp tục làm việc ()
Khi có bàn , order lấy số của mình ra -> thực hiện hành động gọi
-> CALLBACL là 1 hàm A đc truyền vào làm tham số cho 1 hàm khác (B) -> khi hàm B là xong việc sẽ lôi hàm A ra để chạy

Bản chất: Hàm trong JS là công dân hạng nhất (first class citizen)
-> quyền bình đẳng như 1 con số hay 1 chuỗi -> nghĩa là có thể nhét nó vào biến, truyền đi lung tung, hoặc return nó từ 1 hàm khác

có ngoặc () = THỰC THI NGAY -> giống bấm nút xay sinh tố

không có () = GIAO BẢN VẼ -> truyền bản thân cái máy xay cho người khác, để lúc nào họ muốn thì tự cắm điện làm chạy
1 hàm ko có return sau khi chạy xong -> JS tự trả về giá trị mặc định là undefined

QUY TẮC NHỚ: Khi truyền callback luôn viết tên hàm trần (ko có dấu ())


Array callback methods
    - Map -> biến đổi mảng cũ thành 1 mảng mới
    - Nhận vào 1 callback function thường là có 3 tham số nhưng thực tế chỉ dùng 1
    
    const mangMoi = mangCu.map((phanTu, index, mangGoc)=>{
        phantu = phần tử hiện tại
        index = vị trí 0, 1 ,2
        mang goc
        return giaTriMoi (bắt buộc phải return)
    })


Filter - Lọc phần tử thỏa mãn điều kiện

    const mangLoc = mangGoc.filter((callBack)=>{
    điều kiện
    })

    - nó sẽ check điều kiện. nếu return true thì giữ còn false thì bỏ

Find () - Tìm phần tử đầu tiên thoả mãn điều kiện
    const phanTu = mang.find((phantu)=>dieukien)
    
    - trả về phần tử đầu tiên thoả mãn 
    - ko trả về mảng

Scope 
    - Là phạm vi quy định 1 biến được phép sống và nhìn thấy ở đâu trong đoạn code

A. Global scope (phạm vi toàn cục -)
- Đặc điểm: Biến đc khai báo lộ thiên, ko nằm trong bất kỳ cái ngoặc {} hay function nào
- Quyền lực: LÀ VUA- . bất kì ai , ở đâu trong file code cũng có thể nhìn thấy và lấy ra xài

B. Function scope (phạm vi hàm)
- Đặc điểm: biến đc khai báo bên trong 1 function
- Quyền lực: AO LÀNG - những gì sinh ra trong hàm, sẽ chết đi khi hàm chạy xong. -> THẾ GIỚI BÊN NGOÀI
TUYỆT ĐỐI KO NHÌN THẤY NÓ

C. Block scope (phạm vi khối )
- Bất kì thứ gì nằm trong ngoặc nhọn của {} của if, for, while -> đều là 1 block scope
-> NHỮNG GÌ XẢY RA ở trong ngoặc nhọn sẽ ở lại trong đó
- Ko được dùng VAR

D. Cạm bẫy: Object ko phải là 1 scope
Hình thức thì giống nhau nhưng vai trò hay bản chất là hoàn toán khác nhau
- Scope: là vùng nhìn thấy biến
- Object: là hộp dữ liệu chứa các cặp key-value
Hay trả lời câu hỏi
- SCOPE TRẢ LỜI: biến này đứng ở đây còn nhìn thấy ko
- OBJECT trả lời: dữ liệu này nằm trong property nào
Object ko tạo ra scope

SCOPE CHAIN = > xác định scope -> tìm từ trong ra ngoài, ko bh tìm từ ngoài vào trong.
- hàm con nhìn thấy biến của hàm cha. nhưng hàm cha ko nhìn thấy biến của hàm con

## Closure
- Định nghĩa: Closure là 1 hàm ghi nhớ các biến xung qanh nơi nó đc sinh ra, và gom vào 1 cái balo
dù sau này cái hàm đó bị mang đi chạy ở nơi khác, nó vẫn xách theo cái balo đó đi dể dùng
- Cú pháp: closure ko có từ khóa riêng, Mình sẽ nhận biết qua 3 DẤU HIỆU

function hamCha(){


    //có khai báo biến trong hàm cha
    let bienRiengTu = 0


    // có hàm con bên trogn - hàm này sử dụng biến của cha
    function hamCon(){
      bienRiengTu ++
      return bienRiengTu
    }
    return hamCon

}
//3 dấu hiệu chính khi nhận biết 1 closure

- .Hàm lồng trong hàm \*hàm con nằm trong hàm cha
- Hàm con sử dụng biến của hàm cha
- khi hàm con chạy nó vẫn truy cập đc biến của hàm

## This 
- Bản chất của this giống đại từ nhân xưng "tôi" trong đời sống
- Cùng từ tôi nhưng ai nói thì Tôi là người đó
QUY TẮC: this ko mang giá trị cố định - Giá trị của nó phụ thuộc hoàn toàn vào AI LÀ NGƯỜI GỌI 

## this. trong Object
A. Quy tắc vàng: kẻ đứng trước dấu chấm = THIS
Các nhận dạng của this
Gọi qua objet (object.ham()) -> this trỏ về đúng cái object đó -> user.gioiThieu -> this = user
gọi khơi khơi (ham()) -> undefined -> gioiThieu() -> this = undefinedfd
arrowFunction (()=>{

}) - > kế thừa this từ scope bên ngoài -> ko có this riêng

so sánh cơ chế this của 2 loại hàm
hàm thường trong object -> có this riêng đc qdd bởi cách gọi -> this = object (vì qua cách gọi object.method) -> khi call back bên trong object (this =window -> vì call back gọi khơi khơi)
arrow function ->ko kế thừa this -> this = global (vì object ko phải là scope!!!) -> trong calback this = object (kế thừa từ method cha)

-=>> KO DÙNG ARROW FUNCTION CHO HÀM BÊN TRONG OBJECT