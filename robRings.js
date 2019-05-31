function addNewItem() {
  document.querySelector('.bg-modal').style.display = 'flex';
}

function addInfo() {
  let cellSku, cellDescription, cellQty, cellCost, cellPrice, cellImage;

  // closes modal when submit button is clicked
//  document.querySelector('.bg-modal').style.display = 'none';
  $(".bg-modal").toggle(fasle);

 // validation
 if (document.getElementById("new_sku").value <= 0) {
   alert('Please enter a value in all fields.');
 } else if (document.getElementById("new_descrip").value <= 0 ) {
    alert('Please enter a value in all fields.');
} else if (document.getElementById("new_qty").value <= 0) {
   alert('Please enter a value in all fields.'); 
} else if (document.getElementById("new_cost").value <= 0) {
  alert('Please enter a value in all fields.');
} else if (document.getElementById("new_price").value <= 0) {
  alert('Please enter a value in all fields.')
} else {

    // selects table
    let table = document.getElementById("main_table");
    
      // creates new row
      let row = table.insertRow(1);
  
      // creates cells in new row
      cellSku = row.insertCell(0);
      cellDescription = row.insertCell(1);
      cellQty = row.insertCell(2);
      cellCost = row.insertCell(3);
      cellPrice = row.insertCell(4);
      cellImage = row.insertCell(5);

      // updates user interface
      cellSku.innerHTML = document.getElementById("new_sku").value;
      cellDescription.innerHTML = document.getElementById("new_descrip").value;
      cellQty.innerHTML = parseInt(document.getElementById("new_qty").value); 
      cellCost.innerHTML = "$" + document.getElementById("new_cost").value;
      cellPrice.innerHTML = "$" + document.getElementById("new_price").value;
    
      // upload img
      let picture = document.getElementById("file").files[0].name;
      cellImage.innerHTML = '<img src="' + picture + '" width="200" height="200" alt="skull ring"><button type="button" class="edit_btn">Edit</button>'
 }
   

  // clear fields once you hit submit
  document.getElementById('new_sku').value = '';
  document.getElementById('new_descrip').value = '';
  document.getElementById('new_qty').value = '';
  document.getElementById('new_cost').value = '';
  document.getElementById('new_price').value = '';
  document.getElementById('file').value = '';

}

document.getElementById('btn-add-new').addEventListener('click', addInfo);

// close modal
document.querySelector('.close').addEventListener('click', function() {
  document.querySelector('.bg-modal').style.display = 'none';
});

//TODO: add edit button to each row, modal, edit UI

document.querySelector('.edit_btn').addEventListener('click', addNewItem);