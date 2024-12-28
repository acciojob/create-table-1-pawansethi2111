function insert_Row() {
    //Write your code here
  let table = document.getElementById('sampleTable');

	var row= table.insertRow(0);
	var cell1 = row.insertCell(0);
	cell1.innerHTML = 'New Cell2'
	var cell2 = row.insertCell(0);
	cell2.innerHTML ='New Cell1';
  let rowinsert = document.createElement('tr');
  rowinsert.innerHTML=`<td>New Cell1</td><td>New Cell2</td>`;
  
}
