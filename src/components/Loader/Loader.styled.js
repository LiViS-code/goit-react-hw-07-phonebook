import styled from 'styled-components';
import { theme } from 'constants/Theme';

const {
  colors: { primaryColor, backgroundColorForm, accentColor },
  spacing,
} = theme;

export const BarsRow = styled.div`
  position: relative;
`;

export const BarsCol = styled.div`
  height: ${spacing(10)};
`;

export const Text = styled.p`
  color: ${primaryColor};
  font-size: 1em;
  text-align: center;
  margin: 0;
`;

export const Bars = styled.div`
  display: block;
  position: absolute;
  top: 50%;
  left: 50%;
  height: ${spacing(12)};
  width: ${spacing(12)};
  margin: ${spacing(-12)} 0 0 ${spacing(-7)};

  @keyframes bars {
    0% {
      height: ${spacing(1.2)};
      -webkit-transform: translateY(0px);
      transform: translateY(0px);
      -webkit-transform: translateY(0px);
      transform: translateY(0px);
      background: ${backgroundColorForm};
    }
    25% {
      height: ${spacing(8)};
      -webkit-transform: translateY(15px);
      transform: translateY(15px);
      -webkit-transform: translateY(15px);
      transform: translateY(15px);
      background: ${accentColor};
    }
    50% {
      height: ${spacing(1.2)};
      -webkit-transform: translateY(0px);
      transform: translateY(0px);
      -webkit-transform: translateY(0px);
      transform: translateY(0px);
      background: ${backgroundColorForm};
    }
    100% {
      height: ${spacing(1.2)};
      -webkit-transform: translateY(0px);
      transform: translateY(0px);
      -webkit-transform: translateY(0px);
      transform: translateY(0px);
      background: ${backgroundColorForm};
    }
  }
  @-webkit-keyframes bars {
    0% {
      height: ${spacing(1.2)};
      -webkit-transform: translateY(0px);
      transform: translateY(0px);
      background: ${backgroundColorForm};
    }
    25% {
      height: ${spacing(8)};
      -webkit-transform: translateY(15px);
      transform: translateY(15px);
      background: ${accentColor};
    }
    50% {
      height: ${spacing(1.2)};
      -webkit-transform: translateY(0px);
      transform: translateY(0px);
      background: ${backgroundColorForm};
    }
    100% {
      height: ${spacing(1.2)};
      -webkit-transform: translateY(0px);
      transform: translateY(0px);
      background: ${backgroundColorForm};
    }
  }
`;

export const Bar = styled.span`
  position: absolute;
  display: block;
  bottom: ${spacing(2.5)};
  width: ${spacing(2.3)};
  height: ${spacing(1.2)};
  background: ${backgroundColorForm};
  -webkit-animation: bars 1.5s infinite ease-in-out;
  animation: bars 1.5s infinite ease-in-out;

  &:nth-child(2) {
    left: ${spacing(2.75)};
    -webkit-animation-delay: 0.2s;
    animation-delay: 0.2s;
  }

  &:nth-child(2) {
    left: ${spacing(2.75)};
    -webkit-animation-delay: 0.2s;
    animation-delay: 0.2s;
  }

  &:nth-child(3) {
    left: ${spacing(5.5)};
    -webkit-animation-delay: 0.4s;
    animation-delay: 0.4s;
  }

  &:nth-child(4) {
    left: ${spacing(8.25)};
    -webkit-animation-delay: 0.6s;
    animation-delay: 0.6s;
  }

  &:nth-child(5) {
    left: ${spacing(11)};
    -webkit-animation-delay: 0.8s;
    animation-delay: 0.8s;
  }
`;
