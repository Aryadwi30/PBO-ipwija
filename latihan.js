// Mendefinisikan Kelas
class Mobil {
    constructor(merk, warna) {
        this.merk = merk;
        this.warna = warna;
    }

    // Metode
    jalan() {
        console.log(`${this.merk} berwarna ${this.warna} sedang berjalan.`);
    }
}

// Pewarisan
class MobilBalap extends Mobil {
    constructor(merk, warna, kecepatanMaksimal) {
        super(merk, warna); // Memanggil konstruktor kelas induk
        this.kecepatanMaksimal = kecepatanMaksimal;
    }

    // Overriding Metode
    jalan() {
        console.log(`${this.merk} balap berwarna ${this.warna} berjalan dengan kecepatan maksimal ${this.kecepatanMaksimal} km/jam.`);
    }
}

// Membuat Objek
const mobil1 = new Mobil('BMW', 'Putih');
mobil1.jalan(); // Output: BMW berwarna putih sedang berjalan.

const mobilBalap1 = new MobilBalap('R15', 'biru', 350);
mobilBalap1.jalan(); // Output: R15 balap berwarna biru berjalan dengan kecepatan maksimal 350 km/jam.
