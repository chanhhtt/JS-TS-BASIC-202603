- **Git** giúp lưu lại nhiều phiên bản của project theo thời gian.
  - Ví dụ:
    - `login.js`: 2 dòng
    - `login-final.js`: 5 dòng
    - `login-final-new.js`

- Git lưu lịch sử của project theo cách sạch sẽ và dễ theo dõi hơn.
  - Commit 1: tạo form login
  - Commit 2: validate email

- **Ưu điểm của Git:**
  - Không sợ hỏng code vì luôn có lịch sử để quay lại.
  - Giúp rèn cách chia nhỏ công việc thành từng bước.
  - Có thể đưa code lên GitHub để lưu trữ và chia sẻ.
  - Làm quen với flow của team: branch, pull request, review, merge.

- **Mỗi lần commit, Git sẽ lưu lại:**
  - File nào thay đổi
  - Nội dung thay đổi là gì
  - Ai là người commit
  - Thời điểm commit
  - Commit message (lý do commit)
  - Commit trước đó là commit nào

- **Luồng lịch sử commit:**
  - A -> B -> C -> D
  - A: tạo project
  - B: thêm login
  - C: sửa validation

- **Các khu vực quan trọng cần lưu ý:**
  - **Working directory**: thư mục project trên máy
  - **Staging area**: vùng chuẩn bị commit, nơi bạn chọn file nào sẽ được commit tiếp theo
  - **Local repository**: thư mục `.git` trên máy, nơi lưu lịch sử commit local
  - **Remote repository**: GitHub, GitLab, Bitbucket, nơi lưu bản online

Set up cấu hình tên và email để git cần biết commit:
**Cú pháp:**
//git config --global user.name "chanhh"
//git config --global user.email "lấy giống tên email mà đăng kí git"
//git config --global --list

pwd: in ra Working directory, đường dẫn của file đang đứng 
-> Check xem đã đứng ở thư mục cha chưa
ls: list ra tất cả các thư mục trong thư mục cha

- Các bước để đẩy code lên remote repository
    B1: Khởi tạo git trong folder hiện
    git init
    Ý nghĩa: làm lần đầu tiên và duy nhất -> sau lệnh này git sẽ tạo ra 1 folder ẩn tên là .git
    -> là nơi lưu lịch sử thay đổi của project. bình thường mình ko cần mở hoặc sửa trực tiếp folder này
    
      - Initianilzed -> khởi tạo xong
      - empty Git repository -> lịch sử đang rỗng vì cta chưa commit lần nào

    B2: ktra trạng thái file
    git status
        - No commits yet: chưa xác nhận và thay đổi gì trên máy này
        - Untracked files:là các file này vẫn ở working directory chưa đưa lên staging area
      Nói đơn giản: git đã đc bật trong folder -> nhưng chưa tạo mốc lưu đầu tiên
        
    B3: git add: đưa file mong muốn vào staging area
    git add tên filder hoặc tên folder
    git add . -> chọn tất cả các file đang thay đổi trong project
    
    git add .  xong thì git status -> các file đã nhảy vào staging area

    B4: tạo commit đầu tiên
    git commit -m "nội dung mô tả commit"
    
    VD: git commit -m "nội dung first commit"
    
    - Check lại git status: 
    nothing to commit, working tree clean: tất cả các file đã được theo dõi và đã được commit trên local repository

    B5: đặt tên nhánh chính là main (vì github đặt tên nhánh chính là main)
    git branch -M main

    B6: gắn folder này với remote repossiory trên git
    nối git ở local với remote repo để chia sẻ code
    git remote add origin ....đường link remote repositry 
    
    VD: git remote add origin https://github.com/chanhhtt/JS-TS-BASIC-202603.git
    -> sau này push (đẩy code) thì đẩy code lên đâu

    Sau khi đẩy xong check "git remote -v", nếu show như dưới là thành công:
    origin  https://github.com/chanhhtt/JS-TS-BASIC-202603.git (fetch)
    origin  https://github.com/chanhhtt/JS-TS-BASIC-202603.git (push)

    B7: push đẩy code 
    lần đầu tiên chửa đẩy code -> ta thiết lập upstream cho branch local hiện tại với remote
    git push -u origin main
    -u: upstream 
    origin là tên ngắn của repo github mà mình đã gắn vào

    từ lần sau: git push

có nhiều môi trường
dev: main  -> nhánh  này là nhánh chính chạy ổn định -> khi làm việc người ta sẽ tạo ra 1 nhánh khác để làm việc để ko ảnh hưởng tới nhánh chính đang sử dụng  -> sau khi code ổn định ở nhánh phụ -> chúng ta mới merge code -> vào nhánh chính -> để bổ sung thêm tính năng
uat: main

Cách đặt tên commit 
- khi project có nhiều cmmit -> mình cần nhìn lịch sử để biết
+ hôm đó sửa gì
+ ai sửa
+ sửa thêm tính năng gì

- Công thức đơn giản nhất đặt tên 
+ động từ + nội dung thay đổi

ví dụ
add login test
fix login validation
update git lesson
remove unused locator

cách chuyên nghiệp L khi quen hơn ta có thể dùng
type: nội dung thay đổi
feature(chức năng mới)

docs: update git lesson
feat: add product search flow
test: add login test
fix: correct login selector

git status:
Changes not staged for commit

Check log xem đã commit những gì:
    git log --oneline

79bd5e3 (HEAD -> main, origin/main) docs: add git lesson
666ad40 nội dung first commit


HEAD -> main: là vị trí mọi người đang đứng

Muốn lấy thông tin về code mới nhất ta dùng git pull
Already up to date: Code trên local giống hệt trên github

sửa lần 2
sửa lần 3

ví dụ ngày A
main có 10 dòng code


main -> tạo nhánh mới -> sửa code -> commit -> push nhánh -> merge vào main -> push main

bạn A: -> kéo code về -> tạo nhánh mới -> đẩy merge main -> lúc này main có 20 dòng 
bạn B: -> kéo code (1o dòng) -> bạn B ngày n sau khi main có 20 dòng mới merge -> HOÀN TOÀN OK
-> trường hợp code bạn B sửa cùng 1 file với bạn A (sau khi update 20 dòng) => nó mới xảy ra conflict => resolve 
-> ko confict thì merege ok -> pull main về để có cả code của B -> và bắt đầu taoh nhánh mới code tiếp

branch
cách đặt tên ngắn gọn, ko dáu. ko có khoẳng trắn

docs/git-lesson
feat/product-search 
fix/ 
tests/

ko nên đặt
nhánh mới
test
abc

Trước khi taọ nhánh mới nên quay về main
Lý do: nhánh mới sẽ tạo ra trên nhánh hiện tại
Nếu đang đứng ở main -> nhánh mới sẽ lấy từ main
FLOW: quay về main -> pull code mới nhất -> tạo nhánh từ main

git checkout main
git checkout: chuyển sang 1 nhánh khác

tôi đã code xong ở nhánh mới

tôi đã code xong ở nhánh 2

check out về main -> và dùng git merge tên nhánh muốn merge

xóa nhánh remote trên github
git push origin --delete tên nhánh muốn xóa

git branch -d 
git branch -D 
