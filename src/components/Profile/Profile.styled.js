import styled from '@emotion/styled';

export const Section = styled.div`
  margin: 0 auto;
  padding: 30px;
  border: 4px solid var(--border);
  border-radius: 20%;
  width: 30%;
  justify-content: center;
  align-items: center;
  font-size: 40;
  color: var(--accent);
  background-color: var(--section);
`;

export const Statistics = styled.ul`
  position: relative;
  display: flex;
  justify-content: space-around;
  gap: 15px;

  &::before {
    content: '';
    position: absolute;
    top: -10px;
    width: 100%;
    height: 1px;
    background-color: var(--accent);
  }
`;

export const StatItem = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 30%;

  &::after {
    content: '';
    position: absolute;
    right: -10%;

    height: 100%;
    width: 1px;
    background-color: var(--accent);
  }

  &:last-of-type::after {
    content: none;
  }
`;

export const StatLabel = styled.span`
  font-weight: 600;
`;

export const StatQuantity = styled.span`
  font-size: 16px;
`;

export const Description = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 25px;
  gap: 5px;
`;

export const ImgProfile = styled.img`
  width: 50%;
  margin: 0 auto;
`;

export const UserName = styled.p`
  font-size: 34px;
  font-weight: bold;
  color: var(--accent);

  transition: transform 200ms ease-in-out;

  &:hover {
    transform: scale(1.05);
    text-shadow: 1px 1px 2px gray;
  }
`;

export const UserTag = styled.p`
  font-style: italic;
  font-size: 16px;
  color: var(--accent);
`;

export const UserLocation = styled.p`
  font-size: 18px;
  color: var(--accent);
`;
// export { UserLocation, UserTag, UserName, ImgProfile, Description, StatQuantity, StatLabel, StatItem, Statistics, Section };
