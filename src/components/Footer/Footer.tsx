import React, {useEffect} from 'react';
import { useParams, useLocation, useRouteMatch } from 'react-router-dom'

import Contacts from '../UI/Contacts/Contacts';
import Copyright from '../UI/Copyright/Copyright';
import ArrowUp from "./ArrowUp/ArrowUp";

import footer from './Footer.module.scss';

import whatsapp_icon from '../../assets/icons/whatsapp.png';
import vk_icon from '../../assets/icons/vk.png';
import telegram_icon from '../../assets/icons/telegram.png';

import whatsapp_mob_icon from '../../assets/icons/whatsapp_mob_icon.png';
import telegram_mob_icon from '../../assets/icons/telegram_mob_icon.png';
import vk_mob_icon from '../../assets/icons/vk_mob_icon.png';

import ArrowUpController from "./ArrowUp/ArrowUp.controller";


function Footer() {

  const match_team_member = useRouteMatch('/team/:id')
  const match_project = useRouteMatch('/projects/:id')

  useEffect(() => {
     (async () => {
      await ArrowUpController.FindArrow()
      await ArrowUpController.FindFooter()
      await ArrowUpController.SubEvents()
    })()

    return () => {
      ArrowUpController.UnsubEvents()
    }
  }, [])

  return (
    <div className={[footer.container, (match_project || match_team_member) ? footer.less : ''].join(' ')} id={'footer'}>
      {
        window.screen.width >= 1200 &&
          <ArrowUp/>
      }
      <div className={footer.copyrigth}>
        <Copyright />
      </div>
      <div className={footer.innerContainer} id={'footer-inner-container'}>
        <div className={footer.contacts}>
          <Contacts
            homeNumber="+123.456.789"
            socs={['telegram', 'whatsapp']}
            mobileNumber="+7 999 999 99 99"
            email="contackus@mail.com"
          />
        </div>
        <div className={footer.additionalInfo}>
          <div className={footer.addI_City}>Ростов-на-Дону</div>
          <div className={footer.addI_Street}>
            <p>Пл. Народного</p>
            <p>Ополчения 2</p>
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
        <div className={[footer.mobVerLinksContainer, (match_project || match_team_member) ? footer.full : ''].join(' ')}>
          <div className={footer.mobVerLink}>
            <a href="https://telegram.org">
              <img src={telegram_mob_icon} alt="img" />
            </a>
          </div>
          <div className={footer.mobVerLink}>
            <a href="https://vk.com">
              <img src={vk_mob_icon} alt="img" />
            </a>
          </div>
          <div className={footer.mobVerLink}>
            <a href="https://whatsapp.com">
              <img src={whatsapp_mob_icon} alt="img" />
            </a>
          </div>
        </div>
        <div className={[footer.mobVerContacts, (match_project || match_team_member) ? footer.hide : ''].join(' ')}>
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
}

export default Footer;
