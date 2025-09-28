export type ModuleLevel = "beginner" | "intermediate" | "advanced";

export interface ModuleLesson {
  slug: string;
  title: string;
  objective: string;
  durationMinutes: number;
  resources: string[];
}

export interface TrainingModule {
  id: string;
  slug: string;
  title: string;
  level: ModuleLevel;
  description: string;
  durationHours: number;
  prerequisites: string[];
  outcomes: string[];
  lessons: ModuleLesson[];
  project?: {
    title: string;
    summary: string;
    deliverables: string[];
  };
}

export const modules: TrainingModule[] = [
  {
    id: "module-01",
    slug: "introduction-nextjs",
    title: "Decouvrir Next.js",
    level: "beginner",
    description: "Prendre en main l ecosysteme Next.js et comprendre comment il s integre a React.",
    durationHours: 6,
    prerequisites: ["Bases de JavaScript", "Concepts fondamentaux de React"],
    outcomes: [
      "Comprendre le role de Next.js dans une stack moderne",
      "Creer un projet Next.js et naviguer dans sa structure",
      "Utiliser le routage par systeme de fichiers pour exposer des pages",
    ],
    lessons: [
      {
        slug: "m01-l01",
        title: "Initialiser un projet create-next-app",
        objective: "Installer les dependances et explorer l arborescence de l application.",
        durationMinutes: 45,
        resources: [
          "https://nextjs.org/docs/app/api-reference/create-next-app",
          "https://react.dev/learn",
        ],
      },
      {
        slug: "m01-l02",
        title: "Comprendre le dossier app",
        objective: "Identifier les conventions Next.js 13 et le fonctionnement des layouts.",
        durationMinutes: 60,
        resources: [
          "https://nextjs.org/docs/app/building-your-application/routing",
        ],
      },
      {
        slug: "m01-l03",
        title: "Pages statiques et metadata",
        objective: "Creer des pages statiques simples et configurer leurs metas.",
        durationMinutes: 50,
        resources: [
          "https://nextjs.org/docs/app/building-your-application/upgrading/app-router-migration",
          "https://nextjs.org/docs/app/api-reference/functions/generate-metadata",
        ],
      },
    ],
    project: {
      title: "Mini site vitrine",
      summary: "Structurer un site Next.js a trois pages avec navigation et metadata.",
      deliverables: [
        "Depot Git contenant le projet initial",
        "Documentation de l arborescence et des scripts npm",
      ],
    },
  },
  {
    id: "module-02",
    slug: "routing-donnees",
    title: "Routing avance et gestion des donnees",
    level: "intermediate",
    description: "Explorer le systeme de routing imbrique et les strategies de fetching de donnees.",
    durationHours: 8,
    prerequisites: ["Maitrise des concepts du module 01"],
    outcomes: [
      "Configuer des layouts imbriques et des routes dynamiques",
      "Choisir entre rendu statique, dynamique et streaming",
      "Mettre en place le prefetching et la mutualisation de donnees",
    ],
    lessons: [
      {
        slug: "m02-l01",
        title: "Routes dynamiques et segments paralleles",
        objective: "Construire des routes complexes tout en conservant la lisibilite.",
        durationMinutes: 70,
        resources: [
          "https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes",
          "https://nextjs.org/docs/app/building-your-application/routing/parallel-routes",
        ],
      },
      {
        slug: "m02-l02",
        title: "Data fetching server et client",
        objective: "Utiliser fetch, revalidate et le pattern Server Actions pour charger les donnees.",
        durationMinutes: 80,
        resources: [
          "https://nextjs.org/docs/app/building-your-application/data-fetching/fetching",
          "https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions",
        ],
      },
      {
        slug: "m02-l03",
        title: "Gestion des erreurs et etats de chargement",
        objective: "Mettre en place error.tsx et loading.tsx pour une UX robuste.",
        durationMinutes: 55,
        resources: [
          "https://nextjs.org/docs/app/building-your-application/routing/loading-ui-and-streaming",
        ],
      },
    ],
    project: {
      title: "Catalogue de produits",
      summary: "Creer un catalogue connecte a une API avec routes dynamiques et streaming.",
      deliverables: [
        "Composants de page utilisant un fetch serveur et la revalidation",
        "Gestion des erreurs personnalisee",
      ],
    },
  },
  {
    id: "module-03",
    slug: "interface-styling",
    title: "Design system et experience utilisateur",
    level: "intermediate",
    description: "Structurer l interface avec Tailwind CSS, les polices, et l accessibilite.",
    durationHours: 7,
    prerequisites: ["Connaissance de base en CSS"],
    outcomes: [
      "Configurer Tailwind CSS et Theme UI dans un projet Next.js",
      "Composer des layouts responsive avec le dossier app",
      "Ameliorer l accessibilite et la performance UX",
    ],
    lessons: [
      {
        slug: "m03-l01",
        title: "Installer Tailwind CSS",
        objective: "Configurer Tailwind CSS avec PostCSS et personnaliser le theme.",
        durationMinutes: 60,
        resources: [
          "https://tailwindcss.com/docs/guides/nextjs",
        ],
      },
      {
        slug: "m03-l02",
        title: "Layouts et composants partages",
        objective: "Creer des layouts nestes et factoriser les composants UI reutilisables.",
        durationMinutes: 70,
        resources: [
          "https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts",
        ],
      },
      {
        slug: "m03-l03",
        title: "Accessibilite et polices",
        objective: "Installer @next/font, gerer les couleurs et ajouter des tests d accessibilite",
        durationMinutes: 50,
        resources: [
          "https://nextjs.org/docs/app/building-your-application/optimizing/fonts",
          "https://web.dev/learn/accessibility/",
        ],
      },
    ],
    project: {
      title: "Dashboard responsive",
      summary: "Mettre en place un dashboard Next.js avec composants atomiques et layout responsive.",
      deliverables: [
        "Guide de style Tailwind",
        "Page dashboard avec navigation responsive accessible",
      ],
    },
  },
  {
    id: "module-04",
    slug: "authentification-securite",
    title: "Authentification et securite",
    level: "advanced",
    description: "Protections des routes, NextAuth, et bonnes pratiques de securite.",
    durationHours: 6,
    prerequisites: ["Connaissance de TypeScript", "Module 02 valide"],
    outcomes: [
      "Configurer NextAuth avec des adaptateurs custom",
      "Proteger les routes server et client",
      "Ajouter de la validation et sanitisation de donnees",
    ],
    lessons: [
      {
        slug: "m04-l01",
        title: "Mise en place de NextAuth",
        objective: "Initialiser NextAuth, definir les providers et manipuler la session.",
        durationMinutes: 75,
        resources: [
          "https://next-auth.js.org/getting-started/introduction",
          "https://nextjs.org/docs/app/building-your-application/routing/middleware",
        ],
      },
      {
        slug: "m04-l02",
        title: "Middlewares et guard server",
        objective: "Proteger l acces aux routes et filtrer les requetes sensibles.",
        durationMinutes: 60,
        resources: [
          "https://nextjs.org/docs/app/building-your-application/routing/middleware",
        ],
      },
      {
        slug: "m04-l03",
        title: "Validation avec Zod",
        objective: "Sanitiser les FormActions et les requetes API en TypeScript.",
        durationMinutes: 55,
        resources: [
          "https://zod.dev/",
        ],
      },
    ],
    project: {
      title: "Espace membres securise",
      summary: "Construire un espace membres proteges avec authentification et autorisations.",
      deliverables: [
        "Authentification NextAuth avec un provider OAuth",
        "Routes protegees cote serveur et cote client",
      ],
    },
  },
  {
    id: "module-05",
    slug: "performance-deploiement",
    title: "Performance, monitoring et deploiement",
    level: "advanced",
    description: "Optimiser les performances et deploquer l application sur Vercel ou infra custom.",
    durationHours: 5,
    prerequisites: ["Modules precedents maitrises"],
    outcomes: [
      "Configurer l analyse de bundle et le profiling",
      "Mettre en place l optimisation des images et des polices",
      "Deployer sur Vercel et surveiller l application",
    ],
    lessons: [
      {
        slug: "m05-l01",
        title: "Optimisations integrees",
        objective: "Utiliser next/image, next/font et les options de caching.",
        durationMinutes: 55,
        resources: [
          "https://nextjs.org/docs/app/building-your-application/optimizing",
        ],
      },
      {
        slug: "m05-l02",
        title: "Analyse et profiling",
        objective: "Activer l analyzer, inspecter les bundles et mesurer les performances runtime.",
        durationMinutes: 60,
        resources: [
          "https://nextjs.org/docs/app/building-your-application/optimizing/production",
          "https://vercel.com/docs/analytics",
        ],
      },
      {
        slug: "m05-l03",
        title: "Deploiement et observabilite",
        objective: "Automatiser le deploiement sur Vercel et connecter les outils de monitoring.",
        durationMinutes: 50,
        resources: [
          "https://vercel.com/docs/deployments",
          "https://sentry.io/for/nextjs/",
        ],
      },
    ],
    project: {
      title: "Lancement production",
      summary: "Deployer l application en production avec suivi des performances.",
      deliverables: [
        "Pipeline CI/CD documentee",
        "Tableau de bord de monitoring partage",
      ],
    },
  },
];

export type Modules = typeof modules;
export default modules;
