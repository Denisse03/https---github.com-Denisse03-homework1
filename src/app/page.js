// "use client";
import Image from "next/image";
import homeStyle from "@/app/page.module.css";
import photo from "../app/gradcap.jpeg";
import photos from "../app/cap.jpeg";
import pic from "../app/flower.jpeg";

export default function Home() {
  const capStyle = {
    width: "300px",
    height: "300px",
  };

  return (
    <main>
      <nav className={homeStyle.homeNav}>
        <ul>
          <li>
            <a href="https://www.google.com/?client=safari">Home</a>
          </li>
          <li>
            <a href="https://www.youtube.com">About</a>
          </li>
          <li>
            <a href="https://www.amazon.com">Contact</a>
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
          <Image
            src={photo}
            style={{ width: "250px", height: "250px" }}
          ></Image>

          <p>Price: $20.99</p>
          <button>Buy Now</button>
        </div>
        <div style={capStyle} className="grad2">
          <h3> Graduation Cap Topper 2</h3>
          <Image
            src={photos}
            style={{ width: "250px", height: "250px" }}
          ></Image>

          <p>Price: $30.99</p>
          <button>Buy Now</button>
        </div>
        <div style={capStyle} className="grad3">
          <h3> Graduation Cap Topper 3</h3>
          <Image src={pic} style={{ width: "250px", height: "250px" }}></Image>

          <p>Price: $15.99</p>
          <button>Buy Now</button>
        </div>
      </div>
    </main>
  );
}
