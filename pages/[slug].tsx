import styled from 'styled-components';
import type { PostType } from '../interfaces/post';
import { getAllPosts, getPostBySlug } from '../lib/api';
import markdownToHtml from '../lib/markdownToHtml';
import Header from '../components/Header';

const Post = ({ post }: { post: PostType }) => {
  return (
    <>
      <Header />
      <Section>
        <Title>{post.title}</Title>
        <h6>{post.date}</h6>
        <Article dangerouslySetInnerHTML={{ __html: post.content }} />
      </Section>
    </>
  );
};

const Section = styled.section`
  padding-top: 10rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
`;
const Title = styled.h1`
  width: 100%;
  text-align: center;
  color: black;
  line-height: 2.8rem;
  font-size: 4rem;
`;
const Article = styled.article`
  padding: 0 8rem;

  /* h2 {
    font-size: 3.2rem;
    border-bottom: 0.2rem solid rgba(23, 42, 58, 0.1);
  }

  h3 {
    font-size: 2.8rem;
  }

  h4 {
    font-size: 2.2rem;
  }

  p {
    font-size: 1.5rem;
    line-height: 2.8rem;
  }

  ul > li {
    margin-bottom: 0px;
    margin-left: 1.6rem;
    font-size: 1.6rem;
  }

  ol > li {
    line-height: 2.8rem;
    margin-left: 1.6rem;
    font-size: 1.6rem;
  }

  pre {
    background-color: #fbfcfd;
    padding-left: 0.5em;
    color: gray;
    font-size: 1.2rem;
    word-wrap: balance;
  }

  pre > code {
    border-radius: 0%.8rem;
    font-size: 1.3rem;
  }

  blockquote {
    line-height: 2.4rem;
    padding: 3px 20px;
    margin: 0 0 20px;
    border-left: 5px solid #eee;
  }

  a {
    color: black;
    font-weight: bold;
    text-decoration: underline;
    &:hover {
      color: #61dafb;
    }
  }

  img {
    width: 100%;
  } */
`;

export async function getStaticProps({
  params,
}: {
  params: {
    slug: string;
  };
}) {
  const post = getPostBySlug(params.slug, [
    'title',
    'slug',
    'description',
    'date',
    'lastmod',
    'weight',
    'content',
    'fileName',
    'category',
  ]);
  const content = await markdownToHtml(post.content || '');

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug']);

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}

export default Post;
