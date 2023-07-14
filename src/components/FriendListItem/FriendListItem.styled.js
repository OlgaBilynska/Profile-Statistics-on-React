import styled from '@emotion/styled';

export const FriendItem = styled.li`
  position: relative;
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 7px;

  border: 3px solid var(--border);
  border-radius: 15%;
  background-color: var(--section);
  color: var(--accent);
  font-weight: 600;

  transition: transform 200ms linear;

  &:hover {
    transform: scale(1.1);
  }
`;

const isOnline = ({ statusIsOnline }) =>
  statusIsOnline ? 'var(--online)' : 'var(--offline)';

export const Status = styled.span`
  position: absolute;
  top: 10px;
  right: 10px;

  width: 17px;
  height: 17px;
  border: 1px solid var(--border);
  border-radius: 50%;

  background-color: ${isOnline};
`;

export const FriendImg = styled.img``;

export const FriendName = styled.p``;
