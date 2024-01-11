let string="";
const btn = document.querySelectorAll(".btn");
Array.from(btn).forEach((button)=>{
    button.addEventListener('click',(e)=>{
        if(e.target.innerHTML === "=") {
            string = eval(string);
            document.querySelector("#input_space").value = string;
        }
        else {
            string = string + e.target.innerHTML;
            document.querySelector("#input_space").value = string;
        }
        if(e.target.innerHTML === "C") {
            string = "";
            document.querySelector("#input_space").value = string;
        }
    })
})
