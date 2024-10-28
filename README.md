<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width='device-width', initial-scale=1.0">
    <title>Document</title>
    <style>
        div{
            width: 150px;
            height: 60px;
            border: 1px solid #715;
            background-color: antiquewhite;
        }
        #n3:hover{opacity:0.7;
        }
        .sub{
            position: relative;
            height: 60px;
            border: 1px solid #715;
            background-color: antiquewhite;
        }
        #fix{
position: fixed;
/* position: absolute; */
bottom:50px;
right:100px;
}
#float{
position: fixed;
left:300px;
width: 400px;
height:300px;
}
    </style>
</head>
<body>
    <div>DIV2</div>
    <div class="sub"> DIV3 </div>
    <div id = "n3">DIV4</div>
    <div class="sub">DIV5</div>
    <div id="fix">DIV6</div>
    <div>DIV7</div>  
    div 태그 (인라인-블록)<br>
    <div>DIV1</div>
    <div class="sub">DIV2 </div>
    <div id="n3">DIV3 </div>
    <div class="sub">DIV4 </div>
    <div> DIV5 </div>
    <div id="fix"> DIV6 </div>
    <div id="float">DIV7
    <img src="hanbit.jpg" width="200px" style="float:left">한빛탑(Hanbit Tower)은
    대전광역시에서 대한민국 최초의 국제박람회기구 공인 엑스포로 열린 1993 년 세계 박람회를 기념하기 위해
    세워진 상징 조형물이다.
    높이는 93m 이다. 빛, 과학, 우주를 모티브로 외관을 설계했으며, 지혜로운 과거를 바탕으로 현재와
    미래를 잇는 한줄기 빛이라는 뜻을 가진 이름과 함께 각 조형물에 엑스포와 관련된 많은 의미를 부여했다.
    '과거'를 뜻하는 하단부의 1,993 개의 화강암은 개최년도인 1993 년과 첨성대를 의미한다.
    또한 '현재'를 뜻하는 중앙부는 현재의 발전된 과학 한국을 의미한다.
    </div>
</body>
</html>
