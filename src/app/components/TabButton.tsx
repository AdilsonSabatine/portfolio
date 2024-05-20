import React, { ReactNode } from "react";

interface TabParams {
    active: boolean;
    selectTab: () => void;
    children: ReactNode;
}

const TabButton = ({ active, selectTab, children }: TabParams) => {
    const buttonClasses = active ? "text-white border-b border-[#4c9ae7]" : "text-[#ABB7BE]"

    return (
        <button onClick={selectTab}>
            <p className={`mr-3 font-semibold hover:text-white ${buttonClasses}`}>
                {children}
            </p>
        </button>
    );
}

export default TabButton;