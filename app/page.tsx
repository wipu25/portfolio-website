export default function Home() {
  return (
    <main className="relative flex flex-1 items-center justify-center">
      <div className="fixed inset-0 -z-10 overflow-hidden bg-black">
        <div className="absolute -inset-[10px] bg-[radial-gradient(circle_at_top_left,rgba(34,197,94,0.8),transparent_20%),radial-gradient(circle_at_bottom_right,rgba(16,185,129,0.4),transparent_45%)] animate-[background-pulse_2s_ease-in-out_infinite]" />
      </div>
      <h1 className="text-4xl font-bold text-center">
        WELCOME TO MY PORTFOLIO
      </h1>
    </main>
  );
}
