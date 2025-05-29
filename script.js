<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Form Login</title>
  <script>
    function getFormvalue(event) {
      event.preventDefault(); // Prevent form submission reload
      
      // Get trimmed values from input fields
      const fname = document.querySelector('input[name="fname"]').value.trim();
      const lname = document.querySelector('input[name="lname"]').value.trim();

      // Combine first and last name, handling empty fields gracefully
      let fullName = fname;
      if (lname) {
        fullName += (fullName ? ' ' : '') + lname;
      }

      // If both fields are empty, alert a message
      if (!fullName) {
        alert("Please enter your name.");
        return;
      }

      alert(fullName);
    }
  </script>