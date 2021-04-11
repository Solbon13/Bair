import Head from 'next/head'
import Link from 'next/link'

export const Layout = ({ children, title = "Crypto Tracker" }) => {
    return (
        <div className="layout">
            <Head>
                <title>{title}</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <header className="header">
                <Link href="/">
                    <a href="#" style={{fontSize: '3em' }}>
                        БАИР
                    </a>
                </Link>
            </header>
            <mani>{children}</mani>
        </div>
    )
}