import AllButtons from "./AllButtons";

const HandleButtonClick = ({ currentVal, setCurrentVal, setResult }) => {
    //creating function inside of component which takes value
    //we get this value from the All Buttons component as a prop which takes whatever is clicked and sends it here as a value
    
    const valueChecker = (value) => { 
        // If 'C' is pressed, clear the input and result
        if (value === "C") {
            setCurrentVal('');
            setResult(null);
        } 
        // If '=' is clicked, evaluate the expression
        else if (value === '=') {
            try {
                // Only evaluate if currentVal is not empty
                if (currentVal) {
                    //evaluate the problem and sets it as the result
                    setResult(eval(currentVal));
                    //clears current value
                    setCurrentVal('');
                }
            //if error ill get alerted
            } catch (e) {
                alert('ERROR');
                console.log(e);
            }
        } 
        // Otherwise, add the clicked value to currentVal
        else {
            setCurrentVal(currentVal + value); // Append clicked value to current expression
        }
    };

    return (
        <AllButtons valueChecker={valueChecker} />
    );
};

export default HandleButtonClick;
