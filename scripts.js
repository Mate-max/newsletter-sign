function showSuccessMessage(){
    //Get the entered email
    var userEmail = document.getElementById('email').value;

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
function dismissMessage(){
    //Show the .app container
    var appContainer = document.querySelector('.app');
    appContainer.style.display = 'flex';

    //Hide the success message
    var successMessage = document.getElementById('successMessage');
    successMessage.style.display = 'none';
}