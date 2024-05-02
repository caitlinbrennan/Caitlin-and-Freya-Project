function scrollDown(){
    window.scrollTo(0, document.body.scrollHeight + 2000);
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