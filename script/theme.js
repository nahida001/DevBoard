const color_buttin=["bg-red-300", "bg-yellow-400" ,"bg-green-200","bg-cyan-100","bg-blue-200","bg-purple-300","bg-pink-300","bg-pink-800"]
let item=0;

document.getElementById("color").addEventListener('click', function(){
document.body.classList.remove(...color_buttin)
document.body.classList.add(color_buttin[item]) 

item+=1%color_buttin.length
})