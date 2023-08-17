document.querySelectorAll('input')
.forEach(inputItem=>{
    inputItem.addEventListener('change',(e)=>{
        console.log(e.target.value);
        // console.log(this.value);
        const suffix=e.target.dataset.sizing||'';
        document.documentElement.style.setProperty(`--${e.target.id}`,e.target.value+suffix);
    })
    inputItem.addEventListener('mousemove',(e)=>{
       
        console.log(e.target.value);
        // console.log(this.value);
        const suffix=e.target.dataset.sizing||'';
        document.documentElement.style.setProperty(`--${e.target.id}`,e.target.value+suffix);
    })
 
})