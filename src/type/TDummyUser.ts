export type TUser = {
  id: number;
  username: string;
  email: string;
  password: string;
  passwordHash: string;
  firstName: string;
  lastName: string;
};

export type DummyUserType = {
  user: TUser;
};
