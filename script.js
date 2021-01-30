// Compute method for the simple interest calculator
function compute()
{
    // Extracting fields value from the dom
    let principal = document.getElementById("principal").value;
    let rate = document.getElementById("rate").value;
    let years = document.getElementById("years").value;

    // Check for validations on desired field
    const validateInputs = checkInput(principal) 

    if(validateInputs) {
        let interest = parseInt(principal) * parseInt(years) * parseFloat(rate) / 100;
        let yeildYears = actualYears(parseInt(years));

        let resultElement = document.getElementById("result");

        // Construct the result
        resultElement.innerHTML = `<br/>
        If you deposit <mark>${principal}</mark>,<br/>
        at an interest rate of <mark>${rate}%</mark>.<br/>
        You will receive an amount of <mark>${interest}</mark>,<br/>
        in the year <mark>${yeildYears}</mark>
        <br/>`
    }
    
}

// Actual Year method - to get the future years
function actualYears(noOfYears) {
    const d = new Date();
    const year = d.getFullYear();
    return year + noOfYears;
}

// Set Slider method - get the slider value on onchange and display it
function setSlider() {
    let rate = document.getElementById("rate").value;
    let rateViewElement = document.getElementById("slider");
    rateViewElement.textContent = rate + '%';
}

// Validation method
function checkInput(principal) {
    const principalNumber = parseInt(principal)
    if(!principalNumber || principalNumber <= 0) {
        // show an alert on validation error
        if (confirm("Enter a positive number")) {
            document.getElementById("principal").focus();
        }
        return false
    }
    return true
}
        