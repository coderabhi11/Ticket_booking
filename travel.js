Array.from(document.getElementsByTagName('input')).forEach((e , i)=>{

        e.addEventListener('keyup' , (e1) =>{

            if(e.value.length > 0)
            {
                document.getElementsByClassName('bi-caret-down-fill')[i].style.transform="rotate(180deg)";


            }
            else
            {
                document.getElementsByClassName('bi-caret-down-fill')[i].style.transform="rotate(0deg)";

            }
        })

    })
    
    let menu_btn =document.getElementsByClassName('bi bi-three-dots')[0];
    let menu_bx =document.getElementById('menu_bx');


menu_bx.addEventListener('click' , ()=>
{
    menu_bx.classList.toggle('ul_active');
})

// const btn=document.querySelectorAll('.bi bi-heart');

// btn.addEventListener("click",  function(){

//     change();
// });

// function change()
// {
//     alert("Button is clicked");
// }

