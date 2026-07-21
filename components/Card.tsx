export default function Card({
  title,
  children,
  delay = 0,
}: {
  title: string;
  children: React.ReactNode;
  delay?: number;
}) {
  return (
    <section
      className="animate-[slide-up_0.6s_ease-out_both] rounded-3xl border bg-white/[0.03] p-8 shadow-xl shadow-green-600 dark:border-white/[.08]"
      style={{ animationDelay: `${delay}s` }}
    >
      <h2 className="flex items-center gap-2 text-2xl font-semibold uppercase tracking-tight">
        {title}
      </h2>
      <div className="mt-6">{children}</div>
    </section>
  );
}
