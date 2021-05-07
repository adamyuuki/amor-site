var lista = $(".lista");
var button = $("#myButton");
var index = 0;

button.click(handleclick);


function handleclick() {
var timer = setInterval(() => {
    ++index;
    print();
    if (index === 100) {
        clearInterval(timer);
    }
}, 500);
	
}

function print() {
     lista.append("<p> MUITO </p>");
}