//variable declarations
var employeeCol=new EmployeeCollection([]);

//main document start from here
$(document).ready(function(){
	getEmployee();
	homePageDisplay();
	showHomeFirst();
    setEmployee();
	$("#showlistMenu").click(function(){
        setEmployee();
		showList();
        //location.reload();
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
		searchEmployee(value);
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
        $(".cSaveBtn"+i).attr("disabled",true);
		console.log(""+".cfield"+i);
	}
    
};
function hideOneInput(i){
	$(".cfield"+i).hide();
	$(".para_"+i).show();
    $(".cSaveBtn"+i).attr("disabled",true);
};
function showInputS(i){
	//var len=getEmployee().length;
		$(".cfield"+i).show();
		$(".para_"+i).hide();
        $(".cSaveBtn"+i).attr("disabled",false);
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


//delete an employee
function deleteEmployeeData(empId,index){
    employeeCol.remove(employeeCol.models[index]);
    deleteEmployee(empId);
	showList();
};

function searchEmployee(value){
	console.log("value--"+value);
	var empl=[];
    var searchEmployeeDataCol=new EmployeeCollection([]);
	var employeeList=[];
	employeeList=getEmployee();
	if($.isNumeric(value)){
		console.log("inside numeric section--"+value);
		for(i=0;i<employeeList.length;i++){
			if(employeeList[i].empId == value){
				searchEmployeeDataCol.add([employeeList[i]]);
                //empl.push(employeeList[i]);
				showSearchList(searchEmployeeDataCol.toJSON());
                return;
			}
		}
	}
	for(i=0;i<employeeList.length;i++){
		console.log("inside the string--"+value);
		if(employeeList[i].empName == value){
                searchEmployeeDataCol.add(employeeList[i]);
				 empl.push(employeeList[i]);
			}
	}
	showSearchList(searchEmployeeDataCol.toJSON());
    return;
};

/**********************Save Employee*********************************/
function saveNewEmployee(){
	var newEmpl={
			empId:44,
			empName:($("#text_name1").val()),
			salary:($("#text_sal3").val()),
			empDesg:($('#text_desig2').val()),
			address:{
				street:($('#text_ad_street1').val()),
				city:($('#text_ad_city2').val()),
				state :($('#text_ad_state3').val()),
				zipCode:($('#text_ad_zipCode4').val())
			},
		dept:{
				deptId:($('#text_dept_id1').val()),
				deptName:($('#text_dept_name2').val())
			}
  		};
    console.log("employee going for save--"+JSON.stringify(newEmpl));
    addNewEmployee(newEmpl);
    employeeCol.add([newEmpl]);
	homePageDisplay();
	showHomeFirst();
};

//when page will be closed
window.onbeforeunload = function (e) {
  var message = "Your confirmation message goes here.",
  e = e || window.event;
  // For IE and Firefox
  if (e) {
    e.returnValue = message;
  }
  // For Safari
  return message;
};

//update Employee data after click on save button
function updateEmployeeData(ind,empId1){
    updateExistEmployee(empId1,getEmployeeDataByIds(ind,empId1));
    hideOneInput(ind);
};

function getEmployeeDataByIds(index,emplId){
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
