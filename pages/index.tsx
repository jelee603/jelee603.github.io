import Link from 'next/link';
import styled from 'styled-components';
import { NextPage } from 'next';
import { getAllPosts } from '../lib/api';
import { PostType } from '@/interfaces/post';
import DefaultLayout from '@/layout/DefaultLayout';

const category = 'Tip';
const Home: NextPage<{ posts: PostType[] }> = ({ posts }) => {
  const list = posts
    .filter((v) => v.category == category)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  return (
    <DefaultLayout>
      <Section>
        {list.map((post, index) => (
          <CardLink href={`/${post.category}/${post.slug}`} key={index}>
            <Card>
              <CreateDate>{post.date}</CreateDate>
              <ContentTitle>{post.title}</ContentTitle>
            </Card>
          </CardLink>
        ))}
      </Section>
    </DefaultLayout>
  );
};

const Section = styled.section`
  display: flex;
  flex-wrap: wrap;
  margin: 0 20%;
  gap: 2%;

  @media screen and (max-width: 500px) {
    margin: 5%;
    gap: 10px;
  }
`;

const Card = styled.div``;

const CardLink = styled(Link)`
  text-decoration: none;
  color: black;
  flex-basis: 32%;
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 15px;
  border: 1px solid #ccc;
  margin-bottom: 2%;
  min-width: 300px;

  &:hover {
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    transition: box-shadow 0.2s ease;
    background-color: var(--bg-element2);
  }

  @media screen and (max-width: 500px) {
    flex-basis: 100%;
  }
`;

const ContentTitle = styled.h1`
  height: 100px;
  line-height: 5;
  padding-left: 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 1.6rem;
`;

const CreateDate = styled.div`
  color: gray;
  font-size: 12px;
  padding: 10px;
`;
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

export default Home;
