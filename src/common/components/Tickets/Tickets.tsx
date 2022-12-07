import { useMemo, useState } from "react";
import { useGetTickets } from "../../hooks/useGetTickets.hook";
import { Pagination } from "../Pagination/Pagination";
import { TicketItem } from "../TicketItem/TicketItem";

export const Tickets: React.FC = () => {
    const { tickets, error } = useGetTickets();
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(4);
    const currentTickets = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * pageSize;
        const lastPageIndex = firstPageIndex + pageSize;
        return tickets?.tickets.slice(firstPageIndex, lastPageIndex);
    }, [currentPage, pageSize, tickets?.tickets]);
    let content;
    if (tickets) {
        content = currentTickets?.map((ticket, index) => {
            return <TicketItem key={index} details={ticket} />;
        });
    }
    if (error) {
        content = <h2>Something went wrong! {error}</h2>;
    }

    return (
        <div className="tickets-container  bg-[#fff] border-[#DFE0EB] border m-8 rounded-lg ">
            <div className="heading mt-[32px] flex justify-between">
                <div className="tickets-head font-bold text-[19px] leading-6 ml-8 w-1/4">
                    <p className="ml-[15px]">All tickets</p>
                </div>
                <div className="tickets-action w-1/5 ">
                    <div className="sort hover:cursor-pointer inline-block w-1/2">
                        <img
                            className="inline-block"
                            src="icons/sort.svg"
                            alt="sort-icon"
                        />
                        <span className="sort-title ml-[8px] font-semibold text-sm tracking-[0.2px] text-[#4B506D]">
                            Sort
                        </span>
                    </div>
                    <div className="filter inline hover:cursor-pointer">
                        <img
                            className="inline-block"
                            src="icons/filter.svg"
                            alt="filter-icon"
                        />
                        <span className="filter-title ml-[8px] font-semibold text-sm tracking-[0.2px] text-[#4B506D]">
                            Filter
                        </span>
                    </div>
                </div>
            </div>
            <div className="main-content mt-[48px]">
                <table className="table-auto mx-auto w-11/12">
                    <thead>
                        <tr>
                            <th className="text-start font-bold text-[#9FA2B4] text-[14px] leading-[18px] tracking-[0.2px] ">
                                Ticket details
                            </th>
                            <th className="text-start font-bold text-[#9FA2B4] text-[14px] leading-[18px] tracking-[0.2px]">
                                Customer name
                            </th>
                            <th className="text-start font-bold text-[#9FA2B4] text-[14px] leading-[18px] tracking-[0.2px]">
                                Date
                            </th>
                            <th className="text-start font-bold text-[#9FA2B4] text-[14px] leading-[18px] tracking-[0.2px]">
                                Priority
                            </th>
                        </tr>
                    </thead>
                    <tbody>{content}</tbody>
                </table>
                <div className="pagination p-4 ">
                    <Pagination
                        currentPage={currentPage}
                        totalCount={tickets ? tickets.tickets.length : 100}
                        changeSize={setPageSize}
                        pageSize={pageSize}
                        onPageChange={setCurrentPage}
                    />
                </div>
            </div>
        </div>
    );
};
