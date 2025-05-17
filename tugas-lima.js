document.getElementById("proses-tugas-lima").addEventListener("click", function () {
    tampilkan5(this.form, proses5(this.form));
    // console.log(proses5(this.form));
});

function tampilkan5(form, data) {
    form.totalLima.value = data.totalSemua.toLocaleString('id-ID');
    form.pajak.value = data.pajak.toLocaleString('id-ID');
    form.bayarLima.value = data.bayar.toLocaleString('id-ID')
    return;
};

function proses5(form) {
    const data = {
        namaBarang: form[0].value,
        hargaBarang: parseInt(form[1].value),
        jumlahBarang: parseInt(form[2].value),
        totalBarang: hitungTotal(parseInt(form[1].value), parseInt(form[2].value)),
        aksesoris: aksesorisChecked(),
    };

    totalAksesoris = hitungTotalAksesoris(data.aksesoris);
    data.totalAksesoris = totalAksesoris;
    data.totalSemua = data.totalBarang + data.totalAksesoris;
    data.pajak = hitungPajak(data.totalSemua);
    data.bayar = parseInt(hitungBayarPajak(data.totalSemua, data.pajak));

    return data;
};

function aksesorisChecked() {
    const aksesorisChecked = document.querySelectorAll("#aksesoris input[type='checkbox']:checked");
    const arrId = Array.from(aksesorisChecked).map(cb => parseInt(cb.id));
    return arrId;
};

function hitungTotalAksesoris(arrId) {
    let total = 0;
    for (let i = 0; i < arrId.length; i++) {
        const id = arrId[i];

        if (id === 1) {
            total += 50000;
        } else if (id === 2) {
            total += 120000
        } else if (id === 3) {
            total += 40000
        } else {
            console.log("hai")
        }
    };
    return total;
};

function hitungPajak(total) {
    return total * 0.1;
};

function hitungBayarPajak(total, pajak) {
    return total + pajak;
}