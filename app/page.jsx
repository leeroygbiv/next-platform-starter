import Image from 'next/image';
import Link from 'next/link';
import { Card } from 'components/card';
import { FeedbackForm } from 'components/feedback-form';
import { RandomQuote } from 'components/random-quote';
import { Markdown } from 'components/markdown';
import { ContextAlert } from 'components/context-alert';
import { getNetlifyContext } from 'utils';

const cards = [
    //{ text: 'Hello', linkText: 'someLink', href: '/' }
];

const contextExplainer = `
The card below is rendered on the server based on the value of \`process.env.CONTEXT\`
([docs](https://docs.netlify.com/configure-builds/environment-variables/#build-metadata)):
`;

const ctx = getNetlifyContext();

export default function Page() {
    return (
        <main className="flex flex-row flex-wrap grow gap-8 lg:flex-col lg:flex-nowrap">
            <div className="flex flex-col grow lg:flex-row">
                <section className="flex flex-col items-start justify-center gap-3 w-full h-full p-6 text-white [text-shadow:_0_.125em_.25em_rgba(0,0,0,0.2)] bg-gradient-to-br from-primary/80 to-primary lg:gap-6 lg:p-12 lg:pl-[10%]">
                    <div className="flex flex-col gap-3 lg:gap-6 w-full max-w-md mx-auto">
                        <ContextAlert />
                        <h1 className="flex items-center gap-4 mb-0">
                            <Image className="w-16" src="/images/btc-reverse.svg" alt="" width={100} height={100} />
                            <span>OnlySaylor</span>
                        </h1>
                        <p className="text-[1.75rem] leading-[1.5]">Support your favorite Saylor</p>
                    </div>
                </section>
                <section className="flex flex-col items-start justify-center gap-3 w-full h-full p-6 sm:gap-6 lg:p-12 lg:pr-[10%]">
                    <div className="flex flex-col gap-3 lg:gap-6 w-full max-w-md mx-auto">
                        <FeedbackForm />
                    </div>
                </section>
            </div>
            {/*!!ctx && (
                <section className="flex flex-col gap-4">
                    <Markdown content={contextExplainer} />
                    <RuntimeContextCard />
                </section>
            )*/}
        </main>
    );
}

function RuntimeContextCard() {
    const title = `Netlify Context: running in ${ctx} mode.`;
    if (ctx === 'dev') {
        return <Card title={title} text="Next.js will rebuild any page you navigate to, including static pages." />;
    } else {
        return <Card title={title} text="This page was statically-generated at build time." />;
    }
}
