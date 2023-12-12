function submitForm() {
    var Name = document.getElementById("Name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    console.clear();
    console.log("contact-form:");
    console.log("Name: " + Name);
    console.log("Email: " + email);
    console.log("Message: " + message);
    alert('Form submitted successfully')
}
