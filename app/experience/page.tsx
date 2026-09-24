export default function ExperiencePage() {
  return (
    <main className="flex w-full flex-1 flex-col px-6 py-16">
      <h1 className="text-3xl font-semibold tracking-tight">Experience</h1>
      <div className="flex w-full flex-row items-start gap-4">
        <div className="flex flex-col justify-center items-center">
          <div className="w-8 h-8 bg-white rounded-full"></div>
          <div className="h-20 w-px bg-gray-300"></div>
        </div>
        <div className="flex flex-col">
          <h1 className="text-white text-3xl">Jitta</h1>
          <p className="text-white text-lg">Present - April 2025</p>
        </div>
      </div>
      <div className="flex w-full flex-row items-start gap-4">
        <div className="flex flex-col justify-center items-center">
          <div className="w-8 h-8 bg-white rounded-full"></div>
          <div className="h-20 w-px bg-gray-300"></div>
        </div>
        <div className="flex flex-col">
          <h1 className="text-white text-3xl">Codeifai</h1>
          <p className="text-white text-lg">May 2022 - March 2025</p>
        </div>
      </div>
      <div className="flex w-full flex-row items-start gap-4">
        <div className="flex flex-col justify-center items-center">
          <div className="w-8 h-8 bg-white rounded-full"></div>
          <div className="h-20 w-px bg-gray-300"></div>
        </div>
        <div className="flex flex-col">
          <h1 className="text-white text-3xl">Fastwork</h1>
          <p className="text-white text-lg">June 2021 - April 2022</p>
        </div>
      </div>
    </main>
  );
}
