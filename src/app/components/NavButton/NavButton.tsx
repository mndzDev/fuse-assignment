import React from 'react';
import './navbutton.scss';

interface NavButtonProps {
    label: string,
    active?: boolean
    onClickHandler?(): void;
}

export const NavButton = ({label, active, onClickHandler}: NavButtonProps) => {

    const handleClick = () => {
        if(onClickHandler)
        onClickHandler();
    }

    return (
       <button onClick={handleClick} className={`${'navbutton text-base font-semibold'} ${active ? 'bg-primary-600 text-base-white' : 'text-gray-700'}`}>{label}</button>
    )
}