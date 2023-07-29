
let heading = document.getElementById('heading')
heading.innerHTML= "dom"
 let mylist = document.querySelectorAll('li')
 mylist.forEach((li)=>{
    li.style.backgroundColor = "orange"
 })

 let allList = document.getElementsByClassName('list-item')
 allList = Array.from(allList)
 allList.forEach((li)=>{
    li.style.color = 'green'
 })
 console.log(allList);