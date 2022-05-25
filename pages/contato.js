import Head from 'next/head';
import Menu from '../components/Menu';

function Contato() {
    return (
        <div>
            <Head>
                <meta charSet="utf-8"/>
                <meta name="robots" content="index, follow" />
                <meta name="description" content="Contato" />
                <meta name="author" content="Nome do Autor" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <title>Contato</title>
            </Head>
            <Menu />
            <p>Página de contato</p>
        </div>
    )
}

export default Contato;