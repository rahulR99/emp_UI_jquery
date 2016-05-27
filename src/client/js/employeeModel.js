var EmployeeModel=Backbone.Model.extend({
    defaults:{
        /*empId:2,
        empName:"rahul",
        address:{
            street:"Ishwar Nagar",	city:"Thane",state :"Maharashtra",zipCode:4701,addSeqId:12	},
        dept:{deptId:1234,deptName:"DEV"},
        salary:45210,
        empDesg:"SE"*/
        },
    initialize:function(){
        },
    bindEvents:{
        }    
}); 

var EmployeeView=Backbone.Model.extend({
    defaults:{},
    initialize:function(){
    }
}); 

var EmployeeCollection=Backbone.Collection.extend({
    model:EmployeeModel,
    initialize:function(){
        
    }
});

//search Employee 

