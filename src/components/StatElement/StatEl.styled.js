import styled from '@emotion/styled';

export const StatItem = styled.li`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 7px;

  color: var(--accent);
  font-size: 16px;
  background-color: ${getRandomDarkColor};

  transition: transform 200ms ease-in-out;

  &:hover {
    transform: translateY(-30%);
  }
`;

export const StatLabel = styled.span``;

export const StatPercentage = styled.span``;

function getRandomDarkColor() {
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += Math.floor(Math.random() * 10);
  }
  return color;
}
