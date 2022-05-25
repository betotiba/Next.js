import Head from 'next/head';
import Menu from '../components/Menu';

function Home() {
    return (
        <div>
            <Head>
                <meta charSet="utf-8" />
                <meta name="robots" content="index, follow" />
                <meta name="description" content="Site sobre.." />
                <meta name="author" content="Nome do Autor " />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<link rel="icon" href="../public/icone.png" type="image/x-icon" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" />
                <title>Home | Site</title>
            </Head>
            <Menu />
            <p>Home</p>
        </div>
    );
}

export default Home;