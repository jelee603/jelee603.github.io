import React from 'react';
import styled from 'styled-components';
interface LabelProps {
  onClick: () => void;
  children: React.ReactNode;
  backgroundColor?: string;
  color?: string;
}

function Label({
  onClick,
  children,
  backgroundColor = '#fae69e',
  color = 'black',
}: LabelProps) {
  return (
    <Button onClick={onClick} $backgroundColor={backgroundColor} color={color}>
      {children}
    </Button>
  );
}

const Button = styled.button<{ $backgroundColor: string }>`
  border: none;
  border-radius: 15px;
  color: ${(props) => props.color};
  background-color: ${(props) => props.$backgroundColor};
  cursor: pointer;
  height: 26px;
  font-size: 12px;
  padding: 10px;
  line-height: 0.5;
  font-weight: bold;
  margin-right: 5px;
`;

export default Label;
