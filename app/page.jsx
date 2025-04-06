import Link from 'next/link';
import { Card } from 'components/card';
import { ContextAlert } from 'components/context-alert';
import { Markdown } from 'components/markdown';
import { RandomQuote } from 'components/random-quote';
import { getNetlifyContext } from 'utils';

const contextExplainer = `
This card demonstrates how to access and display the current Netlify context (e.g., 'production', 'deploy-preview', 'dev'). This is useful for conditional rendering and environment-specific configurations.
`;

const preDynamicContentExplainer = `
This section showcases dynamic content fetched client-side. The quote below is retrieved from the \`/quotes/random\` API route, demonstrating how to integrate dynamic data into your application.
`;

const postDynamicContentExplainer = `
Next.js Route Handlers, when deployed on Netlify, become Serverless Functions. This allows you to create API endpoints directly within your Next.js application. You can also add Serverless Functions to any site regardless of framework, with acccess to the full context data.
`;

const ctx = getNetlifyContext();

export default function Page() {
    return (
        <div className="flex flex-col gap-12 sm:gap-16">
            <section>
                <ContextAlert className="mb-6" />
                <h1 className="mb-4">Welcome to the WesCode Full-Stack Starter</h1>
                <p className="mb-6 text-lg">
                    Your starting point for building modern, full-stack web applications with Next.js and the power of serverless.
                </p>
                <div className="flex gap-4">
                    <Link href="https://nextjs.org/docs" className="btn btn-lg sm:min-w-64">
                        Next.js Docs
                    </Link>
                    <Link href="https://docs.netlify.com/" className="btn btn-lg sm:min-w-64">
                        Netlify Docs
                    </Link>
                </div>
            </section>
            {!!ctx && (
                <section className="flex flex-col gap-4">
                    <Markdown content={contextExplainer} />
                    <RuntimeContextCard />
                </section>
            )}
            <section className="flex flex-col gap-4">
                <Markdown content={preDynamicContentExplainer} />
                <RandomQuote />
                <Markdown content={postDynamicContentExplainer} />
            </section>
        </div>
    );
}

function RuntimeContextCard() {
    const title = `Netlify Context: running in ${ctx} mode.`;
    if (ctx === 'dev') {
        return (
            <Card title={title}>
                <p>Next.js will rebuild any page you navigate to, including static pages.</p>
            </Card>
        );
    } else {
        return (
            <Card title={title}>
                <p>This page was statically-generated at build time.</p>
            </Card>
        );
    }
}
