import React, { ReactNode } from "react";

interface TabParams {
    active: boolean;
    selectTab: () => void;
    children: ReactNode;
}

const TabButton = ({ active, selectTab, children }: TabParams) => {
    const buttonClasses = active ? "text-[#1a1a1a] border-b border-[#4c9ae7]" : "text-[#a1a1a1]"

    return (
        <button onClick={selectTab}>
            <p className={`mr-3 font-semibold hover:text-1a1a1a ${buttonClasses}`}>
                {children}
            </p>
        </button>
    );
}

export default TabButton;