import CancelledIcon from '../Icons/Cancelled';
import CheckIcon from '../Icons/Check';
import RefundedIcon from '../Icons/Refunded';
import './badge.scss';
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

interface BadgeProps {
    type: 'Paid' | 'Refunded' | 'Cancelled'
}

export const Badge = ({type}: BadgeProps) => {

    const getIcon = () => {
        switch(type){
            case 'Paid':
                return <CheckIcon />;
            case 'Cancelled':
                return <CancelledIcon />;
            case 'Refunded':
                return <RefundedIcon />;
            default:
                return '';
        }
    }

    const getStyle = () => {
        switch(type){
            case 'Paid':
                return 'border-success-200 text-success-700 bg-success-50';
            case 'Cancelled':
                return 'border-error-200 text-error-700 bg-error-50';
            case 'Refunded':
                return 'border-gray-200 text-gray-700 bg-gray-50';
            default:
                return 'border-gray-200 text-gray-700 bg-gray-50';
        }
    }

    return <div className={`${inter.className} badge font-medium text-xs rounded-3xl border ${getStyle()}`}>
           {getIcon()} {type}
    </div>
}