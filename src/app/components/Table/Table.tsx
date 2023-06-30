 import './table.scss';

interface TableProps {
    body: JSX.Element;
    header: JSX.Element;
}

export const Table = ({header, body}: TableProps) => {
    return (
        <div className='table w-full'>
            <table className='table-auto w-full border-separate'>
                {header}
                <tbody>
                    {body}
                </tbody>
            </table>
        </div>
    )
}

