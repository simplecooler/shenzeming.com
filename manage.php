<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <link rel="stylesheet" type="text/css" href="style/manage.css">
    <link rel="shortcut icon" href="favicon.ico">
    <link rel="bookmark" href="favicon.ico">
    <title>神盾局秘密基地</title>
  </head>
  <body>
    <img class="logo" src="image/logo.png" alt="图片加载失败"/>
    <div class="input"><input id="user_name" type="text" placeholder="用户名"/></div>
    <div class="input"><input id="password" type="password" placeholder="密码"/></div>
    <button class="submit-btn" type="submit">登录</button>

    <!-- 登录判断 -->
    <script src="//cdn.bootcss.com/jquery/2.2.1/jquery.min.js"></script>
    <script type="text/javascript">
      $(document).ready(function(){
        $('.submit-btn').click(function(){
          if(document.getElementById("user_name").value === 'shenzeming' && document.getElementById("password").value === '951753') {
            window.location.href = "/manage_dashboard.php";
          }else {
            alert('非本组织成员，即将实施抓捕！');
          }
        });
      });
    </script>
  </body>
</html>
