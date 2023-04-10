import Head from "next/head";

interface Props {
    title: string;
    name?: string;
    description?: string;
    username?: string;
    author?: string;
    keyword?: string;
    children?: string | JSX.Element | JSX.Element[];
}

export default function HeadApp({ title, username, name, description, author, keyword, children}: Props) {

    const seo = {
        title: title || 'nguyenphatit',
        name: username || 'Phat Nguyen',
        description: description || '',
        username: username || 'nguyenphatit',
        author: author || 'Phat Nguyen',
        keyword: keyword || 'nguyenphatit',
    }

    return (
        <Head>
            <title>{seo.title}</title>
            <meta name="description" content={seo.username} />
            <meta name="description" content={seo.name} />
            <meta name="description" content={seo.author} />
            <meta name="description" content={seo.description} />
            <meta name="twitter:card" content={username} />
            <meta name="twitter:title" content={username} />
            <meta name="twitter:url" content={`https://twitter.com/${username}`} />
            <meta name="twitter:description" content={username} />
            <meta name="twitter:creator" content={username} />
            <meta name="keywords" content={keyword} />
            <meta name="author" content={name} />
            <meta name="author" content={username} />
            <meta name="author" content={`@${username}`} />
            {children}
        </Head>
    )
}
