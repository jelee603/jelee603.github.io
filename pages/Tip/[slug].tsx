import styled from 'styled-components';
import type { PostType } from '@/interfaces/post';
import { getAllPosts, getPostBySlug } from '@/lib/api';
import markdownToHtml from '@/lib/markdownToHtml';
import { NextPage } from 'next';
import PostLayout from '@/layout/PostLayout';

const category = 'Tip';
const Post: NextPage<{ posts: PostType[]; post: PostType }> = ({
  posts,
  post,
}) => {
  return (
    <PostLayout posts={posts} category={category}>
      <Section>
        <Title>{post.title}</Title>
        <Date>{post.date}</Date>
        <Article dangerouslySetInnerHTML={{ __html: post.content }} />
      </Section>
    </PostLayout>
  );
};

const Section = styled.section`
  padding-top: 10rem;
  display: flex;
  flex-direction: column;
  flex: 1;
`;
const Title = styled.h1`
  width: 100%;
  text-align: center;
  color: black;
  line-height: 2.8rem;
  font-size: 4rem;
`;
const Date = styled.h5`
  width: 100%;
  text-align: center;
`;
const Article = styled.article`
  padding: 0 4rem;
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
