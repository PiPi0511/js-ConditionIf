
var a = parseInt(prompt("Nhập a:"));
if (a > 0) {
    document.write( a + " là số nguyên dương.");
} else{ ( a < 0)
    document.write( a + " là số nguyên âm." + "<br>" );
}
 document.write("<br>" + "************<br>")

 var n = parseInt(prompt("Nhập n:"));
 if (n%3){
    document.write(n + " chia het cho 3" )
 }else if(n%5){
    document.write(n + "chia het cho 5")
 }else{
    document.write(n + "khong chia het cho ca 3 & 5")
 }
 document.write("<br>" + "************<br>")
 var month = parseInt(prompt("Nhập vào tháng (1-12):"));

if (month < 1 || month > 12) {
    document.write("Tháng không hợp lệ! Vui lòng nhập số từ 1 đến 12.");
} else {
    if (month === 1 || month === 3 || month === 5 || month === 7 || month === 8 || month === 10 || month === 12) {
        document.write("Tháng " + month + " có 31 ngày.");
    } else if (month === 4 || month === 6 || month === 9 || month === 11) {
        document.write("Tháng " + month + " có 30 ngày.");
    } else if (month === 2) {
        // Yêu cầu nhập năm để kiểm tra năm nhuận
        var year = parseInt(prompt("Nhập vào năm:"));
        if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
            document.write("Tháng 2 của năm " + year + " có 29 ngày (năm nhuận).");
        } else {
            document.write("Tháng 2 của năm " + year + " có 28 ngày.");
        }
    }
}
document.write("<br>" + "************<br>")
// Nhập hệ số a, b, c từ người dùng
var a = parseFloat(prompt("Nhập hệ số a:"));
var b = parseFloat(prompt("Nhập hệ số b:"));
var c = parseFloat(prompt("Nhập hệ số c:"));

// Kiểm tra xem phương trình có phải là bậc 2 không
if (a === 0) {
    if (b === 0) {
        if (c === 0) {
            document.write("Phương trình có vô số nghiệm.");
        } else {
            document.write("Phương trình vô nghiệm.");
        }
    } else {
        var x = -c / b;
        document.write("Phương trình có nghiệm x = " + x.toFixed(2));
    }
} else {
    // Tính delta (Δ)
    var delta = b * b - 4 * a * c;

    // Kiểm tra các trường hợp của delta
    if (delta < 0) {
        document.write("Phương trình vô nghiệm.");
    } else if (delta === 0) {
        var x = -b / (2 * a);
        document.write("Phương trình có nghiệm kép x = " + x.toFixed(2));
    } else {
        var x1 = (-b + Math.sqrt(delta)) / (2 * a);
        var x2 = (-b - Math.sqrt(delta)) / (2 * a);
        document.write("Phương trình có 2 nghiệm phân biệt:<br>");
        document.write("x1 = " + x1.toFixed(2) + "<br>");
        document.write("x2 = " + x2.toFixed(2));
    }
}
document.write("<br>" + "************<br>")
// Nhập 3 số a, b, c từ người dùng
var a = parseFloat(prompt("Nhập cạnh a:"));
var b = parseFloat(prompt("Nhập cạnh b:"));
var c = parseFloat(prompt("Nhập cạnh c:"));

// Kiểm tra điều kiện để a, b, c là 3 cạnh của một tam giác
if (a > 0 && b > 0 && c > 0) {
    if (a + b > c && a + c > b && b + c > a) {
        document.write(a + ", " + b + ", " + c + " là ba cạnh của một tam giác.");
    } else {
        document.write(a + ", " + b + ", " + c + " không phải là ba cạnh của một tam giác.");
    }
} else {
    document.write("Các cạnh của tam giác phải là số dương lớn hơn 0.");
}

