const firstNameText = document.getElementById("fFirstName");
const lastNameText = document.getElementById("fLastName");
const emailText = document.getElementById("fEmail");
const textarea1 = document.getElementById("textarea1");
const btnSubmit = document.getElementById("submitBtn");

btnSubmit.addEventListener("click", () => {
    alert(
            `First Name: ${firstNameText.value}    Last Name: ${lastNameText.value}\n\n`+
            `Email: ${emailText.value}\n\n`+
            `Messages: \n${textarea1.value}`
    );
});