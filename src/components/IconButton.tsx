import React, { ReactNode } from "react";

interface IconButtonProps {
    children: ReactNode;
}

const IconButton = ({ children }: IconButtonProps) => {
    return (
        <button className="p-1.5 bg-gray-500 text-blue font-semibold rounded-md cursor-pointer transition-colors duration-300 ease-out hover:bg-blue hover:text-gray-700">
            {children}
        </button>
    );
};

export default IconButton;
