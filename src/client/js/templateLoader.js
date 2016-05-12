function showList(){	
$.get("http://localhost:8000/templates/showlist.tmpl", function(value) {
  var tmpl =$.templates(value); 
   var data ={emp:getEmployee()};
  var html = tmpl.render(data); 
  $("#showList").html(html); 
});
};

function homePageDisplay(){
	$.get("http://localhost:8000/templates/home.tmpl", function(value) {
  var tmpl =$.templates(value);
   //var data={emp:employee.value};
  var html = tmpl.render();
  $("#homePageDataDisplay").html(html); 
	$("#writeData").click(function(){
			console.log("inside the hello button");
			writeToFile();
});
});
};

function addNewEmployeeTmpl(){	
$.get("http://localhost:8000/templates/addNewEmployee.tmpl", function(value) {
  var tmpl =$.templates(value); 
  // var data ={emp:employee.value};
  var html = tmpl.render(); 
  $("#addEmployeeColId").html(html);
	$("#addnewemployeebtn").click(function(){
		console.log("you pressed Add new Employee btn ");
			saveNewEmployee();					  
	});
});
};

