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

  let admin = await prisma.user.findUnique({
    where: { mail: adminEmail },
  });

  if (!admin) {
    const hashedPassword = await bcrypt.hash(adminPassword, 10);

    admin = await prisma.user.create({
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
  } else {
    console.log(`Admin déjà présent.`);
  }

  // Insertion de quelques partenaires fictifs
  const now = new Date();
  const partners = [
    {
      name: 'Partenaire Alpha',
      image_url: 'https://example.com/images/alpha.png',
      created_at: now,
      updated_at: now,
      user_id: admin.user_id,
    },
    {
      name: 'Partenaire Beta',
      image_url: 'https://example.com/images/beta.png',
      created_at: now,
      updated_at: now,
      user_id: admin.user_id,
    },
    {
      name: 'Partenaire Gamma',
      image_url: 'https://example.com/images/gamma.png',
      created_at: now,
      updated_at: now,
      user_id: admin.user_id,
    },
  ];

  await prisma.partner.createMany({
    data: partners,
  });

  console.log('Partenaires insérés avec succès.');

    // Insertion de quelques événements temporels
    const times = [
      {
        year: 2020,
        event_description: 'Création de la structure AIR',
        created_at: now,
        updated_at: now,
        user_id: admin.user_id,
      },
      {
        year: 2022,
        event_description: 'Lancement du programme solidaire Nouvoulook',
        created_at: now,
        updated_at: now,
        user_id: admin.user_id,
      },
      {
        year: 2023,
        event_description: 'Mise en place du site vitrine et de la plateforme pédagogique',
        created_at: now,
        updated_at: now,
        user_id: admin.user_id,
      },
    ];
  
    await prisma.time.createMany({
      data: times,
    });
  
    console.log('Événements temporels insérés avec succès.');
  
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
