export default function ContentItem({
  src,
  title,
  description,
}: {
  src: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="flex flex-col items-center rounded-xl border border-black/[.08] bg-zinc-100 px-4 py-3 shadow-sm transition-shadow hover:shadow-md dark:border-white/[.145]">
      <img
        src={src}
        alt={`${title} Icon`}
        className="h-10 w-10 object-contain"
      />
      <span className="text-md mt-4 font-medium text-black">{title}</span>
      {description && (
        <span className="text-sm font-medium text-gray-500">{description}</span>
      )}
    </div>
  );
}
