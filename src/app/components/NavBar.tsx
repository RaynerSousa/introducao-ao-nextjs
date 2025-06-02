import Image from "next/image";

interface NavBarProps {
  links: {
    href: string;
    label: string;
  }[];
}

export default function NavBar({ links }: NavBarProps) {
  return (
    <nav className="bg-blue-500 shadow-sm">
      <div className="px-6">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Image
              src="nextjs-icon.svg"
              alt="Logo"
              width={50}
              height={50}
              className=""
            />
            <span className="ml-2">NextApp</span>
          </div>

          {/* Links */}
          <div className="flex text-lg space-x-10  ">
            {links.map((link, indice) => (
              <a
                key={indice}
                href={link.href}
                className="font-semibold hover:text-lime-500"
              >
                {link.label}
              </a>
            ))}
            {/* <a href="links.href" className="font-semibold hover:text-lime-500">
              {links[0].label}
            </a>
            <a href="links.href" className="font-semibold hover:text-lime-500">
              {links[1].label}
            </a>
            <a href="links.href" className="font-semibold hover:text-lime-500">
              {links[2].label}
            </a> */}
          </div>
        </div>
      </div>
    </nav>
  );
}
