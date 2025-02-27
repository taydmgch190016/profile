"use client";
import Image from "next/image";
import avt from "./avt.png";
import email from "../../public/email-14-svgrepo-com.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import { useRive } from "@rive-app/react-canvas";
export default function Home() {
  const imgStyle = {
    borderRadius: "50%",
    border: "10px solid #966464",
    width: "15em",
    height: "15em",
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
        height: "100vh",
        marginTop: "4.5em",
        justifyContent: "center",
        backgroundColor: "#B0C4D9",
        borderRadius: "2rem",
      }}
    >

        <Image src={avt} alt="Đỗ Minh Tây" style={imgStyle} />
        <div style={{justifyItems:"center", alignItems: "center", marginBottom: "1em" }}>
          <RiveComponent style={{width: "150px", height: "150px"}}/>
          <div
            style={{
              borderBottom: "2px solid #9f4141",
              justifyItems: "center",
            }}
          >
            <h1>Đỗ Minh Tây</h1>
          </div>
          <div>
            <h3>JavaScript Developer</h3>
          </div>
        </div>
      {/* <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          width: "100vw",
        }}
      >
        <Image src={email} alt="hhh" width={20} height={20} />
      </div> */}
    </div>
  );
}
