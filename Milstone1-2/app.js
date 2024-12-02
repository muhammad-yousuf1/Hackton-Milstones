document.getElementById("reformat").addEventListener("submit", function (event) {
   
    event.preventDefault();


               let name = document.getElementById("name").value;

         let email = document.getElementById("email").value;

               let phone = document.getElementById("phone").value;

         let education = document.getElementById("education").value;

               let experience = document.getElementById("experience").value;

         let resumeOutput = document.getElementById("resumeOutput");

               let resumeDetails = document.getElementById("resumeDetails");

    resumeDetails.innerHTML = "\n        <h3>".concat(name, "</h3>\n        <p><strong>Email:</strong> ")
    
         .concat(email, "</p>\n        <p><strong>Phone:</strong> ")

    .concat(phone, "</p>\n        <p><strong>Education:</strong> ")
         .concat(education, "</p>\n        <p><strong>Experience:</strong> ")
    
    .concat(experience, "</p>\n    ");
         resumeOutput.style.display = "block";
});
