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
      <Menu>
        <SideBar posts={posts} category={category} />
      </Menu>
      <Main>{children}</Main>
    </Container>
  );
};

const Container = styled.div`
  height: 100vh;
`;

const Menu = styled.aside`
  position: fixed;
  box-sizing: border-box;
  padding: 0;
  background: white;
  overflow-y: auto;
  margin: 0;
  height: inherit;
`;

const Main = styled.main`
  padding-left: 36rem;
`;
export default PostLayout;
