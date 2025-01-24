
var API_ENDPOINT = "https://yn8chzka6d.execute-api.ap-south-1.amazonaws.com/prod";


document.getElementById("saveProduct").onclick = function(){
    var inputData = {
        "Product id": $('#productid').val(),
        "Product name": $('#Product name').val(),
        "category": $('#category').val(),
        "quantity": $('#quantity').val()
    };
    $.ajax({
        url: API_ENDPOINT,
        type: 'POST',
        data:  JSON.stringify(inputData),
        contentType: 'application/json; charset=utf-8',
        success: function (response) {
            document.getElementById("ProductSaved").innerHTML = "Product Data Saved!";
        },
        error: function () {
            alert("Error saving Product data.");
        }
    });
}

// AJAX GET request to retrieve all students
document.getElementById("getProducts").onclick = function(){  
    $.ajax({
        url: API_ENDPOINT,
        type: 'GET',
        contentType: 'application/json; charset=utf-8',
        success: function (response) {
            $('#productTable tr').slice(1).remove();
            jQuery.each(response, function(i, data) {          
                $("#productTable").append("<tr> \
                    <td>" + data['productid'] + "</td> \
                    <td>" + data['product name'] + "</td> \
                    <td>" + data['category'] + "</td> \
                    <td>" + data['quantity'] + "</td> \
                    </tr>");
            });
        },
        error: function () {
            alert("Error retrieving product data.");
        }
    });
}
