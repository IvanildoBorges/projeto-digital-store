import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { actionsColors, grayScaleColors } from '../../styles/colors/cores';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 70vh;
  padding: 5rem;
  text-align: center;
  background-color: ${grayScaleColors.lightGray3};

  @media screen and (max-width: 769px) {
    padding: 2rem;
  }
`;

export const Curved404 = styled.h2`
  display: flex;
  justify-content: center;
  gap: .5rem;
  font-size: 10rem;
  font-weight: bold;
  color: ${actionsColors.warning};
  transform: perspective(100px) rotateX(10deg);
  user-select: none;

  @media screen and (max-width: 769px) {
    font-size: 6rem;
  }
`;

export const CurvedDigit = styled.span`
  display: inline-block;
  transform: ${({ $angle }) => `rotate(${$angle}deg) translateY(${Math.abs($angle) * 1.2}px)`};
`;

export const MotivationalText = styled.p`
  font-size: 1.5rem;
  color: ${grayScaleColors.darkGray3};
  margin: 1.5rem 0;

  @media screen and (max-width: 769px) {
    font-size: 1.115rem;
  }
`;

export const HomeButton = styled(Link)`
  padding: .875rem 1.5rem;
  background-color: ${actionsColors.warning};
  color: ${grayScaleColors.white};
  border-radius: .5rem;
  font-weight: bold;
  user-select: none;

  &:hover {
    color: ${grayScaleColors.white};
    background-color: ${actionsColors.primary};
  }
`;