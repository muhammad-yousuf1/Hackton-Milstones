document.getElementById("reformat").addEventListener("submit", function(event) {
    // Prevent form from refreshing the page
    event.preventDefault();

    // Get the values from the input fields
    const name = (document.getElementById("name") as HTMLInputElement).value;
    const email = (document.getElementById("email") as HTMLInputElement).value;
    const phone = (document.getElementById("phone") as HTMLInputElement).value;
    const education = (document.getElementById("education") as HTMLInputElement).value;
    const experience = (document.getElementById("experience") as HTMLTextAreaElement).value;

    // Get the sections to display the generated resume
    const resumeOutput = document.getElementById("resumeOutput");
    const resumeDetails = document.getElementById("resumeDetails");

    // Create the HTML content for the resume
    resumeDetails.innerHTML = `
        <h3>${name}</h3>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Education:</strong> ${education}</p>
        <p><strong>Experience:</strong> ${experience}</p>
    `;

    // Make the resume section visible
    resumeOutput.style.display = "block";
});
