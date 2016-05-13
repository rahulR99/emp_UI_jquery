
var emp={
	value:[
		{
		empId:"1234",
		empName:"rahul",
		salary:45210,
		empDesg:"SE",
		address:{
			street:"Ishwar Nagar",
			city:"Thane",
			state :"Maharashtra",
			zipCode:477701
			},
		dept:{
			deptId:1234,
			deptName:"DEV"
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
var employee={value:[]};

function getEmployee(){
	return employee.value;
}

function writeToFile(data){                                                		     		      $.get("http://localhost:8080/ems/employee/hello",function(response){
       				alert("Data: " + response );
     		});
     		};
/****retrieve data from db***********************/
function setEmployee(){
	console.log("retrieveData function////////");
	$.get("http://localhost:8080/ems/employee/list",function(response){
          console.log("data: "+response);
		employee.value=emp.value.concat(response);
		realDataEmployee=employee.value;
       });
};

/****Save Employee*********************************/
function saveNewEmployee(){
	var newEmpl={
			empId:"temp_id",
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
  		}
	employee.value.push(newEmpl);
	alert("New Employee Added Successfully:");
	homePageDisplay();
	showHomeFirst();
};
	


