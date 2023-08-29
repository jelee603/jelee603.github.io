import { ReactNode, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

interface ModalPortalProps {
  children: ReactNode;
}
const ModalPortal = ({ children }: ModalPortalProps) => {
  const [element, setElement] = useState<HTMLElement | null>(null);

  useEffect(() => {
    setElement(document.getElementById('modal'));
  }, []);

  if (!element) {
    return <></>;
  }

  return createPortal(children, element);
};

export default ModalPortal;
