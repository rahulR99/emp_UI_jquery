var realDataEmployee=[];
$(document).ready(function(){
	realDataEmployee=[];
	setEmployee();
	homePageDisplay();
	showHomeFirst();
	
	$("#showlistMenu").click(function(){
		employee.value=realDataEmployee;
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
	
	/****Search Bar************************/
	
	$("#searchBarBtnId").click(function(){
		var value=$("#searchInputId").val();
		setEmployeeData(searchEmployee(value));
		console.log("inside the show menu");
		$("#showList").show();
		$("#addEmployeeColId").hide();
		$("#homePageDataDisplay").hide();
	});
});

//Boolean isSearchEmlement=false;
function showHomeFirst(){
	$("#showList").hide();
	$("#addEmployeeColId").hide();
	$("#homePageDataDisplay").show();
}
function updateEmployee(index){
	console.log("index is "+index);
	console.log("Name __"+getEmployee()[index].empName);
	showInputS(index);
	
};

function hideInputS(){
	console.log("inside the hide input");
	var len=getEmployee().length;
	for(i=0;i<len;i++){
		$(".cfield"+i).hide();
		console.log(""+".cfield"+i);
	}
};

function hideOneInput(i){
	$(".cfield"+i).hide();
		$(".para_"+i).show();
};

function showInputS(i){
	//var len=getEmployee().length;
		$(".cfield"+i).show();
		$(".para_"+i).hide();
};

function saveEmployeeData(index){
	console.log("save employee data which is updated");
	hideOneInput(index);
	var empValue=getEmployee();
	
	var indData=realDataEmployee.indexOf(empValue[index]);
	empValue[index]=dataOfUpdatedEmployee(index,empValue[index].empId);
	employee.value=empValue;
	realDataEmployee[indData]=empValue[index];
	showList();
	//setEmployeeData(empValue);
};

function dataOfUpdatedEmployee(index,emplId){
		var newEmpl={
			empId:emplId,
			empName:($("#text_name_id_"+index).val()),
			salary:($("#text_sal_id_"+index).val()),
			empDesg:($('#text_desig_id_'+index).val()),
			address:{
				street:($('#text_ad_street_id_'+index).val()),
				city:($('#text_ad_city_id_'+index).val()),
				state :($('#text_ad_state_id_'+index).val()),
				zipCode:($('#text_ad_zipCode_id_'+index).val())
			},
		dept:{
				deptId:($('#text_dept_id_id_'+index).val()),
				deptName:($('#text_dept_name_id_'+index).val())
			}
  		};
		return newEmpl;
};


function setEmployeeData(searchEmpData){
	realDataEmployee=employee.value;
	employee.value=searchEmpData;
	showList();
};

function deleteEmployeeData(index){
	var empValue=getEmployee();
	var indData=realDataEmployee.indexOf(empValue[index]);
	empValue.splice(index,1);
	//setEmployeeData(empValue);
	employee.value=empValue;
	//realDataEmployee[indData]
	realDataEmployee.splice(indData,1);
	showList();
};

function searchEmployee(value){
	console.log("value--"+value);
	var empl=[];
	var employeeList=[];
	employeeList=getEmployee();
	if($.isNumeric(value)){
		console.log("inside numeric section--"+value);
		for(i=0;i<employeeList.length;i++){
			if(employeeList[i].empId == value){
				empl.push(employeeList[i]);
				return empl;
			}
		}
	}
	for(i=0;i<employeeList.length;i++){
		console.log("inside the string--"+value);
		if(employeeList[i].empName == value){
				 
				 empl.push(employeeList[i]);
			}
	}
	return empl;
};
