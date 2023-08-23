import { ReactNode, useState } from 'react';
import Header from '@/components/Header';
import { PostCategory, PostType } from '@/interfaces/post';
import styled from 'styled-components';
import SideMenu from '@/components/SideMenu';
import ModalPortal from '@/components/ModalPortal';

interface PostLayoutProps {
  children: ReactNode;
  posts: PostType[];
  category: PostCategory;
}
const PostLayout = ({ posts, category, children }: PostLayoutProps) => {
  const [modalOpen, setModalOpen] = useState(false);
  const handleModal = () => {
    setModalOpen(!modalOpen);
    document.body.style.overflow = modalOpen ? 'auto' : 'hidden';
  };

  return (
    <Container>
      <Header onClick={handleModal} />
      {/* <Aside>
        <PostSideBar posts={posts} category={category} />
      </Aside> */}
      {modalOpen && (
        <ModalPortal>
          <SideMenu isOpen={modalOpen} onClose={handleModal} />
        </ModalPortal>
      )}
      <Main>{children}</Main>
    </Container>
  );
};

const Container = styled.div`
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
  /* padding-left: 36rem; */

  /* @media screen and (max-width: 500px) {
    padding: 0;
  } */
`;
export default PostLayout;
