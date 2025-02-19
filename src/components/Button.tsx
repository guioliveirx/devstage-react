import React, { ReactNode } from "react";

interface ButtonProps {
    children: ReactNode;
}

const Button = ({ children }: ButtonProps) => {
    return (
        <button className="flex justify-between items-center bg-gray-500 text-blue font-semibold h-12 w-full px-5 rounded-xl cursor-pointer transition-colors duration-300 ease-out hover:bg-blue hover:text-gray-700">
            {children}
        </button>
    );
};

export default Button;
