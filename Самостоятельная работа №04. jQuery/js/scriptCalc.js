//var pole = document.getElementsByClassName("pole")[0];
var pole = $(".pole").eq(0);
var elem = $("button");
var chislo1="";
var chislo2="";
var znak;
var res;
var i = 0;
var j = 0;
var k = 0;
var chisloEq;
var znakEq;
var p = 0;
var l = 0;
var abc = "";

function elemInput()
{
   if ($(this).html() == "/" || $(this).html() == "+" || $(this).html() == "-" || $(this).html() == "*")
   {
      abc = "";
      pole.val("");
      if (chislo1 == "" && res != null)
      {
         chislo1 = res;
         znak = $(this).html();
         i = 1;
         l = 0;
      }
      else 
      {
         znak = $(this).html();
         i++;
         k = 0;
         l = 0;
      }
   }
   else if ($(this).html() == "=")
   {
      chislo1 = Number(chislo1);
      chislo2 = Number(chislo2);
      /*
      console.log("res   " + res);
      console.log("chislo1   " + chislo1);
      console.log("chislo2   " + chislo2);
      */
      if (znak == "/" && chislo2 == 0)
      {
         pole.val("Деление на ноль невозможно");
         res = null;
         clear();
         j = 1;
         p = 0;
      }
      else if (chislo1 !=0 || chislo2 != 0)
      {
         switch (znak){
            case "-":
               res = chislo1 - chislo2;
               break;
            case "+":
               res = chislo1 + chislo2;
               break;
            case "/":
               res = chislo1 / chislo2;
               break;
            case "*":
               res = chislo1 * chislo2;
               break;
         }
         pole.val(res);         
      }
      else if (res != null && chislo1 == 0 && chislo2 == 0 )
      {
         switch (znakEq){
            case "-":
               res = res - chisloEq;
               break;
            case "+":
               res = res + chisloEq;
               break;
            case "/":
               res = res / chisloEq;
               break;
            case "*":
               res = res * chisloEq;
               break;
         }
         pole.val(res); 
      }
      else if (res == null || res == undefined || res == 0 || res == NaN)
      {
         pole.val(0);
         clear();
         j = 1;
         p = 0;
      }
      else
      {
         pole.val(res);
         p = 0;
      }
      if (p == 0)
      {
         znakEq = znak;
         chisloEq = chislo2;
         p = 1;
      }
      clear();
      i=0;
      if(pole.val().indexOf("-") > -1)
      {
         l=1;
      }
      else
      {
         l=0;
      }
   }
   else if ($(this).html() == "C")
   {
      clear();
      pole.val("");
      res = null;
      k = 0;
      p=0;
      i = 0;
      j = 0;
      l = 0;
      chisloEq=null;
      znakEq="";
      chislo1="";
      chislo2="";
      znak=""; 
   }
   else
   {
      if ($(this).html().indexOf(".") > -1)
      {
         k++;
      }
      if(j == 1)
      {
         pole.val("");
         j = 0;
      }
      if (k < 2)
      {

         var line = $(this).html();       
         if(pole.val() == "" && $(this).html() == ".")
         {
            qwe("0" + line);    
         } 
         else
         {

            qwe(line);
         }
      }
      else if (k > 1)
      {
         k = 1;       
      }
   }
   function clear()
   {
      chislo1 = String("");
      chislo2 = String("");
      abc = "";
   }
   function qwe(line)
   {
      if (i == 0)
      {
         line = ewq(line, chislo1, 1);
         chislo1 += line;
         if (res != null && chislo1 == "-")
         {
            res = 0 - res;
            chislo1 = 0;
         }
         else
         {
            res = null;
         }
      }
      else 
      {    
         line = ewq(line, chislo2, 2);
         chislo2 += line;
      }
   }
   function ewq(line, chislo, cl)
   { 
      
      if (line == elem.eq(9).html())
      {
         if(l == 0)
         {
            
            l = 1;
            pole.val("-" +  pole.val());
            chislo = "-" + chislo;
            rty(cl);
            return line = "";
            
         }
         else 
         {
            l = 0;
            pole.val(pole.val().substr(1));
            chislo = chislo.substr(1);
            rty(cl);
            return line = "";
         }
      }
      else 
      {
         abc += line;
         pole.val(abc);
         return line;
      }
      function rty(cl)
      {
         if(cl == 1)
         {
            chislo1 = chislo;
         }
         else
         {
            chislo2 = chislo;
         }
      }
   }
}

for (var w =0; w <=17; w++)
{
   elem.eq(w).bind("click", elemInput);
}




