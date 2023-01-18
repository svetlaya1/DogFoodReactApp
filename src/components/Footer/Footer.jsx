/* eslint-disable */
import { Link, NavLink } from 'react-router-dom'
import footerStyles from './footer.module.css'
import logoImg from './logo.png'
import telegramImg from './socials/telegram.png'
import watsappImg from './socials/whatsapp.png'
import viberImg from './socials/viber.png'
import instaImg from './socials/instagram.png'
import vkImg from './socials/vk.png'


export const Footer = () => {

  return (
    <footer className={footerStyles.wr}>
        <div className={footerStyles.container}>
            <div className={footerStyles.containerLeft}>
                <Link to="/" className={footerStyles.logo}>
                    <img className={footerStyles.logoImg} src={logoImg}>
                    </img>
                    <p>
                        Doog Food
                    </p>
                </Link>
                <p className={footerStyles.logoCopy}>&copy;"Интернет магазин Dog Food"</p>
            </div>


            <div className={footerStyles.menu}>
                <NavLink className={footerStyles.menuLink} to="/goods">Каталог</NavLink>
                <NavLink className={footerStyles.menuLink} to="/">Акции</NavLink>
                <NavLink className={footerStyles.menuLink} to="/">Новости</NavLink>
                <NavLink className={footerStyles.menuLink} to="/">Отзывы</NavLink>
                <NavLink className={footerStyles.menuLink} to="/">Оплата и доставка</NavLink>
                <NavLink className={footerStyles.menuLink} to="/">Часто спрашивают</NavLink>
                <NavLink className={footerStyles.menuLink} to="/">Обратная связь</NavLink>
                <NavLink className={footerStyles.menuLink} to="/">Контакты</NavLink>
            </div>

            <div className={footerStyles.contacts}>

                <p className={footerStyles.contactsText}>Мы на связи</p>


                <div>
                    <Link className={footerStyles.contactsTel} to="tel:+79999999999">
                        <p>8 (999) 999-99-99</p>
                    </Link>
                    <Link className={footerStyles.contactsMail} to="mailto:dogfood@gmail.com">
                        <p>dogfood@gmail.com</p>
                    </Link>
                </div>

                <div className={footerStyles.contactsLinks}>
                    <Link to="/">
                        <img className={footerStyles.imgSocials} src={telegramImg}>
                        </img>
                    </Link>
                    <Link to="/">
                        <img className={footerStyles.imgSocials}  src={watsappImg}>
                        </img>
                    </Link>
                    <Link to="/">
                        <img className={footerStyles.imgSocials} src={viberImg}>
                        </img>
                    </Link>
                    <Link to="/">
                        <img className={footerStyles.imgSocials} src={instaImg}>
                        </img>
                    </Link>
                    <Link to="/">
                        <img className={footerStyles.imgSocials} src={vkImg}>
                        </img>
                    </Link>
                </div>

            </div>
        </div>
    </footer>
  )
}