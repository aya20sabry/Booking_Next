import NavPlain from '../../Components/Navbar/NavPlain'
export default function Layout({ children }) {
    return (
      <html lang="en">





        <body>
        <NavPlain/>
            {children}</body>
      </html>
    );
  }