import Link from "next/link";

function Layout({ children }) {
  return (
    <>
      <header className="header">
        <h2>CRM</h2>
        <Link href="/add-customer">Add Customer</Link>
      </header>
      <div className="main">{children}</div>
      <footer className="footer">
        <a
          href="https://github.com/Douzandeh/crm"
          target="_blank"
          rel="noreferrer"
        >
          CRM
        </a>{" "}
        | Created by{" "}
        <a href="https://github.com/Douzandeh" target="_blank" rel="noreferrer">
          Hossein Douzandeh
        </a>{" "}
        with ❤️
      </footer>
    </>
  );
}

export default Layout;
