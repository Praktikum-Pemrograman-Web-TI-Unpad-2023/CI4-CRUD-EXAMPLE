function output()
{

    var nama = document.getElementById("name").value;
    var npm = document.getElementById("npm").value;
    var asal = document.getElementById("asal").value;
    var ttl = document.getElementById("ttl").value;
    var hobi = document.getElementById("hobi").value;
    var funfact = document.getElementById("ff").value;

    var tableContent = "<table>";
    tableContent += "<th colspan=" + "3" + ">OUTPUT</th>";
    tableContent += "<tr><td>Nama</td><td>:</td><td>" + nama + "</td></tr>";
    tableContent += "<tr><td>NPM</td><td>:</td><td>" + npm + "</td></tr>";
    tableContent += "<tr><td>Asal</td><td>:</td><td>" + asal + "</td></tr>";
    tableContent += "<tr><td>TTL</td><td>:</td><td>" + ttl + "</td></tr>";
    tableContent += "<tr><td>Hobi</td><td>:</td><td>" + hobi + "</td></tr>";
    tableContent += "<tr><td>Fun Fact</td><td>:</td><td>" + funfact + "</td></tr>";
    tableContent += "</table>";

    var print = document.getElementById("result");
    print.innerHTML = tableContent;
}