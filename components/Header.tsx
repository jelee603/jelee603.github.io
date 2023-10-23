import styled from 'styled-components';
import Link from 'next/link';
import Menu from '@mui/icons-material/Menu';
import Search from '@mui/icons-material/Search';

interface HeaderProps {
  handleClickMenu: () => void;
  handleClickSearch: () => void;
}

const Header = ({ handleClickSearch, handleClickMenu }: HeaderProps) => {
  return (
    <Wrapper>
      <Link href="/">
        <Icon></Icon>
      </Link>
      <Buttons>
        <MenuIcon onClick={handleClickSearch}>
          <Search fontSize="large" />
        </MenuIcon>
        <MenuIcon onClick={handleClickMenu}>
          <Menu fontSize="large" />
        </MenuIcon>
      </Buttons>
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
  /* padding: 12px; */
  cursor: pointer;
  display: flex;
  align-items: center;
`;

const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  padding: 20px;
`;
export default Header;
