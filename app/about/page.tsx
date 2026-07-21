import Card from "@/components/Card";
import ContentItem from "@/components/ContentItem";
import { SIMPLE_ICONS_BASE_URL } from "@/lib/constants";
import {
  ABOUT_ME_TEXT,
  CARD_DELAYS,
  education,
  languages,
  skillGroups,
} from "./content";

export default function AboutPage() {
  return (
    <main className="w-full flex-1 px-6 py-10">
      <div className="mx-auto flex w-full max-w-3xl flex-col gap-14">
        <Card title="About Me" delay={CARD_DELAYS[0]}>
          <p className="max-w-2xl text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
            {ABOUT_ME_TEXT}
          </p>
        </Card>

        <Card title="Technical Skills" delay={CARD_DELAYS[1]}>
          <div className="flex flex-col gap-6">
            {skillGroups.map((group) => (
              <div key={group.label}>
                <h3 className="text-xs font-medium uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
                  {group.label}
                </h3>
                <div className="mt-3 flex flex-wrap gap-x-6 gap-y-4">
                  {group.items.map((item) => (
                    <ContentItem
                      key={item.title}
                      src={item.src ?? `${SIMPLE_ICONS_BASE_URL}/${item.slug}`}
                      title={item.title}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card title="Education" delay={CARD_DELAYS[2]}>
          <div className="flex items-center gap-5">
            <img
              src={education.logo}
              alt={education.name}
              className="h-14 w-14"
            />
            <div>
              <p className="font-medium">{education.name}</p>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                {education.degree}
              </p>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                {education.gpa}
              </p>
            </div>
          </div>
        </Card>

        <Card title="Languages" delay={CARD_DELAYS[3]}>
          <div className="flex flex-wrap gap-2">
            {languages.map(({ flag, name, note }) => (
              <ContentItem
                key={name}
                src={flag}
                title={name}
                description={note}
              />
            ))}
          </div>
        </Card>
      </div>
    </main>
  );
}
