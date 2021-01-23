import './UserItem.css';

import Avatar from '../../shared/components/UIElements/Avatar';
import Card from '../../shared/components/UIElements/Card';
import { Link } from 'react-router-dom';
import React from 'react';

const UserItem = props => {
    console.log(props.placeCount)
    return (
        <li className="user-item">
            <div className="user-item__content">
                <Card>
                    <Link to={`/${props.id}/places`}>
                        <div className="user-item__image">
                            <Avatar image={props.image} alt={props.name} />
                        </div>
                        <div className="user-item__info">
                            <h2>{props.name}</h2>
                            <h3>
                                {props.placeCount} {props.placeCount === 1 ? 'Place' : 'Places'}
                            </h3>
                        </div>
                    </Link>
                </Card>
            </div>
        </li>
    )
}
export default UserItem;