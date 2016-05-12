
$(document).ready(function(){
	setEmployee();
	homePageDisplay();
	$("#showList").hide();
	$("#addEmployeeColId").hide();
	$("#homePageDataDisplay").show();
	
	$("#showlistMenu").click(function(){
		showList();
		console.log("inside the show menu");
		$("#showList").show();
		$("#addEmployeeColId").hide();
		$("#homePageDataDisplay").hide();
	});
	
	$("#addnewEmployee01").click(function(){
		addNewEmployeeTmpl();
		$("#showList").hide();
		$("#addEmployeeColId").show();
		$("#homePageDataDisplay").hide();
	});
	$("#homeDisplayId").click(function(){
		homePageDisplay()
		$("#homePageDataDisplay").show();
		$("#showList").hide();
		$("#addEmployeeColId").hide();
	});
	
	
});



