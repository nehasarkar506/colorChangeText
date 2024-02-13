function toggle()
{
    let head = document.getElementById('color1');

    if(head.style.color == 'red' && head.style.background == 'yellow')
    {
        head.style.color = '';
        head.style.background = '';
    }
    else if(head.style.color == "")
    {
        head.style.color = 'red';
    }
    else if(head.style.color == 'red')
    {
        head.style.background = 'yellow';
    }
    else
    {
        head.innerHTML = 'by';
    }
}

let sec = document.getElementById('color2');

i = 0;

function toggle1()
{
   ++i;

   if(i == 1)
   {
    sec.style.color = '#12372A';
   }
   else if(i == 2)
   {
    sec.style.background = '#ADBC9F';
   }
   else if(i == 3)
   {
    sec.style.color = '';
    sec.style.background = '';
    i = 0;
   }
   else{
    sec.innerHTML = 'by';
   }
}