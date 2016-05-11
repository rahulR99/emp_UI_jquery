var employee={
	value:[
		{
		empId:"1234",
		empName:"rahul",
		salary:45210,
		desig:"SE",
		address:{
			street:"Ishwar Nagar",
			city:"Thane",
			state :"Maharashtra",
			zipCode:477701
			},
		dept:{
			deptId:1234,
			name:"DEV"
			}
  		},
		{
		empId:"1234",
		empName:"rahul",
		salary:45210,
		desig:"SE",
		address:{
			street:"Ishwar Nagar",
			city:"Thane",
			state :"Maharashtra",
			zipCode:477701
			},
		dept:{
			deptId:1234,
			name:"DEV"
			}
  		}
	]
};

$(document).ready(function(){
	
	$("#showList").hide();
	$("#addEmployeeColId").hide();
	$("#homePageDataDisplay").show();
	
	$("#showlistMenu").click(function(){
		console.log("inside the show menu");
		$("#showList").show();
		$("#addEmployeeColId").hide();
		$("#homePageDataDisplay").hide();
	});
	
	$("#addNewEmployeeId").click(function(){
		$("#showList").hide();
		$("#addEmployeeColId").show();	
		$("#homePageDataDisplay").hide();
	});
	$("#addnewEmployee01").click(function(){
		$("#showList").hide();
		$("#addEmployeeColId").show();
		$("#homePageDataDisplay").hide();
	});
	showList();
	homePageDisplay();
	$("#homeDisplayId").click(function(){
		$("#homePageDataDisplay").show();
		$("#showList").hide();
		$("#addEmployeeColId").hide();
	});
});

function homePageDisplay(){
	$.get("templates/home.tmpl", function(value) {
  var tmpl =$.templates(value);
   var data={emp:employee.value};
  var html = tmpl.render();
  $("#homePageDataDisplay").html(html); 
	
});
};
function showList(){	
$.get("templates/showlist.tmpl", function(value) {
  var tmpl =$.templates(value); 
   var data ={emp:employee.value};
  var html = tmpl.render(data); 
  $("#showList").html(html); 
});
};