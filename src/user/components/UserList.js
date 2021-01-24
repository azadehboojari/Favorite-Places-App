import './UserList.css'

import Card from '../../shared/components/UIElements/Card';
import Recat from 'react';
import UserItem from './UserItem';

const UserList = props => {
    if (props.items.length === 0) {
        console.log("empty")
        return (
            <div className='center'>
                <Card>
                    <h3> No users found</h3>
                </Card>
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