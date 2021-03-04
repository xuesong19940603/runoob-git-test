$(function(){
	            //超出字体隐藏
                jQuery.fn.limit=function(){ 
                    var self = $("p[limit]"); 
                    self.each(function(){ 
                        var objString = $(this).text(); 
                        var objLength = $(this).text().length; 
                        var num = $(this).attr("limit"); 
                        if(objLength > num){ 
                            $(this).attr("title",objString); 
                            objString = $(this).text(objString.substring(0,num) + "..."); 
                        } 
                    }) 
                } 
                $(".centen_ct_right ul li .bt").limit(); 


                //自动轮播
                    var num=0;
                    var t=setInterval(move,2000);
                    function move(){
                        num++;
                        if(num<0){
                            num=$(".index-banner-btu .btn").length-1;
                        }
                        if(num>$(".index-banner-btu .btn").length-1){
                            num=0;
                        }
                        $(".index-banner-box .index-banner-li").css("display","none").eq(num).css("display","block");
                        $(".index-banner-btu .btn").css("background","#888A9A").eq(num).css("background","#fff");
                    }
                    //鼠标移入移出效果
                    $(".centen_ct_left").hover(function(){
                        clearInterval(t);
                    },function(){
                        t=setInterval(move,2000);
                    })
});