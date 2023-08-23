import { ReactNode, useState, MouseEvent } from 'react';
import Header from '@/components/Header';
import styled from 'styled-components';
import SideMenu from '@/components/SideMenu';

interface DefaultLayoutProps {
  children: ReactNode;
}
const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  const [menuToggle, setMenuToggle] = useState(false);
  const handleMenuClick = () => {
    setMenuToggle(!menuToggle);
  };
  return (
    <Container>
      <Header onClick={handleMenuClick} />
      <Main>
        <SideMenu show={menuToggle} />
        {children}
      </Main>
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;

const Main = styled.main`
  padding-top: 10rem;
`;
export default DefaultLayout;
