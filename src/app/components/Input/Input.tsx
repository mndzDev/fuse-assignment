import ChevronDown from '../Icons/ChevronDown';
import DotIcon from '../Icons/Dot';
import SearchIcon from '../Icons/Search';
import './input.scss';

import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] });

interface InputProps {
    type: 'search' | 'select' | 'status_select' | 'text'
    label: string;
    width?: string;
    height?: string;
    placeholder?: string;
}

export const Input = ({type = 'text' , label, width = '183px', height = '44px', placeholder }: InputProps) => {
    const style = {
        width: width,
        height: height
    }

    return (
        <>
            <div className={`${inter.className}`}>
                <label className='font-medium text-sm text-gray-700'>{label}</label>
                <div style={style} className='input w-full h-full border border-gray-300 rounded-lg flex items-center'>
                    {
                        type == 'search' && (
                            <div className='search-icon'>
                                <SearchIcon/>
                            </div>
                            
                        )
                    }
                    {
                        type == 'search' && (
                            <input type="text" placeholder={placeholder || ''}/>
                        )
                    }
                    {
                        type == 'status_select' && (
                            <div className='status-select flex items-center'>
                                <DotIcon color='#17B26A'/>
                                <div className='selected-option text-gray-900 font-medium text-base'>
                                    Paid
                                </div>
                                <ChevronDown/>
                            </div>
                        )
                    }
                    {
                        type == 'select' && (
                            <div className='select flex items-center'>
                                <div className='selected-option text-gray-900 font-medium text-base'>
                                    All
                                </div>
                                <ChevronDown/>
                            </div>
                        )
                    }
                </div>
            </div>
        </>
    )
}