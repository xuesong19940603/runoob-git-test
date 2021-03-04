$(function () {
    $.ajax({
        url: '/getLoginUser',
        success: function (data) {
            if (data.userName == '') {
                $(".header_centen ul").append('<li><img src="/images/727079736525186959.png" style="width:77px;' +
                    ' height:36px;  margin-top:8px;"/></li></li><li><a class="p_color"' +
                    ' href="/toLuckygirl">首页</a></li><li><a class="p_color" href="/toBussiness">公司业务</a></li><li><a' +
                    ' class="p_color" href="/toAboutUs">关于我们</a></li><li><a class="p_color"' +
                    ' href="/toContactUs">联系我们</a></li><li><a class="p_color" href="/toContent">明星资讯</a></li><li><a' +
                    ' class="p_color" href="/toSupport">应援套餐</a></li><li><a class="login" href="/toLogin">登录</a>/<a' +
                    ' class="register" href="/toRegister">注册</a></li><li><a class="p_color"' +
                    ' href="/LUCKYGIRL-INDEX">下载</a></li><li><a class="p_color"' +
                    ' href="/LUCKYGIRL-DOCUMENT">说明文档下载</a></li>');
            } else {
                $(".header_centen ul").append('<li><img src="/images/727079736525186959.png" style="width:77px;' +
                    ' height:36px;  margin-top:8px;"/></li><li><a class="p_color"' +
                    ' href="/toLuckygirl">首页</a></li><li><a class="p_color" href="/toBussiness">公司业务</a></li><li><a' +
                    ' class="p_color" href="/toAboutUs">关于我们</a></li><li><a class="p_color"' +
                    ' href="/toContactUs">联系我们</a></li><li><a class="p_color" href="/toContent">明星资讯</a></li><li><a' +
                    ' class="p_color" href="/toSupport">应援套餐</a></li><li><a class="login"' +
                    ' href="/logout">退出登录</a></li><li><a class="p_color" href="/LUCKYGIRL-INDEX">下载</a></li><li><a' +
                    ' class="p_color" href="/LUCKYGIRL-DOCUMENT">说明文档下载</a></li> ')
            }
        }
    });
});