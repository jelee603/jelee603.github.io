import styled from 'styled-components';
import Link from 'next/link';
import Menu from '@mui/icons-material/Menu';

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
`;

const Icon = styled.div`
  width: 6rem;
  height: 6rem;
  margin: 8px;
  border: 1px solid #ccc;
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
