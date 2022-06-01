import React from "react";

import Logo from "../UI/Logo/Logo";
import Mail from "../UI/Mail/Mail";
import Contacts from "../UI/Contacts/Contacts";
import Copyright from "../UI/Copyright/Copyright";

import footer from "./Footer.module.scss";

import whatsapp_icon from "../../assets/icons/whatsapp.svg";
import vk_icon from "../../assets/icons/vk.svg";
import telegram_icon from "../../assets/icons/telegram.svg";

import whatsapp_mob_icon from "../../assets/icons/whatsapp-icon.svg";
import telegram_mob_icon from "../../assets/icons/telegram-icon.svg";
import vk_mob_icon from "../../assets/icons/vk-icon.svg";

const Footer = () => {
  return (
    <div className={footer.container}>
      <div className={footer.copyrigth}>
        <Copyright />
      </div>
      <div className={footer.innerContainer}>
        <div className={footer.contacts}>
          <Contacts
            homeNumber={"+123.456.789"}
            socs={["telegram", "whatsapp"]}
            mobileNumber={"+7 999 999 99 99"}
            email={"contackus@mail.com"}
          />
        </div>
        <div className={footer.additionalInfo}>
          <div className={footer.addI_City}>Ростов-на-Дону</div>
          <div className={footer.addI_Street}>
            <p>Пл. Народного</p> <p>Ополчения 2</p>
          </div>
          <div className={footer.addI_Imgs}>
            <a>
              <img src={whatsapp_icon} onDragStart={(e) => e.preventDefault()} />
            </a>
            <a>
              <img src={vk_icon} onDragStart={(e) => e.preventDefault()} />
            </a>
            <a>
              <img src={telegram_icon} onDragStart={(e) => e.preventDefault()} />
            </a>
          </div>
        </div>
      </div>
      <div className={footer.mobVer}>
        <div className={footer.mobVerLinksContainer}>
          <div className={footer.mobVerLink}>
            <a href={"https://telegram.org"}>
              <img src={telegram_mob_icon} alt={"img"} />
            </a>
          </div>
          <div className={footer.mobVerLink}>
            <a href={"https://vk.com"}>
              <img src={vk_mob_icon} alt={"img"} />
            </a>
          </div>
          <div className={footer.mobVerLink}>
            <a href={"https://whatsapp.com"}>
              <img src={whatsapp_mob_icon} alt={"img"} />
            </a>
          </div>
        </div>
        <div className={footer.mobVerContacts}>
          <div className={footer.mobVerNumber}>
            <span>+123.456.789</span>
          </div>
          <div className={footer.mobVerAddress}>
            <p>Ростов-на-Дону</p>
            <p>Пл.Ростовского Стрелкового </p>
            <p>Полка Народного Ополчения пл, 2</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
