import { ReactNode, useState, MouseEvent } from 'react';
import Header from '@/components/Header';
import styled from 'styled-components';
import SideMenu from '@/components/SideMenu';
import ModalPortal from '@/components/ModalPortal';

interface DefaultLayoutProps {
  children: ReactNode;
}
const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  const [modalOpen, setModalOpen] = useState(false);
  const handleModal = () => {
    setModalOpen(!modalOpen);
    document.body.style.overflow = modalOpen ? 'auto' : 'hidden';
  };
  return (
    <Container>
      <Header onClick={handleModal} />
      <Main>
        {modalOpen && (
          <ModalPortal>
            <SideMenu isOpen={modalOpen} onClose={handleModal} />
          </ModalPortal>
        )}

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
