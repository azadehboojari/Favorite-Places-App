import './PlaceList.css';

import Card from '../../shared/components/UIElements/Card';
import PlaceItem from './PlaceItem';
import React from 'react';

const PlaceList = props => {

    if (props.items.length === 0) {
        return (
            <div className="place-list center">
                <Card>
                    <h2> No places found, Maybe create one?</h2>
                    <button>Share Place</button>
                </Card>
            </div>
        )
    }
    return (
        <ul className="place-list">
            {props.items.map(place => <PlaceItem
                key={place.id}
                id={place.id}
                image={place.imageUrl}
                title={place.title}
                desc={place.desc}
                address={place.address}
                creatorId={place.creator}
                coords={place.location}
            />)}
        </ul>
    )

}
export default PlaceList;