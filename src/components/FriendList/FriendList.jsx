import PropTypes from 'prop-types'; 
import css from './FriendList.module.css';
import { FriendListItem } from 'components/FriendListItem/FriendListItem';

export const FriendList = ({ friends }) => {
    return (
        <ul className={css.friendList}>
        {friends.map(({ id, avatar, name, isOnline }) => (
            <FriendListItem
                key={id}
                name={name}
                avatar={avatar}
                status={isOnline}
            />
        ))}
    </ul>
    )
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.exact({
        avatar: PropTypes.string,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool,
        id: PropTypes.number.isRequired,
  }))
}