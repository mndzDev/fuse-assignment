import { Breadcrumbs } from '../Breadcrumbs/Breadcrumbs';
import './header.scss';

interface HeaderProps {
    title: string;
    button?: JSX.Element;
    breadcrumbPages?: any;
}

export const Header = ({title, button, breadcrumbPages}: HeaderProps) => {
    return (
        <div className='header-container flex flex-col'>
            <div className='header-elements flex w-full justify-between'>
                {breadcrumbPages && <Breadcrumbs pages={breadcrumbPages}/>}
               
            </div>
            <div className='w-full flex justify-between'>
                <div className='header-tile font-semibold text-gray-900 text-3xl'>
                {title}
            </div>
            <div>
                {button}
            </div>
            </div>
            
        </div>
    )
}