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

const aksesoris = [
    { id: 1, nama: "USB", harga: 50000 },
    { id: 2, nama: "Memory", harga: 120000 },
    { id: 3, nama: "Speaker", harga: 40000 },
];

function renderOption() {
    const selects = document.querySelectorAll(".selects");

    selects.forEach(select => {
        select.innerHTML = '<option value="0" selected>Pilih barang</option>';

        data.forEach(item => {
            const option = document.createElement("option");
            option.value = item.id;
            option.innerText = item.nama;
            select.appendChild(option);
        });
    });
};
renderOption();

function renderCheckbox() {
    const aksesorisContainer = document.getElementById("aksesoris");
    aksesoris.forEach(item => {
        aksesorisContainer.innerHTML += `<label for="${item.id}"><input type="checkbox" value="${item.nama}" name="aksesoris" id="${item.id}" /> ${item.nama}</label>`
    })

};
renderCheckbox();

function cariBarang(idBarang) {
    if (idBarang !== 0) {
        const barang = data.find(item => item.id === idBarang);
        return barang;
    };
    return console.log("halo");
};