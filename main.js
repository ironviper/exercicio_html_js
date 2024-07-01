const form = document.querySelector('form'); /* Get the <form> element */

const inputFieldA = form.querySelector('#campo-A') /* Get <input> A element */
const inputFieldB = form.querySelector('#campo-B') /* Get <input> B element */

const numberANotFilled = form.querySelector('#not-filled-error-A'); /* Get <p> element containing error message for input A not filled */
const numberBNotFilled = form.querySelector('#not-filled-error-B'); /* Get <p> element containing error message for input B not filled */

const returnMessage = document.querySelector('#return-message'); /* Get <p> element containing the return message of the successful or failed verification */

const button = form.querySelector('button'); /* Get <button> element reponsible for submiting the form */



/* Add Event to <form> when 'submit' */
form.addEventListener('submit', 
    function(e){
        e.preventDefault(); /* Prevent the default submit behavior of the <form> */

        const isInputFieldAFilled = isNumberFilled(inputFieldA); /* Verify if the <input> of number A is filled */
        const isInputFieldBFilled = isNumberFilled(inputFieldB); /* Verify if the <input> of number B is filled */

        !isInputFieldAFilled ? numberANotFilled.style.display = "block" : numberANotFilled.style.display = "none"; /* Display or hide the <p> element with error message, depending if input A is filled or not */

        !isInputFieldBFilled ? numberBNotFilled.style.display = "block" : numberBNotFilled.style.display = "none"; /* Display or hide the <p> element with error message, depending if input B is filled or not */

        if (isInputFieldAFilled && isInputFieldBFilled){ /* If both inputs are filled */

            /* Parse the value from string to int, so the comparison works correctly */
            const valueInputA = parseInt(inputFieldA.value); 
            const valueInputB = parseInt(inputFieldB.value);

            const successMessage = `Verificação bem sucedida o "Número B"=${valueInputB} é maior que o "Número A"=${valueInputA}`; /* Define the success return message */
            const failMessage = `Verificação mal sucedida o "Número B"=${valueInputB} é menor ou igual ao "Número A"=${valueInputA}`; /* Define the failt return message */

            if (valueInputA >= valueInputB){ /* If number A is bigger or equal to number B, the verification fail */
                returnMessage.classList.remove('verificationSucceed'); /* Remove the success styling class from the return message */
                returnMessage.classList.add('verificationFailed'); /* Add the failed styling class to the return message */

                returnMessage.innerHTML = failMessage; /* Set the text to the fail message */
            }else {
                returnMessage.classList.remove('verificationFailed'); /* Remove the failed styling class from the return message */
                returnMessage.classList.add('verificationSucceed'); /* Add the success styling class to the return message */

                returnMessage.innerHTML = successMessage; /* Set the text to the success message */
            }
        }

})

/* Add the Event when change the inputed value in the input A */
inputFieldA.addEventListener('change', function(e){

    !isNumberFilled(inputFieldA) ? numberANotFilled.style.display = "block" : numberANotFilled.style.display = "none"; /* Verify if the input A is empty and display or not the error accordingly */
})

/* Add the Event when change the inputed value in the input B */
inputFieldB.addEventListener('change', function(e){

    !isNumberFilled(inputFieldB) ? numberBNotFilled.style.display = "block" : numberBNotFilled.style.display = "none"; /* Verify if the input B is empty and display or not the error accordingly */
})


/* Helper function to verify if the given field is empty */
function isNumberFilled(inputField){
    return inputField.value != "";
}

