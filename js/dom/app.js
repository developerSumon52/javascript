
let heading = document.getElementById('heading')
heading.innerHTML= "dom"
 let mylist = document.querySelectorAll('li')
 mylist.forEach((li)=>{
    li.style.backgroundColor = "red"
 })
 console.log(mylist);