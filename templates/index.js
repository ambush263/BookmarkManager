let bookmarks = [];
let linkBtn = document.querySelector(".addLinkButton");
let addBookmark = () => {
    let link = document.querySelector(".linkInput").value;
    if(link) bookmarks.push(link);
}
linkBtn.addEventListener("click",addBookmark);