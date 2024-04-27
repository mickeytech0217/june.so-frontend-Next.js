"use client"

import React from "react";

interface ReviewCountItemProps {
    connects : string;
    details : string;
}


const ReviewCountItem: React.FC<ReviewCountItemProps> = ({
    connects,
    details
}) => {
    return(
        <div className="p-4">
            <div className="flex justify-center ">
                <h1 className=" text-[81px] text-white text-stroke">{connects}</h1>
                <p className="my-auto text-[36px] text-[#6039db] rotate-[-5deg] font-[cursive]">+</p>
            </div>
            <p className="text-sm">{details}</p>
        </div>
    );
}

export default ReviewCountItem;