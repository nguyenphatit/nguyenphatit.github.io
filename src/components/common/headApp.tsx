import Head from "next/head";

interface Props {
    title: string;
    name?: string;
    description?: string;
    username?: string;
    author?: string;
    keywords?: string;
    children?: string | JSX.Element | JSX.Element[];
}

export default function HeadApp({ title, name, description, username, author, keywords, children }: Props) {

    const seo = {
        title: title || 'nguyenphatit',
        name: username || 'Phat Nguyen',
        description: description || 'nguyenphatit',
        username: username || 'nguyenphatit',
        author: author || 'Phat Nguyen',
        keywords: keywords || 'nguyenphatit',
    }

    return (
        <Head>
            <title>{seo.title}</title>
            <meta name="description" content={seo?.description} />
            <meta name="twitter:card" content={seo?.username} />
            <meta name="twitter:title" content={seo?.username} />
            <meta name="twitter:url" content={`https://twitter.com/${seo?.username}`} />
            <meta name="twitter:description" content={seo?.username} />
            <meta name="twitter:creator" content={seo?.username} />
            <meta name="keywords" content={seo?.keywords} />
            <meta name="author" content={`${seo?.author}`} />
            <meta name="username" content={`@${seo?.username}`} />
            {children}
        </Head>
    )
}
