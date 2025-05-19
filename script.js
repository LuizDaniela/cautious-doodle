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
    { id: 10, nama: "SSD WD Green 240GB", harga: 435000 },
];

const aksesorisElektronik = [
    { id: 1, nama: "USB", harga: 50000 },
    { id: 2, nama: "Memory", harga: 120000 },
    { id: 3, nama: "Speaker", harga: 40000 },
];

const merkMotor = [
    { id: 1, nama: "Honda", harga: 15000000 },
    { id: 2, nama: "Yamaha", harga: 14000000 },
    { id: 3, nama: "Suzuki", harga: 13000000 },
];

const aksesorisMotor = [
    { id: 1, nama: "Velg", harga: 450000 },
    { id: 2, nama: "Helm", harga: 250000 },
    { id: 3, nama: "Jaket", harga: 300000 },
];

const kategoriListrik = [
    { id: 1, nama: "Sosial", abodemen: 10000, tarifKwh: 300, pajak: 0 },
    { id: 2, nama: "Rumah", abodemen: 30000, tarifKwh: 500, pajak: 0.1 },
    { id: 3, nama: "Industri", abodemen: 50000, tarifKwh: 1000, pajak: 0.3 },
];

function renderOption(id, arr) {
    const container = document.getElementById(id);
    arr.forEach(item => {
        const option = document.createElement("option");
        option.value = item.id;
        option.innerText = item.nama;
        container.appendChild(option);
    });
};
renderOption("namaBarangEmpat", data);
renderOption("namaBarangTiga", data);
renderOption("merkMotor", merkMotor);
renderOption("kategori", kategoriListrik)

function renderCheckbox(id, arr) {
    const container = document.getElementById(id);
    arr.forEach(item => {
        container.innerHTML += `<label for="${item.id}-${item.nama}"><input type="checkbox" value="${item.id}" name="${id}" id="${item.id}-${item.nama}" /> ${item.nama}</label>`
    });
};
renderCheckbox("aksesoris", aksesorisElektronik);
renderCheckbox("aksesorisMotor", aksesorisMotor);

function cariBarang(idBarang) {
    if (idBarang !== 0) {
        const barang = data.find(item => item.id === idBarang);
        return barang;
    };
    return console.log("halo");
};

function cariItem(id, arr) {
    if (id !== 0) {
        return item = arr.find(item => item.id === id);
    };
    return console.log("Gada apa apa");
};

function aksesorisChecked(container) {
    const aksesorisChecked = document.querySelectorAll(`#${container} input[type='checkbox']:checked`);
    const arrId = Array.from(aksesorisChecked).map(cb => parseInt(cb.value));
    return arrId;
};

function getDetailAksesoris(arrId, data) {
    return arrId.map(id => data.find(item => item.id === id));
};

function getTotalAksesoris(arrAksesoris) {
    return arrAksesoris.reduce((acc, item) => acc + item.harga, 0);
};