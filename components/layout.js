import Navigation from "components/navigation"

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
    </>
  )
}

export default Layout
