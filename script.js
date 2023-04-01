class Pendaftar {
    constructor(nama, umur, uangSangu) {
        this.nama = nama;
        this.umur = umur;
        this.uangSangu = uangSangu;
    }
}

function validateForm() {
    var nama = document.forms["registrationForm"]["nama"].value;
    var umur = document.forms["registrationForm"]["umur"].value;
    var uangSangu = document.forms["registrationForm"]["uangSangu"].value;	
    if (nama.length < 10 || umur < 25 || uangSangu < 100000 || uangSangu > 1000000) {
        alert("Mohon isi form dengan benar");
        return false;
    }

    var pendaftar = new Pendaftar(nama, umur, uangSangu);
    savePendaftar(pendaftar);
    return true;
}

function savePendaftar(pendaftar) {
    var pendaftarTable = document.getElementById("pendaftarTable");
    var newRow = pendaftarTable.insertRow(-1);
    var newCell1 = newRow.insertCell(0);
    var newCell2 = newRow.insertCell(1);
    var newCell3 = newRow.insertCell(2);
    newCell1.innerHTML = pendaftar.nama;
    newCell2.innerHTML = pendaftar.umur;
    newCell3.innerHTML = pendaftar.uangSangu;

    calculateResume();
}

function calculateResume() {
    var pendaftarTable = document.getElementById("pendaftarTable");
    var rows = pendaftarTable.rows.length - 1;
    var totalUmur = 0;
    var totalUangSangu = 0;
    for (var i = 1; i <= rows; i++) {
        totalUmur += parseInt(pendaftarTable.rows[i].cells[1].innerHTML);
        totalUangSangu += parseInt(pendaftarTable.rows[i].cells[2].innerHTML);
    }
    var rataRataUmur = totalUmur / rows;
    var rataRataUangSangu = totalUangSangu / rows;
    var resume = "Rata-rata pendaftar memiliki uang sangu sebesar " + rataRataUangSangu + " dengan rata-rata umur " + rataRataUmur;
    document.getElementById("resume").innerHTML = resume;
}