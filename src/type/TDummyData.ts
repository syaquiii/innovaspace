interface Tuser {
  id_user: number;
  email: string;
  username: string;
  password: string;
  nama: string;
  institusi: string;
  bidang_bisnis: string;
  preferensi: string;
  ispremium: number;
  tanggal_mulai_premium: string;
  tanggal_selesai: string;
  created_by: string;
  created_date: string;
  modified_by: string;
  modified_date: string;
}

interface Mentor {
  id_mentor: number;
  email: string;
  username: string;
  password: string;
  nama: string;
  institusi: string;
  bidang_bisnis: string;
  preferensi: string;
  created_by: string;
  created_date: string;
  modified_by: string;
  modified_date: string;
  detail: string;
}

interface Course {
  id_course: number;
  nama: string;
  deskripsi: string;
  kategori: string;
  bidang_bisnis: string;
  jumlah_materi: number;
  jumlah_akses: number;
  tingkat_kesulitan: string;
  rating: number;
  duration: string | number;
}

interface Materi {
  id_materi: number | string;
  id_course: number | string;
  judul: string;
  deskripsi: string;
  kategori: string;
  isfree: string;
  file: string;
}

interface ProgressBelajar {
  id_progress: number;
  id_user: number;
  id_materi: number;
  id_course: number;
  status: string;
  jawaban: string;
  courseName: string;
  contentId: number;
  percentage: number;
}

interface TransaksiPremium {
  id_transaksi: number;
  id_user: number;
  id_jenis: number;
  tanggal_transaksi: string;
  status: string;
}

interface JenisPremium {
  id_jenis: number;
  nama: string;
  harga: number;
  jumlah_hari: number;
}

interface Match {
  id_match: number;
  id_user: number;
  id_mentor: number;
  tanggal_match: string;
}

interface Posting {
  id_posting: number;
  id_user: number;
  deskripsi: string;
  tanggal: string;
}

interface Komen {
  id_komen: number;
  id_posting: number;
  id_user: number;
  komentar: string;
  tanggal_komen: string;
}

interface Mahasiswa {
  id_mahasiswa: number;
  username: string;
  password: string;
  email: string;
  nama: string;
  preferensi: string;
  created_by: string;
  created_date: string;
  modified_by: string;
  modified_date: string;
}

interface MatchMahasiswa {
  id_match: number;
  id_mahasiswa: number;
  id_mentor: number;
  id_kursus: number;
}

interface Kursus {
  id_kursus: number;
  nama_kursus: string;
  kategori: string;
  jumlah_akses: number;
}

interface Konten {
  id_konten: number;
  id_kursus: number;
  judul: string;
  deskripsi: string;
  file: string;
}

interface ProgressKonten {
  id_progress: number;
  id_mahasiswa: number;
  id_konten: number;
  status: string;
}
interface ProgressContextType {
  dataKelasKu: ProgressBelajar[];
  getCourseName: (idCourse: number) => string;
  getProgressPercentage: (idCourse: number, idMateri: number) => number;
}

interface RiwayatPembayaran {
  id_user: number;
  tipe_premium: string;
  date_pembelian: string;
  kode_acak: string;
  metode_pembayaran: string;
  harga: number;
  status: string;
}

export type {
  ProgressContextType,
  Tuser,
  Mentor,
  Course,
  Materi,
  ProgressBelajar,
  TransaksiPremium,
  JenisPremium,
  Match,
  Posting,
  Komen,
  Mahasiswa,
  MatchMahasiswa,
  Kursus,
  Konten,
  ProgressKonten,
  RiwayatPembayaran,
};
