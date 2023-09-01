import { ReactNode, useEffect, useState } from 'react';
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

  useEffect(() => {
    document.body.style.overflow = modalOpen ? 'hidden' : 'auto';
  }, [modalOpen]);

  const handleModal = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <Container>
      <Header onClick={handleModal} />
      <ModalPortal>
        <SideMenu isOpen={modalOpen} onClose={handleModal} />
      </ModalPortal>
      <Main>{children}</Main>
    </Container>
  );
};

const Container = styled.div`
  height: 100vh;
`;

const Main = styled.main`
  /* padding-left: 36rem; */

  /* @media screen and (max-width: 500px) {
    padding: 0;
  } */
`;
export default PostLayout;
