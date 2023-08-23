import { Hidden } from '@mui/material';
import { ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface ModalPortalProps {
  children: ReactNode;
}
const ModalPortal = ({ children }: ModalPortalProps) => {
  const el = document.getElementById('modal') as HTMLElement;

  return createPortal(children, el);
};

export default ModalPortal;
