import { useLocation } from "react-router-dom";

export const Header: React.FC = () => {
    const { pathname } = useLocation();
    const title = pathname.slice(1, pathname.length);

    return (
        <div className="header-container  flex pt-8 items-center justify-between ">
            <div className="page w-9/12 ml-auto font-bold text-2xl text-[#252733] ">
                <p>{title.toUpperCase()}</p>
            </div>
            <div className="actions  w-1/5 mr-auto flex ">
                <div className="icons flex justify-around items-center w-1/3 ">
                    <div className="search-icon hover:cursor-pointer">
                        <img src="icons/search.svg" alt="search" />
                    </div>
                    <div className="notification-icon w-1/2 hover:cursor-pointer">
                        <img src="icons/notification.svg" alt="notification" />
                    </div>
                </div>
                <div className="line">
                    <hr className="h-8 border border-[#DFE0EB] border-solid" />
                </div>
                <div className="information w-2/3 flex items-center justify-around ">
                    <div className="name font-semibold text-sm text-[#252733]">
                        <p>Jones Ferdinand</p>
                    </div>
                    <div className="photo">
                        <img
                            className=" border-4 border-spacing-px border-[#DFE0EB] rounded-full"
                            src="icons/profile.svg"
                            alt="profile"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};
