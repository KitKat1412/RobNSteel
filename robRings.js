
function addNewItem() {
  document.querySelector('.bg-modal').style.display = 'flex';
  // $(".bg-modal").toggle();
}

function addInfo() {
  let cellSku, cellDescription, cellQty, cellCost, cellPrice, cellImage;

  // closes modal when submit button is clicked
//  document.querySelector('.bg-modal').style.display = 'none';
  $(".bg-modal").toggle(false);

 // validation
//  if (document.getElementById("new_sku").value <= 0) {
if($("#new_sku").val() <= 0){
  alert('Please enter a value in all fields.');
} else if ($("#new_descrip").val() <= 0 ) {
    alert('Please enter a value in all fields.');
} else if ($("#new_qty").val() <= 0) {
   alert('Please enter a value in all fields.'); 
} else if ($("#new_cost").val() <= 0) {
  alert('Please enter a value in all fields.');
} else if ($("#new_price").val() <= 0) {
  alert('Please enter a value in all fields.')
} else if($("#file").val() <= 0) {
  alert('Please upload a file.');
} else {

    // selects table
    let table = $("#main_table").val(); //document.getElementById("main_table");
    
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
      cellSku.innerHTML = $("#new_sku").val(); //document.getElementById("new_sku").value;
      cellDescription.innerHTML = $("#new_descrip").val();
      cellQty.innerHTML = parseInt($("#new_qty").val()); 
      cellCost.innerHTML = "$" + parseFloat($("#new_cost").val()).toFixed(2);
      cellPrice.innerHTML = "$" + parseFloat($("#new_price").val()).toFixed(2);
    
      // upload img
      let picture = document.getElementById("file").files[0].name;
      cellImage.innerHTML = '<img src="' + picture + '" width="200" height="200" alt="skull ring"><button type="button" class="edit_btn">Edit</button>'
 }
   

  // clear fields once you hit submit
  $("#new_sku, #new_descrip, #new_qty, #new_cost, #new_price, #file").val("");
}

// document.getElementById('btn-add-new').addEventListener('click', addInfo);
$("#btn-add-new").click(addInfo);

// close modal
// document.querySelector('.close').addEventListener('click', function() {
$(".close").click(function() {
  $(".bg-modal").toggle(false);
});

//TODO: add edit button to each row, modal, edit UI
// document.querySelector('.edit_btn').addEventListener('click', addNewItem);
$(".edit_btn").click(addNewItem);