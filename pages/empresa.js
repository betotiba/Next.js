import Head from 'next/head';
import Menu from '../components/Menu';

function SobreEmpresa() {
    return (
        <div>
            <Head>
                <meta charSet="utf-8"/>
                <meta name="robots" content="index, follow" />
                <meta name="description" content="Descrição sobre a empresa" />
                <meta name="author" content="Nome do Autor" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <title>Empresa</title>
            </Head>
            <Menu />
            <p>Empresa</p>
        </div>
    )
}

export default SobreEmpresa;