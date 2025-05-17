import Header from "./components/Header";
import LinkButton from "./components/LinkButton";
import { FaGithub, FaTwitter } from "react-icons/fa6"; // Font Awesome 6 brands
import {
  LinkIcon, ArrowTopRightOnSquareIcon,
} from "@heroicons/react/24/outline";

export default function App() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-6 bg-slate-900 px-4">
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
