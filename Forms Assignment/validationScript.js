// Retrieve the form and input field elements
const form = document.getElementById('myForm');
const inputField = document.getElementById('inputField');

// Add event listener to handle form submission
form.addEventListener('submit', function(event) {
    // Regular expression for alphanumeric input (letters and numbers only)
    const alphanumericPattern = /^[a-zA-Z0-9]+$/;

    // Get the value of the input field
    const inputValue = inputField.value;

    // Check if the input matches the alphanumeric pattern
    if (!alphanumericPattern.test(inputValue)) {
        // Prevent form submission
        event.preventDefault();
        
        // Display an error message if input is not alphanumeric
        alert('Error: Input must be alphanumeric!');
    } else {
        // Display a confirmation message for valid input
        alert('Success: Input is valid!');
    }
});
