document.getElementById("proses-tugas-enam").addEventListener("click", function () {
    triggerHackingAnimation(this.closest('form'));
    tampilkan6(this.form, proses6(this.form));
});

function tampilkan6(form, data) {
    setTimeout(() => {
        form.hargaMotor.value = data.subtotal.toLocaleString('id-ID');
        form.bungaOrDiskon.value = diskonGkYh(data);
        form.totalMotor.value = adaGkYh(data);
    }, 1500);
    return;
};

function proses6(form) {
    if (parseInt(form.merkMotor.value) !== 0) {
        const motor = cariItem(parseInt(form.merkMotor.value), merkMotor);
        const idAksesoris = aksesorisChecked("aksesorisMotor");
        motor.aksesoris = getDetailAksesoris(idAksesoris, aksesorisMotor);
        motor.totalAksesoris = getTotalAksesoris(motor.aksesoris);
        motor.caraBayar = form.caraBayar.value;
        motor.subtotal = hitungHarga(motor.harga, motor.totalAksesoris);
        if (motor.caraBayar === "tunai") {
            delete motor.bunga;
            motor.diskon = motor.subtotal * 0.10;
        } else if (motor.caraBayar === "kredit") {
            delete motor.diskon;
            motor.bunga = motor.subtotal * 0.15;
        };

        let totalAkhir = 0;
        if (motor.caraBayar === "tunai") {
            totalAkhir = motor.subtotal - motor.diskon;
        } else if (motor.caraBayar === "kredit") {
            totalAkhir = motor.subtotal + motor.bunga;
        }
        motor.totalSemua = totalAkhir;

        return motor;
    };
    return console.log("gadaaa");
};

function hitungHarga(hargaMotor, totalAksesoris) {
    return hargaMotor + totalAksesoris;
};

function diskonGkYh(data) {
    let bungaOrDiskon = `Gatau`;
    if (data.caraBayar === "tunai") {
        bungaOrDiskon = `Diskon ${data.diskon.toLocaleString('id-ID')}`;
    } else if (data.caraBayar === "kredit") {
        bungaOrDiskon = `Bunga ${data.bunga.toLocaleString('id-ID')}`;
    }
    return bungaOrDiskon;
};

function adaGkYh(data) {
    return data.totalSemua !== 0 ? data.totalSemua.toLocaleString('id-ID') : data.harga.toLocaleString('id-ID');
};