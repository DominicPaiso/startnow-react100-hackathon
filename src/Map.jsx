import React from 'react';

export default props => {
    let mapUrl = 'https://www.google.com/maps/search/' + props.name
    return (
        <div className='well'>
            <h3>{props.name}</h3>
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