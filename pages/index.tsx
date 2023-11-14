import Link from 'next/link';
import styled from 'styled-components';
import { NextPage } from 'next';
import { getAllPosts } from '../lib/api';
import { PostType } from '@/interfaces/post';
import DefaultLayout from '@/layout/DefaultLayout';

const category = 'Tip';
const Home: NextPage<{ posts: PostType[] }> = ({ posts }) => {
  const list = posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
  const tipList = list.filter((v) => v.category == category);
  const recentPost = list[0];
  return (
    <DefaultLayout>
      <SectionTop>
        <Card $backgroundColor="--bg-element3">
          <span>총 게시글</span>
          <Count>{posts.length}</Count>
        </Card>
        <CardLink href={`/${recentPost.category}/${recentPost.slug}`}>
          <Card $backgroundColor="--bg-element4">
            <span>최신글</span>
            <Content>
              <Title>
                {recentPost.title}
                <br />
                {recentPost.date}
              </Title>
            </Content>
          </Card>
        </CardLink>
      </SectionTop>
      <Section>
        {tipList.map((post, index) => (
          <CardLink href={`/${post.category}/${post.slug}`} key={index}>
            <Card $backgroundColor="--bg-element5">
              <span>{post.date}</span>
              <Content>
                <Title>{post.title}</Title>
              </Content>
            </Card>
          </CardLink>
        ))}
      </Section>
    </DefaultLayout>
  );
};

const SectionTop = styled.section`
  display: flex;
  margin: 0 20%;
  gap: 2%;

  & > :nth-child(1) {
    width: 300px;
  }
  & > :nth-child(2) {
    flex: 1;
  }

  @media screen and (max-width: 500px) {
    flex-direction: column;
    flex-basis: 100%;
    margin: 5%;
    gap: 10px;

    & > :nth-child(1) {
      height: fit-content;
    }
  }
`;

const Section = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 0 20%;
  gap: 2%;

  & > div {
    margin-bottom: 2%;
  }

  @media screen and (max-width: 500px) {
    margin: 5%;
    gap: 10px;
  }
`;

const Card = styled.div<{ $backgroundColor: string }>`
  color: black;
  border-radius: 15px;
  border: 1px solid #ccc;
  height: 180px;
  background-color: var(${(props) => props.$backgroundColor});
  margin-bottom: 2%;
  padding: 10px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  min-width: 300px;

  & > span {
    color: gray;
    font-size: 12px;
  }
`;

const CardLink = styled(Link)`
  text-decoration: none;

  &:hover {
    background-color: var(--bg-element2);
    border-radius: 15px;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    transition: box-shadow 0.2s ease;
  }
`;

const Content = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  align-items: center;
`;

const Title = styled.h1`
  padding-left: 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 16px;
`;

const Count = styled.h1`
  width: 100%;
  text-align: center;
  font-size: 40px;

  @media screen and (max-width: 500px) {
    margin: 2%;
    gap: 10px;
  }
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
