var pole = document.getElementsByClassName("pole")[0];
var elem = document.getElementsByTagName("button");
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

function elemInput()
{
   
   if (this.innerHTML == "/" || this.innerHTML == "+" || this.innerHTML == "-" || this.innerHTML == "*")
   {
      pole.value = "";
      if (chislo1 == "" && res != null)
      {
         chislo1 = res;
         znak = this.innerHTML;
         i = 1;
         l = 0;
      }
      else 
      {
         znak = this.innerHTML;
         i++;
         k = 0;
         l = 0;
      }
   }
   else if (this.innerHTML == "=")
   {
      chislo1 = Number(chislo1);
      chislo2 = Number(chislo2);
      /*
      console.log("res   " + res);
      console.log("chislo1   " + chislo1);
      console.log("chislo2   " + chislo2);
      */
      if (chislo1 !=0 || chislo2 != 0)
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
      }
      if (res != null && chislo1 == 0 && chislo2 == 0 )
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
         pole.value = res;
      }
      else if (res == null || res == undefined || res == 0 || res == NaN)
      {
         pole.value = 0;
         clear();
         j = 1;
         p = 0;
      }
      else
      {
         pole.value = res;
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
      if(pole.value.indexOf("-") > -1)
      {
         l=1;
      }
      else
      {
         l=0;
      }
   }
   else if (this.innerHTML == "C")
   {
      clear();
      pole.value = "";
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
      if (this.innerHTML.indexOf(".") > -1)
      {
         k++;
      }
      if(j == 1)
      {
         pole.value = "";
         j = 0;
      }
      if (k < 2)
      {

         var line = this.innerHTML;       
         if(pole.value == "" && this.innerHTML == ".")
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
            console.log("qweqweqweqweqwe:" + res);
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
      if (line == elem[9].innerHTML)
      {
         if(l == 0)
         {
            
            l = 1;
            pole.value = "-" + pole.value;
            chislo = "-" + chislo;
            rty(cl);
            return line = "";
            
         }
         else 
         {
            l = 0;
            pole.value = pole.value.substr(1);
            chislo = chislo.substr(1);
            rty(cl);
            return line = "";
         }
      }
      else 
      {
         pole.value += line;
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

elem[0].onclick = elemInput;
elem[1].onclick = elemInput;
elem[2].onclick = elemInput;
elem[3].onclick = elemInput;
elem[4].onclick = elemInput;
elem[5].onclick = elemInput;
elem[6].onclick = elemInput;
elem[7].onclick = elemInput;
elem[8].onclick = elemInput;
elem[9].onclick = elemInput;
elem[10].onclick = elemInput;
elem[11].onclick = elemInput;
elem[12].onclick = elemInput;
elem[13].onclick = elemInput;
elem[14].onclick = elemInput;
elem[15].onclick = elemInput;
elem[16].onclick = elemInput;
elem[17].onclick = elemInput;








