import React from 'react';
import styled from 'styled-components';
interface TagButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  backgroundColor?: string;
  color?: string;
}

export function TagButton({
  onClick,
  children,
  backgroundColor = '#61dafb',
  color = 'black',
}: TagButtonProps) {
  return (
    <Button onClick={onClick} $backgroundColor={backgroundColor} color={color}>
      {children}
    </Button>
  );
}

const Button = styled.button<{ color: string; $backgroundColor: string }>`
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
