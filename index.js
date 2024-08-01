document.addEventListener('DOMContentLoaded', function () {
    const cardForm = document.getElementById('cardForm');
    const modal = document.getElementById('modal');
    const certificateContent = document.getElementById('certificateContent');
    const closeModal = document.querySelector('.close');
  
    // Hide the modal initially
    modal.style.display = 'none';
  
    cardForm.addEventListener('submit', function (e) {
      e.preventDefault();
  
      // 🚨 Get input values
      const studentNameInput = document.getElementById('studentName');
      const personalMessageInput = document.getElementById("personalMessage");
      const courseNameInput = document.getElementById("courseName"); 
  
      const studentName = studentNameInput.value;
      const personalMessage = personalMessageInput.value;
      const courseName = courseNameInput ? courseNameInput.value : "a course"; // Fallback to "a course" if no input

      if (studentName.trim() === '' || personalMessage.trim() === '') {
        alert('Please fill in all fields');
        return;
      }

      // Create HTML elements for certicate 
      const certificateHeader1El = document.createElement("h1");
      const certificateParagraph1El = document.createElement("p");
      const certificateHeader2El = document.createElement("h2");
      const certificateParagraph2El = document.createElement("p");
      const certificateHeader3El = document.createElement("h3");
      const certificateParagraph3El = document.createElement("p");
      const certificateImgEl = document.createElement("img");
      const certificateParagraph4El = document.createElement("p");

      // Add text and attributes to certificate elements
      certificateHeader1El.textContent = "Certificate of Achievement";
      certificateParagraph1El.textContent = "This is to certify that";
      certificateHeader2El.textContent = `${studentName}`;
      certificateParagraph2El.textContent = "Has almost completed the";
      certificateHeader3El.textContent = `${courseName}`;
      certificateParagraph3El.textContent = "With legendary perseverance and world-class bad-assery for never giving up 🏆";
      certificateImgEl.setAttribute("src", "logo.png");
      certificateImgEl.setAttribute("height", 150);
      certificateImgEl.setAttribute("alt", "CodeSpace Logo");
      certificateParagraph4El.textContent = `${personalMessage}`;

      // 
      certificateContent.append(
        certificateHeader1El, 
        certificateParagraph1El, 
        certificateHeader2El, 
        certificateParagraph2El, 
        certificateHeader3El, 
        certificateParagraph3El, 
        certificateImgEl, 
        certificateParagraph4El
      );
    
      //  Display the modal
      modal.style.display = 'block';
  
      // Clear the form inputs
      studentNameInput.value = '';
      personalMessageInput.value = '';
      if(courseNameInput) courseNameInput.value = '';
    });
  
    //  🚨 Close the modal when the close button is clicked
    closeModal.addEventListener('click', function() {
      modal.style.display = 'none'
    });
  });
  