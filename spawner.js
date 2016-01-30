var randomHeadBobble = Math.random() * (50.25 - 49.75) + 49.75;
var randomBodyBobble = Math.random() * (48.2 - 47.9) + 47.9;



var stage = 0;
var passingtrys = 0;
var allow = 0;



var s = 0;

headBobble();
var headMove = setInterval(headBobble, 1000);

bodyBobble();
var bodyMove = setInterval(bodyBobble, 1000);


var audioSanVoice = new Audio('file:///C:/Users/anthony/Desktop/BRACKETS/Testing%20Div/sans.wav');
var audioSanVoiceSe = new Audio('sans.wav');


var audioText = new Audio('texts.wav');



$(document).ready(function(){
    
    
    $("body").keyup(function(e){
        var code = e.which;
        if(code==13)e.preventDefault();
        if(code==13 && allow==1){
            if(stage == 1 && passingtrys < 5){
                $(".talkingRow1").html('');
                $(".talkingRow2").html('');
                $(".talkingRow3").html('');
                allow = 0;
                passingtrys++;
                stageO();
                if(passingtrys == 5){
                    stage = 2;
                }
                window.setTimeout(function(){
                    allow = 1;
                }, 550);
            }
        }
        
        if(code==13 && stage == 2 && passingtrys == 5 && allow == 1){
            stage2();
            
        }
        
        if(code==13 && stage == 3 && allow == 1){
            
            stage3();
            
        }
        
        if(code==13 && stage == 4 && allow == 1){
            
            stage3();
            
        }
        
    });
    
    
    if(stage == 0){
        alert("The games startin. Hope you enjoy! TL Studios")
        var strFi = "* Sans looks right through you...";
        var strSe = "* He wont lose this time...";
        
        for(var i = 0; i < strFi.length; i++){
            
            (function(i){

            window.setTimeout(function(){
              var strFiSp = strFi.split("")[i];
              $(".talkingRow1").append(strFiSp);
                audioText.pause();
                audioText.currentTime = 0;
              audioText.play();
                
            }, i * 20);
                
          }(i));
            
        };
        
        window.setTimeout(function(){
            for(var i = 0; i < strSe.length; i++){

                (function(i){

                window.setTimeout(function(){
                  var strSeSp = strSe.split("")[i];
                  $(".talkingRow2").append(strSeSp);
                    audioText.pause();
                    audioText.currentTime = 0;
                  audioText.play();
                    if(i == strSe.length - 1){
                        stage = 1;
                        allow = 1;
                    }
                }, i * 20);

              }(i));

            };
        }, 700);
        
    };
    
});



function stage2(){
    var strFi = "Now do you really think..."
    var strSe = "I will let you pass?"
    allow = 0;
    $("#head").attr("src", "https://cloud.githubusercontent.com/assets/13833499/12694075/d565bc20-c6ee-11e5-8124-725d5435bb7f.png");
    $("#head").css("width", "7.6%")
    $("#textBubble").css("display", "block");
    
    
    
    for(var i = 0; i < strFi.length; i++){

        (function(i){

            window.setTimeout(function(){
                
                var strFiSp = strFi.split("")[i]
                $(".row1").append(strFiSp);
                audioSanVoice.pause();
                audioSanVoice.currentTime = 0;
                audioSanVoice.play();
                stage = 3;
            }, i * 20);

        }(i));

    };
    
    window.setTimeout(function(){
        for(var i = 0; i < strFi.length; i++){

            (function(i){

                window.setTimeout(function(){

                    var strSeSp = strSe.split("")[i]
                    $(".row2").append(strSeSp);
                    audioSanVoice.pause();
                    audioSanVoice.currentTime = 0;
                    audioSanVoice.play();

                }, i * 20);

            }(i));

        };
        
    }, 1500);
    
    window.setTimeout(function(){
        allow = 1;
    }, 2000);
}

function stage3(){
    var strFi = "* You push him a little.";
    var strFiD = "Dont touch me....";
    $(".talkingRow1").html("");
    $(".row1").html("");
    $(".row2").html("");
    $("#head").attr("src", "https://cloud.githubusercontent.com/assets/13833499/12694076/d56e7270-c6ee-11e5-8579-924f1ca6a1f7.png");
    $("#head").css("width", "7.6%")
    allow = 0;
    clearInterval(headMove)
    clearInterval(bodyMove)
    
    for(var i = 0; i < strFi.length; i++){
        (function(i){

            window.setTimeout(function(){
                
                var strFiSp = strFi.split("")[i]
                $(".talkingRow1").append(strFiSp);
                audioText.pause();
                audioText.currentTime = 0;
                audioText.play();

            }, i * 20);

        }(i));
    };
    
    window.setTimeout(function(){
       for(var i = 0; i < strFi.length; i++){
            (function(i){

                window.setTimeout(function(){

                    var strFiDSp = strFiD.split("")[i]
                    $(".row1").append(strFiDSp);
                    audioSanVoice.pause();
                    audioSanVoice.currentTime = 0;
                    audioSanVoice.play();

                }, i * 100);

            }(i));

        };
        stage = 4;
    }, 1000);
};

function stageO(){
    var strFi = "* He will not let you pass.";
    for(var i = 0; i < strFi.length; i++){

        (function(i){

            window.setTimeout(function(){
                
                var strFiSp = strFi.split("")[i]
                $(".talkingRow1").append(strFiSp);
                audioText.pause();
                audioText.currentTime = 0;
                audioText.play();

            }, i * 20);

        }(i));

    };
}


function headBobble(){
    
    $("#head").css("marginTop", "5.8%");
    console.log("up");
    $("#head").css("marginLeft", randomHeadBobble + "%");
    randomHeadBobble = Math.random() * (50.25 - 49.75) + 49.75;
    
    window.setTimeout(function() {
        $("#head").css("marginTop", "6%");
        $("#head").css("marginLeft", randomHeadBobble + "%");
        randomHeadBobble = Math.random() * (50.25 - 49.75) + 49.75;
    }, 500);
}

function bodyBobble(){
    
    $(".body").css("marginTop", "12.09%");
    console.log("up");
    $(".body").css("marginLeft", randomBodyBobble + "%");
    randomBodyBobble = Math.random() * (48.2 - 47.9) + 47.9;
    
    window.setTimeout(function() {
        $(".body").css("marginTop", "12%");
        $(".body").css("marginLeft", randomBodyBobble + "%");
        randomBodyBobble = Math.random() * (48.2 - 47.9) + 47.9;
    }, 500);
}
