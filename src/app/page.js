// "use client";
import homeStyle from "@/app/page.module.css";

export default function Home() {
  const headerStyle = {
    backgroundColor: "lightcoral",
    height: "100px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <main>
      <nav className={homeStyle.homeNav}>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">About</a>
          </li>
          <li>
            <a href="/">Contact</a>
          </li>
        </ul>
      </nav>
    </main>
  );
}
