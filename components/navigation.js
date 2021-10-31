import Link from "next/link";

const Navigation = () => {
  const routes = [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Login",
      href: "/login",
    },
    {
      title: "Register",
      href: "/register",
    },
  ];

  return (
    <div className="Navigation">
      {routes.map(({ href, title }) => (
        <Link href={href} key={`route-${title}`}>
          <a>{title}</a>
        </Link>
      ))}
      <style jsx>{`
        .Navigation {
          position: fixed;
          width: 100vw;
          height: 200px;
          background-color: green;
        }
      `}</style>
    </div>
  );
};

export default Navigation;
