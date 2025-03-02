import { DummyUserType } from "@/type/TDummyUser";

const DummyUser: DummyUserType = {
  user: {
    id: 1,
    username: "dummyuser",
    email: "dummy@mail.com",
    password: "dummydummy",
    passwordHash:
      "$2a$10$EixZaYVK1fsbw1ZfbX3OXePaWxn96p36mX2Mwa1P4R/WF4tga3x06",
    firstName: "Dummy",
    lastName: "User",
    userProfile: {
      kelasku: [
        {
          title: "Introduction to Business Management",
          progressPercentage: 75,
        },
        {
          title: "Advanced Marketing Strategies",
          progressPercentage: 50,
        },
      ],
      pencapaian: [
        {
          achievement: "Completed 100 coding challenges",
        },
        {
          achievement: "Top performer in JavaScript course",
        },
      ],
      mentorku: {
        currentMentor: "John Doe",
      },
      riwayatPembayaran: {
        latestCheckout: "2025-03-01",
      },
    },
  },
};

export default DummyUser;
