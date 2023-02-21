import style from './AboutMe.module.css';
import talita from '../../assets/talita.png';

export default function AboutMe() {
    return(
        <section className={style.aboutMe}>
            <div className={`${style.aboutMe__container} container`}>
                <h2 className='subtitle_bodyTitle'>Um pouco sobre mim</h2>
                <div className={style.aboutMe__content}>
                    <img src={talita} alt="Responsável pela loja" />
                    <p className={style.aboutMe__text}>Lorem ipsum do   lor sit amet, consectetur adipiscing elit. Nullam  semper ultrices metus, ut feugiat ex venenatis et. Vivamus in turpis sit amet ipsum tempor luctus in nec ipsum. Donec varius commodo orci lobortis efficitur. Praesent ornare egestas felis, sit amet fermentum magna egestas vitae. </p>
                </div>
                <p className={style.aboutMe__textComplement}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam  semper ultrices metus, ut feugiat ex venenatis et. Vivamus in turpis sit amet ipsum tempor luctus in nec ipsum. Donec varius commodo orci lobortis efficitur. Praesent ornare egestas felis, sit amet fermentum magna egestas vitae. </p>
            </div>
        </section>
    );
}