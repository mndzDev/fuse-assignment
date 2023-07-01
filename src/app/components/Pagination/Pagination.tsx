import ReactPaginate from "react-paginate";
import './pagination.scss';
import ArrowLeft from "../Icons/ArrowLeft";
import ArrowRight from "../Icons/ArrowRight";
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] });

interface PaginationProps {
    numberOfPages: number;
    currentPage: number;
    handlePageChange(page: any): void;
}

export const Pagination = ({numberOfPages, currentPage, handlePageChange}: PaginationProps) => {
    return <div className={`${inter.className} w-full flex pagination-container`}>
            <ReactPaginate
        pageCount={numberOfPages}
        onPageChange={handlePageChange}
        forcePage={currentPage}
        containerClassName={"pagination"}
        previousLabel={<span className="flex items-center gap-x-2"><ArrowLeft/> Previous</span>}
        nextLabel={<span className="flex items-center gap-x-2">Next <ArrowRight/></span>}
    />
    </div>
}