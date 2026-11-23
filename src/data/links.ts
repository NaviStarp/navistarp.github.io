export interface LinkItem {
  id: string;
  title: string;
  description: string;
  url: string;
  icon: 'calendar' | 'book' | 'briefcase' | 'github' | 'terminal' | 'link' | 'graduation-cap';
  tags: string[];
  shortcut?: string;
  badge?: {
    text: string;
    type: 'live' | 'wip' | 'new';
  };
  featured?: boolean;
}

export interface ProfileData {
  name: string;
  handle: string;
  greeting?: string;
  role: string;
  bio?: string;
  statusText?: string;
}

export const profile: ProfileData = {
  name: "Navistarp",
  handle: "@navistarp",
  greeting: "Mi Espacio Personal",
  role: "Ingeniería Informática",
  bio: "Accesos directos y herramientas de uso diario.",
  statusText: "Activo",
};

export const links: LinkItem[] = [
  {
    id: "horario",
    title: "Horario & Notas Rápidas",
    description: "Horario diario, bloc de notas y diario personal con sincronización Supabase.",
    url: "https://navistarp.github.io/horario/",
    icon: "calendar",
    shortcut: "1",
    tags: ["PWA", "Supabase", "Diario"],
    badge: {
      text: "Online",
      type: "live",
    },
    featured: true,
  },
  {
    id: "apuntes",
    title: "Apuntes II_2 (Quartz)",
    description: "Publicación digital de apuntes del Grado en Ingeniería Informática y grafo de notas.",
    url: "https://navistarp.github.io/II_2_Quartz/",
    icon: "book",
    shortcut: "2",
    tags: ["Quartz", "Universidad", "Notas"],
    badge: {
      text: "Activo",
      type: "live",
    },
    featured: true,
  },
  {
    id: "agora-uned",
    title: "Ágora UNED",
    description: "Campus virtual universitario, consulta de asignaturas, entregas y foros.",
    url: "https://agora.uned.es/my/",
    icon: "graduation-cap",
    shortcut: "3",
    tags: ["UNED", "Campus Virtual", "Moodle"],
    badge: {
      text: "Campus",
      type: "live",
    },
    featured: true,
  },
  {
    id: "portfolio",
    title: "Portfolio",
    description: "Espacio reservado para proyectos futuros y showcase personal.",
    url: "#",
    icon: "briefcase",
    tags: ["En desarrollo"],
    badge: {
      text: "Próximamente",
      type: "wip",
    },
    featured: false,
  },
];
