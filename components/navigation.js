import Link from "next/link";

const Navigation = () => {
  const routes = [
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
      <div className="Left">
        <Link href="/">
          <a>Home</a>
        </Link>
      </div>
      <div className="Rigth">
        {routes.map(({ href, title }) => (
          <Link href={href} key={`route-${title}`}>
            <a>{title}</a>
          </Link>
        ))}
      </div>
      <style jsx>{`
        .Navigation {
          position: fixed;
          top: 0;
          width: 100vw;
          height: 50px;
          background-color: green;
          display: flex;
          justify-content: space-between;
        }
        .Navigation a {
          text-decoration: none;
          color: #fff;
          padding: 0 1rem;
          display: flex;
          align-items: center;
          height: 100%;
          transition: 0.5s;
        }
        .Rigth {
          display: flex;
        }
        .Rigth a:hover {
          background-color: red;
        }
      `}</style>
    </div>
  );
};

export default Navigation;
