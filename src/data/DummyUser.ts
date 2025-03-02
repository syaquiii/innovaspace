import { DummyUserType } from "@/type/TDummyUser";

const DummyUser: DummyUserType = {
  user: {
    id: 1,
    username: "dummyuser",
    email: "dummyuser@example.com",
    password: "dummydummy",
    passwordHash:
      "$2a$10$EixZaYVK1fsbw1ZfbX3OXePaWxn96p36mX2Mwa1P4R/WF4tga3x06", // hashed password
    firstName: "Dummy",
    lastName: "User",
  },
};

export default DummyUser;
