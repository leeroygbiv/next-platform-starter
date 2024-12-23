import '../styles/globals.css';
import { Footer } from '../components/footer';
import { Header } from '../components/header';

export const metadata = {
    title: {
        template: '%s | Netlify',
        default: 'OnlySaylor'
    }
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" data-theme="lofi">
            <head>
                <link rel="icon" href="/images/btc.svg" sizes="any" />
            </head>
            <body className="antialiased text-black bg-white">
                <div className="flex flex-col min-h-screen">
                    <Header />
                    <div className="flex grow">{children}</div>
                    <Footer />
                </div>
            </body>
        </html>
    );
}
