import './actionButton.scss';

interface ActionButtonProps {
    label?: string;
    type?: 'simple' | 'full' | 'link';
    icon?: JSX.Element;
    color?: string;
}

export const ActionButton = ({label, type, icon, color}: ActionButtonProps):JSX.Element => {
    return (
        <>
            <button style={type == 'link' ? {color: color} : {color: '#475467'}} className={`flex items-center actionbutton text-sm font-semibold ${type == 'full' ? 'actionbutton--full border border-gray-300 rounded-lg text-gray-700' : ''}`}>
                <div className='flex items-center justify-center gap-x-1 w-full h-full '>
                    {icon}
                    {label}
                </div>
            </button>
        </>
    )
}