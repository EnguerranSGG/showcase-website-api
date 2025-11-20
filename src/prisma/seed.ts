import { PrismaClient, Role } from '@prisma/client';
import * as bcrypt from 'bcrypt';
import { config } from 'dotenv';
import { join } from 'path';
import { readFileSync } from 'fs';

config();

const prisma = new PrismaClient();

async function main() {
  const adminEmail = process.env.ADMIN_EMAIL;
  const adminPassword = process.env.ADMIN_PASSWORD;

  if (!adminEmail || !adminPassword) {
    throw new Error(
      'ADMIN_EMAIL et ADMIN_PASSWORD doivent être définis dans le .env',
    );
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

  const files = [
    { filename: 'solidarite.png' }, //1
    { filename: 'photo-boutique-nouvoulook.jpg' }, //2
    { filename: 'logo-marcq.jpg' }, //3
    { filename: 'logo-cravate-solidaire.jpg' }, //4
    { filename: 'logo-cofidis.png' }, //5
    { filename: 'inclusion.png' }, //6
    { filename: 'immeuble.jpg' }, //7
    { filename: 'image-accueil.jpg', title: 'Accueil Insertion Rencontre' }, //8
    { filename: 'dignite.png' }, //9
    { filename: 'defile-nouvoulook.jpg' }, //10
    {
      filename: 'cours-FLE.jpg',
      title: 'Pôle formation : Français Langue Étrangère', //11
    },
    { filename: 'entretien.jpg' }, //12
    { filename: 'DDETS_logo.png' }, //13
    { filename: 'logo-region.png' }, //14
    { filename: 'Ofii-logo.jpg' }, //15
    { filename: 'Plaquette-FLE.pdf' }, //16
    { filename: 'organigrame-air.png', title: 'Organigramme' }, //17
    { filename: 'certificat-qualiopi-AIR.pdf' }, //18
    { filename: 'MARCQ CPH.jpg' }, //19
    { filename: 'SIEGE.jpg' }, //20
    { filename: 'ROUBAIX CADA CPH FLE HUDA.jpg' }, //21
    { filename: 'FLE 2e etage.jpg' }, //22
    { filename: 'FLE 2e etage.2.jpg' }, //23
    { filename: 'FLE - 1er etage 2.jpg' }, //24
    { filename: 'FLE - 1er etage 1.jpg' }, //25
    {
      filename: 'tableau-satisfaction-des-stagiaires.svg',
      title: 'Satisfaction des stagiaires',
    }, //26
    {
      filename: 'tableau-satisfaction-des-stagiaires.svg',
      title: 'Auto-évaluations',
    }, //27
    {
      filename: 'tableau-satisfaction-des-stagiaires.svg',
      title: 'Acquisitions des compétences',
    }, //28
    {
      filename: 'tableau-satisfaction-des-stagiaires.svg',
      title: 'Auto-évaluations',
    }, //29
    {
      filename: 'tableau-satisfaction-des-stagiaires.svg',
      title: 'Acquisitions des compétences',
    }, //30
    { filename: 'fnars_hautsdefrance.jpg' }, //31
    { filename: 'logo_uriopss_hauts-de-france.png' }, //32
  ];

  for (const { filename, title } of files) {
    const fileBuffer = readFileSync(join(__dirname, 'seed-files', filename));

    await prisma.file.create({
      data: {
        name: filename,
        file: fileBuffer,
        created_at: new Date(),
        updated_at: new Date(),
        user_id: admin.user_id,
        ...(title && { title }), // Ajoute le title seulement s'il existe
      },
    });
  }

  console.log('Fichiers insérés avec succès.');

  const presentations = [
    {
      presentation_text:
        "L'association compte deux centres d’hébergement (CADA, HUDA) à destination des demandeurs d’asile, un centre d\’hébergement (CPH) à destination des bénéficiaires de la protection internationale, un centre d\’hébergement pour femmes isolées, un pôle FLE et une boutique solidaire. L\’historique de l\’association montre la volonté de la direction et du conseil d\’administration d\’innover et de soutenir une dynamique de renouvellement permanent, afin de répondre aux besoins des personnes étrangères, demandeurs d\’asile, réfugiés et de toutes personnes en difficulté.",
      user_id: admin.user_id, //1
    },
    {
      presentation_text:
        "L'association est née de l'initiative de militants engagés dans le tourisme associatif et social, dans la formation et l'éducation populaire et d'une interpellation du secrétariat d'État chargé de l'action humanitaire. Le but était de créer un centre d'accueil, appelé \"Centre provisoire d'hébergement\" (CPH) dans le Nord-Pas-de-Calais. \nL'État français avait décidé d'apporter son aide à la Grande-Bretagne, en accueillant 4400 réfugiés vietnamiens et cambodgiens, présents dans les camps de Hong-Kong (l'île passant sous la gouvernance chinoise). \nL'association, régie par la loi du 1er juillet 1901, est donc créée le 5 mars 1990. Le sens voulu de l'action était d'accueillir des personnes réfugiées en famille ou isolées et leur permettre une réelle insertion sociale et professionnelle. C'est ainsi que le premier Centre Provisoire d'Hébergement (CPH) ouvre ses portes en septembre 1990. \nPour les militants associatifs, il était primordial de permettre aux personnes accueillies de recevoir, dès l'arrivée, une formation en Français Langue Étrangère (FLE) et un accompagnement social et professionnel.",
      user_id: admin.user_id, //2
    },
    {
      presentation_text:
        'Rejoignez notre équipe et participez à notre mission sociale.',
      user_id: admin.user_id, //3
    },
  ];
  await prisma.presentation.createMany({
    data: presentations,
  });
  console.log('Présentations insérées avec succès.');

  // Insertion de quelques partenaires fictifs
  const now = new Date();
  const partners = [
    {
      name: 'DDETS',
      created_at: now,
      updated_at: now,
      file_id: 13,
      user_id: admin.user_id,
    },
    {
      name: 'Offi',
      created_at: now,
      updated_at: now,
      file_id: 15,
      user_id: admin.user_id,
    },
    {
      name: 'Fondation Face',
      created_at: now,
      updated_at: now,
      file_id: 31,
      user_id: admin.user_id,
    },
    {
      name: 'URIOPS',
      created_at: now,
      updated_at: now,
      file_id: 32,
      user_id: admin.user_id,
    },
    {
      name: 'Marcq-en-Baroeul',
      created_at: now,
      updated_at: now,
      file_id: 3,
      user_id: admin.user_id,
    },
    {
      name: 'Cofidis',
      created_at: now,
      updated_at: now,
      file_id: 5,
      user_id: admin.user_id,
    },
    {
      name: 'La cravate solidaire',
      created_at: now,
      updated_at: now,
      file_id: 4,
      user_id: admin.user_id,
    },
  ];

  await prisma.partner.createMany({
    data: partners,
  });

  console.log('Partenaires insérés avec succès.');

  // Insertion de quelques conseillers fictifs

  const counselors = [
    {
      counselor_firstname: 'Dieudonné',
      counselor_lastname: 'Mamadou',
      counselor_function: 'Président',
      user_id: admin.user_id,
    },
    {
      counselor_firstname: 'Nathalie',
      counselor_lastname: 'Chantrel',
      counselor_function: 'Directrice',
      user_id: admin.user_id,
    },
    {
      counselor_firstname: 'Coralie',
      counselor_lastname: 'Olivier',
      counselor_function: 'Coordinatrice qualité',
      user_id: admin.user_id,
    },
    {
      counselor_firstname: 'Christiane',
      counselor_lastname: 'Shamshoodeen',
      counselor_function: 'Secrétaire',
      user_id: admin.user_id,
    },
  ];

  await prisma.counselor.createMany({
    data: counselors,
  });

  console.log('Conseillers insérés avec succès.');

  // Insertion de quelques événements temporels
  const times = [
    {
      year: 1990,
      event_description:
        'Naissance de l’association A.I.R et création du CPH de Marcq-en-Baroeul avec 42 places disponibles.',
      created_at: now,
      updated_at: now,
      user_id: admin.user_id,
    },
    {
      year: 1992,
      event_description:
        'Ouverture du CADA à Sailly-Lez-Lannoy avec 35 places disponibles.',
      created_at: now,
      updated_at: now,
      user_id: admin.user_id,
    },
    {
      year: 1999,
      event_description:
        'Ouverture d’un pré-CADA à Tourcoing avec 20 places disponibles.',
      created_at: now,
      updated_at: now,
      user_id: admin.user_id,
    },
    {
      year: 2000,
      event_description:
        'Transformation du pré-CADA de Tourcoing en CADA avec 45 places disponibles.',
      created_at: now,
      updated_at: now,
      user_id: admin.user_id,
    },
    {
      year: 2002,
      event_description:
        'Ouverture de 20 places d’hébergement d’urgence et création de la première plateforme d’accueil des demandeurs d’asile (SPADA) à Lille.',
      created_at: now,
      updated_at: now,
      user_id: admin.user_id,
    },
    {
      year: 2005,
      event_description:
        'Pérennisation de 10 places d’hébergement d’urgence pour femmes isolées à Tourcoing.',
      created_at: now,
      updated_at: now,
      user_id: admin.user_id,
    },
    {
      year: 2007,
      event_description:
        'Les 10 places d’hébergement d’urgence deviennent des places de stabilisation sous statut (CHRS).',
      created_at: now,
      updated_at: now,
      user_id: admin.user_id,
    },
    {
      year: 2012,
      event_description:
        'Ouverture de 10 places hôtel (mise à l’abri) à Roubaix en faveur des DA en situation de grande précarité dans l’attente d’une entrée en CADA.',
      created_at: now,
      updated_at: now,
      user_id: admin.user_id,
    },
    {
      year: 2013,
      event_description:
        'Accompagnement juridique et psychologique des Mineurs Isolés Étrangers pour le compte de la protection judiciaire.',
      created_at: now,
      updated_at: now,
      user_id: admin.user_id,
    },
    {
      year: 2015,
      event_description:
        'Fusion des deux CADA en un seul et extension de ce dernier à 104 places.',
      created_at: now,
      updated_at: now,
      user_id: admin.user_id,
    },
    {
      year: 2016,
      event_description:
        'Pérennisation du dispositif APRIL dans la cadre d’une extension de CPH passant à 90 places réparties entre Roubaix et Marcq-en-Baroeul.',
      created_at: now,
      updated_at: now,
      user_id: admin.user_id,
    },
    {
      year: 2016,
      event_description:
        'Fin de la mission d’accompagnement juridique et psychologique des MIE.',
      created_at: now,
      updated_at: now,
      user_id: admin.user_id,
    },
    {
      year: 2019,
      event_description:
        'La fermeture de la SPADA donne lieu à la naissance du Lieu ressources pour l’Accueil et l’Intégration des réfugiés (LAIR) à Lille.',
      created_at: now,
      updated_at: now,
      user_id: admin.user_id,
    },
    {
      year: 2020,
      event_description:
        'Création du projet MERCURE en coopération avec Cooptalis et Innovation Développement, à Lille.',
      created_at: now,
      updated_at: now,
      user_id: admin.user_id,
    },
    {
      year: 2020,
      event_description:
        'Absorption de l’association Innovation Développement comptant un pôle formation FLE à Roubaix et une boutique solidaire à Marc-en-Baroeul.',
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
      event_description: 'Fin de la mission du LAIR à Lille.',
      created_at: now,
      updated_at: now,
      user_id: admin.user_id,
    },
    {
      year: 2023,
      event_description:
        'L’HUDA “hôtel” de Roubaix se pérennise en HUDA dans le cadre d’un HUDA dit “classique”.',
      created_at: now,
      updated_at: now,
      user_id: admin.user_id,
    },
  ];

  await prisma.time.createMany({
    data: times,
  });

  console.log('Événements temporels insérés avec succès.');

  const news = [
    {
      name: 'Français langue étrangère : nouvelle session',
      description:
        "L'association lance une nouvelle session de cours de français destinée aux demandeurs d'asile. Merci de faire passer l'information autour de vous à celles et ceux qui pourraient en bénéficier.",
      created_at: now,
      updated_at: now,
      file_id: 11,
      user_id: admin.user_id,
    },
  ];

  await prisma.news.createMany({
    data: news,
  });

  console.log('Nouvelles insérées avec succès.');

  //Insertion de valeurs fictives

  const fakeValues = [
    {
      name: 'Solidarité',
      created_at: now,
      updated_at: now,
      file_id: 1,
      user_id: admin.user_id,
    },
    {
      name: 'Dignité',
      created_at: now,
      updated_at: now,
      file_id: 9,
      user_id: admin.user_id,
    },
    {
      name: 'Inclusivité',
      created_at: now,
      updated_at: now,
      file_id: 6,
      user_id: admin.user_id,
    },
  ];

  await prisma.value.createMany({
    data: fakeValues,
  });

  console.log('Valeurs insérées avec succès.');

  // Types de structures - DOIT ÊTRE AVANT LES STRUCTURES
  const structureTypes = [
    {
      name: 'Boutique solidaire',
      created_at: now,
      updated_at: now,
    },
    {
      name: 'Pôle formation',
      created_at: now,
      updated_at: now,
    },
    {
      name: 'Pôle asile',
      created_at: now,
      updated_at: now,
    },
    {
      name: 'Pôle intégration',
      created_at: now,
      updated_at: now,
    },
    {
      name: 'Siège social',
      created_at: now,
      updated_at: now,
    },
  ];

  await prisma.structureType.createMany({
    data: structureTypes,
  });

  console.log('Types de structures insérées avec succès.');

  // Récupérer les types de structures créés pour avoir leurs IDs
  const createdStructureTypes = await prisma.structureType.findMany();
  const structureTypeMap = new Map(
    createdStructureTypes.map((type) => [type.name, type.structure_type_id]),
  );

  const structures = [
    {
      name: 'Siège social',
      description:
        'Le siège social accueil le pôle direction de A.I.R. ainsi que les emplois administratifs.',
      address: '108 rue Jean Jacques Rousseau, 59260 Hellemmes',
      phone_number: '03 20 04 16 85',
      created_at: now,
      updated_at: now,
      file_id: 20,
      user_id: admin.user_id,
      structure_type_id: structureTypeMap.get('Siège social'),
    },
    {
      name: 'Boutique Nouvoulook',
      description:
        "La boutique Nouvoulook est une boutique solidaire associative de seconde main. Elle est financée par la vente de dons de particuliers et d'entreprises. Son fonctionnement est assuré par des membres de l'association A.I.R. et des bénévoles.",
      address: '65 bd Clémenceau, Marcq-en-Baroeul',
      phone_number: '03 28 07 66 52',
      link: 'https://www.Nouvoulook.fr/',
      created_at: now,
      updated_at: now,
      file_id: 2,
      user_id: admin.user_id,
      structure_type_id: structureTypeMap.get('Boutique solidaire'),
    },
    {
      name: 'Pôle formations : Français Langue Étrangère',
      description:
        "Le FLE est certifié QUALIOPI et est financé par la DDETS. Il propose des cours d'initiation au code de la route et de FLE à visée d'intégration socio-professionnelle et  d'accompagnement à l'autonomie numérique.",
      address: '31 Grand Place, Roubaix 59100',
      link: 'https://www.Accueil-insertion-rencontre.fr/fle',
      created_at: now,
      updated_at: now,
      file_id: 22,
      user_id: admin.user_id,
      structure_type_id: structureTypeMap.get('Pôle formation'),
    },
    {
      name: 'CADA - Roubaix',
      description:
        "Ce Centre d'Accueil des Demandeurs d'Asile dispose d'une capacité d'accueil de 58 places. Il est financé par la DDETS et les orientations vers cet établissement sont gérées par l'OFII via le DNA.",
      created_at: now,
      updated_at: now,
      file_id: 21,
      user_id: admin.user_id,
      structure_type_id: structureTypeMap.get('Pôle asile'),
    },
    {
      name: 'CADA - Tourcoing',
      description:
        "Ce Centre d'Accueil des Demandeurs d'Asile dispose d'une capacité d'accueil de 58 places. Il est financé par la DDETS et les orientations vers cet établissement sont gérées par l'OFII via le DNA.",
      created_at: now,
      updated_at: now,
      file_id: 7,
      user_id: admin.user_id,
      structure_type_id: structureTypeMap.get('Pôle asile'),
    },
    {
      name: 'HUDA - Roubaix',
      description:
        "L'Hébergement d'Urgence des Demandeurs d'Asile dispose de 13 places. Il est financé par la DDETS et les orientations vers cet établissement sont gérées par l'OFII via le DNA.",
      created_at: now,
      updated_at: now,
      file_id: 21,
      user_id: admin.user_id,
      structure_type_id: structureTypeMap.get('Pôle asile'),
    },
    {
      name: 'CPH - Marcq-en-Baroeul',
      description:
        "Ce Centre Provisoire d'Hébergement est destiné aux Bénéficiaires d'une Protection Internationale et dispose d'une capacité d'accueil de 50 places.  Il est financé par la DDETS et les orientations vers cet établissement sont gérées par l'OFII via le DNA.",
      created_at: now,
      updated_at: now,
      file_id: 19,
      user_id: admin.user_id,
      structure_type_id: structureTypeMap.get('Pôle intégration'),
    },
    {
      name: 'CPH - Roubaix',
      description:
        "Ce Centre Provisoire d'Hébergement est destiné aux Bénéficiaires d'une Protection Internationale et dispose d'une capacité d'accueil de 50 places.  Il est financé par la DDETS et les orientations vers cet établissement sont gérées par l'OFII via le DNA.",
      created_at: now,
      updated_at: now,
      file_id: 21,
      user_id: admin.user_id,
      structure_type_id: structureTypeMap.get('Pôle intégration'),
    },
    {
      name: 'CHRS',
      description:
        "C'est un Centre d'Hébergement et de Réinsertion Sociale destiné aux femmes isolées et en situation de grande précarité. Il est régi par le CASF et est financé par la DDETS. Les orientations vers cet établissement sont gérées par le SIAO.",
      created_at: now,
      updated_at: now,
      file_id: 7,
      user_id: admin.user_id,
      structure_type_id: structureTypeMap.get('Pôle intégration'),
    },
  ];

  await prisma.structure.createMany({
    data: structures,
  });

  console.log('Structures insérées avec succès.');

  const missions = [
    {
      content: 'Accueil, l’hébergement et la domiciliation des DA.',
      structure_id: 4,
    },
    {
      content: 'Accompagnement administratif et juridique.',
      structure_id: 4,
    },
    {
      content: 'Développement des partenariats.',
      structure_id: 4,
    },
    {
      content: 'Accompagnement des DA à la sortie.',
      structure_id: 4,
    },
    {
      content: 'Accueil, l’hébergement et la domiciliation des DA.',
      structure_id: 5,
    },
    {
      content: 'Accompagnement administratif et juridique.',
      structure_id: 5,
    },
    {
      content: 'Développement des partenariats.',
      structure_id: 5,
    },
    {
      content: 'Accompagnement des DA à la sortie.',
      structure_id: 5,
    },
    {
      content: 'Accueil, l’hébergement et la domiciliation des DA.',
      structure_id: 6,
    },
    {
      content: 'Accompagnement administratif et juridique.',
      structure_id: 6,
    },
    {
      content: 'Développement des partenariats.',
      structure_id: 6,
    },
    {
      content: 'Accompagnement des DA à la sortie.',
      structure_id: 6,
    },
    {
      content: 'Accès aux droits civiques, sociaux, aux soins et à la santé.',
      structure_id: 7,
    },
    {
      content: 'Accompagnement linguistique.',
      structure_id: 7,
    },
    {
      content:
        'Accès à la formation et à l’emploi selon un projet personnalisé.',
      structure_id: 7,
    },
    {
      content: 'Soutien à la parentalité et à la scolarisation.',
      structure_id: 7,
    },
    {
      content: 'Accompagnement vers un logement autonome.',
      structure_id: 7,
    },
    {
      content: 'Accès aux droits civiques, sociaux, aux soins et à la santé.',
      structure_id: 8,
    },
    {
      content: 'Accompagnement linguistique.',
      structure_id: 8,
    },
    {
      content:
        'Accès à la formation et à l’emploi selon un projet personnalisé.',
      structure_id: 8,
    },
    {
      content: 'Soutien à la parentalité et à la scolarisation.',
      structure_id: 8,
    },
    {
      content: 'Accompagnement vers un logement autonome.',
      structure_id: 8,
    },
    {
      content: 'Accompagnement administratif, social et sanitaire.',
      structure_id: 9,
    },
    {
      content:
        'Insertion sociale (apprentissage de la langue française et des codes du vivre ensemble) et professionnelle (emploi, formation professionnelle qualifiante...).',
      structure_id: 9,
    },
  ];

  for (const mission of missions) {
    await prisma.mission.create({
      data: {
        content: mission.content,
        structure_id: mission.structure_id,
        user_id: admin.user_id,
      },
    });
  }

  console.log('Missions insérées avec succès.');

  const types = [
    {
      name: 'FLE',
      created_at: now,
      updated_at: now,
    },
    {
      name: 'AIR',
      created_at: now,
      updated_at: now,
    },
  ];

  await prisma.type.createMany({
    data: types,
  });

  console.log('Types insérées avec succès.');

  const statistic = [
    {
      label: "centres d'hébergement",
      value: 7,
      year: 2024,
      is_percentage: false,
      created_at: now,
      updated_at: now,
      type_id: 2,
      user_id: admin.user_id,
    },
    {
      label: 'centre de formation',
      value: 1,
      year: 2024,
      is_percentage: false,
      created_at: now,
      updated_at: now,
      type_id: 2,
      user_id: admin.user_id,
    },
    {
      label: 'de satisfaction des accompagnés',
      value: 96,
      year: 2024,
      is_percentage: true,
      created_at: now,
      updated_at: now,
      type_id: 2,
      user_id: admin.user_id,
    },
    {
      label: "d'apprenants satisfaits",
      value: 98,
      year: 2024,
      is_percentage: true,
      created_at: now,
      updated_at: now,
      type_id: 1,
      user_id: admin.user_id,
    },
    {
      label: 'apprenants',
      value: 358,
      year: 2024,
      is_percentage: false,
      created_at: now,
      updated_at: now,
      type_id: 1,
      user_id: admin.user_id,
    },
    {
      label: "d'acquisition de compétences",
      value: 96,
      year: 2024,
      is_percentage: true,
      created_at: now,
      updated_at: now,
      type_id: 1,
      user_id: admin.user_id,
    },
  ];

  await prisma.statistic.createMany({
    data: statistic,
  });

  console.log('Statistiques insérées avec succès.');

  const paths = [
    {
      name: 'BPI',
      created_at: now,
      updated_at: now,
    },
    {
      name: 'DA',
      created_at: now,
      updated_at: now,
    },
  ];

  await prisma.path.createMany({
    data: paths,
  });

  console.log('Parcours insérées avec succès.');

  const steps = [
    {
      name: 'Découverte du logement',
      description:
        'Cette étape permet de comprendre les critères de sélection.',
      created_at: now,
      updated_at: now,
      path_id: 1,
      file_id: 8,
      user_id: admin.user_id,
    },
    {
      name: 'Préparation des documents',
      description:
        'Cette étape permet de comprendre les critères de sélection.',
      created_at: now,
      updated_at: now,
      path_id: 1,
      file_id: 8,
      user_id: admin.user_id,
    },
    {
      name: 'Découverte du logement',
      description:
        'Cette étape permet de comprendre les critères de sélection.',
      created_at: now,
      updated_at: now,
      path_id: 2,
      file_id: 8,
      user_id: admin.user_id,
    },
    {
      name: 'Découverte dunt',
      description:
        'Cette étape permet de comprendre les critères de sélection.',
      created_at: now,
      updated_at: now,
      path_id: 2,
      file_id: 8,
      user_id: admin.user_id,
    },
  ];

  await prisma.step.createMany({
    data: steps,
  });

  console.log('Etapes insérées avec succès.');

  const jobOffers = [
    {
      name: 'Hôte de caisse',
      job_type: 'CDD',
      city: 'Marcq-en-baroeul',
      link: 'https://example.com/offre/123',
      description: 'Un poste stimulant dans une structure dynamique',
      created_at: now,
      updated_at: now,
      user_id: admin.user_id,
      file_id: 12,
    },
    {
      name: 'Chargé de mission numérique',
      job_type: 'CDI',
      city: 'Lille',
      description: 'Un poste stimulant dans une structure dynamique',
      created_at: now,
      updated_at: now,
      file_id: 12,
      user_id: admin.user_id,
    },
  ];

  await prisma.job_offer.createMany({
    data: jobOffers,
  });

  console.log("Offres d'emploi insérées avec succès.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
