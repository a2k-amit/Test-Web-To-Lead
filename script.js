let captchaChecked = false;
function isCaptchaTrue() {
  captchaChecked = true;
}

function handlebeforesubmit(event) {
  if (captchaChecked) {
    let outputleaddate = document.querySelector(".output_lead_date");
    let inputleaddate = document.querySelector(".input_lead_date");

    console.log("input_lead_date.value", inputleaddate.value); // string >> date(en_IN)

    let formatedDate = new Date(inputleaddate.value).toLocaleDateString(
      "en-IN"
    );
    outputleaddate.value = formatedDate;
  } else {
    alert("Please Check The Captcha");
    event.preventDefault();
  }
}

function timestamp() {
  var response = document.getElementById("g-recaptcha-response");
  if (response == null || response.value.trim() == "") {
    var elems = JSON.parse(
      document.getElementsByName("captcha_settings")[0].value
    );
    elems["ts"] = JSON.stringify(new Date().getTime());
    document.getElementsByName("captcha_settings")[0].value =
      JSON.stringify(elems);
  }
}
setInterval(timestamp, 500);
