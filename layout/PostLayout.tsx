import { ReactNode } from 'react';
import Header from '@/components/Header';
import SideBar from '@/components/SideBar';
import { PostCategory, PostType } from '@/interfaces/post';
import styled from 'styled-components';

interface PostLayoutProps {
  children: ReactNode;
  posts: PostType[];
  category: PostCategory;
}
const PostLayout = ({ posts, category, children }: PostLayoutProps) => {
  return (
    <Container>
      <Header />
      <Aside>
        <SideBar posts={posts} category={category} />
      </Aside>
      <div>ttt</div>
      <Main>{children}</Main>
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;

const Aside = styled.aside`
  position: fixed;
  box-sizing: border-box;
  padding: 0;
  background: white;
  overflow-y: auto;
  margin: 0;
  height: inherit;

  @media screen and (max-width: 500px) {
    display: none;
  }
`;

const Main = styled.main`
  padding-left: 36rem;

  @media screen and (max-width: 500px) {
    padding: 0;
  }
`;
export default PostLayout;
