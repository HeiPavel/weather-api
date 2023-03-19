import React from "react";

export const Loading = () => {
    const array = [1, 2, 3, 4, 5];
    
    return (
        <div className="loader">
            <div className="loader-inner">
                {array.map((elem, index) => {
                    return (
                        <div key={elem} style={{'--delay': elem}} className="loader-line-wrap">
                            <div style={{'--mult': index}} className="loader-line"></div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}