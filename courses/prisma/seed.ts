import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const courses = [
    {
      title: "My best course",
    },
    {
      title: "Another course",
    },
    {
      title: "Mongo course",
    },
    {
      title: "This course",
    },
    {
      title: "Great course",
    },
    {
      title: "Microservices course",
    },
    {
      title: "Trying course",
    },
  ];

  for (const course of courses) {
    await prisma.course.create({
      data: {
        title: course.title,
      },
    });
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
