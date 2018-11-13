window.onload = function(){
    var text1 = document.getElementById("text1");
    var text2 = document.getElementById("text2");
    var text3 = document.getElementById("text3");
    var text4 = document.getElementById("text4");
    var text5 = document.getElementById("text5");
    var text6 = document.getElementById("text6");
    var text7 = document.getElementById("text7");

    text1.onmouseout = function()
    {
        if(/[\w]{6,14}/.test(text1.value) )
        {
            document.getElementById("span1").innerText = "√";
        }else if(text1.value.length>0)
        {

            document.getElementById("span1").innerText = "用户名不合法";
        }
    }
    text2.onmouseout = function()
    {

        if(/[0-9a-zA-Z]{6,14}/.test(text2.value))
        {
            document.getElementById("span2").innerText = "√";
        } else if(text2.value.length>0)
        {
            document.getElementById("span2").innerText = "密码不合法";
        }
    }
    text3.onmouseout = function()
    {

        if(text2.value === text3.value &&  /[0-9a-zA-Z]{6,14}/.test(text3.value))
        {
            document.getElementById("span3").innerText = "√";
        } else if(text3.value.length>0)
        {
            document.getElementById("span3").innerText = "密码不一致";
        }
    }
    text4.onmouseout = function()
    {
        if(/([\w]{6,14}@(163|126)(\.com|\.cn|\.org))|([0-9]{5,11}@qq\.com)/.test(text4.value))
        {
            document.getElementById("span4").innerText = "√";
        } else if(text4.value.length>0)
        {
            document.getElementById("span4").innerText = "邮箱不合法";
        }

    }
    text5.onmouseout = function()
    {
        if(/[0-9]{11}/.test(text5.value))
        {
            document.getElementById("span5").innerText = "√";
        } else if(text5.value.length>0)
        {
            document.getElementById("span5").innerText = "手机号不合法";
        }
    }
    text6.onmouseout = function()
    {
        if(/[0-9]{6}/.test(text6.value))
        {
            document.getElementById("span6").innerText = "√";
        } else if(text6.value.length>0)
        {
            document.getElementById("span6").innerText = "邮编不合法";
        }
    }
    text7.onmouseout = function()
    {
        if(/[0-9]{17}[0-9xX]/.test(text7.value))
        {
            document.getElementById("span7").innerText = "√";
        } else if(text7.value.length>0)
        {
            document.getElementById("span7").innerText = "身份证号不合法";
        }
    }

}
