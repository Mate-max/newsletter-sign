
function showSuccessMessage(){
    //Get the entered email
    var userEmail = document.getElementById('email').value;

    // Check if the email is empty
    if (userEmail.trim() === "") {
    // Display the error message in the span and update input placeholder
    var emailInput = document.getElementById('email');
    emailInput.placeholder = 'ash#loremcompany.com';
    emailInput.style.borderColor = 'red';

    // Create a style element for the placeholder
    var styleTag = document.createElement('style');
    styleTag.innerHTML = '#email::placeholder { color: red; }';

    // Append the style element to the head of the document
    document.head.appendChild(styleTag);

    return;  // Stop further execution
    }

    //Hide the .app container
    var appContainer = document.querySelector('.app');
    appContainer.style.display = 'none';

    //Display the success message
    var successMessage = document.getElementById('successMessage');
    successMessage.style.display = 'block';

    //Dismiss btn
    var dismiss = document.getElementById('dismissBtn');

    //Add some styles
    successMessage.classList.add('centered');
    successMessage.style.position = 'fixed';

    //Update the user email in the success message
    document.getElementById('user-email').innerText = userEmail;
}
function dismissMessage() {
    var appContainer = document.querySelector('.app');
    appContainer.style.display = 'flex';

    var successMessage = document.getElementById('successMessage');
    successMessage.style.display = 'none';

    var emailInput = document.getElementById('email');
    emailInput.placeholder = '@company.com';  // Reset placeholder
    emailInput.style.borderColor = '';  // Reset border color
    emailInput.style.color = '';  // Reset text color
    emailInput.value = '';  // Clear input value
}