const images = [
    'https://cdn.photographycourse.net/wp-content/uploads/2022/04/Portrait-vs-Landscape-Featured-Image-3.jpg',
    'https://i.natgeofe.com/n/2a832501-483e-422f-985c-0e93757b7d84/6.jpg',
    'https://cdn.photographycourse.net/wp-content/uploads/2014/11/Landscape-Photography-steps.jpg',
    'https://www.adorama.com/alc/wp-content/uploads/2018/11/landscape-photography-tips-yosemite-valley-feature.jpg',
    'https://iso.500px.com/wp-content/uploads/2021/02/Torres-Del-Paine-Sunset-By-Paul-Reiffer-2-1500x1000.jpg',
    'https://mymodernmet.com/wp/wp-content/uploads/2020/02/Landscape-Photographer-of-the-Year-Sander-Grefte.jpg'
];

let index = 0
const containerImg = document.querySelector("div .ms_container-img")

let img = document.createElement("img")
img.classList.add("ms_img")

img.setAttribute("src", images[index]);

 


let i;

for ( i = 0; i < images.length; i++){
    console.log(i)
    img = document.createElement("img")
    img.classList.add("ms_img", "ms_d_n")
    img.setAttribute("src", images[i]);
    containerImg.append(img)
}

let imgmod = document.querySelector(".ms_container-img img");
imgmod.classList.add("ms_d_b");





const nextButton = document.querySelector("#next"); 

nextButton.addEventListener("click", function() {
    imgmod.classList.remove("ms_d_b")

    img.classList.add("ms_d_n")


    img.setAttribute("src", images[index]);

    img.classList.add("ms_d_b")

    index++

    if(index === images.length){
        index = 0;
    }
});


const previousButton = document.querySelector("#previous"); 

previousButton.addEventListener("click", function() {
    imgmod.classList.remove("ms_d_b")

    img.classList.add("ms_d_n")

    index--

    if(index === -1){
        index = images.length - 1;
    }

    img.setAttribute("src", images[index]);

    img.classList.add("ms_d_b")

}); 
 


const clock = setInterval(next, 3000);

function next() {
    imgmod.classList.remove("ms_d_b")

    img.classList.add("ms_d_n")


    img.setAttribute("src", images[index]);

    img.classList.add("ms_d_b")

    index++

    if(index === images.length){
        index = 0;
    }
}