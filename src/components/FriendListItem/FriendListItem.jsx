import PropTypes from 'prop-types'; 
import css from './FriendListItem.module.css';
import { FriendItem, Status, FriendImg, FriendName } from './FriendListItem.styled';

export const FriendListItem = ({avatar, name, status}) => {
    return (
        <FriendItem>
        <Status statusIsOnline={status}></Status>
        <FriendImg src={avatar} alt="User avatar" width="48" />
        <FriendName>{name}</FriendName>
        </FriendItem>
    )
}   

FriendListItem.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string.isRequired,
    status: PropTypes.bool.isRequired,
}