/* Fill your code*/
class Blog{
    constuctor(title,detail){
        this.title = title;
        this.detail = detail;
    } 
    addTitle(){
        const title_card = document.createElement("h1")
        title_card.setAttribute("id","blog-title")
        console.log(title_card)
        document.getElementById('card-text').appendChild(title_card)
        title_card.innerHTML += this.title
    }
    addDescription(){
        const description = document.createElement("p");
        description.setAttribute("p","blog-description");
        console.log(description);
        document.getElementById('card-text').appendChild(description);
        description.innerHTML += this.detail;
    }
}
    
document.getElementById("addBlog").addEventListener("click",()=>{
    document.getElementById("popupContact").style.display = "block"
    document.getElementById("title").value = ""
    document.getElementById("detail").value = ""
})

document.getElementById("close").addEventListener("click",()=>{
    document.getElementById("popupContact").style.display = "none"
    document.getElementById("title").value = ""
    document.getElementById("detail").value = ""
})

document.getElementById("post").addEventListener("click",()=>{
    document.getElementById("popupContact").style.display = "none"
    const image = document.createElement("img");
    image.src = "assets/javascript.png";
    document.getElementById('card-text').append(image);
    const title = document.getElementById("title").value;
    const description =  document.getElementById("detail").value;
    const blogpost = new Blog(title,description);
    blogpost.addTitle();
    blogpost.addDescription();
})
