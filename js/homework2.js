window.onload = function()
{
    var div1 = document.createElement("div");
    document.body.appendChild(div1);
    div1.setAttribute("style","width: 100px;height: 25px;border: 1px solid gainsboro;font-size: 14px;display: flex;justify-content: center;align-items: flex-end;");
    var div2 = document.createElement("div");
    document.body.appendChild(div2);
    div2.setAttribute("style","width: 400px;height: 400px;position: absolute;margin-left: 102px;margin-top: -27px;");
    div2.style.display = "none";
    div1.onmouseover = function()
    {
        div2.style.display = "block";
        div1.style.transition = "background-color 0.4s linear";
        div1.style.backgroundColor = "cyan";
    }
    div1.onmouseout = function()
    {
        div2.style.display = "none";
        div1.style.backgroundColor = "";
    }
    div2.onmouseover = function()
    {
        div2.style.display = "block";
    }
    div2.onmouseout = function()
    {
        div2.style.display = "none";
        div1.style.backgroundColor = "";
    }
    var div22 = document.createElement("div");
    div22.setAttribute("style","width: 400px;height: 400px;display: flex;flex-direction: column;");
    div2.appendChild(div22);
    div1.appendChild(document.createTextNode("女装/男装/内衣"));
    var div2_top = document.createElement("div");
    var div2_center = document.createElement("div");
    var div2_bottom = document.createElement("div");
    div2_top.setAttribute("style","flex: 0.3;border: 1px solid black;display: flex;flex-direction: column;");
    div2_center.setAttribute("style","flex: 0.4;border: 1px solid black;display: flex;flex-direction: column;");
    div2_bottom.setAttribute("style","flex: 0.3;border: 1px solid black;display: flex;flex-direction: column;");

    div2_top.appendChild(document.createTextNode("男装"));
    div2_center.appendChild(document.createTextNode("女装"));
    div2_bottom.appendChild(document.createTextNode("内衣"));
    div22.appendChild(div2_top);
    div22.appendChild(div2_center);
    div22.appendChild(div2_bottom);




}
