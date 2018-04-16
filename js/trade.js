
$(document).ready(function(){
    $("#grape").hide()
    $.ajax({
        type: 'POST',
        url:'127.0.0.1:3333/shopowner/withdrawCash/v1/transactionRecord',
        data: {

        },
        success: function(res){
            if(res.code==0){
                let data = res.data.map
                
                let htmlstr = ejs.render($("#001").innerHTML,{data:data})
                
                $("#output").html(htmlstr)
            }else{
                console.log(res.msg)
            }
        }
        //,dataType: "json"
      });
    if(cs){
        let html22 = ejs.render(_('id00' + cs).innerHTML, { content: 'stttttsdfsdf收到了见风使舵龙卷风' });
        $("#output").html(html22);
    }
    function ss(cdata){
        let c = cdata || {
            "businessProperty":
            {
                "sources": '',
                "version": '',
                "businessType":	'',
                "invokeSource":	''
            },
            "transactionNo":'',
            "userNo":''
        }
        $.ajax({
            type:'post',
            url:'127.0.0.1:3333/shopowner/withdrawCash/v1/transactionRecord',
            data:c,
            success: function(res){
                if(res.code==0){
                    let data = res.data.map
                    switch(data.transactioTag){
                        case '030':
                        let htmlstr = ejs.render($("#001").innerHTML,{data:data})
                        break;
                        case '040':
                        break;
                        case '010':
                        break;
                        default:
                        break;
                    }
                    $("#output").html(htmlstr)
                }else{
                    console.log(res.msg)
                }
            }
        })
    }
})
$(document).on('click','.header p',function(){
   $(".but-box").slideDown();
}).mouseleave(function(){
   $(".but-box").slideUp();
})

function _(id) {
    return document.getElementById(id)
}
//
let cs = getstr('id');

function getstr(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]);
    return null;
}