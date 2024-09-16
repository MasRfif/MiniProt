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
      position: "Consumer",
    },
  });

  //users
  const userAlice = await prisma.users.create({
    data: {
      firstName: "Alice",
      lastName: "Yamada",
      username: "alice1234",
      email: "alice1234@mail.com",
      emailConfirmed: true,
      password: await hash("1234", salt),
      role: {
        connect: { id: userRole.id },
      },
    },
  });

  const userBambang = await prisma.users.create({
    data: {
      firstName: "Bambang",
      lastName: "Jasuke",
      username: "bambang1234",
      email: "bambang1234@mail.com",
      emailConfirmed: true,
      password: await hash("1234", salt),
      role: {
        connect: { id: eventOrgRole.id },
      },
    },
  });

  //wallet
  const walletdata: Prisma.WalletCreateInput[] = [
    {
      saldo: 100000,
      points: 10000,
      user: {
        connect: { id: userAlice.id },
      },
    },
    {
      saldo: 50000,
      points: 0,
      user: {
        connect: { id: userBambang.id },
      },
    },
  ];

  for (const element of walletdata) {
    const wallet = await prisma.wallet.create({
      data: element,
    });

    console.log(`Successfull created new user with id: ${wallet.id}`);
  }

  //voucher
  const aliceVoucher = await prisma.voucher.create({
    data: {
      description: "Voucher 50% Off",
      discount: 50,
      expireDate: new Date(Date.now() + 3 * 30 * 24 * 60 * 60 * 1000),
      user: {
        connect: { id: userAlice.id },
      },
    },
  });

  const aliceVoucherExp = await prisma.voucher.create({
    data: {
      description: "Voucher 90% Off (Exp)",
      discount: 90,
      expireDate: new Date(Date.now()),
      user: {
        connect: { id: userAlice.id },
      },
    },
  });

  const aliceTicket = await prisma.tickets.create({
    data: {
      tixName: "Ticket for Anime Convention",
      qty: 1,
      used: true,
      expireDate: new Date(Date.now() + 3 * 30 * 24 * 60 * 60 * 1000),
      user: {
        connect: { id: userAlice.id },
      },
    },
  });

  //refcode
  const aliceRefCode = await prisma.referralCode.create({
    data: {
      value: "ALICE1234",
      isActivated: true,
      expireDate: new Date(Date.now() + 3 * 30 * 24 * 60 * 60 * 1000),
      user: {
        connect: { id: userAlice.id },
      },
    },
  });

  const bambangRefCode = await prisma.referralCode.create({
    data: {
      value: "BAMBANG1234",
      isActivated: true,
      user: {
        connect: { id: userBambang.id },
      },
    },
  });

  //events
  const eventdata: Prisma.EventsCreateInput[] = [
    {
      eventName: "Tokyo Anime Convention",
      price: 50000,
      datetime: "2024-10-15T09:00:00Z",
      location: "Tokyo Big Sight, Tokyo, Japan",
      description:
        "The Tokyo Anime Convention is the biggest anime event in Japan, featuring panels, cosplay, and merchandise from your favorite anime series.",
      availableSeat: 2000,
      isPaid: true,
      imageUrl:
        "https://res.cloudinary.com/ddqx4doog/image/upload/v1726458865/gundam_t4maho.jpg",
    },
    {
      eventName: "Cherry Blossom Festival",
      price: 20000,
      datetime: "2024-03-30T10:00:00Z",
      location: "Ueno Park, Tokyo, Japan",
      description:
        "Celebrate the beauty of cherry blossoms with traditional Japanese music, food stalls, and cultural performances.",
      availableSeat: 5000,
      isPaid: true,
      imageUrl:
        "https://res.cloudinary.com/ddqx4doog/image/upload/v1726458864/sakura_usu2ey.jpg",
    },
    {
      eventName: "Anime Karaoke Night",
      price: 15000,
      datetime: "2024-11-20T19:00:00Z",
      location: "Akihabara, Tokyo, Japan",
      description:
        "Join fellow anime fans for a night of singing your favorite anime opening and ending songs at a local karaoke bar.",
      availableSeat: 100,
      isPaid: true,
      imageUrl:
        "https://res.cloudinary.com/ddqx4doog/image/upload/v1726458865/karaoke_hhzino.jpg",
    },
    {
      eventName: "Japanese Cuisine Cooking Class",
      price: 35000,
      datetime: "2024-12-05T14:00:00Z",
      location: "Kyoto Cooking School, Kyoto, Japan",
      description:
        "Learn to cook traditional Japanese dishes such as sushi, ramen, and tempura with expert chefs in Kyoto.",
      availableSeat: 25,
      isPaid: true,
      imageUrl:
        "https://res.cloudinary.com/ddqx4doog/image/upload/v1726458865/sushi_vlubdp.jpg",
    },
    {
      eventName: "Sakura Matsuri Cosplay Parade",
      price: 0,
      datetime: "2024-04-10T12:00:00Z",
      location: "Shibuya Crossing, Tokyo, Japan",
      description:
        "Participate in or watch the vibrant cosplay parade during the Sakura Matsuri festival, featuring costumes from various anime and manga.",
      availableSeat: 0, // No fixed seats, open to the public
      isPaid: false,
      imageUrl:
        "https://res.cloudinary.com/ddqx4doog/image/upload/v1726458865/anime_u6ohud.jpg",
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
