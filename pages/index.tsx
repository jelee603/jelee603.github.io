import Link from 'next/link';
import styled from 'styled-components';
import Header from '../components/Header';
import { NextPage } from 'next';
import { getAllPosts } from '../lib/api';
import { PostType } from '@/interfaces/post';
import DefaultLayout from '@/layout/DefaultLayout';

const category = 'Tip';
const Home: NextPage<{ posts: PostType[] }> = ({ posts }) => {
  return (
    <DefaultLayout>
      <Section>
        {posts
          .filter((v) => v.category == category)
          .map((post, index) => (
            <Card key={index}>
              <CardLink href={`/${post.category}/${post.slug}`}>
                <CreateDate>{post.date}</CreateDate>
                <ContentTitle>{post.title}</ContentTitle>
              </CardLink>
            </Card>
          ))}
      </Section>
    </DefaultLayout>
  );
};

const Main = styled.main`
  padding-top: 10rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Section = styled.section`
  display: flex;
  flex-wrap: wrap-reverse;
  /* margin: 0 20rem; */
  gap: 2%;
`;

const Card = styled.div`
  flex-basis: 32%;
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 15px;
  margin-bottom: 2%;

  @media screen and (max-width: 500px) {
    flex-basis: 100%;
  }
`;

const CardLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

const ContentTitle = styled.div`
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
