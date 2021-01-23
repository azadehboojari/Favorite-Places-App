import './UserList.css'

import Recat from 'react';
import UserItem from './UserItem';

const UserList = props => {
    if (props.items.length === 0) {
        console.log("empty")
        return (
            <div className='center'>
                <h3> No users found</h3>
            </div>
        )
    }
    return (
        <ul className="users-list">
            {props.items.map(user => (
                <UserItem key={user.id} id={user.id} image={user.image} name={user.name} placeCount={user.placeCount} />
            ))}
        </ul>
    )
}
export default UserList;