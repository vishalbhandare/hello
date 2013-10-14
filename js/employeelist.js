var serviceURL = "http://vishalb.in/directory/services/";

var employees;

/*
$('#employeeListPage').bind('pageinit', function(event) {
	getEmployeeList();
});
*/

function getEmployeeList() {

	alert("inside getEmployeeList "+serviceURL + 'getemployees.php');
	/*
	$.getJSON(serviceURL + 'getemployees.php', null, function(data) {
	    alert("inside Json"+data.items);
		//$('#employeeList li').remove();
		employees = data.items;
		$.each(employees, function(index, employee) {
				    alert("inside Json"+employee.firstName);
			$('#employeeList').append('<li><a href="employeedetails.html?id=' + employee.id + '">' +
					'<img src="http://vishalb.in/directory/pics/' + employee.picture + '"/>' +
					'<h4>' + employee.firstName + ' ' + employee.lastName + '</h4>' +
					'<p>' + employee.title + '</p>' +
					'<span class="ui-li-count">' + employee.reportCount + '</span></a></li>');
		});
		$('#employeeList').listview('refresh');
	});
	*/
	var request = $.ajax({
	  type: "POST",
	  url: serviceURL + 'getemployees.php',
	  data: { name: "John", location: "Boston" }
	})
  request.done(function( msg ) {
    alert( "Data Saved: " + msg );
  });
 request.fail(function( jqXHR, textStatus ) {
	  alert( "Request failed: " + textStatus );
	});
}
