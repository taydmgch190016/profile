"use client";
import Image from "next/image";
import avt from "./avt.png";
import "bootstrap/dist/css/bootstrap.min.css";
import { useRive } from "@rive-app/react-canvas";
export default function Home() {
  const imgStyle = {
    borderRadius: "50%",
    border: "10px solid #966464",
    width: "10rem",
    height: "10rem",
    margin: "1em",
  };
  const { RiveComponent } = useRive({
    src: "./speaking_bear.riv",
    animations: ["success"],
    autoplay: true,
    
  });
  return (
    <div
      style={{
        display: "flex",
        marginTop: "4.5em",
        justifyContent: "center",
        backgroundColor: "#B0C4D9",
      }}
    >
      <div style={{
        display: "flex",
        justifyContent: "center"
      }}>

        <Image src={avt} alt="Đỗ Minh Tây" style={imgStyle} />
        <div style={{justifyItems:"center", alignItems: "center", marginBottom: "1em" }}>
          <RiveComponent style={{width: "100px", height: "100px"}}/>
          <div
            style={{
              borderBottom: "2px solid #9f4141",
              justifyItems: "center",
            }}
          >
            <h1>Đỗ Minh Tây</h1>
          </div>
          <div>
            <h6>JavaScript Developer</h6>
          </div>
        </div>
        </div>
      
    </div>
  );
}
