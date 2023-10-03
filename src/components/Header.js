import { Link } from "react-router-dom";

function Header() {
  let Links = [
    { name: "Todo", link: "/todo" },
    { name: "Settings", link: "/settings" },
    { name: "Çıkış Yap", link: "/" },
  ];
  return (
    <div className="shadow-md w-full">
      <div className="md:px-10 py-4 px-7 md:flex justify-between items-center bg-white">
        {/* {logo here} */}
        <div className="flex text-2xl cursor-pointer items-center gap-2 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-7 h-7 text-blue-600"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z"
            />
          </svg>
          <span className="font-bold"> To-Do List</span>
        </div>
        <ul className="md:flex pl-9 md:pl-0">
          {Links.map((link) => (
            <li className="font-semibold my-7 md:my-0 md:ml-8 ">
              <Link to={link.link}>{link.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
export default Header;
{
  /* <Link to="todo">Todo</Link>
      <Link to="settings">Settings</Link>
      <Link to="/">Cikis Yap</Link> */
}
