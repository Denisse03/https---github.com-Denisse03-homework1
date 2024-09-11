// "use client";
// import Image from "next/image";
import homeStyle from "@/app/page.module.css";

export default function Home() {
  const capStyle = {
    backgroundColor: "red",
    width: "300px",
    height: "300px",
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

      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          marginTop: "20px",
        }}
        className="gradCap"
      >
        <div style={capStyle} className="grad1">
          <h3> Graduation Cap Topper 1</h3>
          <p>Price: $20.99</p>
          <button>Buy Now</button>
        </div>
        <div style={capStyle} className="grad2">
          <h3> Graduation Cap Topper 2</h3>
          <p>Price: $20.99</p>
          <button>Buy Now</button>
        </div>
        <div style={capStyle} className="grad3">
          <h3> Graduation Cap Topper 3</h3>
          <p>Price: $20.99</p>
          <button>Buy Now</button>
        </div>
      </div>
    </main>
  );
}
