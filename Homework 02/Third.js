// Third Exercise
//------------------------------------------
let n = 100;
document.write("<table border='1'>");
for (i = 0; i <= n; i++){
    if (i%2 == 0 ){
        document.write("<tr><td>" + i + "</td></tr>");
    } 
}
document.write("</table>");