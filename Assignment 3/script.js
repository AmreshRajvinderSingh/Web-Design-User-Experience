//Title constructor function that creates a Title object
var temp=3;
var h1Element = document.createElement('h1');
h1Element.textContent = 'Amresh R Singh - 002209061';
document.body.insertBefore(h1Element, document.body.firstChild);
h1Element.style.textAlign="center";


function pre(){
  var buttonid=document.getElementById("button");
  buttonid.style.backgroundColor="grey";
  buttonid.style.border="grey";

  var drops = document.querySelectorAll(".dropDownTextArea");
    drops.forEach(function(drop) {
        drop.style.display = "none";
    });
}

pre();





function addStudent() {
  temp=temp+1;
  var budget = String(temp) + String(temp + 1) + String(temp + 2) + String(temp + 3) + String(temp + 4);

 
  var table = document.getElementById("myTable");
  var trNode1 = document.createElement("tr");
  var tdCheckBoxNode = document.createElement("td");
  tdCheckBoxNode.innerHTML = '<input type="checkbox" onclick="onClickCheckBox(this)" /><br /><br /><img src="down.png" width="25px" class="imageCollapseAction" onclick="demo1(this)" />'
  var tdStudentNode = document.createElement("td");
  tdStudentNode.innerHTML = 'Student'+' ' +(temp);
  var tdAdvisorNode = document.createElement("td");
  tdAdvisorNode.innerHTML = 'Teacher'+' ' +(temp);
  var tdAwardStatus = document.createElement("td");
  tdAwardStatus.innerHTML = 'Approved';
  var tdSemester = document.createElement("td");
  tdSemester.innerHTML = 'Fall';
  var tdType = document.createElement("td");
  tdType.innerHTML = 'TA';
  var tdBudget = document.createElement("td");
  tdBudget.innerHTML = budget;
  var tdPercent = document.createElement("td");
  tdPercent.innerHTML = '100%';
  var tdDelete = document.createElement("td");
  tdDelete.innerHTML = '<button id="delete">Delete</button>';
  var trNode2 = document.createElement("tr");
  
 var tdAdvisorLabelNode = document.createElement("td");
  tdAdvisorLabelNode.setAttribute("colspan", "8");
   tdAdvisorLabelNode.innerHTML= `
   Advisor:<br /><br />
   Award Details<br />
   Summer 1-2014(TA)<br />
   Budget Number: <br />
   Tuition Number: <br />
   Comments:<br /><br /><br />
   Award Status:<br /><br /><br />
`;

  trNode1.appendChild(tdCheckBoxNode);
  trNode1.appendChild(tdStudentNode);
  trNode1.appendChild(tdAdvisorNode);
  trNode1.appendChild(tdAwardStatus);
  trNode1.appendChild(tdSemester);
  trNode1.appendChild(tdType);
  trNode1.appendChild(tdBudget);
  trNode1.appendChild(tdPercent);
  
  

  trNode2.appendChild(tdAdvisorLabelNode);

  table.appendChild(trNode1);
  table.appendChild(trNode2);
  trNode2.style.display="none";
  
  
  


}

function onClickCheckBox(checkbox){
  var selectedRow= checkbox.parentElement.parentElement;
  var table = document.getElementById('myTable');
  var newtab=document.getElementById('head');
  var btn=document.getElementById('button');

  if(checkbox.checked==true){
    selectedRow.style.backgroundColor="yellow";
    newtab.innerHTML= '<tr><th><th>STUDENT</th><th>ADVISOR</th><th>AWARD<br />STATUS</th><th>SEMESTER</th><th>TYPE</th><th>BUDGET<br />#</th><th>PERCENTAGE</th><th>DELETE</th><th>EDIT</th></tr>';
    var tdDelete = document.createElement("td");
    tdDelete.innerHTML = '<button id="delete" onclick="deleted(this)">Delete</button>';
    var tdEdit = document.createElement("td");
    tdEdit.innerHTML= '<button id="edit" onclick="editing(this)">Edit</button>';
    selectedRow.appendChild(tdDelete);
    selectedRow.appendChild(tdEdit);
    var buttonid=document.getElementById("button");
    buttonid.style.backgroundColor="orange";
    buttonid.style.border="orange";

    



  }else{
    selectedRow.style.backgroundColor="white";
    newtab.innerHTML= '<tr><th><th>STUDENT</th><th>ADVISOR</th><th>AWARD<br />STATUS</th><th>SEMESTER</th><th>TYPE</th><th>BUDGET<br />#</th><th>PERCENTAGE</th>';
    selectedRow.deleteCell(8);
    selectedRow.deleteCell(8);
    var buttonid=document.getElementById("button");
    buttonid.style.backgroundColor="grey";
    buttonid.style.border="grey";
    
    
  }




}

function deleted(deletedRef){
  var deleterow= deletedRef.parentElement.parentElement;
  var deleterow2= deletedRef.parentElement.parentElement.nextElementSibling;
  var index=deleterow.rowIndex;
  var student =deleterow.firstElementChild.nextElementSibling.innerHTML;
  console.log("which Student"+student);
  var lastindex = student.split(" ")[1] ;
  var studentCount=parseInt(lastindex);
  document.getElementById("myTable").deleteRow(deleterow.rowIndex);
  document.getElementById("myTable").deleteRow(deleterow2.rowIndex);

  alert("Student "+studentCount+" Has been Deleted");
  var newtab=document.getElementById('head');
  newtab.innerHTML= '<tr><th><th>STUDENT</th><th>ADVISOR</th><th>AWARD<br />STATUS</th><th>SEMESTER</th><th>TYPE</th><th>BUDGET<br />#</th><th>PERCENTAGE</th>';


}

function editing(editref){
  var editrow= editref.parentElement.parentElement;
  var student =editrow.firstElementChild.nextElementSibling.innerHTML;
  var userInput = prompt("Edit "+student +" Details");
}

function demo1(clickedImage) {
  var parentRow = clickedImage.parentElement.parentElement;
  var nextRow = parentRow.nextElementSibling; 

  if (nextRow.style.display === "none" || nextRow.style.display === "") {
      nextRow.style.display = "table-row"; // Show the row
  } else {
      nextRow.style.display = "none"; // Hide the row
  }
}





 