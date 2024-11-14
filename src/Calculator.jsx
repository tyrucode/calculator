import { useState } from "react";
import HandleButtonClick from "./HandleButtonsClick";

const Calculator = () => {
    //creating state for both the result and the value
    const [currentVal, setCurrentVal] = useState('');
    const [result, setResult] = useState(null)

    return (
        <div className="calculator">
            {/* Display for current input or result */}
            <div className="calculator-display">
                {result ? result : currentVal || '0'}
            </div>
            
            {/* Pass necessary props to HandleButtonClick */}
            <div className="calculator-buttons">
                <HandleButtonClick 
                    currentVal={currentVal} 
                    setCurrentVal={setCurrentVal} 
                    setResult={setResult}
                />
            </div>
        </div>
    )
}

export default Calculator