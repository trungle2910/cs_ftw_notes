function sectionOne() {
    var btnChangeContent = document.getElementById("s1-btn-content");
  btnChangeContent.addEventListener("click", function () {
    document.getElementById("s1-text").innerHTML =
      "by adding Event Listener to the button.";
  });
  
    var btnChangeAtrribute = document.getElementById("s1-btn-attribute");
    btnChangeAtrribute.addEventListener("click", function () {
      // access to the <i> tag
      var icon = document.getElementById("s1-icon");
      // Toggle the className
      if (icon.className === "far fa-heart") {
        icon.className = "fas fa-heart";
      } else {
        icon.className = "far fa-heart";
      }
    });
  }
  sectionOne();

  function hideSectionOne(){
      var button = document.querySelectorAll("#s1 .btn");
      console.log(button);
      for ( var i = 0; i < button.length; i++){
          button[i].classList.add("invisible");
      }
  }

  function sectionTwo(){
   
      document.getElementById("s2-input-name").addEventListener("keyup", function(event){
        var input = event.target;
        var span = input.parentNode.childNodes[3];
        var firstName = input.value.splip(" ")[0];
        span.innerHTML = "First Name:" + firstName;
      
      });
      

      var maxLength = 10;
      document.getElementById("s2-input-email").addEventListener("keyup", function(event){
          var input = event.target;
          var span = input.parentNode.childNodes[3];
          if (event.key = " "){
              span.innerHTML = "space is invalid"
              span.style.color = "red";
              input.value = input.value.trim();
          }
          if (input.value.length <= maxLength){
              span.style.color = "green";
              span.innerHTML = `${maxLength - input.value.length} charactets left`;
          }
          else {
              input.value = input.value.slice(0, maxLength);
            }
            
            });
        
        document.getElementById("s2-btn-reset").addEventListener("click", function(){
            document.getElementById("s2-input-name").value = "";
            document.getElementById("s2-input-email").value = "";
        }); 
                    
}           
sectionTwo();
function addItem(){
    var item = document.createElement("li");
    // item.innerHTML = "New Item"
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    var label = document.createElement("label");
    label.innerHTML = "New Item";
    label.insertBefore(checkbox, label.childNodes[0]);

    item.appendChild(label);

    document.getElementById("s3-list").appendChild(item);
}
function sectionThree(){
    document.getElementById("s3-btn-add").addEventListener("click", addItem);
}
sectionThree();