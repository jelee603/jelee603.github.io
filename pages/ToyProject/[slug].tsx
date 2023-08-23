import styled from 'styled-components';
import type { PostType } from '@/interfaces/post';
import { getAllPosts, getPostBySlug } from '@/lib/api';
import markdownToHtml from '@/lib/markdownToHtml';
import { NextPage } from 'next';
import DefaultLayout from '@/layout/DefaultLayout';

const Post: NextPage<{ posts: PostType[]; post: PostType }> = ({ post }) => {
  return (
    <DefaultLayout>
      <Section>
        <Title>{post.title}</Title>
        <h6>{post.date}</h6>
        <Article dangerouslySetInnerHTML={{ __html: post.content }} />
      </Section>
    </DefaultLayout>
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
  font-size: 4rem;
`;
const Article = styled.article`
  padding: 0 4rem;
  width: 100%;
`;

export async function getStaticProps({
  params,
}: {
  params: {
    slug: string;
    category: string;
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
  const posts = getAllPosts([
    'slug',
    'title',
    'date',
    'coverImage',
    'category',
  ]);

  return {
    props: {
      post: {
        ...post,
        content,
      },
      posts,
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
          category: post.category,
        },
      };
    }),
    fallback: false,
  };
}

export default Post;
