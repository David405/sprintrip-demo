function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }

//subscribe to email
var email_Input = document.getElementById("email_only");
var email_form = document.getElementById("email_submit");

email_form.addEventListener("submit", function(evt) {
    evt.preventDefault();
  fetch('https://rocky-mesa-69765.herokuapp.com/email/add', {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
  },
    body:JSON.stringify({email: email_Input.value})
}).then((res) => res.json())
.then((data) =>  console.log(data))
.catch((err)=>console.log(err))
});


//add question form submit
var name_input=document.getElementById('qus_name');
var email_qus_input=document.getElementById("qus_email")
var qus=document.getElementById("question");
var qus_form=document.getElementById("question_form");
qus_form.addEventListener('submit', function(evt) {
  evt.preventDefault();
  fetch('https://rocky-mesa-69765.herokuapp.com/question/add', {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
  },
    body:JSON.stringify({email: email_qus_input.value, name:name_input.value, question:qus.value})
}).then((res) => res.json())
.then((data) =>  console.log(data))
.catch((err)=>console.log(err))
})