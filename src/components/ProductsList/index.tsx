import Product from './Product';
import style from './ProductsList.module.css';

export default function ProductsList() {
    const products = [{
        title: "Bonecos"
    }, {
        title: "Receitas"
    }, {
        title: "Chaveiros"
    }, {
        title: "Roupas"
    }];

    return(
        <section className={style.products}>
            <div className={style.productsContent + " container"}>
                <h2 className='subtitle_bodyTitle'>Como você quer mostrar sua essência?</h2>
                <ul className={style.products__list}>
                    {products.map((product, index) => 
                        <Product key={index}>
                            {product.title}
                        </Product> 
                    )}
            </ul>
            </div>
        </section>
    );
}