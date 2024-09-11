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

  //users
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

  //events
  const eventdata: Prisma.EventsCreateInput[] = [
    {
      eventName: "Tokyo Anime Convention",
      price: 50,
      date: "2024-10-15T09:00:00Z",
      time: "2024-10-15T09:00:00Z",
      location: "Tokyo Big Sight, Tokyo, Japan",
      description:
        "The Tokyo Anime Convention is the biggest anime event in Japan, featuring panels, cosplay, and merchandise from your favorite anime series.",
      availableSeat: 2000,
      eventTypeId: 2,
    },
    {
      eventName: "Cherry Blossom Festival",
      price: 20,
      date: "2024-03-30T10:00:00Z",
      time: "2024-03-30T10:00:00Z",
      location: "Ueno Park, Tokyo, Japan",
      description:
        "Celebrate the beauty of cherry blossoms with traditional Japanese music, food stalls, and cultural performances.",
      availableSeat: 5000,
      eventTypeId: 1,
    },
    {
      eventName: "Anime Karaoke Night",
      price: 15,
      date: "2024-11-20T19:00:00Z",
      time: "2024-11-20T19:00:00Z",
      location: "Akihabara, Tokyo, Japan",
      description:
        "Join fellow anime fans for a night of singing your favorite anime opening and ending songs at a local karaoke bar.",
      availableSeat: 100,
      eventTypeId: 2,
    },
    {
      eventName: "Japanese Cuisine Cooking Class",
      price: 35,
      date: "2024-12-05T14:00:00Z",
      time: "2024-12-05T14:00:00Z",
      location: "Kyoto Cooking School, Kyoto, Japan",
      description:
        "Learn to cook traditional Japanese dishes such as sushi, ramen, and tempura with expert chefs in Kyoto.",
      availableSeat: 25,
      eventTypeId: 1,
    },
    {
      eventName: "Sakura Matsuri Cosplay Parade",
      price: 0,
      date: "2024-04-10T12:00:00Z",
      time: "2024-04-10T12:00:00Z",
      location: "Shibuya Crossing, Tokyo, Japan",
      description:
        "Participate in or watch the vibrant cosplay parade during the Sakura Matsuri festival, featuring costumes from various anime and manga.",
      availableSeat: 0, // No fixed seats, open to the public
      eventTypeId: 1,
    },
  ];

  for (const element of eventdata) {
    const events = await prisma.events.create({
      data: element,
    });

    console.log(
      `Successfull created new user with id: ${events.id}, name: ${events.eventName}`
    );
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
