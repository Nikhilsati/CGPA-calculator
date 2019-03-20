var name = document.getElementsByClassName("a").value;
    var count1 = 0;
    var count2 = 0;
var ID = function () {
  return '_' + Math.random().toString(36).substr(2, 9);
};

let listOfCredit = [];

function storeCredit(credit) {
    listOfCredit.push(credit);
}

let listOfTotal = [];

var grade;
var gradeValue;

function generateGrade(TotalMarks) {
    if(TotalMarks>90) {
        grade = 'O'; 
        gradeValue = 10;
    }
    else if(TotalMarks>80) {
        grade = 'A+'; 
        gradeValue = 9;
    }
    else if(TotalMarks>70) {
        grade = 'A'; 
        gradeValue = 8;
    }
    else if(TotalMarks>60) {
        grade = 'B+'; 
        gradeValue = 7;
    }
    else if(TotalMarks>55) {
        grade = 'B'; 
        gradeValue = 6;
    }
    else if(TotalMarks>50) {
        grade = 'C'; 
        gradeValue = 5;
    }
    else if(TotalMarks>40) {
        grade = 'P'; 
        gradeValue = 4;
    }
    else {
        grade = 'F';
        graveValue = 0;
    }
}
function storeTotal (gradeValue,credit) {
    listOfTotal.push(gradeValue*credit);
}

var totalCredit = 0;
function calculateTotalCredits() {
    for(let i = 0; i<listOfCredit.length;i++) {
        totalCredit = totalCredit + listOfCredit[i];
    }
}
function calculateCgpa() {
    var allTotal = 0;
    for(let i  = 0; i< listOfTotal.length; i++) {
        allTotal += listOfTotal[i];
    }
    totalCredit = 0;
    calculateTotalCredits();
    var CGPA = 0;
    CGPA = parseFloat(allTotal/totalCredit);
    var gpa = document.createElement('div');
    gpa.innerHTML = `<div class="alert alert-success" role="alert">
  Your CGPA is : ` +  CGPA + `
</div>`;
    document.getElementById('but').appendChild(gpa);
}
var uniqueId; 
function DispChoice1() {
    var ch1 = document.createElement('div');
    var ch2 = document.createElement('div');
    ch1.className = 'Marks';
    ch1.setAttribute("id", "Marksfield");
    ch2.setAttribute("id", "Totalfield");
    ch2.className = 'Total';
    if(document.getElementById("exampleRadios1").checked) {
        if(count1==0) {
            count1 = 1;
            ch1.innerHTML = `<div class="form-group"> <label for="formGroupExampleInput">Internal Marks</label><input type="number" class="form-control" id="Text3" placeholder="Enter Marks" required> </div> <div class="fo rm-group"> <label for="formGroupExampleInput">Cat 1</label> <input type="number" class="form-control" id="Text4" placeholder="Enter Marks" required> </div> <div class="form-group">  <label for="formGroupExampleInput2">Cat 2</label> <input  type="number" class="form-control" id="Text5" placeholder="Enter Marks" required> </div> <div class="form-group"> <label for="formGroupExampleInput2">External</label><input type="number" class="form-control" id="Text6" placeholder="Enter Marks" required> </div>`;
        document.getElementById('Mar').appendChild(ch1); 
        var elem = document.getElementById("Totalfield");
        if(count2!= 0) {
            elem.parentNode.removeChild(elem);
        }
            
        count2 = 0;    
        }
        
    }
    if(document.getElementById("exampleRadios2").checked) {
        if(count2==0) {
            count2 = 1;
            ch2.innerHTML = `
                         <div class="form-group">
                            <label for="formGroupExampleInput2">Total</label>
                            <input type="number" class="form-control" id="Text7" placeholder="Enter Marks" required>
                          </div> `;
            document.getElementById('Mar').appendChild(ch2); 
            var elem = document.getElementById("Marksfield");
            if(count1!= 0) {
            elem.parentNode.removeChild(elem);
        }
            count1 = 0;    
        }
        
    }
    
}
var clickcount = 0;
function showCgpaButton() {
    if(clickcount == 1) {
        var ch = document.createElement('div');
        ch.innerHTML = `<button onclick="calculateCgpa()" type="button" class=" btn btn-primary but" data-                               toggle="modal">
                        Calculate Cgpa
                        </button>`;
        document.getElementById("but").appendChild(ch);
    }
}
function click() {
    var data1 = document.getElementById("Text1").value;
    var data2 = document.getElementById("Text2").value;
    data2 = parseFloat(data2);
    storeCredit(data2);
    if(clickcount % 4== 0 ) {
        uniqueId = ID();
    }
    if(document.getElementById("exampleRadios1").checked) {
        var data3 = document.getElementById("Text3").value;
        var data4 = document.getElementById("Text4").value;
        var data5 = document.getElementById("Text5").value;
        var data6 = document.getElementById("Text6").value;
        data3 = parseFloat(data3);
        data4 = parseFloat(data4);
        data5 = parseFloat(data5);
        data6 = parseFloat(data6);
        var total = data3 + (data4+data5)*.3 + data6/2;
        total = parseFloat(total);
        generateGrade(total);
        storeTotal(gradeValue,data2);
        var div = document.createElement('div');
        if(clickcount %4 == 0 ) {
            div.innerHTML = `<div class="d-flex flex-row bd-highlight mb-3" id=` + uniqueId + `>
                <div class="p-2 bd-highlight">
                <div class="card" style="width: 18rem;">
                  <div class="card-body">
                    <h5 class="card-title"> ` + data1 + `</h5>
                    <p class="card-text">  ` + '<br> Credit : ' + data2 + '<br> Internal : ' + data3 +
                        '<br> Cat 1 : ' + data4 + '<br> Cat 2 :' + data5 + '<br> External : ' + data6 + '<br> Total : '+ total + `<br> Grade : ` + grade + ` </p> <br> 
                  </div>
                </div>
                </div>
                </div>`
            document.getElementById('ABC').appendChild(div);
        }
        else {
            div.innerHTML = 
               `<div class="p-2 bd-highlight">
                <div class="card" style="width: 18rem;">
                  <div class="card-body">
                    <h5 class="card-title"> ` + data1 + `</h5>
                    <p class="card-text">  ` + '<br> Credit : ' + data2 + '<br> Internal : ' + data3 +
                        '<br> Cat 1 : ' + data4 + '<br> Cat 2 :' + data5 + '<br> External : ' + data6 + '<br> Total : '+ total + `<br> Grade : ` + grade + ` </p> <br> 
                  </div>
                </div>
                </div>`;
            document.getElementById(uniqueId).appendChild(div);

        }
           
    }
    if(document.getElementById("exampleRadios2").checked) {
        var data7 = document.getElementById("Text7").value; 
        data7 = parseFloat(data7);
        generateGrade(data7);
        storeTotal(gradeValue,data2);
        var div = document.createElement('div');
        if(clickcount %4 == 0 ) {
           div.innerHTML = `<div class="d-flex flex-row bd-highlight mb-3" id=` + uniqueId + `>
                    <div class="p-2 bd-highlight">
                    <div class="card" style="width: 18rem;">
                    <div class="card-body">
                    <h5 class="card-title"> ` + data1 + `</h5>
                    <p class="card-text">  ` + '<br> Credit : ' + data2 +  '<br> Internal : N.A. <br> Cat 1 : N.A. <br> Cat 2 : N.A. <br> External : N.A. <br> Total : '+ data7 + `<br> Grade : ` + grade + ` </p> <br> 
                  </div>
                </div>
                </div> </div>`; 
            document.getElementById('ABC').appendChild(div);
        }
        else {
            div.innerHTML = `<div class="p-2 bd-highlight">
                    <div class="card" style="width: 18rem;">
                    <div class="card-body">
                    <h5 class="card-title"> ` + data1 + `</h5>
                    <p class="card-text">  ` + '<br> Credit : ' + data2 +  '<br> Internal : N.A. <br> Cat 1 : N.A. <br> Cat 2 : N.A. <br> External : N.A. <br> Total : '+ data7 + `<br> Grade : ` + grade + ` </p> <br> 
                  </div>
                </div>
                </div>`;
            document.getElementById(uniqueId).appendChild(div);
        }    
    }
    showCgpaButton();
    clickcount++;
    
}

