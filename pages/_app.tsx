import { AppProps } from 'next/app';
import Head from 'next/head';
import '../styles/globals.css';
import { getAllPosts } from '@/lib/api';
import { BlogContext } from '@/lib/BlogContext';
import { PostType } from '@/interfaces/post';
import { useEffect } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  // console.log(pageProps);
  // useEffect(() => {
  //   localStorage.setItem('posts', JSON.stringify(pageProps.posts));
  // }, []);
  return (
    <>
      <Head>
        <meta name="viewport" content="viewport-fit=cover" />
      </Head>
      <BlogContext.Provider value={pageProps.posts}>
        <Component {...pageProps} />
      </BlogContext.Provider>
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
