document.getElementById("proses-tugas-delapan").addEventListener("click", function () {
    triggerHackingAnimation(this.closest('form'));
    renderProgramkreditRumah(proses8(this.form));
});

document.getElementById("reset-tugas-delapan").addEventListener("click", function () {
    clearContainer("output-kredit-rumah");
    return;
});

function proses8(form) {
    const idType = parseInt(form.typeRumah.value);
    if (idType !== 0) {
        const item = cariItem(idType, typeRumah);
        item.lamaKredit = parseInt(form.lamaKredit.value);
        item.uangMuka = hitungUangMuka(item.harga);
        return item;
    }
    return console.log("apaan");
};

function renderProgramkreditRumah(data) {
    clearContainer("output-kredit-rumah");
    const container = document.getElementById("output-kredit-rumah");
    let nama = data.nama;
    let harga = data.harga;
    let uangMuka = data.harga * 0.2;
    let sisa = harga - uangMuka;
    let lamaKredit = data.lamaKredit;
    let angsuran = sisa / lamaKredit;

    setTimeout(() => {
        container.innerHTML = `
    <h2 class="text-left">PROGRAM KREDIT RUMAH</h2>
    <hr style="border-top: 3px dashed" />
    <div>
        <p>Type Rumah = ${nama}</p>
        <p>Harga Rumah = ${harga.toLocaleString('id-ID')}</p>
        <p>Uang Muka = ${uangMuka.toLocaleString('id-ID')}</p>
        <p>Sisa = ${sisa.toLocaleString('id-ID')}</p>
        <p>Lama Kredit = ${lamaKredit}</p>
        <p>Angsuran = ${angsuran.toLocaleString('id-ID')}</p>
    </div>
    <div class="table-header mt-sm">
        <div class="first"><h4>Bulan</h4></div>
        <div><h4>Angsuran</h4></div>
        <div><h4>Sisa</h4></div>
    </div>
    `

        for (let i = 1; i <= lamaKredit; i++) {
            sisa -= angsuran;
            container.innerHTML += `
        <div class="table-row">
            <div class="first"><p>${i}</p></div>
            <div><p>${angsuran.toLocaleString('id-ID')}</p></div>
            <div><p>${sisa.toLocaleString('id-ID')}</p></div>
        </div>
        `
        }
    }, 1500);
    return;
};

function hitungUangMuka(hargaRumah) {
    return hargaRumah * 0.2;
};