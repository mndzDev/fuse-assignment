import { ReactNode } from "react";
import './tablerow.scss';

interface TableRowProps {
    children: ReactNode;
}

export const TableRow = ({children}: TableRowProps) => {
    return (
        <tr>
           {children}
        </tr>
    )
}