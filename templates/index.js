let linkBtn = document.querySelector(".addLinkButton");
let addBookmark = () => {
    let linkInput = document.querySelector(".linkInput");
    let nameInput = document.querySelector(".nameInput");
    if(linkInput){
        let link = document.createElement("a");
        link.innerText=linkInput.value;
        link.href=linkInput.value;
        link.target="_blank";
        let tagName = document.createElement("span");
        tagName.innerText=nameInput.value;
        let newlink = document.createElement("li");
        let links = document.querySelector("#links");
        newlink.classList.add("bookmarkTab");
        let colon = document.createElement("span");
        colon.innerText = "     :     ";
        newlink.append(tagName);
        newlink.append(colon);
        newlink.append(link);
        links.append(newlink);

        linkInput.value="";
        nameInput.value="";
    }
}
linkBtn.addEventListener("click",addBookmark);