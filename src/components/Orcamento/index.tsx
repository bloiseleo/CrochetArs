import style from './Orcamento.module.css';


export default function Orcamento() {
    return(
        <section className={style.orcamento}>
            <div className="container">
                <h2 className="subtitle_bodyTitle">Orçamentos e Encomendas</h2>
                <p>Os orçamentos são feitos diretamente com a artista via whats app ou pelo direct do instagram da loja. Por segurança, antes da produção ser iniciada, deve ser realizado o pagamento de 50% do valor total do orçamento, tendo em vista o custo de produção e dos materiais. Depois da comprovação do pagamento, a produção é iniciada. Todo o acompanhamento e troca de informações será realizado pelo meio de contato onde o orçamento foi combinado. Depois de finalizar o produto, a entrega pode ser combinada diretamente com o artista, caso você esteja localizado no Rio de Janeiro, RJ, ou é realizada pelos correios para todo o Brasil.</p>
                <p> Depois da comprovação do pagamento, a produção é iniciada. Todo o acompanhamento e troca de informações será realizado pelo meio de contato onde o orçamento foi combinado. Depois de finalizar o produto, a entrega pode ser combinada diretamente com o artista, caso você esteja localizado no Rio de Janeiro, RJ, ou é realizada pelos correios para todo o Brasil.</p>
                <h2 className="subtitle_bodyTitle">Meios de Pagamento</h2>
                <p>O pagamento pode ser realizado através do PIX, transferência, cartões e boleto bancário. </p>
            </div>
        </section>
    );
}