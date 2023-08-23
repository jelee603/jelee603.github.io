import styled from 'styled-components';
import Link from 'next/link';

type LinkType = {
  href: string;
  title: string;
};
const Links: LinkType[] = [
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
    title: 'JavaScript',
  },
  {
    href: '/TypeScript/typescript',
    title: 'TypeScript',
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

interface SideMenuProps {
  show: boolean;
}
const SideMenu = ({ show }: SideMenuProps) => {
  const opacity = show ? '1' : '.0';

  return (
    <WrapperSideMenu style={{ opacity }}>
      <Nav>
        {Links.map(({ href, title }, index) => (
          <NavItem key={index}>
            <Link href={href}>{title}</Link>
          </NavItem>
        ))}
      </Nav>
    </WrapperSideMenu>
  );
};

const WrapperSideMenu = styled.div`
  background-color: #fff;
  border-right: 1px solid #ddd;
  height: 100%;
  /* margin-right: -261px; */
  right: 0;
  position: fixed;
  text-align: center;
  /* top: 0; */
  top: 8rem;
  transform: translate(0);
  transition: transform 225ms cubic-bezier(0, 0, 0.2, 1) 0ms;
  /* transition-duration: 0.3s; */
  /* transition-timing-function: ease-in; */
  width: 260px;
  z-index: 10000;
  border: 1px solid #ccc;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
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

export default SideMenu;
