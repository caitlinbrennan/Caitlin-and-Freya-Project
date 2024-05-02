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

document.addEventListener("DOMContentLoaded", (event) => {
    $(document).ready(function(){
    $("#good-toggle").click(function(){
      $("#good1").toggle();
      $("#good2").toggle();
    });});

    $(document).ready(function(){
    $("#bad-toggle").click(function(){
      $("#bad1").toggle();
      $("#bad2").toggle();
    });});
});