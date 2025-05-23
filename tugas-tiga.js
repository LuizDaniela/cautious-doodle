document.getElementById("proses-tugas-tiga").addEventListener("click", function () {
    triggerHackingAnimation(this.closest('form'));
    tampilkan3(this.form, proses3(this.form));
});

document.getElementById("namaBarangTiga").addEventListener("change", () => {
    document.getElementById("jumlahTiga").value = '1';
});

function tampilkan3(form, dataBarang) {
    setTimeout(() => {
        form.hargaTiga.value = dataBarang.harga.toLocaleString('id-ID');
        form.totalTiga.value = dataBarang.total.toLocaleString('id-ID');
    }, 1500);
    return;
}

function proses3(form) {
    const idBarang = parseInt(form.namaBarangTiga.value);
    const barang = cariBarang(idBarang);
    const jumlahTiga = parseInt(form.jumlahTiga.value);
    if (idBarang !== 0) {
        barang.jumlah = jumlahTiga;
        barang.total = hitungTotal(barang.harga, jumlahTiga);
        return barang;
    };
    return barang;
};