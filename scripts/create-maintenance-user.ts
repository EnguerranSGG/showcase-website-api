import { PrismaClient, Role } from '@prisma/client';
import * as bcrypt from 'bcrypt';
import { config } from 'dotenv';

config();

const prisma = new PrismaClient();

async function main() {
  // Utiliser les variables d'environnement ou des valeurs par défaut
  const maintenanceEmail =
    process.env.MAINTENANCE_EMAIL ||
    'maintenance@accueil-insertion-rencontre.fr';
  const maintenancePassword =
    process.env.MAINTENANCE_PASSWORD || 'Maintenance2024!Secure';

  console.log('🔧 Création du compte de maintenance...');
  console.log(`📧 Email: ${maintenanceEmail}`);

  // Vérifier si le compte existe déjà
  let maintenance = await prisma.user.findUnique({
    where: { mail: maintenanceEmail },
  });

  if (maintenance) {
    console.log(
      `ℹ️  Le compte de maintenance existe déjà : ${maintenanceEmail}`,
    );
    console.log('   Aucune action nécessaire, le compte est déjà configuré.');
    return;
  }

  // Créer le compte
  const hashedPassword = await bcrypt.hash(maintenancePassword, 10);

  maintenance = await prisma.user.create({
    data: {
      mail: maintenanceEmail,
      password: hashedPassword,
      firstname: 'Maintenance',
      lastname: 'Technique',
      created_at: new Date(),
      updated_at: new Date(),
      role: Role.ADMIN,
    },
  });

  console.log('✅ Compte de maintenance créé avec succès !');
  console.log('');
  console.log('📋 Identifiants de connexion :');
  console.log(`   Email: ${maintenanceEmail}`);
  console.log(`   Mot de passe: ${maintenancePassword}`);
  console.log('');
  console.log('⚠️  IMPORTANT:');
  console.log(
    '   - Notez ces identifiants dans un gestionnaire de mots de passe sécurisé',
  );
  console.log(
    "   - Ne partagez ces identifiants qu'avec les personnes autorisées",
  );
  console.log(
    '   - Changez le mot de passe si vous utilisez la valeur par défaut',
  );
  console.log('');
  console.log(
    "💡 Pour personnaliser l'email et le mot de passe, définissez dans votre .env :",
  );
  console.log('   MAINTENANCE_EMAIL=votre-email@exemple.fr');
  console.log('   MAINTENANCE_PASSWORD=VotreMotDePasseSecurise');
}

main()
  .catch((e) => {
    console.error('❌ Erreur lors de la création du compte de maintenance:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
