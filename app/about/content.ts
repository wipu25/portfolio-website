import { CIRCLE_FLAGS_BASE_URL } from "@/lib/constants";

export const CARD_DELAYS = [0, 0.15, 0.3, 0.45];

export const ABOUT_ME_TEXT =
  "Software Engineer specializing in mobile development with hands-on experience across backend and frontend development. Built production backend systems and developed frontend personal projects while delivering high-quality mobile applications. Passionate about solving real-world problems, building scalable products, and continuously learning complex systems and new technologies. Currently expanding as a full-stack engineer to create end-to-end solutions.";

export const skillGroups = [
  {
    label: "Mobile Development",
    items: [
      { slug: "kotlin", title: "Kotlin" },
      { slug: "swift", title: "Swift" },
      { slug: "flutter", title: "Flutter" },
    ],
  },
  {
    label: "Web Development",
    items: [
      { slug: "react", title: "React" },
      { slug: "nextdotjs", title: "Next.js" },
      { slug: "nestjs", title: "Nest.js" },
      { slug: "vuedotjs", title: "Vue.js" },
      { slug: "tailwindcss", title: "Tailwind CSS" },
      { slug: "html5", title: "HTML" },
      { slug: "css", title: "CSS" },
    ],
  },
  {
    label: "DevOps",
    items: [
      { slug: "docker", title: "Docker" },
      { slug: "git", title: "Git" },
      { slug: "githubactions", title: "GitHub Actions" },
      { slug: "codemagic", title: "CodeMagic" },
      { slug: "fastlane", title: "Fastlane" },
    ],
  },
  {
    label: "Database",
    items: [{ slug: "mysql", title: "MySQL" }],
  },
  {
    label: "Others",
    items: [
      { slug: "figma", title: "Figma" },
      { slug: "jira", title: "Jira" },
      { slug: "notion", title: "Notion" },
      {
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/slack/slack-original.svg",
        title: "Slack",
      },
    ],
  },
];

export const education = {
  logo: "https://upload.wikimedia.org/wikipedia/commons/9/9c/Mahidol_U.svg",
  name: "Mahidol University",
  degree: "B.Sc. in Information and Communication Technology",
  gpa: "GPA 3.71/4.00",
};

export const languages = [
  {
    flag: `${CIRCLE_FLAGS_BASE_URL}/gb.svg`,
    name: "English",
    note: "TOEIC 940/990",
  },
  { flag: `${CIRCLE_FLAGS_BASE_URL}/th.svg`, name: "Thai", note: "Native" },
];
