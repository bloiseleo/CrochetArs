import logo from '../../../assets/logo.svg';
import style from '../ProductsList.module.css';
import SaibaMaisLink from '../SaibaMaisLink';

interface IProduct {
    children: string
}

export default function Product(props: IProduct) {
    return(
        <li className={style.products__list__item}>
            <img src={logo} alt={props.children}/>
            <span>{props.children}</span>
            <SaibaMaisLink href='#'/>
        </li>
    );
}