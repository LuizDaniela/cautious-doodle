document.getElementById("proses-tugas-satu").addEventListener("click", function () {
    let data = proses(this.form);
    tampilkan(this.form, data);
});

function tampilkan(form, data) {
    form.total.value = data.total.toLocaleString('id-ID');
    form.diskon.value = data.diskon.toLocaleString('id-ID');
    form.bayar.value = data.bayar.toLocaleString('id-ID');
    return;
};

function proses(form) {
    let namaBarang = form.namaBarang.value;
    let harga = parseInt(form.harga.value);
    let jumlah = parseInt(form.jumlah.value);
    let total = hitungTotal(harga, jumlah);
    let diskon = hitungDiskon(total);
    let bayar = hitungBayar(total, diskon);

    return {
        namaBarang: namaBarang,
        total: total,
        diskon: diskon,
        bayar: bayar
    };
};

function hitungTotal(harga, jumlah) {
    return harga * jumlah;
};

function hitungDiskon(total) {
    return total * 0.1;
};

function hitungBayar(total, diskon) {
    return total - diskon;
}