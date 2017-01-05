var elem = $("input");
var ball;
var res = $("button").eq(0);

res.bind("click", function(){   
   ball = 0;
   if (elem.eq(0).prop("checked"))
   {
      ball++;
   }
   if (elem.eq(6).prop("checked"))
   {
      ball++;
   }
   if (elem.eq(11).prop("checked"))
   {
      ball++;
   }
   if (elem.eq(13).prop("checked") == true && elem.eq(14).prop("checked") == true && elem.eq(12).prop("checked") == false && elem.eq(15).prop("checked") == false)
   {
      ball++;
   }
   if (elem.eq(16).prop("checked") == true && elem.eq(17).prop("checked") == true && elem.eq(18).prop("checked") == false && elem.eq(19).prop("checked") == false)
   {
      ball++;
   }
  alert("Ваша оценка " + ball + " из 5\n" + "Процент верных ответов: " + ball * 20);
});







































