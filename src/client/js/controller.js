
var employee={value:[]};

function getEmployee(){
    console.log(JSON.stringify(employeeCol.toJSON()));
	return employeeCol.toJSON();
};

var resDb;
/**** retrieve data from db***********************/
function setEmployee(){
	console.log("retrieveData function////////");
	$.get("http://localhost:8080/ems/employee/list",function(response){
          console.log("data: "+response);
        for(var i=0;i<response.length;i++){
            resDb=new EmployeeModel(response[i]);
            employeeCol.add([resDb]);
        }
		employee.value=response;
		realDataEmployee=employee.value;
       });
};

/***************Add Employee to database*******************************/
function addNewEmployee(employee){
	console.log("addNewEmployee function////////");
$.ajax({
    url:'http://localhost:8080/ems/employee/addEmployee',
    type:'POST',
    data: JSON.stringify(employee),
    dataType: 'json',
    contentType: "application/json",
    success:function(res){
        alert("Employee is added to database!");
    },
    error:function(res){
        alert("Bad thing happend! " + res.statusText);
    }
});
};
/*********************************Delete Employee********************************/
function deleteEmployee(empId){
  $.ajax({
    url:'http://localhost:8080/ems/employee/delete/'+empId,
    type:'DELETE',
    success:function(res){
        alert("alert from server ::"+res);
       // homePageDisplay();
	  // showHomeFirst();
    },
    error:function(res){
        alert("Bad thing happend! " + res.statusText);
    }
});  
};

/******************************searchEmployee**********************************/
function searchEmployee(empId){
	$.ajax({
    url:'http://localhost:8080/ems/employee/getEmployee/'+empId,
    type:'GET',
    success:function(res){
        console.log(JSON.stringify(res));
        alert("it works!");
        homePageDisplay();
	    showHomeFirst();
    },
    error:function(res){
        alert("Bad thing happend! " + res.statusText);
    }
});  
};

function updateExistEmployee(empId,updateEmp){
    $.ajax({
    url:'http://localhost:8080/ems/employee/update/'+empId,
    type:'PUT',
    data:JSON.stringify(updateEmp),
    contentType:"application/json",
    success:function(res){
        console.log(JSON.stringify(res));
        alert("Employee Updated :"+res);
        //homePageDisplay();
	    //showHomeFirst();
    },
    error:function(res){
        alert("Bad thing happend! " + res.statusText);
    }
});  
}


	


