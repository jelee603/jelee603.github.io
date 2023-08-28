import Link from 'next/link';
import styled from 'styled-components';
import Image from 'next/image';
import DefaultLayout from '@/layout/DefaultLayout';
import { NextPage } from 'next';
import { getAllPosts } from '@/lib/api';
import { PostType } from '@/interfaces/post';

const category = 'ToyProject';
const ToyProject: NextPage<{ posts: PostType[] }> = ({ posts }) => {
  return (
    <DefaultLayout>
      <Section>
        {posts
          .filter((v) => v.category == category)
          .map((post, index) => (
            <Card key={index}>
              <CardLink href={`/${category}/${post.slug}`}>
                <div
                  style={{
                    position: 'relative',
                    height: '20rem',
                    width: '100%',
                  }}
                >
                  <Image
                    src={post.coverImage}
                    alt=""
                    fill
                    style={{
                      borderRadius: '15px 15px 0 0',
                    }}
                    priority={true}
                  />
                </div>
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

const Nav = styled.nav`
  width: 100%;
  height: 40px;
  text-align: center;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  margin: 10px;

  button {
    line-height: 2.5;
    font-size: 15px;
    border: 0;
    color: black;
    background: transparent;
    cursor: pointer;
  }
`;

const Section = styled.section`
  display: flex;
  flex-wrap: wrap;
  margin: 0 20%;
  gap: 2%;

  @media screen and (max-width: 500px) {
    margin: 0 10px;
    gap: 10px;
  }
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

export default ToyProject;
