$(document).ready(function () {


        var pacInt;
        var ghostInt;
        var bonusInt;
        var ghosts;
        var passedTime;
        var gameTime;
        var playerLives;
        var food;
        var upperKey;
        var lowerKey;
        var leftKey;
        var rightKey;
        var logedInUser;
    document.getElementById("top_home").addEventListener("click", function () {
        showSection("welcome_panel");
    });
    document.getElementById("top_register").addEventListener("click", function () {
        showSection("register_panel");
    });
    document.getElementById("top_login").addEventListener("click", function () {
        showSection("login_panel");
    });
    document.getElementById("to_register").addEventListener("click", function () {
        showSection("register_panel");
    });
    document.getElementById("to_login").addEventListener("click", function () {
        showSection("login_panel");
    });
        document.getElementById("customPlay").addEventListener("click", function () {
        if(upperKey==null||lowerKey==null||leftKey==null||rightKey==null)
            alert("you must enter your wanted keys to play");
        else if(upperKey==lowerKey||upperKey==leftKey||upperKey==rightKey||lowerKey==leftKey||lowerKey==rightKey||leftKey==rightKey)
            alert("you must enter different keys to play");
        else {
            showSection("game_panel");
            gameTime = document.getElementById("timeChoice").value;
            food = document.getElementById("foodChoice").value;
            ghosts = document.getElementById("ghostChoise").value;
            playGame();
        }
    });
    document.getElementById("randomPlay").addEventListener("click", function () {
        gameTime = 60;
        food = 50;
        ghosts = 1;
        upperKey=38;
        rightKey=39;
        lowerKey=40;
        leftKey=37;
        showSection("game_panel");
        playGame();
    });
    document.getElementById("upperKey").addEventListener("keydown", function (event) {
        upperKey=event.keyCode;
    });
    document.getElementById("lowerKey").addEventListener("keydown", function (event) {
        lowerKey=event.keyCode;
    });
    document.getElementById("leftKey").addEventListener("keydown", function (event) {
        leftKey=event.keyCode;
    });
    document.getElementById("rightKey").addEventListener("keydown", function (event) {
        rightKey=event.keyCode;
    });

    function reset_intervals() {
        window.clearInterval(pacInt);
        window.clearInterval(ghostInt);
        window.clearInterval(bonusInt);
        music_on=false;
        document.getElementById("background_music").pause();

    }
    showSection('welcome_panel')
    function showSection(id) {
        var section1 = document.getElementById('register_panel');
        section1.style.display = "none";
        var section2 = document.getElementById('login_panel');
        section2.style.display = "none";
        var section3 = document.getElementById('game_panel');
        section3.style.display = "none";
        var section4 = document.getElementById('gameConfiguration');
        section4.style.display = "none";
        var section5 = document.getElementById('welcome_panel');
        section5.style.display = "none";
        //show only one section
        var selected = document.getElementById(id);
        selected.style.display = "block";
        reset_intervals();

    }

    var user_list = [];
    var default_user = new Object();
    default_user.i = 'a'; //user name
    default_user.j = 'a'; //password
    user_list.push(default_user);



    $("#login").click(function () {

        var username = $("#lusername").val();
        var password = $("#lpassword").val();

        for (var k = 0; k < user_list.length; k += 1) {
            if (user_list[k].i == username) {
                if (user_list[k].j == password) {
                    alert('Successfully Logged in...')
                    showSection('gameConfiguration')
                    logedInUser = username;
                }
                else {
                    alert('Wrong Password')

                }
                return;
            }
        }
        alert('Failed to Log in')

    });




    $.validator.setDefaults({
        submitHandler: function () {
            alert("submitted!");
            var new_user = new Object();
            new_user.i = $("#username").val();
            new_user.j = $("#password").val();
            user_list.push(new_user);
            showSection("login_panel");
        }
    });
    jQuery.validator.addMethod("lettersonly", function (value, element) {
        return this.optional(element) || /^[a-z," "]+$/i.test(value);
    }, "Letters and spaces only please");

    jQuery.validator.addMethod("letternumber", function (value, element) {
        return this.optional(element) || new RegExp("(?=.*\\d)(?=.*[A-Za-z])").test(value)
    }, "Must contain letter and number");

    $().ready(function () {

        // validate signup form on keyup and submit
        $("#signupform").validate({
            rules: {
                firstname: {
                    required: true,
                    lettersonly: true

                },
                lastname: {
                    required: true,
                    lettersonly: true
                },
                username: {
                    required: true,
                    minlength: 1
                },
                password: {
                    required: true,
                    minlength: 8,
                    letternumber: true
                },
                password_confirm: {
                    required: true,
                    minlength: 8,
                    equalTo: "#password"
                },
                email: {
                    required: true,
                    email: true
                },
                birthday: {
                    required: true,
                    date: true
                },

            },
            messages: {
                firstname: {
                    required: "Please enter your firstname",
                    lettersonly: "First name must contain letters only"

                },
                lastname: {
                    required: "Please enter your lastname",
                    lettersonly: "Last name must contain letters only"
                },
                username: {
                    required: "Please enter a username",
                    minlength: "Your username must consist of at least 2 characters"
                },
                password: {
                    required: "Please provide a password",
                    minlength: "Your password must be at least 8 characters long"
                },
                confirm_password: {
                    required: "Please provide a password",
                    minlength: "Your password must be at least 8 characters long",
                    equalTo: "Please enter the same password as above"
                },
                birthday: {
                    required: "Please enter a valid date",
                },
                email: "Please enter a valid email address",
            }
        });

        // propose username by combining first- and lastname
        $("#username").focus(function () {
            var firstname = $("#firstname").val();
            var lastname = $("#lastname").val();
            if (firstname && lastname && !this.value) {
                this.value = firstname + "." + lastname;
            }
        });


    });        document.getElementById("music_button").addEventListener("click", function () {
            var music_button = document.getElementById("background_music");
            if (!music_button.paused)
                music_button.pause();
            else {
                music_button.play();
            }

        });




        var user_list = [];
        var default_user = new Object();
        default_user.i = 'a'; //user name
        default_user.j = 'a'; //password
        user_list.push(default_user);




            // propose username by combining first- and lastname
            $("#username").focus(function () {
                var firstname = $("#firstname").val();
                var lastname = $("#lastname").val();
                if (firstname && lastname && !this.value) {
                    this.value = firstname + "." + lastname;
                }
            });

            //code to hide topic selection, disable for demo
            var newsletter = $("#newsletter");
            // newsletter topics are optional, hide at first
            var inital = newsletter.is(":checked");
            var topics = $("#newsletter_topics")[inital ? "removeClass" : "addClass"]("gray");
            var topicInputs = topics.find("input").attr("disabled", !inital);
            // show when newsletter is checked
            newsletter.click(function () {
                topics[this.checked ? "removeClass" : "addClass"]("gray");
                topicInputs.attr("disabled", !this.checked);
            });






        function playGame() {

            var music_on = true;
            document.getElementById("background_music").play();



            var context = canvas.getContext("2d");
            var pacman_pos = new Object();
            var bonus_pos = new Object();
            var board;
            var score;
            var pac_color;
            var start_time;
            playerLives = 3;
            var pacman_direction = "right";


            var bonusEat;
            var bonusTimesUp;




            /* ghosts attributes */
            var ghost_direction = ["recalculate", "recalculate", "recalculate", "recalculate"];
            var ghost_pos = [new Object(), new Object(), new Object(), new Object()];
            var ghost_color = ["purple_ghost", "red_ghost", "green_ghost", "pink_ghost"];
            var is_point_tile = [0, 0, 0, 0, 0];


            Start();


            function win() {

                if(score < 300 )
                {
                    music_on=false;
                    document.getElementById("background_music").pause();
                    window.alert("Time's Up \n\nYou Scored "+ score + " points\n\n"+" You can do better");
                    showSection("gameConfiguration");

                }

                else if(score >= 300){
                    music_on=false;
                    document.getElementById("background_music").pause();
                    window.alert("You are our WINNER!!");
                    showSection("gameConfiguration");

                }


                else {
                    alert("Game Over");
                    music_on=false;
                    document.getElementById("background_music").pause();
                    showSection("gameConfiguration");
                }
            }

            function Start() {
                board = new Array();
                bonusEat = false;
                bonusTimesUp=false;
                score = 0;
                pac_color = "yellow";
                playerLives;

                var food_remainA = food*0.6;
                var food_remainB = food*0.3;
                var food_remainC = food*0.1;



                var pacman_remain = 1;
                start_time = new Date();
                for (var i = 0; i < 17; i++) {
                    board[i] = new Array();
                    //put obstacles
                    for (var j = 0; j < 19; j++) {
                        if ((j == 0 && (i == 8)) ||
                            (j == 1 && (i == 1 || i == 2 || i == 4 || i == 5 || i == 6 || i == 8 || i == 10 || i == 11 || i == 12 || i == 14 || i == 15)) ||
                            (j == 2 && (i == 1 || i == 2 || i == 4 || i == 5 || i == 6 || i == 8 || i == 10 || i == 11 || i == 12 || i == 14 || i == 15)) ||
                            (j == 4 && (i == 1 || i == 2 || i == 4 || i == 6 || i == 7 || i == 8 || i == 9 || i == 10 || i == 12 || i == 14 || i == 15)) ||
                            (j == 5 && (i == 4 || i == 8 || i == 12)) ||
                            (j == 6 && (i == 0 || i == 1 || i == 2 || i == 4 || i == 5 || i == 6 || i == 8 || i == 10 || i == 11 || i == 12 || i == 14 || i == 15 || i == 16)) ||
                            (j == 6 && (i == 0 || i == 1 || i == 2 || i == 4 || i == 5 || i == 6 || i == 8 || i == 10 || i == 11 || i == 12 || i == 14 || i == 15 || i == 16)) ||
                            (j == 7 && (i == 0 || i == 1 || i == 2 || i == 4 || i == 12 || i == 14 || i == 15 || i == 16)) ||
                            (j == 8 && (i == 0 || i == 1 || i == 2 || i == 4 || i == 6 || i == 7 || i == 9 || i == 10 || i == 12 || i == 14 || i == 15 || i == 16)) ||
                            (j == 9 && (i == 6 || i == 10)) ||
                            (j == 10 && (i == 0 || i == 1 || i == 2 || i == 4 || i == 6 || i == 7 || i == 8 || i == 9 || i == 10 || i == 12 || i == 14 || i == 15 || i == 16)) ||
                            (j == 11 && (i == 0 || i == 1 || i == 2 || i == 4 || i == 12 || i == 14 || i == 15 || i == 16)) ||
                            (j == 12 && (i == 0 || i == 1 || i == 2 || i == 4 || i == 6 || i == 7 || i == 8 || i == 9 || i == 10 || i == 12 || i == 14 || i == 15 || i == 16)) ||
                            (j == 13 && (i == 8)) ||
                            (j == 14 && (i == 1 || i == 2 || i == 4 || i == 5 || i == 6 || i == 7 || i == 8 || i == 9 || i == 10 || i == 11 || i == 12 || i == 14 || i == 15)) ||
                            (j == 15 && (i == 2 || i == 14)) ||
                            (j == 16 && (i == 0 || i == 2 || i == 4 || i == 6 || i == 7 || i == 8 || i == 9 || i == 10 || i == 12 || i == 14 || i == 16)) ||
                            (j == 17 && (i == 4 || i == 8 || i == 12)) ||
                            (j == 18 && (i == 1 || i == 2 || i == 3 || i == 4 || i == 5 || i == 6 || i == 8 || i == 10 || i == 11 || i == 12 || i == 13 || i == 14 || i == 15)))
                        {

                            board[i][j] = 4;

                        }

                        else {
                            board[i][j] = 0;
                        }
                    }
                }
                //TODO should be random

                board[0][0] = "purple_ghost";
                ghost_pos[0].i = 0;
                ghost_pos[0].j = 0;

                if (ghosts > 1 ){
                    board[0][18] = "red_ghost";
                    ghost_pos[1].i = 0;
                    ghost_pos[1].j = 18;
                }
                if (ghosts > 2){
                    board[16][18] = "green_ghost";
                    ghost_pos[2].i = 16;
                    ghost_pos[2].j = 18;
                }

                board[0][0] = "bonus";
                bonus_pos.i = 0;
                bonus_pos.j = 0;



                while (pacman_remain > 0) {

                    var emptyCell = findRandomEmptyCell(board);
                    pacman_pos.i = emptyCell[0];
                    pacman_pos.j = emptyCell[1];
                    board[emptyCell[0]][emptyCell[1]] = 2;
                    pacman_remain--;
                }
                while (food_remainA > 0) {
                    var emptyCell = findRandomEmptyCell(board);
                    board[emptyCell[0]][emptyCell[1]] = 5;
                    food_remainA--;
                }
                while (food_remainB > 0) {
                    var emptyCell = findRandomEmptyCell(board);
                    board[emptyCell[0]][emptyCell[1]] = 6;
                    food_remainB--;
                }
                while (food_remainC > 0) {
                    var emptyCell = findRandomEmptyCell(board);
                    board[emptyCell[0]][emptyCell[1]] = 7;
                    food_remainC--;
                }
                keysDown = {};
                addEventListener("keyup", function (e) {
                    keysDown[e.keyCode] = false;
                }, false);
                addEventListener("keydown", function (e) {
                    if($(window).scrollTop()>70){
                        if(e.keyCode===38)
                            e.preventDefault();
                    }
                    keysDown[e.keyCode] = true;
                }, false);

                pacInt = setInterval(update_position, 150);


                ghostInt = setInterval(update_ghost_move, 350);


                bonusInt = setInterval(update_bonus_move, 150);


            }

            document.getElementById("new_game").addEventListener("click", function () {
                reset_intervals();
                playGame();
            });

            function update_ghost_move() {
                perform_ghost_move(ghost_next_move(0), 0);

                if (ghosts>1)
                    perform_ghost_move(ghost_next_move(1), 1);

                if (ghosts>2)
                    perform_ghost_move(ghost_next_move(2), 2);

                draw();
            }

            function findRandomEmptyCell(board) {
                var i = Math.floor((Math.random() * 17));
                var j = Math.floor((Math.random() * 19));
                while (board[i][j] != 0) {
                    i = Math.floor((Math.random() * 17));
                    j = Math.floor((Math.random() * 19));
                }
                return [i, j];
            }

            function GetKeyPressed() {
                if (keysDown[upperKey]) {
                    return 1;
                }
                if (keysDown[lowerKey]) {
                    return 2;
                }
                if (keysDown[leftKey]) {
                    return 3;
                }
                if (keysDown[rightKey]) {
                    return 4;
                }
            }

            function draw() {

                if (is_round_lost()) {
                    reset_intervals();
                    music_on=true;
                    document.getElementById("background_music").play();

                    if (playerLives > 1) {
                        alert("Round Lost");
                        playerLives -= 1;
                        Start();
                    }
                    else {
                        alert("Game Over");
                        music_on=false;
                        document.getElementById("background_music").pause();
                        showSection("gameConfiguration");
                    }}



                if(bonus_pos.i == pacman_pos.i && bonus_pos.j == pacman_pos.j){
                    bonusEat = true;
                    score+=50;
                }
                canvas.width = 17 * 30; //clean board
                canvas.height = 19 * 30 ;

                lblScore.value = score;
                lblTime.value = passedTime;
                lblLives.value = playerLives;
                for (var i = 0; i < 17; i++) {
                    for (var j = 0; j < 19; j++) {
                        var center = new Object();
                        center.x = i * 30 + 15;
                        center.y = j * 30 + 15;
                        if (board[i][j] == 2) {
                            draw_pacman(center.x, center.y);

                        } else if (board[i][j] == 5) {
                            context.beginPath();
                            context.arc(center.x, center.y, 7.5, 0, 2 * Math.PI); // circle
                            context.fillStyle = "#cd7f32"; //color
                            context.fill();
                            context.beginPath();
                            context.fillStyle = "black";
                            context.fillText("5", center.x-2.5, center.y + 2.5);
                            context.fill();
                        } else if (board[i][j] == 6) {
                            context.beginPath();
                            context.arc(center.x, center.y, 7.5, 0, 2 * Math.PI); // circle
                            context.fillStyle = "silver"; //
                            context.fill();
                            context.beginPath();
                            context.fillStyle = "black";
                            context.fillText("15", center.x-2.5, center.y + 2.5);
                            context.fill();
                        } else if (board[i][j] == 7) {
                            context.beginPath();
                            context.arc(center.x, center.y, 7.5, 0, 2 * Math.PI); // circle
                            context.fillStyle = "gold"; //color
                            context.fill();
                            context.beginPath();
                            context.fillStyle = "black";
                            context.fillText("25", center.x-2.5, center.y + 2.5);
                            context.fill();
                        } else if (board[i][j] == 4) {
                            context.beginPath();
                            context.rect(center.x - 15, center.y - 15, 30, 30);
                            context.fillStyle = "bisque"; //color
                            context.fill();
                        }
                        else if (board[i][j] == "purple_ghost") {
                            draw_ghost(center.x, center.y, "purple")
                        }
                        else if (board[i][j] == "red_ghost") {
                            draw_ghost(center.x, center.y, "red")
                        }
                        else if (board[i][j] == "green_ghost") {
                            draw_ghost(center.x, center.y, "green")
                        }

                        else if (board[i][j] == "bonus") {
                            if(!bonusEat&&!bonusTimesUp)
                                draw_bonus(center.x, center.y)
                        }

                    }
                }

                var canv=document.getElementById("canvas");
                var ctx=canv.getContext("2d");
                ctx.beginPath();
                ctx.moveTo(0,9*30);
                ctx.lineTo(0,0);
                ctx.lineTo(30*17,0);
                ctx.lineTo(30*17,9*30);
                ctx.lineWidth=7;
                ctx.strokeStyle='black';
                ctx.stroke();

                ctx.beginPath();
                ctx.moveTo(30*17,10*30);
                ctx.lineTo(30*17,19*30);
                ctx.lineTo(0,19*30);
                ctx.lineTo(0,10*30);
                ctx.lineWidth=7;
                ctx.strokeStyle='black';
                ctx.stroke();



            }


            function preform_pacman_move(x) {
                if (x == 1) {
                    if (pacman_pos.j > 0 && board[pacman_pos.i][pacman_pos.j - 1] != 4) {
                        pacman_pos.j--;
                        pacman_direction = "up";

                    }
                }
                if (x == 2) {
                    if (pacman_pos.j < 18 && board[pacman_pos.i][pacman_pos.j + 1] != 4) {
                        pacman_pos.j++;
                        pacman_direction = "down";
                    }
                }
                if (x == 3) {
                    if ((pacman_pos.i > 0 && board[pacman_pos.i - 1][pacman_pos.j] != 4)) {
                        pacman_pos.i--;
                    }
                    else if (pacman_pos.i == 0 && pacman_pos.j == 9) {
                        pacman_pos.i = 16;
                    }
                    pacman_direction = "left";

                }
                if (x == 4) {
                    if (pacman_pos.i < 16 && board[pacman_pos.i + 1][pacman_pos.j] != 4) {
                        pacman_pos.i++;
                    }
                    else if (pacman_pos.i == 16 && pacman_pos.j == 9) {
                        pacman_pos.i = 0;
                    }
                    pacman_direction = "right";
                }

                if (board[pacman_pos.i][pacman_pos.j] == 5) {
                    score+=5;
                }
                else if (board[pacman_pos.i][pacman_pos.j] == 6) {
                    score+=15;
                }
                else if (board[pacman_pos.i][pacman_pos.j] == 7) {
                    score+=25;
                }


                board[pacman_pos.i][pacman_pos.j] = 2;
            }


            function update_position() {
                board[pacman_pos.i][pacman_pos.j] = 0;
                var x = GetKeyPressed()

                preform_pacman_move(x)


                var currentTime = new Date();
                passedTime = (currentTime - start_time) / 1000;

                sumPoints= food*0.6*5+food*0.3*15+food*0.1*25;
                if(passedTime>=gameTime/4)
                    bonusTimesUp=true;
                if ((passedTime >= gameTime) || (!bonusEat&&score==sumPoints)||(bonusEat&&score==sumPoints+50))
                {
                    win();
                }
                else {
                    draw();
                }


            }

            function draw_pacman(x, y) {
                if (pacman_direction == "right") {
                    context.beginPath();
                    context.arc(x, y, 15, 0.15 * Math.PI, 1.85 * Math.PI); // half circle
                    context.lineTo(x, y);
                    context.fillStyle = pac_color; //color
                    context.fill();
                    context.beginPath();
                    context.arc(x - 2.5, y - 7.5, 2.5, 0, 2 * Math.PI); // circle
                    context.fillStyle = "black"; //color
                    context.fill();
                }
                else if (pacman_direction == "left") {
                    context.beginPath();
                    context.arc(x, y, 15, 1.15 * Math.PI, 0.85 * Math.PI); // half circle
                    context.lineTo(x, y);
                    context.fillStyle = pac_color; //color
                    context.fill();
                    context.beginPath();
                    context.arc(x + 2.5, y - 7.5, 2.5, 0, 2 * Math.PI); // circle
                    context.fillStyle = "black"; //color
                    context.fill();
                }
                else if (pacman_direction == "up") {
                    context.beginPath();
                    context.arc(x, y, 15, 1.65 * Math.PI, 1.35 * Math.PI); // half circle
                    context.lineTo(x, y);
                    context.fillStyle = pac_color; //color
                    context.fill();
                    context.beginPath();
                    context.arc(x - 7.5, y - 2.5, 2.5, 0, 2 * Math.PI); // circle
                    context.fillStyle = "black"; //color
                    context.fill();
                }
                else { // direction =="down"
                    context.beginPath();
                    context.arc(x, y, 15, 0.65 * Math.PI, 0.35 * Math.PI); // half circle
                    context.lineTo(x, y);
                    context.fillStyle = pac_color; //color
                    context.fill();
                    context.beginPath();
                    context.arc(x - 7.5, y - 2.5, 2.5, 0, 2 * Math.PI); // circle
                    context.fillStyle = "black"; //color
                    context.fill();
                }
            }

            function draw_bonus(x, y) {
                drawBonus(x, y, 5, 7, 3);
            }

            function draw_ghost(x, y, color) {
                context.beginPath();
                context.arc(x, y, 12.5, 1.05 * Math.PI, 1.95 * Math.PI);

                context.lineTo(x + 12, y + 10);
                context.lineTo(x + 9.6, y + 5);
                context.lineTo(x + 7.2, y + 10);
                context.lineTo(x + 4.8, y + 5);
                context.lineTo(x + 2.8, y + 10);
                context.lineTo(x - 0, y + 5);
                context.lineTo(x - 2.8, y + 10);
                context.lineTo(x - 4.8, y + 5);
                context.lineTo(x - 7.2, y + 10);
                context.lineTo(x - 9.6, y + 5);
                context.lineTo(x - 12, y + 10);


                context.fillStyle = color;
                context.fill();


                context.beginPath();
                context.arc(x - 6, y - 4, 2.5, 0, 2 * Math.PI); // circle
                context.arc(x + 6, y - 4, 2., 0, 2 * Math.PI); // circle
                context.fillStyle = "white"; //color
                context.fill();

                if (color == "purple") {
                    context.beginPath();
                    context.arc(x - 7.5, y - 4, 1.5, 0, 2 * Math.PI); // circle
                    context.arc(x + 4.5, y - 4, 1.5, 0, 2 * Math.PI); // circle
                    context.fillStyle = "black"; //color
                    context.fill();
                }
                if (color == "red") {
                    context.beginPath();
                    context.arc(x - 4.5, y - 4, 1.5, 0, 2 * Math.PI); // circle
                    context.arc(x + 7.5, y - 4, 1.5, 0, 2 * Math.PI); // circle
                    context.fillStyle = "black"; //color
                    context.fill();
                }
                if (color == "green") {
                    context.beginPath();
                    context.arc(x - 4.5, y - 2.5, 1.5, 0, 2 * Math.PI); // circle
                    context.arc(x + 7.5, y - 5.5, 1.5, 0, 2 * Math.PI); // circle
                    context.fillStyle = "black"; //color
                    context.fill();
                }

            }

            function update_bonus_move() {
                if(!bonusEat&&!bonusTimesUp){
                    var moves = [];

                    var current = is_point_tile[4]
                    if (current == 5 || current == 6 || current == 7)
                        board[bonus_pos.i][bonus_pos.j] = current
                    else
                        board[bonus_pos.i][bonus_pos.j] = 0

                    if (bonus_pos.j > 0 && board[bonus_pos.i][bonus_pos.j - 1] != 4)
                        moves.push("up");
                    if (bonus_pos.j < 17 && board[bonus_pos.i][bonus_pos.j + 1] != 4)
                        moves.push("down");
                    if (bonus_pos.i > 0 && board[bonus_pos.i - 1][bonus_pos.j] != 4)
                        moves.push("left");
                    if (bonus_pos.i < 16 && board[bonus_pos.i + 1][bonus_pos.j] != 4)
                        moves.push("right");


                    var chosenMove = Math.floor(Math.random() * moves.length);

                    //execute move
                    if (moves[chosenMove] == "up")
                        bonus_pos.j--;
                    else if (moves[chosenMove] == "down")
                        bonus_pos.j++;
                    else if (moves[chosenMove] == "left")
                        bonus_pos.i--;
                    else//moves[chosenMove] == "right")
                        bonus_pos.i++;

                    current = board[bonus_pos.i][bonus_pos.j]
                    if (current == 5 || current == 6 || current == 7)
                        is_point_tile[4] = current;
                    else
                        is_point_tile[4] = 0;

                    board[bonus_pos.i][bonus_pos.j] = "bonus";
                    draw();
                }
                else{
                    bonus_pos.i = -1;
                    bonus_pos.j = -1;
                }

            }

            function ghost_next_move(ghost_idx) {

                var best_move = ghost_direction[ghost_idx];
                var legal_moves = 0;
                if (ghost_pos[ghost_idx].j > 0 && board[ghost_pos[ghost_idx].i][ghost_pos[ghost_idx].j - 1] != 4)
                    legal_moves += 1;

                if (ghost_pos[ghost_idx].j < 18 && board[ghost_pos[ghost_idx].i][ghost_pos[ghost_idx].j + 1] != 4)
                    legal_moves += 1;

                if (ghost_pos[ghost_idx].i > 0 && board[ghost_pos[ghost_idx].i - 1][ghost_pos[ghost_idx].j] != 4)
                    legal_moves += 1;

                if (ghost_pos[ghost_idx].i < 16 && board[ghost_pos[ghost_idx].i + 1][ghost_pos[ghost_idx].j] != 4)
                    legal_moves += 1;


                if (ghost_direction[ghost_idx] == "recalculate" || legal_moves >= 3) {
                    var min = Infinity;
                    var current_distance;
                    if (ghost_pos[ghost_idx].j > 0 && board[ghost_pos[ghost_idx].i][ghost_pos[ghost_idx].j - 1] != 4) {
                        current_distance = get_distance(ghost_pos[ghost_idx].i, ghost_pos[ghost_idx].j - 1, pacman_pos.i, pacman_pos.j);
                        if (current_distance < min) {
                            min = current_distance;
                            best_move = 1;
                        }
                    }
                    if (ghost_pos[ghost_idx].j < 18 && board[ghost_pos[ghost_idx].i][ghost_pos[ghost_idx].j + 1] != 4) {
                        current_distance = get_distance(ghost_pos[ghost_idx].i, ghost_pos[ghost_idx].j + 1, pacman_pos.i, pacman_pos.j);
                        if (current_distance < min) {
                            min = current_distance;
                            best_move = 2;
                        }
                    }
                    if (ghost_pos[ghost_idx].i > 0 && board[ghost_pos[ghost_idx].i - 1][ghost_pos[ghost_idx].j] != 4) {
                        current_distance = get_distance(ghost_pos[ghost_idx].i - 1, ghost_pos[ghost_idx].j, pacman_pos.i, pacman_pos.j);
                        if (current_distance < min) {
                            min = current_distance;
                            best_move = 3;
                        }
                    }
                    if (ghost_pos[ghost_idx].i < 16 && board[ghost_pos[ghost_idx].i + 1][ghost_pos[ghost_idx].j] != 4) {
                        current_distance = get_distance(ghost_pos[ghost_idx].i + 1, ghost_pos[ghost_idx].j, pacman_pos.i, pacman_pos.j);
                        if (current_distance < min) {
                            best_move = 4;
                        }
                    }

                    ghost_direction[ghost_idx] = best_move;
                }
                return best_move;


            }

            function perform_ghost_move(x, ghost_idx) {
                var ghost_kind = board[ghost_pos[ghost_idx].i][ghost_pos[ghost_idx].j];

                var current = is_point_tile[ghost_idx]

                if (current == 5 || current == 6 || current == 7)
                    board[ghost_pos[ghost_idx].i][ghost_pos[ghost_idx].j] = current
                else
                    board[ghost_pos[ghost_idx].i][ghost_pos[ghost_idx].j] = 0

                if (x == 1) {
                    if (ghost_pos[ghost_idx].j == 0 || nextTile == "purple_ghost" || nextTile == "red_ghost" || nextTile == "pink_ghost" || nextTile == "green_ghost" || nextTile == 4)
                        ghost_direction[ghost_idx] = "recalculate";
                    else {
                        var nextTile = board[ghost_pos[ghost_idx].i][ghost_pos[ghost_idx].j - 1];
                        if (nextTile == "purple_ghost" || nextTile == "red_ghost" || nextTile == "pink_ghost" || nextTile == "green_ghost" || nextTile == 4)
                            ghost_direction[ghost_idx] = "recalculate";
                        else {
                            ghost_pos[ghost_idx].j--;

                        }
                    }


                }

                else if (x == 2) {
                    if (ghost_pos[ghost_idx].j == 18 || nextTile == "purple_ghost" || nextTile == "red_ghost" || nextTile == "pink_ghost" || nextTile == "green_ghost" || nextTile == 4)
                        ghost_direction[ghost_idx] = "recalculate";
                    else {
                        var nextTile = board[ghost_pos[ghost_idx].i][ghost_pos[ghost_idx].j + 1];
                        if (nextTile == "purple_ghost" || nextTile == "red_ghost" || nextTile == "pink_ghost" || nextTile == "green_ghost" || nextTile == 4)
                            ghost_direction[ghost_idx] = "recalculate";
                        else {
                            ghost_pos[ghost_idx].j++;

                        }

                    }
                }
                else if (x == 3) {
                    if ((ghost_pos[ghost_idx].i == 0 && ghost_pos[ghost_idx].j != 9) || nextTile == "purple_ghost" || nextTile == "red_ghost" || nextTile == "pink_ghost" || nextTile == "green_ghost" || nextTile == 4)
                        ghost_direction[ghost_idx] = "recalculate";
                    else {
                        if (ghost_pos[ghost_idx].i == 0 && ghost_pos[ghost_idx].j == 9) {
                            ghost_pos[ghost_idx].i = 16;
                        }
                        else {
                            var nextTile = board[ghost_pos[ghost_idx].i - 1][ghost_pos[ghost_idx].j];

                            if (nextTile == "purple_ghost" || nextTile == "red_ghost" || nextTile == "pink_ghost" || nextTile == "green_ghost" || nextTile == 4)
                                ghost_direction[ghost_idx] = "recalculate";
                            else {
                                ghost_pos[ghost_idx].i--;
                            }

                        }
                    }
                }

                else {// (x == 4)
                    if ((ghost_pos[ghost_idx].i == 16 && ghost_pos[ghost_idx].j != 9) || nextTile == "purple_ghost" || nextTile == "red_ghost" || nextTile == "pink_ghost" || nextTile == "green_ghost" || nextTile == 4)
                        ghost_direction[ghost_idx] = "recalculate";
                    else {
                        if (ghost_pos[ghost_idx].i == 16 && ghost_pos[ghost_idx].j == 9) {
                            ghost_pos[ghost_idx].i = 0;
                        }
                        var nextTile = board[ghost_pos[ghost_idx].i + 1][ghost_pos[ghost_idx].j];
                        if (nextTile == "purple_ghost" || nextTile == "red_ghost" || nextTile == "pink_ghost" || nextTile == "green_ghost" || nextTile == 4)
                            ghost_direction[ghost_idx] = "recalculate";
                        else {
                            ghost_pos[ghost_idx].i++;
                        }
                    }
                }

                current = board[ghost_pos[ghost_idx].i][ghost_pos[ghost_idx].j]
                if (current == 5 || current == 6 || current == 7)
                    is_point_tile[ghost_idx] = current
                else
                    is_point_tile[ghost_idx] = 0



                board[ghost_pos[ghost_idx].i][ghost_pos[ghost_idx].j] = ghost_color[ghost_idx];
            }

            function get_distance(x1, y1, x2, y2) {
                return Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
            }

            function is_round_lost() {
                return (pacman_pos.i == ghost_pos[0].i && pacman_pos.j == ghost_pos[0].j)
                    || (pacman_pos.i == ghost_pos[1].i && pacman_pos.j == ghost_pos[1].j)
                    || (pacman_pos.i == ghost_pos[2].i && pacman_pos.j == ghost_pos[2].j)
                    || (pacman_pos.i == ghost_pos[3].i && pacman_pos.j == ghost_pos[3].j);


            }

        }
        function drawBonus(cx, cy, spikes, outerRadius, innerRadius) {
            var canvas = document.getElementById("canvas");
            var ctx = canvas.getContext("2d");

            var rot = Math.PI / 2 * 3;
            var x = cx;
            var y = cy;
            var step = Math.PI / spikes;

            ctx.strokeSyle = "#000";
            ctx.beginPath();
            ctx.moveTo(cx, cy - outerRadius)
            for (i = 0; i < spikes; i++) {
                x = cx + Math.cos(rot) * outerRadius;
                y = cy + Math.sin(rot) * outerRadius;
                ctx.lineTo(x, y)
                rot += step

                x = cx + Math.cos(rot) * innerRadius;
                y = cy + Math.sin(rot) * innerRadius;
                ctx.lineTo(x, y)
                rot += step
            }
            ctx.lineTo(cx, cy - outerRadius)
            ctx.closePath();
            ctx.lineWidth=5;
            ctx.strokeStyle='red';
            ctx.stroke();
            ctx.fillStyle='red';
            ctx.fill();

        }



    }
);

