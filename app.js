function checkCompatibility() {
    const firstName = document.getElementById("firstName").value.trim();
    const lastName = document.getElementById("lastName").value.trim();
    const dob = document.getElementById("dob").value;
    const bloodType = document.getElementById("bloodType").value;
    const resultDiv = document.getElementById("result");
    const messageDiv = document.getElementById("compatibilityMessage");
    let compatibilityMessage;

    // Validate inputs
    if (!firstName || !lastName || !dob || !bloodType) {
        alert("Please fill in all fields.");
        return;
    }

    // Blood compatibility logic
    switch (bloodType) {
        case "A+":
            compatibilityMessage = "You can donate to A+ and AB+.<br>You can receive from A+, A-, O+, and O-.";
            break;
        case "A-":
            compatibilityMessage = "You can donate to A+, A-, AB+, and AB-.<br>You can receive from A- and O-.";
            break;
        case "B+":
            compatibilityMessage = "You can donate to B+ and AB+.<br>You can receive from B+, B-, O+, and O-.";
            break;
        case "B-":
            compatibilityMessage = "You can donate to B+, B-, AB+, and AB-.<br>You can receive from B- and O-.";
            break;
        case "AB+":
            compatibilityMessage = "You can donate to AB+ only.<br>You can receive from all blood types (Universal Receiver).";
            break;
        case "AB-":
            compatibilityMessage = "You can donate to AB+ and AB-.<br>You can receive from A-, B-, AB-, and O-.";
            break;
        case "O+":
            compatibilityMessage = "You can donate to A+, B+, AB+, and O+.<br>You can receive from O+ and O-.";
            break;
        case "O-":
            compatibilityMessage = "You can donate to all blood types (Universal Donor).<br>You can receive from O- only.";
            break;
        default:
            compatibilityMessage = "Please select a valid blood type.";
    }

    // Display result
    resultDiv.style.display = "block";
    messageDiv.innerHTML = `
        Hello <strong>${firstName} ${lastName}</strong> (DOB: ${dob}),<br><br>
        Blood Type: <strong>${bloodType}</strong><br>
        ${compatibilityMessage}
    `;
}