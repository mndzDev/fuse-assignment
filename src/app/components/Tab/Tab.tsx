import './tab.scss';
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] });

interface TabProps {
    label?: string;
    link?: string;
    active?: boolean;
}

export const Tab = ({label, link, active}: TabProps) => {
    return (
        <div className={`${inter.className} tab flex items-center text-sm font-semibold cursor-pointer ${active ? 'text-primary-700 border-s-2 border-primary-700 tab--active' : 'text-gray-500'}`}>
            {label}
        </div>
    )
}