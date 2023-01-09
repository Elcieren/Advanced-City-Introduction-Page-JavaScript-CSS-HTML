let click=document.querySelector('.click');
          let list=document.querySelector('.list');
          click.addEventListener("click", ()=>{
          list.classList.toggle('newlist');
          });

          var btnSelam=document.getElementById("links3");
	btnSelam.onclick=function(){
		const elements=document.querySelectorAll("*") //Node Lİst ile geldi
elements.forEach(function(el){
    el.style.fontFamily="Georgia";
});
    };

    var btnSelam1=document.getElementById("links4");
	btnSelam1.onclick=function(){
		const elements=document.querySelectorAll("*") //Node Lİst ile geldi
elements.forEach(function(ele){
    ele.style.fontFamily="İtalic";
});
    };
	
  
    