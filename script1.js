function clearscreen()
{
    document.getElementById("result").value="";
}

function display(value)
{
    document.getElementById("result").value += value;
}
function final(){
    var p=document.getElementById("result").value;
    var q=eval(p);
    document.getElementById("result").value=q;
}