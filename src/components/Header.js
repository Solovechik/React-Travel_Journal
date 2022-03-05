import React from 'react'
import logo from '../images/header-logo.png'


export default function Header() {
    return (
        <div className={'header'}>
            <img className={'header-logo'} src={logo} alt=""/>
            <p className={'header-title'}>my travel journal.</p>
        </div>
    )
}