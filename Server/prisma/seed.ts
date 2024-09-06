import { Prisma, PrismaClient } from "@prisma/client";
import { genSalt, hash } from "bcrypt";

const prisma = new PrismaClient();

async function inputData() {
  console.log("Start seeding...");

  const salt = await genSalt(10);

  const eventOrgRole = await prisma.roles.create({
    data: {
      position: "Event Organizer",
    },
  });

  const userRole = await prisma.roles.create({
    data: {
      position: "User",
    },
  });

  const eventInput: Prisma.EventsCreateInput[] = [
    {
      eventName: "super-name",
      price: 20000000,
      location: "jawakarta",
      availableSeat: 200,
      eventTypeId: 1,
    },
    {
      eventName: "dhika-wibu-event",
      price: 699000000,
      location: "semarang",
      availableSeat: 10000,
      eventTypeId: 2,
    },
  ];

  const userData: Prisma.UsersCreateInput[] = [
    {
      firstName: "Naruto",
      lastName: "Uzumanji",
      username: "Narutot_Uzumanji",
      email: "sayahokage7@konohamail.com",
      emailConfirmed: true,
      password: await hash("indomieRamen", salt),
      role: {
        connect: { id: userRole.id },
      },
    },
    {
      firstName: "Jasuke",
      lastName: "Uchiho",
      username: "Jasuke_Uchiho",
      email: "kakakgwejbrocon@konohamail.com",
      emailConfirmed: true,
      password: await hash("jagungSusuKeju", salt),
      role: {
        connect: { id: userRole.id },
      },
    },
    {
      firstName: "Hinati",
      lastName: "Hyugo",
      username: "Hinati_Hyugo",
      email: "siapaitusakurat@konohamail,com",
      emailConfirmed: true,
      password: await hash("NarutotGenteng", salt),
      role: {
        connect: { id: userRole.id },
      },
    },
    {
      firstName: "Go",
      lastName: "Ku",
      username: "Goku",
      email: "gokunyasar@dragonmail.com",
      emailConfirmed: true,
      password: await hash("SayaOrang", salt),
      role: {
        connect: {
          id: eventOrgRole.id,
        },
      },
    },
  ];

  for (const element of userData) {
    const user = await prisma.users.create({
      data: element,
    });

    console.log(`Successfull created new user with id: ${user.id}, name: ${user.username}`);
  }

  console.log("Seeding data finished!");
}

inputData()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (error) => {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1); //1 artiny mau di shut down serverny
  });
