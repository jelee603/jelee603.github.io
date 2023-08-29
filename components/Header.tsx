import styled from 'styled-components';
import Link from 'next/link';
import Menu from '@mui/icons-material/Menu';

interface HeaderProps {
  onClick: () => void;
}

const Header = ({ onClick }: HeaderProps) => {
  return (
    <Wrapper>
      <Link href="/">
        <Icon></Icon>
      </Link>
      <MenuIcon onClick={onClick}>
        <Menu fontSize="large" />
      </MenuIcon>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  width: 100%;
  position: fixed;
  height: 8rem;
  background: hsla(0, 0%, 100%, 0.8);
  backdrop-filter: saturate(180%) blur(5px);
  border-bottom: 1px solid black;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  z-index: 3;
`;

const Icon = styled.div`
  width: 6rem;
  height: 6rem;
  margin: 8px;
  border-radius: 50%;
  background-image: url(/images/me.jpg);
  background-position: 25%;
  background-size: contain;
  cursor: pointer;
`;

const MenuIcon = styled.div`
  padding: 2rem;
  cursor: pointer;
  display: flex;
  align-items: center;
`;
export default Header;
