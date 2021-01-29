import PlaceList from '../components/PlaceList';
import React from 'react';
import { useParams } from 'react-router-dom'

const dummy_place = [
    {
        id: 'p1',
        title: 'Empire State',
        imageUrl: 'https://images.app.goo.gl/dAdiFMJJAPuRKkT58',
        desc: 'nskjfcfh skhdcouhdorfch sdufhcoushj hfuhv ufhviu udfifhfn hfun ufhv',
        location: {
            lat: 40.74838343882561,
            lng: -73.98602685343872
        },
        address: '20 W 34th St, New York, NY 10001',
        creator: 'u1'
    }, {
        id: 'p2',
        title: 'Not Empire State',
        imageUrl: 'https://images.app.goo.gl/dAdiFMJJAPuRKkT58',
        desc: 'nskjfcfh skhdcouhdorfch sdufhcoushj hfuhv ufhviu udfifhfn hfun ufhv',
        location: {
            lat: 40.74838343882561,
            lng: -73.98602685343872
        },
        address: '20 W 34th St, New York, NY 10001',
        creator: 'u2'
    }
]
const UserPlaces = () => {
    const userId = useParams().userId;
    const loadedPlaces = dummy_place.filter(place => place.creator === userId)
    return (
        <PlaceList items={loadedPlaces} />
    )
}
export default UserPlaces;