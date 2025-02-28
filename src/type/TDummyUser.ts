type TUser = {
  id: number;
  username: string;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
};

type DummyUserType = {
  user: TUser;
};

export default DummyUserType;
