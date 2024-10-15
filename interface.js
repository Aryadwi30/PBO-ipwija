// Definisi antarmuka melalui pola objek
const KendaraanInterface = {
    bergerak: function() {
        throw new Error("Metode 'bergerak()' harus diimplementasikan.");
    }
};

// Kelas Pesawat yang mengimplementasikan antarmuka
class Pesawat {
    constructor() {
        // Tidak perlu Object.assign karena metode sudah diimplementasikan di sini
    }

    bergerak() {
        console.log("Pesawat terbang di udara.");
    }
}

// Kelas Sepeda yang mengimplementasikan antarmuka
class Sepeda {
    constructor() {
        // Tidak perlu Object.assign karena metode sudah diimplementasikan di sini
    }

    bergerak() {
        console.log("Sepeda bergerak dengan pedal.");
    }
}

// Kelas Mobil yang juga mengimplementasikan metode bergerak
class Mobil {
    constructor() {
        // Tidak perlu Object.assign
    }

    bergerak() {
        console.log("Mobil bergerak di jalan.");
    }
}

// Kelas Kapal yang mengimplementasikan metode bergerak
class Kapal {
    constructor() {
        // Tidak perlu Object.assign
    }

    bergerak() {
        console.log("Kapal bergerak di air.");
    }
}

// Penggunaan
const pesawat = new Pesawat();
pesawat.bergerak(); // Output: Pesawat terbang di udara.

const sepeda = new Sepeda();
sepeda.bergerak(); // Output: Sepeda bergerak dengan pedal.

const mobil = new Mobil();
mobil.bergerak(); // Output: Mobil bergerak di jalan.

const kapal = new Kapal();
kapal.bergerak(); // Output: Kapal bergerak di air.
