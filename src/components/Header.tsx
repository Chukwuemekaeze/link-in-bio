export default function Header() {
  return (
    <header className="flex flex-col items-center gap-2">
      <img
        src="/profile.png"
        alt="Profile"
        className="w-24 h-24 rounded-full border-4 border-white/20"
      />
      <h1 className="text-3xl font-bold text-black dark:text-white">
        Chukwuemeka Eze
      </h1>
      <p className="text-slate-600 dark:text-slate-400">
        CS student · Builder · Fitness nerd
      </p>
    </header>
  );
}
