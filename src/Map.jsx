import React from 'react';

export default props => {
    //let mapUrl = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyB9v1dwzu7MaggY2uoGYr7Hh5grZHHnNa0&libraries=places&callback=initMap' + props.name;
    let mapUrl = 'https://www.google.com/maps/search/' + props.name
    return (
        <div className='well'>
            <h4>{props.name}</h4>
            <p>{props.street}</p>
            <p>{props.city},{' '}{props.state}</p>
            <p>{props.zip}</p>
            <a href={mapUrl}
                target='_blank'
                className='btn btn-link'
                role='button'>
                Location
            </a>
            {/* <a href={mapUrl} target='_blank' role='button' className='btn btn-link'>{mapUrl}</a> */}
        </div>
    );
}

//find a way to use the name of the brewery as a google search in the google maps places api