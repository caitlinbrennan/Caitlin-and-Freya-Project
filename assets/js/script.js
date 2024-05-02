function scrollDown(){
    window.scrollTo(0, document.body.scrollHeight + 2000);
}

function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") 
    {
        x.style.display = "none";
    } else 
    {
        x.style.display = "block";
    }
}