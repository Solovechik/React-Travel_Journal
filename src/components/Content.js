import React from "react";
import pointer from '../images/pointer.png'


export default function Content(props) {
    return (
        <div>
            <div className={'card'}>
                <img className={'card-photo'} src={`https://source.unsplash.com/${props.item.imageUrl}`} alt=""/>
                <div className={'card-stats'}>
                    <div className={'card-location'}>
                        <img className={'card-location-pointer'} src={pointer} alt=""/>
                        <p className={'card-location-country'}>{props.item.location.toUpperCase()}</p>
                        <a className={'card-location-url'} href={props.item.googleMapsUrl}>View on Google Maps</a>
                    </div>
                    <h1 className={'card-title'}>{props.item.title}</h1>
                    <p className={'card-date'}>{props.item.startDate} - {props.item.endDate}</p>
                    <p className={'card-description'}>{props.item.description}</p>
                </div>
            </div>
            <hr/>
        </div>
    )
}