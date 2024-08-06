import Link from 'next/link';

const navItemsLg = [
  {
    title: 'Home',
    url: '/',
  },
  {
    title: 'Submit_Info',
    url: '/submit',
  },
  {
    title: 'Contact Us',
    url: '/contact',
  },
];
const navItemsSm = [
  {
    title: 'Submit_Info',
    url: '/submit',
  },
];

function Logo() {
  return (
    <div className="w-32 md:w-40">
      <img src="/images/logo.png" alt="logo" className="" />
    </div>
  );
}
export default function Navbar() {
  return (
    <div className="py-3 px-3 md:px-16 bg-black/90">
      <div className="lg:flex hidden items-center justify-between w-full">
        <Logo />
        <nav>
          <ul className="flex gap-3 items-center text-white font-medium">
            {navItemsLg.map((item) => (
              <Link
                className={`hover:text-red-800 ${
                  item.url.includes('submit') ? 'font-bold text-red-700' : ''
                }`}
                href={item.url}
                key={item.title}
              >
                {item.title}
              </Link>
            ))}
          </ul>
        </nav>
      </div>
      <div className="lg:hidden flex items-center justify-between w-full">
        <Logo />
        <nav>
          <ul className="flex gap-3 items-center text-white font-medium">
            {navItemsSm.map((item) => (
              <Link
                className={`hover:text-red-800 ${
                  item.url.includes('submit') ? 'font-bold text-red-700' : ''
                }`}
                href={item.url}
                key={item.title}
              >
                {item.title}
              </Link>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}
