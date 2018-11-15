/*作业1hellow,jQuery!*/
$(document).ready(function(){
    // $("*").css(
    //     {
    //         "margin":"0",
    //         "padding":"0",
    //     }
    // )
    /*作业2实时问答特效*/
    $("#question").css("height","135px");
    $("#question span").css(
        {
            "background-color":"red",
            "font-size":"20px"
        }
    );
    var sign1 = true;
    $("#result").mouseover(function(){
        $("#result").css(
            {
                "cursor": "pointer",
                "display":"inline-block"
            }
        );
    })
    $("#result").click(function(){
        if(sign1)
        {
            sign1 = false;
            $("#question").append("<div>jQuery是一个JavaScript库.<br/>jQuery极大地简化了JavaScript编程.<br/>jQuery很容易学习.</div>")
        }
    })

    /*作业3 id,和标签选择器*/
    $("#div31").css("background-color","red");
    // $("div").css("color","red");

    /*作业4 过滤选择器*/
    $("#div4_out").css(
        {
            "height":"260px",
            "width":"250px",
            "margin-top":"20px",
            "overflow-y":"scroll",
            "margin-bottom":"40px",
        }
    )
    $("#div41").css(
        {
            "height":"50px",
            "font-size":"30px",
            "font-family":"微软雅黑",
            "font-weight":"600"
        }
    )
    // $("#table4").css(
    //     {
    //         "cellpadding":"0",
    //         "cellspacing":"0",
    //     }
    // )
    $("#div4_out tr:even").css("background-color","#ffd")
    $("#div4_out tr:odd").css("background-color","#ddf");
    $("#table4 tr:gt(3)").css("font-size","12px");
    $("#table4 tr:lt(4)").css("font-size","14px");

    $("#table4 th").css(
        {
            "color":"red",
            "font-size":"20px",
        }
    )
    $("#table4 tr:last").css("color","blue");

    /*作业5 鼠标点击事件,odd行变色*/
    $("#div51").css("width","55px");
    $("#div51").mouseover(function(){
        $("#div51").css("cursor","pointer");
    })
    $("#div51 p:first").click(function(){
        alert("段落1");
    })
    $("#div51 p:last").click(function(){
        alert("段落2");
    })
    /*题5 第二问*/
    $("#div52").css(
        {
            "display":"inline-block",
            "margin-right":"40px",
            "margin-top":"40px",
            "margin-bottom":"25px",
        }
    )
    $("#div53").css(
        {
            "display":"inline-block",
            "font-size":"14px",

        }
    )
    $("#div52 tr:even").css("background-color","#50ffb6");


    /*第六题 鼠标经过事件*/
    var sign = false;
    $("#div62").css("visibility","hidden");
    $("#div61").click(function(){
        if(sign == false)
        {
            $("#div62").css("visibility","visible");
        }
        if(sign == true)
        {
            $("#div62").css("visibility","hidden");
        }
        sign = !sign;
    })

    $("#div62").css("cursor","pointer");
    $("#div61").css("cursor","pointer");
    /*以下相同操作可以抽取出来*/

    $("#div62 tr:eq(0)").on(
        {
            "mouseover":function(){$("#div62 tr:eq(0)").css("background-color","green")},
            "mouseout":function(){$("#div62 tr:eq(0)").css("background-color","")}
        }
    )
    $("#div62 tr:eq(1)").on(
        {
            "mouseover":function(){$("#div62 tr:eq(1)").css("background-color","green")},
            "mouseout":function(){$("#div62 tr:eq(1)").css("background-color","")}
        }
    )
    $("#div62 tr:eq(2)").on(
        {
            "mouseover":function(){$("#div62 tr:eq(2)").css("background-color","green")},
            "mouseout":function(){$("#div62 tr:eq(2)").css("background-color","")}
        }
    )
    $("#div62 tr:eq(3)").on(
        {
            "mouseover":function(){$("#div62 tr:eq(3)").css("background-color","green")},
            "mouseout":function(){$("#div62 tr:eq(3)").css("background-color","")}
        }
    )
    $("#div62 tr:eq(4)").on(
        {
            "mouseover":function(){$("#div62 tr:eq(4)").css("background-color","green")},
            "mouseout":function(){$("#div62 tr:eq(4)").css("background-color","")}
        }
    )

    /*第七题 鼠标焦点事件*/
    $("#div7_out").css(
        {
            "width":"400px",
            "height":"500px",
            "border":"1px solid #999999",
            "display":"flex",
            "flex-direction":"column",
            "margin-left":"20px",
        }
    )
    $("#div7_top").css(
        {
            "width":"100%",
            "flex":"0.15",
            "display":"flex",
            "align-items":"center",
            "border-bottom":"1px solid #999999",
        }
    )
    $("#div7_top div:eq(0)").css(
        {
            "flex":"0.45",
            "padding-bottom":"5px",
            "font-size":"18px",
            "font-weight":"550",
            "font-family":"微软黑体",
            "color":"#999888",
        }
    )
    $("#div7_top div:eq(1)").css(
        {
            "flex":"0.35",
            "font-family":"微软黑体",
            "color":"#999888",
        }
    )
    $("#div7_top div:eq(2)").css(
        {
            "flex":"0.2",
        }
    )

    $("#div7_center").css(
        {
            "width":"100%",
            "flex":"0.65",
            "display":"flex",
            "align-items":"center",
            "padding-left":"10px",
        }
    )

    $("#div7_bottom").css(
        {
            "width":"100%",
            "flex":"0.2",
            "font-family":"微软黑体",
            "color":"#9465c1",
        }
    )
    /*鼠标点击事件*/
    $("#div7_center table tr:eq(0) input").focus(function(){
        $("#div7_center table tr:eq(0) input").css("border","2px solid blue");
    })
    $("#div7_center table tr:eq(0) input").blur(function(){
        $("#div7_center table tr:eq(0) input").css("border","1px solid #999999");
    })
    $("#div7_center table tr:eq(1) input").focus(function(){
        $("#div7_center table tr:eq(1) input").css("border","2px solid blue");
    })
    $("#div7_center table tr:eq(1) input").blur(function(){
        $("#div7_center table tr:eq(1) input").css("border","1px solid #999999");
    })
    $("#div7_center table tr:eq(2) input").focus(function(){
        $("#div7_center table tr:eq(2) input").css("border","2px solid blue");
    })
    $("#div7_center table tr:eq(2) input").blur(function(){
        $("#div7_center table tr:eq(2) input").css("border","1px solid #999999");
    })

    /*div7_center布局*/
    $("#div7_center table").css(
        {
            "width":"75%",
            "height":"70%",
        }
    )
    $("#div7_center table tr").css(
        {
            "height":"55px",
        }
    )
    $("#div7_center table tr input").css(
        {
            "height":"27px",
            "font-size":"15px",
            "border":"1px solid #999999",
        }
    )
    $("#div7_center table tr span").mouseover(function(){
        $("#div7_center table tr span").css("cursor","pointer");
    })

    /*第八题 制作团购网主导航*/
    $("#contain8").css(
        {
            "margin-top":"30px",
            "margin-left":"30px",
            "margin-bottom":"50px",
            "width":"450px",
        }
    )
    $("#contain8 ul").css(
        {
            "background-color":"#46a6c1",
            "list-style":"none",
            "height":"30px",
        }
    )
    $("#contain8 ul li").css(
        {
            "display":"inline-block",
            "padding-right":"10px",
            "text-align":"center",
            "padding-top":"4px",
            "padding-left":"6px",
        }
    )
    $("#contain8 ul li").mouseover(function(){
        $("#contain8 ul li").css("cursor","pointer");
    })
    $("#contain8 ul li:eq(0)").on(
        {
            "mouseover":function(){$("#contain8 ul li:eq(0)").css("background-color","blue")},
            "mouseout":function(){$("#contain8 ul li:eq(0)").css("background-color","")}
        }
    )
    $("#contain8 ul li:eq(1)").on(
        {
            "mouseover":function(){$("#contain8 ul li:eq(1)").css("background-color","blue")},
            "mouseout":function(){$("#contain8 ul li:eq(1)").css("background-color","")}
        }
    )
    $("#contain8 ul li:eq(2)").on(
        {
            "mouseover":function(){$("#contain8 ul li:eq(2)").css("background-color","blue")},
            "mouseout":function(){$("#contain8 ul li:eq(2)").css("background-color","")}
        }
    )
    $("#contain8 ul li:eq(3)").on(
        {
            "mouseover":function(){$("#contain8 ul li:eq(3)").css("background-color","blue")},
            "mouseout":function(){$("#contain8 ul li:eq(3)").css("background-color","")}
        }
    )
    $("#contain8 ul li:eq(4)").on(
        {
            "mouseover":function(){$("#contain8 ul li:eq(4)").css("background-color","blue")},
            "mouseout":function(){$("#contain8 ul li:eq(4)").css("background-color","")}
        }
    )
    $("#contain8 ul li:eq(5)").on(
        {
            "mouseover":function(){$("#contain8 ul li:eq(5)").css("background-color","blue")},
            "mouseout":function(){$("#contain8 ul li:eq(5)").css("background-color","")}
        }
    )
    $("#contain8 ul li:eq(6)").on(
        {
            "mouseover":function(){$("#contain8 ul li:eq(6)").css("background-color","blue")},
            "mouseout":function(){$("#contain8 ul li:eq(6)").css("background-color","")}
        }
    )

    /* 第九题,鼠标点击事件,after*/
    $("#div91 div:first,#div92 div:first").css(
        {
            "flex":"0.08",
            "padding-left":"10px",
        }
    )
    $("#div92_out").css("display","none");
    $("#div93_out").css("display","none");
    var sign9 = false;
    $("#div91,#div92").on({
        "mouseover":function(){$("#div91,#div92").css("background-color","green")},
        "mouseout":function(){$("#div91,#div92").css("background-color","")},
        "click":function(){
            if(sign==false)
            {
                $("#div91_out").css("display","none");
                $("#div92_out").css("display","block");
                $("#div93_out").css("display","block");
            }
            if(sign9==true)
            {
                $("#div91_out").css("display","block");
                $("#div92_out").css("display","none");
                $("#div93_out").css("display","none");
            }
            sign9=!sign9;
        },
    })

    /*第10题,消失动画特效*/
    $("#div101").css("display","none");
    $("#delete").click(function(){
        $("#div101").fadeIn("slow");
    })
    $("#no1").click(function(){
        $("#div101").fadeOut("fast");
    })
    var checkbox10 = document.getElementById("checkbox10");
    var checkbox100 = document.getElementsByName("checkbox100")
    checkbox10.onclick = function()
    {
        if(checkbox10.checked)
        {
            checkbox100[0].checked = true;
        } else
        {
            checkbox100[0].checked = false;
        }
    }





})


// $(function(){
//     alert("hellow,jQuery!");
// })
//
// $(document).ready(function(){
//     alert("hellow,jQuery!");
//     confirm("hellow,jQuery!");
//     prompt("hellow,jQuery!");
// })



