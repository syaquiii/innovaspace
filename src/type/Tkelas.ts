export interface Course {
  kelas_id: string;
  nama: string;
  deskripsi: string;
  kategori: string;
  jumlah_materi: number;
  cover_course: string;
  tingkat_kesulitan: string;
  durasi: number;
  materi?: Materi[];
}

export type Materi = {
  deskripsi: string;
  jenis_materi: "Video" | "Study Case" | "Teks";
  judul: string;
  kelas_id: string;
  materi_id: string;
  path_file: string;
};

export interface CourseResponse {
  data: Course[];
  message: string;
  success: boolean;
}
