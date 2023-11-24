document.addEventListener('DOMContentLoaded', function () {
    var regions = [
        "I – Ilocos Region",
        "Region II – Cagayan Valley",
        "Region III – Central Luzon",
        "Region IV‑A – CALABARZON",
        "MIMAROPA Region",
        "Region V – Bicol Region",
        "Region VI – Western Visayas",
        "Region VII – Central Visayas",
        "Region VIII – Eastern Visayas",
        "Region IX – Zamboanga Peninsula",
        "Region X – Northern Mindanao",
        "Region XI – Davao Region",
        "Region XII – SOCCSKSARGEN",
        "Region XIII – Caraga",
        "NCR – National Capital Region",
        "CAR – Cordillera Administrative Region",
        "BARMM – Bangsamoro Autonomous Region in Muslim Mindanao"
    ];

    var regionDropdown = document.getElementById('region');

    regions.forEach(function (region) {
        var option = document.createElement('option');
        option.value = region;
        option.text = region;
        regionDropdown.add(option);
    });
});

function submitForm() {
    var firstName = document.getElementById("firstName").value;
    var middleName = document.getElementById("middleName").value;
    var lastName = document.getElementById("lastName").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var age = document.getElementById("age").value;
    var zipcode = document.getElementById("zipcode").value;
    var region = document.getElementById("region").value;

    console.clear();
    console.log("User Information:");
    console.log("First Name: " + firstName);
    console.log("Middle Name: " + middleName);
    console.log("Last Name: " + lastName);
    console.log("Email: " + email);
    console.log("Phone #: " + phone);
    console.log("Age: " + age);
    console.log("Zipcode: " + zipcode);
    console.log("Region: " + region);
}