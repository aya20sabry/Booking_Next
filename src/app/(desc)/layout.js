import NavPlain from "../../Components/Navbar/NavPlain";
export default function Layout({ children }) {
    return (<>
      <html lang="en">


        <body>
          <section>
          <NavPlain/>

          </section>
            {children}
            </body>
      </html>
      </>);
  }

