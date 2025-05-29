    function getFormvalue(event) {
      event.preventDefault(); 

      const fname = document.querySelector('input[name="fname"]').value.trim();
      const lname = document.querySelector('input[name="lname"]').value.trim();

      let fullName = fname;
      if (lname) {
        fullName += (fullName ? ' ' : '') + lname;
      }

      if (!fullName) {
        alert("Please enter your name.");
        return;
      }

      alert(fullName);
    }