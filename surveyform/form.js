function validateForm() {
            var firstName = document.forms["surveyForm"]["firstName"].value;
            var lastName = document.forms["surveyForm"]["lastName"].value;
            var dob = document.forms["surveyForm"]["dob"].value;
            var country = document.forms["surveyForm"]["country"].value;
            var profession = document.forms["surveyForm"]["profession"].value;
            var email = document.forms["surveyForm"]["email"].value;
            var mobile = document.forms["surveyForm"]["mobile"].value;

            if (firstName == "" || lastName == "" || dob == "" || country == "" || profession == "" || email == "" || mobile == "") {
                alert("All fields must be filled out");
                return false;
            }

            // Add other necessary validations here

            displayPopup(firstName, lastName, dob, country, profession, email, mobile);
        }

        function displayPopup(firstName, lastName, dob, country, profession, email, mobile) {
            var popupContent = "First Name: " + firstName +
                "\nLast Name: " + lastName +
                "\nDate of Birth: " + dob +
                "\nCountry: " + country +
                "\nProfession: " + profession +
                "\nEmail: " + email +
                "\nMobile: " + mobile;

            alert(popupContent);
            resetForm();
        }

        function resetForm() {
            document.getElementById("surveyForm").reset();
        }