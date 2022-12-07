import { Ticket } from "./TichketItemData";

interface TicketItemProps {
    details: Ticket;
}
export const TicketItem: React.FC<TicketItemProps> = ({
    details,
}: TicketItemProps) => {
    return (
        <tr className="border-[#DFE0EB] border h-[92px]">
            <td>
                <div className="info flex ml-8">
                    <div className="photo mr-8">
                        <img src="icons/tom.svg" alt="tom" />
                    </div>
                    <div className="issue ">
                        <p className="font-semibold text-[#252733]	text-sm">
                            {details.details}
                        </p>
                        <p className="font-normal text-[#C5C7CD] text-xs ">
                            {details.updated}
                        </p>
                    </div>
                </div>
            </td>
            <td>
                <div className="name ">
                    <p className="font-semibold text-[#252733]	text-sm">{details.name}</p>
                    <p className="font-normal text-[#C5C7CD] text-xs ">
                        {details.onTime}
                    </p>
                </div>
            </td>
            <td>
                <div className="date ">
                    <p className="font-semibold text-[#252733]	text-sm">{details.date}</p>
                    <p className="font-normal text-[#C5C7CD] text-xs ">{details.time}</p>
                </div>
            </td>
            <td>
                <div className="priority font-bold text-[11px] leading-[14px] text-[#fff] ">
                    <p
                        className={
                            details.priority === "HIGH"
                                ? "bg-[#F12B2C] w-[54px] p-2 flex justify-center items-center  border-inherit rounded-full"
                                : details.priority === "NORMAL"
                                    ? "bg-[#29CC97] p-2 w-[76px] flex justify-center items-center border-inherit   rounded-full"
                                    : "bg-[#FEC400] flex justify-center items-center border-inherit w-[54px] p-2 rounded-full"
                        }
                    >
                        {details.priority}
                    </p>
                </div>
            </td>
            <td>
                <div className="see-more hover:cursor-pointer ">
                    <img src="icons/more.svg" alt="dots" />
                </div>
            </td>
        </tr>
    );
};
