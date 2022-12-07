import { Header } from "../common/components/Header/Header";
import { Tickets } from "../common/components/Tickets/Tickets";

export const TicketsView: React.FC = () => {
    return (
        <div className=" w-5/6 bg-[#E5E5E5]">
            <Header />
            <Tickets />
        </div>
    );
};
