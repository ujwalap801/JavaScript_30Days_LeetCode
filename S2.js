let btn = document.getElementById('btn');

let parent = document.getElementById('parent');

let child = document.getElementById('child');



parent.addEventListener('click',()=>
{
    console.log("Parent called")
}, true)

child.addEventListener("click",()=>
{
    console.log("Child called")
}, true)


btn.addEventListener("click",()=>
{
    console.log("btn called")
}, true)


const list = document.getElementById('list');

list.addEventListener('click',(e)=>
{
    console.log(e)

    if(e.target.tagName === 'LI')
    {
        console.log(e.target.textContent)
    }
})