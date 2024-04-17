export default function Navbar() {
  const NavbarItem = [
    {
      text: "Blogs",
      link: "/blog",
    },
    {
      text: "Users",
      link: "/user",
    },
  ];
  return (
    <>
      <ul className="flex gap-2 w-full bg-primary p-2 justify-center shadow-md mb-4 font-semibold text-white">
        {NavbarItem.map((item) => (
          <li key={item.text} className="p-2 hover:bg-secondary cursor-pointer">
            <a href={item.link}> {item.text}</a>
          </li>
        ))}
      </ul>
    </>
  );
}
