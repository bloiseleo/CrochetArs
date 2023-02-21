import style from './SaibaMais.module.css'


export default function SaibaMaisLink(
    props: {
        href: string
    }
) {
    return(
        <a href={props.href} className={style.saibaMaisLink}>
            Saiba Mais
        </a>
    );
}