import styled from 'styled-components';
import Link from 'next/link';
import Menu from '@mui/icons-material/Menu';
import { MouseEvent } from 'react';

type LinkType = {
  href: string;
  title: string;
};
const Links: LinkType[] = [
  {
    href: '/',
    title: 'Home',
  },
  {
    href: '/React/react-condition',
    title: 'React',
  },
  {
    href: '/Vue/vuejs',
    title: 'Vue',
  },
  {
    href: '/JavaScript/es6',
    title: 'JS',
  },
  {
    href: '/TypeScript/typescript',
    title: 'TS',
  },
  {
    href: '/HTML_CSS/browser-operation',
    title: 'HTML/CSS',
  },
  {
    href: '/ToyProject',
    title: 'Toy Project',
  },
  {
    href: '/profile',
    title: 'About',
  },
];

interface HeaderProps {
  onClick: () => void;
}

const Header = ({ onClick }: HeaderProps) => {
  return (
    <Wrapper>
      <Link href="/">
        <Icon></Icon>
      </Link>
      {/* <Nav>
        {Links.map(({ href, title }, index) => (
          <NavItem key={index}>
            <Link href={href}>{title}</Link>
          </NavItem>
        ))}
      </Nav> */}
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
  background: white;
  border-bottom: 1px solid black;
  z-index: 100;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: row;
`;

const NavItem = styled.div`
  margin: 2rem 1rem;

  a {
    font-size: 1.5rem;
    text-decoration: none;
  }
  a:hover {
    border-bottom: 2px solid #46bd87;
  }
`;

const Icon = styled.div`
  width: 6rem;
  height: 6rem;
  border-radius: 50%;
  background-image: url(/images/me.jpeg);
  background-position: 25%;
  background-size: contain;
  cursor: pointer;
`;

const MenuIcon = styled.div`
  padding: 2rem;
  cursor: pointer;
`;
export default Header;
