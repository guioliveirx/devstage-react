import React, { ComponentProps } from "react";

interface IconButtonProps extends ComponentProps<"button"> {}

const IconButton = (props: IconButtonProps) => {
    return (
        <button
            className="p-1.5 bg-gray-500 text-blue font-semibold rounded-md cursor-pointer transition-colors duration-300 ease-out hover:bg-blue hover:text-gray-700"
            {...props}
        />
    );
};

export default IconButton;
