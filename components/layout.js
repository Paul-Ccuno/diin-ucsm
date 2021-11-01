import Navigation from "components/navigation";

const Layout = ({ children }) => {
  return (
    <>
      <Navigation />
      <main>{children}</main>

      <style jsx>{`
        main {
          margin-top: 50px;
          height: calc(100vh - 50px);
        }
      `}</style>

      <style jsx global>{`
        *,
        body {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
      `}</style>
    </>
  );
};

export default Layout;
