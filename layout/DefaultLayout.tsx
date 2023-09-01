import { ReactNode, useState, MouseEvent, useEffect } from 'react';
import Header from '@/components/Header';
import styled from 'styled-components';
import SideMenu from '@/components/SideMenu';
import ModalPortal from '@/components/ModalPortal';

interface DefaultLayoutProps {
  children: ReactNode;
}
const DefaultLayout = ({ children }: DefaultLayoutProps) => {
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
      <Main>
        <ModalPortal>
          <SideMenu isOpen={modalOpen} onClose={handleModal} />
        </ModalPortal>
        {children}
      </Main>
    </Container>
  );
};

const Container = styled.div`
  height: 100vh;
`;

const Main = styled.main`
  padding-top: 10rem;
`;
export default DefaultLayout;
