import styled from 'styled-components';
import Link from 'next/link';

type LinkType = {
  href: string;
  title: string;
};
const Links: LinkType[] = [
  {
    href: '/React',
    title: 'React',
  },
  {
    href: '/Vue',
    title: 'Vue',
  },
  {
    href: '/JavaScript',
    title: 'JavaScript',
  },
  {
    href: '/TypeScript',
    title: 'TypeScript',
  },
  {
    href: '/HTML_CSS',
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
  isOpen: boolean;
  onClose: () => void;
}
const SideMenu = ({ isOpen, onClose }: SideMenuProps) => {
  return (
    <>
      <WrapperSideMenu style={{ right: `${isOpen ? '0vw' : '-100vw'}` }}>
        <Exit onClick={onClose}>
          <div></div>
          <div></div>
        </Exit>
        <Nav>
          {Links.map(({ href, title }, index) => (
            <Link key={index} href={href} scroll={true}>
              <NavItem>{title}</NavItem>
            </Link>
          ))}
        </Nav>
      </WrapperSideMenu>
      <Modal
        onClick={onClose}
        style={{ visibility: `${isOpen ? 'visible' : 'hidden'}` }}
      ></Modal>
    </>
  );
};

const Modal = styled.div`
  //display: block; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 10; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
  transition: 0.1s;
`;

const WrapperSideMenu = styled.div`
  right: -100vw;
  top: 0;
  background-color: #fff;
  border-right: 1px solid #ddd;
  height: 100%;
  transition: 0.3s;
  transition-delay: 0.1s;
  /* margin-right: -261px; */

  position: absolute;
  text-align: center;
  /* top: 0; */
  /* top: 0; */
  /* transform: translate(0);
  transition: transform 225ms cubic-bezier(0, 0, 0.2, 1) 0ms; */
  /* transition-duration: 0.3s;
  transition-timing-function: ease-in; */
  /* transition: 0.5s; */
  /* transition: all 0.25s ease;
  transform: translateX(50%); */
  width: 260px;
  z-index: 100;
  border: 1px solid #ccc;
`;

const Exit = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 50px;
  height: 63px;
  background-size: 30px auto;
  cursor: pointer;

  & > div {
    position: absolute;
    top: 50%;
    left: 50%;
    margin-left: -15px;
    width: 30px;
    height: 2px;
    background: #000;
  }

  & > div:nth-child(1) {
    transform: rotate(45deg);
  }

  & > div:nth-child(2) {
    transform: rotate(-45deg);
  }
`;
const Nav = styled.nav`
  top: 64px;
  position: relative;
  display: flex;
  flex-direction: column;

  a {
    font-size: 1.5rem;
    text-decoration: none;
    transition: 0.3s;
  }
`;

const NavItem = styled.div`
  padding: 2rem 1rem;
  border-bottom: 1px solid #ccc;

  &:hover {
    width: inherit;
    color: black;
    background-color: #61dafb;
    opacity: 0.6;
  }
`;

export default SideMenu;
