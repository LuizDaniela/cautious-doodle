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

const typeRumah = [
    { id: 1, nama: "Alamanda", harga: 120000000 },
    { id: 2, nama: "Mawar", harga: 130000000 },
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
renderOption("kategori", kategoriListrik);
renderOption("typeRumah", typeRumah);

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

function showContainer(idContainer) {
    return document.getElementById(idContainer).classList.remove("none");
};

function hideContainer(idContainer) {
    return document.getElementById(idContainer).classList.add("none");
};

function clearContainer(idContainer) {
    return document.getElementById(idContainer).innerHTML = "";
};

// Function to trigger glitch effect
function triggerGlitch(element, duration = 1000) {
    element.classList.add('glitch');
    element.setAttribute('data-text', element.textContent);

    setTimeout(() => {
        element.classList.remove('glitch');
        element.removeAttribute('data-text');
    }, duration);
}

// Function to trigger hacking animation
function triggerHackingAnimation(form, duration = 2000) {
    form.classList.add('hacking-animation');

    // Add random binary numbers floating during animation
    const binaryOverlay = document.createElement('div');
    binaryOverlay.className = 'binary-overlay';
    binaryOverlay.innerHTML = Array(50).fill(0).map(() =>
        `<span style="position:absolute;left:${Math.random() * 100}%;top:${Math.random() * 100}%;color:rgba(0,255,0,${Math.random() * 0.5});">${Math.random() > 0.5 ? '1' : '0'}</span>`
    ).join('');
    form.appendChild(binaryOverlay);

    setTimeout(() => {
        form.classList.remove('hacking-animation');
        form.removeChild(binaryOverlay);
    }, duration);
}

// Add event listeners to all buttons
document.querySelectorAll('input[type="button"], input[type="reset"]').forEach(button => {
    button.addEventListener('click', function () {
        // Trigger glitch on button
        triggerGlitch(this, 800);

        // Trigger glitch on random elements
        const allTextElements = document.querySelectorAll('h1, h2, label, td');
        const randomElement = allTextElements[Math.floor(Math.random() * allTextElements.length)];
        triggerGlitch(randomElement, 1200);
    });
});

// Add hacking animation to form submissions
document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', function (e) {
        e.preventDefault();

        // Trigger hacking animation
        triggerHackingAnimation(this);

        // Simulate processing delay
        setTimeout(() => {
            // Your actual form processing code here
            alert('System accessed! Data processed.');
        }, 2000);
    });
});

// For forms that use button clicks instead of submit
// document.getElementById('proses-tugas-satu')?.addEventListener('click', function () {
//     triggerHackingAnimation(this.closest('form'));
//     Your processing code here
// });

// Add more as needed for other buttons

// function showToast(message, duration = 3000) {
//     const toaster = document.getElementById("toaster");
//     const toast = document.createElement("div");

//     toast.innerText = message;
//     toast.style.background = "#0f0"; // merah
//     toast.style.color = "#fff";
//     toast.style.padding = "10px 20px";
//     toast.style.marginTop = "10px";
//     toast.style.borderRadius = "8px";
//     toast.style.boxShadow = "0 2px 6px rgba(0,0,0,0.2)";
//     toast.style.fontFamily = "sans-serif";

//     toaster.appendChild(toast);

//     setTimeout(() => {
//         toaster.removeChild(toast);
//     }, duration);
// }

// function validateFields(fields) {
//     for (const field of fields) {
//         const { value, name, type = "text", required = true, allowNegative = false } = field;

//         if (required && String(value).trim() === "") {
//             showToast(`${name} tidak boleh kosong.`);
//             return false;
//         }


//         if (type === "number") {
//             const num = parseFloat(value);
//             if (isNaN(num)) {
//                 showToast(`${name} harus berupa angka.`);
//                 return false;
//             }
//             if (!allowNegative && num < 0) {
//                 showToast(`${name} tidak boleh negatif.`);
//                 return false;
//             }
//         }
//     }

//     return true;
// }