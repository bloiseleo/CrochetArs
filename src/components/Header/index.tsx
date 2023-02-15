import HeaderStyle from './Header.module.css';
import logo from '../../assets/logo.svg';
import hamburguer from '../../assets/hamburguer.svg';
import {useState} from 'react';

export default function Header() {

    const [menuOpen, setMenuOpen] = useState(false);

    function toggleMenu() {
        setMenuOpen((old) => !old);
    }

    const menuCss = menuOpen ? `${HeaderStyle.header__menu} ${HeaderStyle.header__menu__active}`:HeaderStyle.header__menu
    
    return(
        <header className={HeaderStyle.header}>
            <div className={`container ${HeaderStyle.header__content}`}>
                <div className={`${HeaderStyle.header__content__logo__container}`}>
                    <img src={logo} alt="Crochet Ars"/>
                </div>
                <div className={HeaderStyle.header__content__titles}>
                    <h1 className='title'>Crochet Ars</h1>
                    <h2 className='subtitle'>Produtos Artesanais</h2>
                    <p className={HeaderStyle.header__content__description}>Mostre todo o amor que você tem por alguém através do crochê</p>
                </div>
                <img className={HeaderStyle.header__menu__list__container__openIcon} onClick={toggleMenu} src={hamburguer}/>
                <nav className={menuCss}>
                        <span onClick={toggleMenu} className={HeaderStyle.header__menu__list__container__closeIcon}>X</span>
                        <ul className={HeaderStyle.header__menu__list}>
                            <li>Home</li>
                            <li>Produtos</li>
                            <li>Sobre mim</li>
                            <li>Pagamentos</li>
                            <li>Contato</li>
                        </ul>
                </nav>
            </div>
        </header>
    );
}