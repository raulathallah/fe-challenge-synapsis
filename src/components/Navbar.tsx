"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiUsers } from "react-icons/fi";
import { GoBook } from "react-icons/go";

export default function Navbar() {
  const pathname = usePathname();
  const NavbarItem = [
    {
      icon: <GoBook />,
      text: "Blogs",
      link: "/blog",
    },
    {
      icon: <FiUsers />,
      text: "Users",
      link: "/user",
    },
  ];
  return (
    <>
      <ul className="gap-2 flex w-full justify-center border-gainsboro border-b bg-white h-full p-4 font-semibold text-primary mb-4 ">
        {NavbarItem.map((item) => (
          <Link href={item.link} key={item.text}>
            <li
              className={`px-4 py-2 mb-1 hover:bg-primary hover:text-white cursor-pointer duration-150 ${
                pathname.includes(item.link) && "border-b-2 border-primary"
              }`}
            >
              <div className="flex items-center gap-2">
                <div className="text-2xl">{item.icon}</div>

                <div>{item.text}</div>
              </div>
            </li>
          </Link>
        ))}
      </ul>
    </>
  );
}
