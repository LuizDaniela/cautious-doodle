document.getElementById("proses-tugas-satu").addEventListener("click", function () {
    triggerHackingAnimation(this.closest('form'));
    tampilkan(this.form, proses(this.form));
    // const isValid = validateFields([
    //     { value: this.form.namaBarang.value, name: "Nama Barang" },
    //     { value: parseInt(this.form.harga.value), name: "Harga", type: "number" },
    //     { value: parseInt(this.form.jumlah.value), name: "Jumlah", type: "number" },
    // ]);

    // if (isValid) {
    //     showToast("Proses berhasil!", 2000);
    //     tampilkan(this.form, proses(this.form));
    // }
});

function tampilkan(form, data) {
    setTimeout(() => {
        form.total.value = data.total.toLocaleString('id-ID');
        form.diskon.value = data.diskon.toLocaleString('id-ID');
        form.bayar.value = data.bayar.toLocaleString('id-ID');
    }, 1500);
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