export type TUserProfile = {
  kelasku: { title: string; progressPercentage: number }[];
  pencapaian: { achievement: string }[];
  mentorku: { currentMentor: string };
  riwayatPembayaran: { latestCheckout: string };
};

export type TUser = {
  id: number;
  username: string;
  email: string;
  password: string;
  passwordHash: string;
  firstName: string;
  lastName: string;
  userProfile: TUserProfile;
};

export type DummyUserType = {
  user: TUser;
};
