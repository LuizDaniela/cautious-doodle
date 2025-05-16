const data = [
    { id: 1, nama: "Monitor Samsung 24 inch", harga: 1750000 },
    { id: 2, nama: "Laptop Asus Vivobook 14", harga: 6950000 },
    { id: 3, nama: "Mouse Logitech M185", harga: 155000 },
    { id: 4, nama: "Keyboard Rexus Mechanical", harga: 325000 },
    { id: 5, nama: "Monitor LG 27 inch UltraGear", harga: 3250000 },
    { id: 6, nama: "Laptop Acer Aspire 5", harga: 7499000 },
    { id: 7, nama: "Headset Razer Kraken", harga: 875000 },
    { id: 8, nama: "Printer Canon PIXMA MG2570S", harga: 675000 },
    { id: 9, nama: "Flashdisk SanDisk 32GB", harga: 75000 },
    { id: 10, nama: "SSD WD Green 240GB", harga: 435000 }
];

function renderOption() {
    const dropdown = document.getElementById('namaBarangTiga');

    data.forEach((item => {
        const option = document.createElement("option");
        option.value = item.id;
        option.innerText = item.nama;
        dropdown.appendChild(option);
    }));
};
renderOption();

document.getElementById("proses-tugas-tiga").addEventListener("click", function () {
    const dataBarang = proses3(this.form);
    tampilkan3(this.form, dataBarang)
});

document.getElementById("namaBarangTiga").addEventListener("change", () => {
    document.getElementById("jumlahTiga").value = '1';
})

function tampilkan3(form, dataBarang) {
    form.hargaTiga.value = dataBarang.harga.toLocaleString('id-ID');
    form.totalTiga.value = dataBarang.total.toLocaleString('id-ID');
    return;
}

function proses3(form) {
    const idBarang = parseInt(form.namaBarangTiga.value);
    if (idBarang !== 0) {
        const barang = data.find(item => item.id === idBarang);
        const jumlah = parseInt(form.jumlahTiga.value)
        barang.jumlah = jumlah;
        barang.total = hitungTotal(barang.harga, jumlah);
        return barang;
    }
    return console.log("halo");
};