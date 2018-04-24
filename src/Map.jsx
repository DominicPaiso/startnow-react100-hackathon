import React from 'react';

export default props => {
    let mapUrl = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyB9v1dwzu7MaggY2uoGYr7Hh5grZHHnNa0&callback=initMap'
    return (
        <div className='well'>
            <h4>{props.name}</h4>
            <p>{props.description}</p>
            <a href={mapUrl} target='_blank'  role='button' className='btn btn-link'>{mapUrl}</a>
        </div>
    );
}