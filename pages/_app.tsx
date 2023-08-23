import { AppProps } from 'next/app';
import Head from 'next/head';
import '../styles/globals.css';
import '../styles/prism.css';
import { getAllPosts } from '@/lib/api';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="user-scalable=no, initial-scale=1.0, maximum-scale=1.0 ,minimum-scale=1.0, width=device-width, viewport-fit=cover"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export async function getStaticProps() {
  const posts = getAllPosts([
    'slug',
    'title',
    'date',
    'coverImage',
    'category',
  ]);

  return {
    props: {
      posts,
    },
  };
}

export default MyApp;
