$(document).ready(function(){
    $("#ul1 li").css(
        {
            "width":"70px",
            "height":"50px",
            "border":"1px solid black",
        }
    )
    $("#ul1+#ul2 li").css(
        {
            "width":"70px",
            "height":"50px",
            "border":"1px solid black"
        }
    )
    $("#table1 tr td").css(
        {
            "width":"100px",
            "height":"40px",
            "border":"1px solid black"
        }
    );
    var contain = $("#contain").html();
    $("#table1 tr:odd").css("background-color","green");
    var div2 = $("<div>1daffa1</div>");
    $("#contain").after(div2);

})