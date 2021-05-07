var lista = $(".lista");
var button = $("#myButton");

button.click(handleclick);


function handleclick() {

setInterval(() => {
    print();
}, 500);
	
}

function print() {
     lista.append("<p> MUITO </p>");
}