document.getElementById("proses-tugas-tujuh").addEventListener("click", function () {
    tampilkan7(proses7(this.form));
});

document.getElementById("reset-tugas-tujuh").addEventListener("click", function () {
    hideContainer("output-tagihan-listrik");
});

function tampilkan7(data) {
    if (data.namaPelanggan !== "" && data.kategori.id !== 0 && data.jumlahPemakaian > 0) {
        showContainer("output-tagihan-listrik");
        document.getElementById("output-nama").innerText = data.namaPelanggan;
        document.getElementById("output-kategori").innerText = data.kategori.nama;
        document.getElementById("output-jumlahPemakaian").innerText = data.jumlahPemakaian;
        clearContainer("rincian-tagihan");
        renderRincianTagihan(data);
        return;
    };
};

function proses7(form) {
    const namaPelanggan = form.namaPelanggan.value;
    const kategori = cariItem(parseInt(form.kategori.value), kategoriListrik);
    const jumlahPemakaian = parseInt(form.jumlahPemakaian.value);
    return {
        namaPelanggan: namaPelanggan,
        kategori: kategori,
        jumlahPemakaian: jumlahPemakaian,
    }
};

function renderRincianTagihan(data) {
    const container = document.getElementById("rincian-tagihan");
    let jumlahPemakaian = data.jumlahPemakaian;
    let tarifkwh = data.kategori.tarifKwh;
    let abodemen = data.kategori.abodemen;
    let totalTarif = 0;
    let subtotal = abodemen;
    let pajak = 0;
    let totalBayar = 0;
    container.innerHTML = `
    <h2>RINCIAN TAGIHAN</h2>
    <div class="table-header">
        <div class="first"><h4>Jumlah</h4></div>
        <div><h4>Tarif per KWH</h4></div>
        <div><h4>Abodemen</h4></div>
        <div><h4>SubTotal</h4></div>
    </div>`

    for (let i = 1; i <= jumlahPemakaian; i++) {
        totalTarif += tarifkwh;
        subtotal += tarifkwh
        container.innerHTML += `
        <div class="table-row">
            <div class="first">${i}<p></p></div>
            <div><p>${totalTarif.toLocaleString('id-ID')}</p></div>
            <div><p></p>${abodemen.toLocaleString('id-ID')}</div>
            <div><p>${subtotal.toLocaleString('id-ID')}</p></div>
        </div>`
    };

    pajak = subtotal * 0.1;
    totalBayar = subtotal + pajak;

    container.innerHTML += `
    <hr>
    <div class="flex justify-between text-left">
        <div>
            <h4>Subtotal</h4>
            <h4>Pajak</h4>
            <h4>Bayar</h4>
        </div>
        <div>
            <h4>${subtotal.toLocaleString('id-ID')}</h4>
            <h4>${pajak.toLocaleString('id-ID')}</h4>
            <h4>${totalBayar.toLocaleString('id-ID')}</h4>
        </div>
    </div>
    `
    return;
};
