
// step 1: add click evet handler with the submit button
document.getElementById('btn-submit').addEventListener('click', function(){
    // console.log('submit button clicked');
    // step 2: get the email address inside the email input field
    // always remember to use .value to get from an input field
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    // step 3: get the password 
    // 3.a. set id in html element 
    // 3.b. get the element 
    // 3.c. get the value from  the element 
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;

    // console.log(email, password);

    // Danger: DONOT verify the email password from the client side NOT RECOMMENDED step 4
    // step 4: verify the email and password 
    if(email === 'web@programming-hero.com' && password === 'webDev'){
        // console.log('Valid user');
        window.location.href = 'bank.html';
    }
    else{
        alert('Invalid password');
    }
})

