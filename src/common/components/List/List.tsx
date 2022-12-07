import { Link } from "react-router-dom";
import { useGetListItems } from "../../hooks/useGetListItems.hook";
import { ListItem } from "../ListItem/ListItem";

export const List: React.FC = () => {
    const { items, error } = useGetListItems();
    let content;
    if (items) {
        content = items?.tabs.map(({ icon, title }) => {
            return (
                <Link key={title} to={`${title.toLowerCase()}`}>
                    <ListItem icon={icon} title={title} />
                </Link>
            );
        });
    }
    if (error) {
        content = <h2>Something went wrong! {error}</h2>;
    }
    return (
        <div className="w-1/6  bg-[#363740] list-container">
            <Link to='/'>
                <div className="flex text-[#A4A6B3] text-[19px] font-bold pt-8 items-center justify-center ">
                    <div className="w-1/4 icon">
                        <img src="icons/kit.svg" alt="kit" />
                    </div>
                    <div className="title">Dashboard Kit</div>
                </div>
            </Link>
            <div className="pt-10">{content}</div>
        </div>
    );
};
