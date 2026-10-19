 



 fetch("https://dog.ceo/api/breeds/image/random")
.then((res) => res.json())
.then((result) => {
const imageUrl = result.message;

document.getElementById("headerImage").innerHTML = `<img class=" w-[576px] h-[432px] rounded-[24px] border-[12px] border-[rgba(225,234,228,1)] "  src="${imageUrl}">`;
});