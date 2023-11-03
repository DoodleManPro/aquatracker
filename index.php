<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>


    <link rel="stylesheet" href="./main/landing_page.css">
    <link rel="icon" href="./main/img/logo.webp">



    <!-- !FONTS AND CMDS ========================================= -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Lexend+Exa:wght@100;200;300;400;500;600;700;800;900&family=Lexend+Giga:wght@900&family=Lexend:wght@600&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=KoHo:wght@200;300;400;500;600;700&display=swap" rel="stylesheet">


</head>
<body>
    <section>
        <form action="login.php" method="post" class="glass">



            <?php if (isset($_GET['error'])) { ?>
                <p class="error"><?php echo $_GET['error']; ?></p>
            <?php } ?>


            <div class="username">
                <label>User name</label>
                <input type="text" name="uname" placeholder="User Name">
            </div>

            <div class="username">
                <label>Password</label>
                <input type="password" name="password" placeholder="Password">
            </div>



            <button type="submit">LOGIN</button>

        </form>
        
        <div class="graphics log-graph">
            <img src="./main/img/woman-chat.png" alt="">
            <div class="circle-div">    
                <div class="circle"></div>
                <div class="circle active"></div>
            </div>
        </div>
    </section>
</body>
</html>