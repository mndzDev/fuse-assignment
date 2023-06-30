import './tableheader.scss';

interface TableHeaderProps {
    cols: {
        label: string;
        checkbox?: boolean;
        icon?: JSX.Element;
    }[]
}

export const TableHeader = ({cols}: TableHeaderProps) => {
    return (
        <thead>
            <tr>
                {cols.map((col, index) => (
                    <th className={`font-medium text-xs text-gray-600 bg-gray-50 border-gray-200 border-y ${index === 0 ? 'rounded-tl-lg border-l' : ''} ${index === cols.length - 1 ? 'rounded-tr-lg border-r border-gray-200': ''} `}  key={index}>
                        <div className='flex'>
                             {col.checkbox && <input type='checkbox'className='mr-3'/>}{col.label}                        {
                            col.icon && (
                               <div className='ml-1'><>{col.icon}</></div> 
                            )
                        }
                        </div>
                    </th>
                ))}
            </tr>
        </thead>
    )
}