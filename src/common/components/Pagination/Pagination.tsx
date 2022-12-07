export interface PaginationProps {
    onPageChange: (currPage: number) => void;
    changeSize: (pageSize: number) => void;
    totalCount: number;
    currentPage: number;
    pageSize: number;
}
export const Pagination: React.FC<PaginationProps> = ({
    onPageChange,
    changeSize,
    totalCount,
    currentPage,
    pageSize,
}: PaginationProps) => {

    if (currentPage === 0) {
        return null;
    }
    const onNext = () => {
        if (currentPage === totalCount / pageSize) {
            return;
        }
        onPageChange(currentPage + 1);

    };
    const onPrevious = () => {
        if (currentPage === 1) {
            return;
        }
        onPageChange(currentPage - 1);
    };
    const handlePageSize = (size: number) => {
        if (size <= 1) {
            changeSize(1);
        }
        if (size >= totalCount) {
            changeSize(totalCount);
        } else {
            changeSize(size);
        }
    };

    return (
        <ul className="flex font-normal w-11/12 text-[#9FA2B4] text-sm items-center justify-end ">
            <li className="p-3">
                Rows per page
                <input
                    onChange={(event) => handlePageSize(parseInt(event.target.value))}
                    className="w-1/12 ml-2"
                    value={pageSize}
                    type="number"
                />
            </li>
            <li className="p-3">
                {currentPage}-{pageSize} of {totalCount}
            </li>
            <li className="p-3 ">
                <img
                    className="prev-arrow hover:cursor-pointer"
                    onClick={onPrevious}
                    src="icons/prev.svg"
                    alt="prev-icon"
                />
            </li>

            <li className="p-3 " onClick={onNext}>
                <img
                    className="next-arrow hover:cursor-pointer"
                    onClick={onNext}
                    src="icons/next.svg"
                    alt="next-icon"
                />
            </li>
        </ul>
    );
};
