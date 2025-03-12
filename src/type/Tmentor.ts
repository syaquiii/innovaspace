export interface Mentor {
  mentor_id: string;
  email: string;
  nama: string;
  spesialisasi: string;
  profil_mentor: string;
  deskripsi?: string; // Added additional properties
  pendidikan?: string;
  pengalaman_kerja?: string;
  pencapaian?: string;
  keahlian?: string;
  topik_ajar?: string;
}
