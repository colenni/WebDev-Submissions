var selectedRow = null

function onFormSubmit(e) {
	event.preventDefault();
        var formData = readFormData();
        if (selectedRow == null){
            insertNewRecord(formData);
		}
        else{
            updateRecord(formData);
		}
        resetForm();    
}

//Retrieve the data
function readFormData() {
    var formData = {};
    formData["idNumber"] = document.getElementById("idNumber").value;
    formData["firstName"] = document.getElementById("firstName").value;
    formData["lastName"] = document.getElementById("lastName").value;
    formData["course"] = document.getElementById("course").value;
    return formData;
}

//Insert the data
function insertNewRecord(data) {
    var table = document.getElementById("storeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
		cell1.innerHTML = data.idNumber;
    cell2 = newRow.insertCell(1);
		cell2.innerHTML = data.firstName;
    cell3 = newRow.insertCell(2);
		cell3.innerHTML = data.lastName;
    cell4 = newRow.insertCell(3);
		cell4.innerHTML = data.course;
    cell4 = newRow.insertCell(4);
        cell4.innerHTML = `<button onClick="onEdit(this)">Edit</button> <button onClick="onDelete(this)">Delete</button>`;
}

//Edit the data
function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("idNumber").value = selectedRow.cells[0].innerHTML;
    document.getElementById("firstname").value = selectedRow.cells[1].innerHTML;
    document.getElementById("lastName").value = selectedRow.cells[2].innerHTML;
    document.getElementById("course").value = selectedRow.cells[3].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.idNumber;
    selectedRow.cells[1].innerHTML = formData.firstName;
    selectedRow.cells[2].innerHTML = formData.lastName;
    selectedRow.cells[3].innerHTML = formData.course;
}

//Delete the data
function onDelete(td) {
    if (confirm('Do you want to delete this record?')) {
        row = td.parentElement.parentElement;
        document.getElementById('storeList').deleteRow(row.rowIndex);
        resetForm();
    }
}

//Reset the data
function resetForm() {
    document.getElementById("idNumber").value = '';
    document.getElementById("firstName").value = '';
    document.getElementById("lastName").value = '';
    document.getElementById("course").value = '';
    selectedRow = null;
}
