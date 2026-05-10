// Tình huống: Bạn đang viết một bản kiểm tra trước khi release. Hệ thống trả về dữ liệu thô từ UI và config. Bạn cần xử lý thành báo cáo rõ ràng.

// Dữ liệu đầu vào:
let rawProjectName = "   Neko CRM   ";
let rawEnvName = "   ";
let rawPassRate = "82";
let rawHasReport = "true";
let rawCriticalMessage = "   ";
let browserUsed = "chrome"; // "chrome", "firefox", "safari", "edge"

// Yêu cầu:
// Dùng .trim() để làm sạch rawProjectName và rawEnvName.
let projectName = rawProjectName.trim()
let envName = rawEnvName.trim()

// Nếu rawEnvName sau khi trim() là rỗng -> gán environment = "Development". Nếu không rỗng -> dùng chính giá trị đã làm sạch.
let environment;

if (envName === "") {
    environment = "Development";
} else {
    environment = envName;
}

// Ép rawPassRate sang Number.
let passRate = Number(rawPassRate)

// Ép rawHasReport sang Boolean đúng cách.
let hasReport;

if (rawHasReport === "true") {
    hasReport = true;
} else {
    hasReport = false;
}

// Tạo hasCriticalBug theo quy tắc:
// nếu message là null hoặc undefined -> false
// nếu sau trim() là rỗng -> false
// ngược lại -> true
let hasCriticalBug;

if (rawCriticalMessage === null || undefined) {
    hasCriticalBug = false;
} else if (rawCriticalMessage.trim() === "") {
    hasCriticalBug = false;
} else {
    hasCriticalBug = true;
}

// Dùng if / else if để xếp hạng:
// >= 95 -> "EXCELLENT"
// >= 80 -> "GOOD"
// >= 60 -> "NEEDS IMPROVEMENT"
// còn lại -> "CRITICAL"
if (passRate >= 95) {
    xepHang = "EXCELLENT";
} else if (passRate >= 80) {
    xepHang = "GOOD";
} else if (passRate >= 60) {
    xepHang = "NEEDS IMPROVEMENT";
} else {
    xepHang = "CRITICAL";
}

// Dùng switch/case để gán tên engine cho browserUsed:
// chrome -> "Chromium"
// edge -> "Chromium"
// firefox -> "Gecko"
// safari -> "WebKit"
// Nếu không khớp -> "Unknown"
switch (browserUsed) {
    case "chrome":
    case "edge":
        engine = "Chromium";
        break;
    case "firefox":
        engine = "Gecko";
        break;
    case "safari":
        engine = "WebKit";
        break;
    default:
        engine = "Unknow";
}

// Dùng toán tử 3 ngôi để tạo message cho report:
// nếu hasReport là true -> "Có report"
// ngược lại -> "Chưa có report"
let msgReport = hasReport === true ? "Có report" : "Chưa có report";

// Tạo isReadyToRelease theo quy tắc:
// nếu pass rate dưới 80 -> false
// nếu có critical bug -> false
// nếu chưa có report -> false
// còn lại -> true
// In báo cáo ra console.
let isReadyToRelease = passRate >= 80 && !hasCriticalBug && hasReport;

if (isReadyToRelease) {
    isReadyToRelease = true;
} else {
    isReadyToRelease = false;
}
console.log(isReadyToRelease)

// Expected output
// Project:         Neko CRM
// Environment:     Development
// Browser:         chrome
// Engine:          Chromium

// Pass Rate:       82.00%
// Grade:           GOOD
// Report:          Có report
// Critical Bug:    Không có bug nghiêm trọng

// Ready:           YES

console.log(`Project:         ${projectName}`);
console.log(`Environment:     ${environment}`);
console.log(`Browser:         ${browserUsed}`);
console.log(`Engine:          ${engine}
    `);
console.log(`Pass Rate:       ${passRate.toFixed(2)}%`);
console.log(`Grade:           ${xepHang}`);
console.log(`Report:          ${msgReport}`);
if (hasCriticalBug === true) {
    console.log("Critical Bug:    Có bug nghiêm trọng");
} else {
    console.log("Critical Bug:    Không có bug nghiêm trọng");
}

if (isReadyToRelease === true) {
    console.log("Ready:           YES");
} else {
    console.log("Ready:           NO");
}