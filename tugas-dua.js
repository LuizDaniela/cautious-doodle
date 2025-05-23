document.getElementById("proses-tugas-dua").addEventListener("click", function () {
    triggerHackingAnimation(this.closest('form'));
    tampilkan2(this.form, proses2(this.form));
});

function tampilkan2(form, data) {
    setTimeout(() => {
        form.gaji.value = data.gajiPokok.toLocaleString('id-ID');
        form.tunjAnak.value = data.tunjAnak.toLocaleString('id-ID');
        form.totalGaji.value = data.totalGaji.toLocaleString('id-ID');
    }, 1500);
    return;
}

function proses2(form) {
    let namaPegawai = form.namaPegawai.value;
    let jamKerja = form.jamKerja.value;
    let upahPJ = form.upahPJ.value;
    let anak = form.anak.value;

    const gajiPokok = hitungGaji(upahPJ, jamKerja);
    const tunjAnak = hitungTunjAnak(gajiPokok, anak);
    const totalGaji = hitungTotalGaji(gajiPokok, tunjAnak, anak);

    return {
        namaPegawai: namaPegawai,
        gajiPokok: gajiPokok,
        tunjAnak: tunjAnak,
        totalGaji: totalGaji,
    }
}

function hitungGaji(upahPJ, jamKerja) {
    return upahPJ * jamKerja;
};

function hitungTunjAnak(gajiPokok, anak) {
    return gajiPokok * 0.1 * anak;
};

function hitungTotalGaji(gajiPokok, tunjAnak) {
    return gajiPokok + tunjAnak;
}