import { PrismaClient, Role } from '@prisma/client';
import * as bcrypt from 'bcrypt';
import { config } from 'dotenv';

config();

const prisma = new PrismaClient();

async function main() {
  const adminEmail = process.env.ADMIN_EMAIL;
  const adminPassword = process.env.ADMIN_PASSWORD;

  if (!adminEmail || !adminPassword) {
    throw new Error('ADMIN_EMAIL et ADMIN_PASSWORD doivent être définis dans le .env');
  }

  const existingAdmin = await prisma.user.findUnique({
    where: { mail: adminEmail },
  });

  if (existingAdmin) {
    console.log(`Admin déjà présent.`);
    return;
  }

  const hashedPassword = await bcrypt.hash(adminPassword, 10);

  await prisma.user.create({
    data: {
      mail: adminEmail,
      password: hashedPassword,
      firstname: 'Admin',
      lastname: 'User',
      created_at: new Date(),
      updated_at: new Date(),
      role: Role.ADMIN,
    },
  });

  console.log(`Admin créé avec succès : ${adminEmail}`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
