function checkValidate() {
    var appno = document.getElementById("appno").value;
    var conno = document.getElementById("conno").value;
    var adharno = document.getElementById("adharno").value;
    var studname = document.getElementById("studname").value;
    var fname = document.getElementById("fname").value;
    var email = document.getElementById("email").value;
    var mname = document.getElementById("studname").value;
    var nation = document.getElementById("nation").value;
    var address = document.getElementById("address").value;
    var city = document.getElementById("city").value;
    var pin = document.getElementById("pin").value;
    var categories = document.getElementById("category_detail").value;
  
  
    
    var email_regx = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
  
    if (appno == "") {
      document.getElementById("app_no").innerHTML =
        "** please Enter Application No.";
      return false;
    }
    if (isNaN(appno)) {
      document.getElementById("app_no").innerHTML = "** please enter only digits";
      return false;
    }
  
    if (conno == "") {
      document.getElementById("con_no").innerHTML = "** please Enter Contact No.";
      return false;
    }
    if (isNaN(conno)) {
      document.getElementById("con_no").innerHTML = "** please enter only digits";
      return false;
    }
    if (conno.length != 10) {
      document.getElementById("con_no").innerHTML =
        "** contact no must be 10 digit";
      return false;
    }
  
    if (adharno == "") {
      document.getElementById("adhar_no").innerHTML =
        "** please Enter Adharcard No.";
      return false;
    }
    if (isNaN(adharno)) {
      document.getElementById("adhar_no").innerHTML = "** please enter only digits";
      return false;
    }
    if (adharno.length != 12) {
      document.getElementById("adhar_no").innerHTML =
        "** adhar no must be 12 digit";
      return false;
    }
  
    if (studname == "") {
      document.getElementById("stud_no").innerHTML = "** please Enter Full Name";
      return false;
    }
    if (studname.length <= 2 || studname.length >= 40) {
      document.getElementById("stud_no").innerHTML =
        "** Name length must be between 2 to 40";
      return false;
    }
  
    if (fname == "") {
      document.getElementById("father_nm").innerHTML =
        "** please Enter Father's Name";
      return false;
    }
  
    if (email == "") {
      document.getElementById("email_id").innerHTML = "** please Enter Email";
      return false;
    }
    if (email_regx.test(email)) {
      document.getElementById("email_id").innerHTML =
        "** please Enter Valid Email";
      return false;
    }
  
    if (mname == "") {
      document.getElementById("mother_nm").innerHTML =
        "** please Enter Mother's Name";
      return false;
    }
  
    if (nation == "") {
      document.getElementById("nationality").innerHTML =
        "** please Enter Nationality";
      return false;
    }
  
    if (address == "") {
      document.getElementById("address_detail").innerHTML =
        "** please Enter Address";
      return false;
    }
  
    if (city == "") {
      document.getElementById("city_detail").innerHTML =
        "** please Enter City";
      return false;
    }
  
    if (pin == "") {
      document.getElementById("pincode").innerHTML = "** please Enter PinCode";
      return false;
    }
    if (isNaN(pin)) {
      document.getElementById("pincode").innerHTML = "** please enter only digits";
      return false;
    }
    if (pin.length != 6) {
      document.getElementById("pincode").innerHTML =
        "** pincode no must be 6 digit";
        pin.focus();
      return false;
    }
  
    if(categories == 'Default'){
      document.getElementById('cat').innerHTML="** please select value";
      categories.focus();
      return false;
    }
  }