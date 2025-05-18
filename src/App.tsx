import Header from "./components/Header";
import LinkButton from "./components/LinkButton";
import { FaGithub, FaTwitter } from "react-icons/fa6";
import { LinkIcon, SunIcon, MoonIcon } from "@heroicons/react/24/outline";
import { useTheme } from "./hooks/useTheme";

export default function App() {
  const { theme, setTheme } = useTheme();

  return (
    <main className="
    relative min-h-screen flex flex-col items-center justify-center gap-6
    px-4 max-w-md mx-auto"
    >
      {/* Theme toggle */}
      <button
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        aria-label="Toggle Theme"
        className="
          absolute top-4 right-4 p-2 rounded-full
          bg-black/10 hover:bg-black/20
          dark:bg-white/10 dark:hover:bg-white/20
          transition
        "
      >
        {theme === "light" ? (
          <MoonIcon className="w-6 h-6 text-black" />
        ) : (
          <SunIcon className="w-6 h-6 text-yellow-300" />
        )}
      </button>

      {/* Header + Links */}
      <Header />

      <div className="w-full flex flex-col items-center gap-3 mt-4">
        <LinkButton
          href="https://github.com/Chukwuemekaeze"
          label="GitHub"
          icon={<FaGithub size={20} />}
        />
        <LinkButton
          href="https://twitter.com/chukwuemekaae"
          label="Twitter"
          icon={<FaTwitter size={20} />}
        />
        <LinkButton
          href="https://myportfolio.xyz"
          label="Portfolio"
          icon={<LinkIcon className="w-5 h-5" />}
        />
      </div>
    </main>
  );
}
