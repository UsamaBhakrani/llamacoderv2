import Image from "next/image";

import GithubIcon from "@/components/icons/github-icon";
import logo from "@/public/gptLogo.jpg";
import Link from "next/link";

export default function Header() {
  return (
    <header className="relative mx-auto flex w-full shrink-0 items-center justify-center py-6">
      <Link href="/">
        <Image
          src={logo}
          alt=""
          quality={100}
          className="mx-auto h-9 object-contain"
          priority
        />
      </Link>

      <div className="absolute right-3">
     
      </div>
    </header>
  );
}
