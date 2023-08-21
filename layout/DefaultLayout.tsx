import { ReactNode } from 'react';
import Header from '@/components/Header';
import styled from 'styled-components';

interface DefaultLayoutProps {
  children: ReactNode;
}
const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  return (
    <Container>
      <Header />
      <Main>{children}</Main>
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
