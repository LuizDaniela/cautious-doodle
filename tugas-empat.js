document.getElementById("proses-tugas-empat").addEventListener("click", function () {
    tampilkan4(this.form, proses4(this.form));
});

document.getElementById("namaBarangEmpat").addEventListener("change", () => {
    document.getElementById("jumlahEmpat").value = '1';
});

function tampilkan4(form, data) {
    const pelanggan = data.pelanggan;
    form.hargaEmpat.value = data.harga.toLocaleString('id-ID');
    form.totalEmpat.value = data.total.toLocaleString('id-ID');
    form.diskonEmpat.value = pelanggan ? "Ya" : "Tidak";
    form.bayarEmpat.value = data.bayar.toLocaleString('id-ID');
    return;
};

function proses4(form) {
    const idBarang = parseInt(form.namaBarangEmpat.value);
    const barang = cariBarang(idBarang);
    const jumlahEmpat = parseInt(form.jumlahEmpat.value);

    if (idBarang !== 0) {
        barang.total = hitungTotal(barang.harga, jumlahEmpat);
        barang.pelanggan = isPelanggan(parseInt(form.status.value));
        barang.diskon = isDiskon(parseInt(form.status.value), barang.total);
        barang.bayar = hitungBayar(barang.total, barang.diskon);
        return barang;
    };
    return barang;
};

function isPelanggan(status) {
    if (status === 1) return true;
    return false;
};

function isDiskon(status, total) {
    if (status === 0) {
        return 0;
    } else if (status === 1) {
        return hitungDiskon(total);
    } else return false;
};