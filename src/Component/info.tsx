import Image from "next/image";
import email from "../../public/email-14-svgrepo-com.svg";
import phone from "../../public/phone-svgrepo-com.svg";
import bday from "../../public/date-svgrepo-com.svg";
import address from "../../public/address-pin-location-svgrepo-com.svg";
import git from "../../public/link-svgrepo-com.svg";
export default function Info() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        backgroundColor: "#B0C4D9",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          width: "100vw",
          justifyContent: "space-around",
          flexWrap: "wrap"
        }}
      >
        <div style={{ alignItems: "center" }}>
          <Image src={email} alt="hhh" width={20} height={20} />
          <span>taycoder2001@gmail.com</span>
        </div>
        <div style={{ alignItems: "center" }}>
          <Image src={phone} alt="hhh" width={20} height={20} />
          <span>0349383896</span>
        </div>
        <div style={{ alignItems: "center" }}>
          <Image src={bday} alt="hhh" width={20} height={20} />
          <span>15/06/2001</span>
        </div>
        <div style={{ alignItems: "center" }}>
          <Image src={address} alt="hhh" width={20} height={20} />
          <span>219/121 Dinh Cong Thuong</span>
        </div>
        <div style={{ alignItems: "center" }}>
          <Image src={git} alt="hhh" width={20} height={20} />
          <a
            href="https://github.com/taydmgch190016"
            style={{ color: "black" }}
          >
            https://github.com/taydmgch190016
          </a>
        </div>
      </div>
      
    </div>
  );
}
