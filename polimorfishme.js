
// Definisi kelas induk
class Orang {
    tampilkanPeran() {
        console.log("Peran: Orang kaya");
    }
}

// Definisi kelas turunan
class Mahasiswa extends Orang {
    tampilkanPeran() {
        console.log("Peran: Mahasiswa");
    }
}

class Dosen extends Orang {
    tampilkanPeran() {
        console.log("Peran: Dosen");
    }
}

class Anak extends Orang {
    tampilkanPeran(){
        console.log("peran: anak");
    }
}

// Menggunakan polimorfisme
const orang1 = new Orang();
const mahasiswa1 = new Mahasiswa();
const dosen1 = new Dosen();
const anak1 = new Anak();

orang1.tampilkanPeran();    // Output: Peran: Orang biasa
mahasiswa1.tampilkanPeran(); // Output: Peran: Mahasiswa
dosen1.tampilkanPeran();     // Output: Peran: Dosen
anak1.tampilkanPeran();  //output: peran: anak
