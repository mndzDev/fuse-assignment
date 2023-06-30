import React from 'react';
import './navbutton.scss';

interface NavButtonProps {
    label: string,
    active?: boolean
}

export const NavButton = ({label, active}: NavButtonProps) => {
    return (
       <button className={`${'navbutton text-base font-semibold'} ${active ? 'bg-primary-600 text-base-white' : 'text-gray-700'}`}>{label}</button>
    )
}