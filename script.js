<<<<<<< HEAD
/* Access references for the input and display zones */
var form = document.getElementById("resume-form");
var resumeDisplayElement = document.getElementById("resume-display");
/* Handle Form Submission */
form.addEventListener("submit", function (event) {
    event.preventDefault(); // prevent page reload
    // Collect input values
=======
// Access references for the input and display zones
var form = document.getElementById("resume-form");
var resumeDisplayElement = document.getElementById("resume-display");
// Handle Form Submission
form.addEventListener("submit", function (event) {
    var _a;
    event.preventDefault(); // prevent page reload
    // Collect input values
    var profilePictureInput = document.getElementById("profile-picture");
>>>>>>> 958d4c5 (Updated resume for better responsiveness)
    var firstName = document.getElementById("first-name").value;
    var lastName = document.getElementById("last-name").value;
    var emailAdress = document.getElementById("email-address").value;
    var phoneNumber = document.getElementById("phone-number").value;
    var education = document.getElementById("education").value;
    var experience = document.getElementById("experience").value;
    var skills = document.getElementById("skills").value;
<<<<<<< HEAD
    // Generate resume content dynamically
    var resumeHTML = "\n       <h2><b>Resume</b></h2>\n       <h3>Personal Information</h3>\n       <p><b>FirstName:</b>".concat(firstName, "</p>\n       <p><b>LastName:</b>").concat(lastName, "</p>\n       <p><b>Email:</b>").concat(emailAdress, "</p>\n       <p><b>Phone:</b>").concat(phoneNumber, "</p>\n\n       <h3>Education</h3>\n       <p>").concat(education, "</p>\n\n       <h3>Experience</h3>\n       <p>").concat(experience, "</p>\n\n       <h3>Skills</h3>\n       <p>").concat(skills, "</p>\n      \n     ");
=======
    // Picture Elements
    var profilePictureFile = (_a = profilePictureInput.files) === null || _a === void 0 ? void 0 : _a[0];
    var profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : '';
    // Generate resume content dynamically
    var resumeHTML = "\n    <h2><b>Resume</b></h2>\n    ".concat(profilePictureURL ? "<img src=\"".concat(profilePictureURL, "\" alt=\"Profile Picture\" class=\"profilePicture\">") : "", "\n    <h3>Personal Information</h3>\n    <p><b>First Name:</b> ").concat(firstName, "</p>\n    <p><b>Last Name:</b> ").concat(lastName, "</p>\n    <p><b>Email:</b> ").concat(emailAdress, "</p>\n    <p><b>Phone:</b> ").concat(phoneNumber, "</p>\n\n    <h3>Education</h3>\n    <p>").concat(education, "</p>\n\n    <h3>Experience</h3>\n    <p>").concat(experience, "</p>\n\n    <h3>Skills</h3>\n    <p>").concat(skills, "</p>\n  ");
>>>>>>> 958d4c5 (Updated resume for better responsiveness)
    // Display generated resume
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
    }
    else {
        console.error("The resume display is invalid.");
    }
});
