import ChevronRight from "../Icons/ChevronRight"
import HomeIcon from "../Icons/Home"
import './breadcrumbs.scss';

import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })


interface BreadcrumbsProps {
    pages: {
        link? : string,
        name? : string,
        current? : boolean
    }[]
}

export const Breadcrumbs = ({pages}: BreadcrumbsProps) => {
    return (<>
        <ul className={`${inter.className} breadcrumbslist flex items-center`}>
            <li className="px-2">
                <HomeIcon/>
            </li>
            <li className="px-2">
                <ChevronRight/>
            </li>
            
            {
                pages.map((page, i) => (
                    <><li key={i} className={`px-2 cursor-pointer ${page.current ? 'font-semibold text-gray-700' : 'font-medium text-gray-600'}`}>{page.name}</li>
                    {i + 1 !== pages.length && (
                        <li className="px-2">
                            <ChevronRight/>
                        </li>
                         
                    )}</>
                    
                ))
                
            }
        </ul>
    </>)
}