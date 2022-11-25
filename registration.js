function onFormSubmit() {
  resetForm();
}
function readFormData() {
  var formData = {};
  formData["fName"] = document.getElementById("fName").value;
  formData["lName"] = document.getElementById("lName").value;
  formData["email"] = document.getElementById("email").value;
  formData["dob"] = document.getElementById("dob").value;
  //   console.log(formData);
  return formData;
}

function resetForm() {
  document.getElementById("fName").value = "";
  document.getElementById("lName").value = "";
  document.getElementById("email").value = "";
  document.getElementById("dob").value = "";
  selectedRow = null;
}

function validatefname() {
  isValid = true;
  if (document.getElementById("fName").value == "") {
    isValid = false;
    document.getElementById("fnameValidationError").classList.remove("hide");
  } else {
    isValid = true;
    if (
      document.getElementById("fnameValidationError").classList.contains("hide")
    );
    document.getElementById("fnameValidationError").classList.add("hide");
  }
  return isValid;
}
// function validatelname() {
//   isValid = true;
//   if (document.getElementById("lName").value == "") {
//     isValid = false;
//     document.getElementById("lnameValidationError").classList.remove("hide");
//   } else {
//     isValid = true;
//     if (
//       document.getElementById("lnameValidationError").classList.contains("hide")
//     );
//     document.getElementById("lnameValidationError").classList.add("hide");
//   }
//   return isValid;
// }

function onFormSubmit() {
  if (validatefname()) {
    resetForm();
  }
  if (validatelname()) {
    resetForm();
  } 
}
