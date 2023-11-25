function submitForm() {
    var Name = document.getElementById("Name").value;
    var email = document.getElementById("email").value;

    console.clear();
    console.log("User Information:");
    console.log("Name: " + Name);
    console.log("Email: " + email);
    alert('Form submitted successfully')
}