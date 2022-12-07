import React from "react";

interface ItemProps {
    title: string;
    icon: string;
}

export const ListItem: React.FC<ItemProps> = ({ title, icon }: ItemProps) => {
    return (
        <div className="flex font-normal items-center h-14  leading-5 justify-center text-[#A4A6B3]  text-base">
            <div className="w-1/5 ">
                <img src={icon} alt="icon" />
            </div>
            <div className=" w-2/5">
                <p>{title}</p>
            </div>
        </div>
    );
};
