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
        year: 1990,
        event_description: 'Naissance de l’association A.I.R et création du CPH de Marcq-en-Baroeul avec 42 places disponibles.',
        created_at: now,
        updated_at: now,
        user_id: admin.user_id,
      },
      {
        year: 1992,
        event_description: 'Ouverture du CADA à Sailly-Lez-Lannoy avec 35 places disponibles.',
        created_at: now,
        updated_at: now,
        user_id: admin.user_id,
      },
      {
        year: 1999,
        event_description: 'Ouverture d’un pré-CADA à Tourcoing avec 20 places disponibles.',
        created_at: now,
        updated_at: now,
        user_id: admin.user_id,
      },
      {
        year: 2000,
        event_description: 'Transformation du pré-CADA de Tourcoing en CADA avec 45 places disponibles.',
        created_at: now,
        updated_at: now,
        user_id: admin.user_id,
      },
      {
        year: 2002,
        event_description: 'Ouverture de 20 places d’herbergement d’urgence et création de la première plateforme d’accueil des demandeurs d’asile (SPADA) à Lille.',
        created_at: now,
        updated_at: now,
        user_id: admin.user_id,
      },
      {
        year: 2005,
        event_description: 'Pérennisation de 10 places d’herbergement d’urgence pour femmes isolées à Tourcoing.',
        created_at: now,
        updated_at: now,
        user_id: admin.user_id,
      },
      {
        year: 2007,
        event_description: 'Les 10 places d’herbergement d’urgence deviennent des places de stabilisation sous statut (CHRS).',
        created_at: now,
        updated_at: now,
        user_id: admin.user_id,
      },
      {
        year: 2012,
        event_description: 'Ouverture de 10 places hôtel (mise à l’abri) à Roubaix en faveur des DA en situation de grande précarité dans l’attente d’une entrée en CADA.',
        created_at: now,
        updated_at: now,
        user_id: admin.user_id,
      },
      {
        year: 2013,
        event_description: 'Accompagnement juridique et psychologiques des Mineurs Isolés Étrangers pour le compte de la protection judiciaire.',
        created_at: now,
        updated_at: now,
        user_id: admin.user_id,
      },
      {
        year: 2015,
        event_description: 'Fusion des deux CADA en un seul et extension de ce dernier à 104 places.',
        created_at: now,
        updated_at: now,
        user_id: admin.user_id,
      },
      {
        year: 2016,
        event_description: 'Pérennisation du dispositif APRIL dans la cadre d’une extension de CPH passant à 90 places réparties entre Roubaix et Marcq-en-Baroeul.',
        created_at: now,
        updated_at: now,
        user_id: admin.user_id,
      },
      {
        year: 2016,
        event_description: 'Fin de la mission d’accompagnement juridique et psychologique des MIE.',
        created_at: now,
        updated_at: now,
        user_id: admin.user_id,
      },
      {
        year: 2019,
        event_description: 'La fermeture de la SPADA donne lieu à la naissance du Lieu ressources pour l’Accueil et l’Intégration des réfugiés (LAIR) à Lille.',
        created_at: now,
        updated_at: now,
        user_id: admin.user_id,
      },
      {
        year: 2020,
        event_description: 'Création du projet MERCURE en coopération avec Cooptalis et Innovation Développement, à Lille.',
        created_at: now,
        updated_at: now,
        user_id: admin.user_id,
      },
      {
        year: 2020,
        event_description: 'Absorbtion de l’association Innovation Développement comptant un pôle formation FLE à Roubaix et une boutique solidaire à Marc-en-Baroeul.',
        created_at: now,
        updated_at: now,
        user_id: admin.user_id,
      },
      {
        year: 2020,
        event_description: 'Les 10 places “hôtel” de Roubaix deviennent un HUDA.',
        created_at: now,
        updated_at: now,
        user_id: admin.user_id,
      },
      {
        year: 2023,
        event_description: 'Fin de la misssion du LAIR à Lille.',
        created_at: now,
        updated_at: now,
        user_id: admin.user_id,
      },
      {
        year: 2023,
        event_description: 'L’HUDA “hôtel” de Roubaix se pérennise en HUDA dans le cadre d’un HUDA dit “classique”.',
        created_at: now,
        updated_at: now,
        user_id: admin.user_id,
      }
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
