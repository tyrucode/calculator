import React from "react";

const AllButtons = ({valueChecker}) => {
    //all buttons
    const buttons = [
        '1', '2', '3', '4', 
        '5', '6', '7', '8', 
        '9', '0', '/', '-', 
        '*', '.', '=', '+', 
        'C' 
      ];

    
    return (
        <div className="calculator-buttons">
    {/* maps all the number values into their own buttons which onCLick send their corresponding value to the valueChecker component
     which resides inside of our handleButton Component*/}
        {buttons.map((value, i) => (
                <button 
                    key={i} 
                    onClick={() => valueChecker(value)} 
                    //if value is C make class name clear, if value is = make class name equals, if neither make the class nothing.
                    //just so i can style both clear and value only 
                    className={value === 'C' ? 'clear' : value === '=' ? 'green' : '' }
                >
                    {value}
                </button>
            ))}
        </div>
    )
}

export default AllButtons