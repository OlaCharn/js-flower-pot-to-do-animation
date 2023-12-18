
// attach new to-do
const inputField = document.querySelector(".inputField");
const toDoContainer = document.querySelector(".toDoContainer");

const appear1 = document.querySelector(".appear1")
const appear2 = document.querySelector(".appear2")
const appear3 = document.querySelector(".appear3")
const appear4 = document.querySelector(".appear4")
const appear5 = document.querySelector(".appear5")
const appear6 = document.querySelector(".appear6")
const appear7 = document.querySelector(".appear7")
const appear8 = document.querySelector(".appear8")
const appear9 = document.querySelector(".appear9")
const appear10 = document.querySelector(".appear10")

//array for flower appearence
const testArray = [appear1, appear4, appear2, appear3, appear5, appear6, appear7,appear8, appear9];

//gsap for pot appearence
gsap.to(".appear10",{
	opacity:1,
	duration: 4,
	ease: "power1.in",
    delay:0.5
}) 

//variable for count elements of svg
let i = 0;



inputField.addEventListener("keyup", function(e){
    if (e.key === "Enter"){ 

    const createNewToDo = document.createElement("li");

    var createNewCheckbox = document.createElement("input");
    createNewCheckbox.setAttribute("type","checkbox");


    const itemToDo = document.createElement("label");
    itemToDo.innerText = inputField.value.trim();

	if (itemToDo.innerText !== ""){
		createNewToDo.append(createNewCheckbox,itemToDo);
		toDoContainer.append(createNewToDo);
		inputField.value = ""; 
	
	}



    createNewCheckbox.addEventListener("click",()=>{
        createNewToDo.classList.add("toDocmpleted");
		i++;
		testArray[i].style.opacity = "1"; // Показываем текущую часть SVG изображения
    })

    }

})

//animation for text "Make your todo and grow sunflower"
gsap.to("h2",{
    text: "Make your to-dos and grow sunflower",
    duration: 4,
    pereatDelay: 0.7,
    ease: "power1.in",
    yoyo:true,
    delay:0.5
})


/*gsap.to(".appear2",{
    
    scale:1,
    ease:"bounce",
    duration:5,
    opacity:1,
    stagger:1
}) 
*/
//const tl = gsap.timeline();

/*function playTimeline() {
    tl.to("svg", { duration: 1, opacity: 1, ease: Quad.easeInOut }, );


	tl.fromTo(
		".appear4",
        { scale: 0, opacity: 0 },
		{ duration: 2, scale: 1, opacity: 1, stagger: 1, ease: Quad.easeInOut },
		"svg"
	);
    tl.fromTo(
		".appear5",
		{ scale: 0, opacity: 0},
		{ duration: 3, scale: 1.5, opacity: 1, stagger: 0.04, ease: Quad.easeInOut },
		"appear4"
	);
    tl.fromTo(
		".appear8",
		{ scale: 0, opacity: 0},
		{ duration: 2, scale: 1, opacity: 1, stagger: 0.04, ease: Quad.easeInOut },
		"appear2"
	);
    tl.fromTo(
		".appear1",
		{ scale: 0, opacity: 0},
		{ duration: 2, scale: 1, opacity: 1, stagger: 0.04, ease: Quad.easeInOut },
		"appear3"
	);
    tl.fromTo(
		".appear2",
		{ scale: 0, opacity: 0},
		{ duration: 2, scale: 1, opacity: 1, stagger: 0.04, ease: Quad.easeInOut },
		"appear5"
	);
    tl.fromTo(
		".appear6",
		{ scale: 0, opacity: 0},
		{ duration: 2, scale: 1, opacity: 1, stagger: 0.04, ease: Quad.easeInOut },
		"appear5"
	);
    tl.fromTo(
		".appear7",
		{ scale: 0, opacity: 0},
		{ duration: 2, scale: 1, opacity: 1, stagger: 0.04, ease: Quad.easeInOut },
		"appear6"
	);
    tl.fromTo(
		".appear3",
		{ scale: 0, opacity: 0},
		{ duration: 2, scale: 1, opacity: 1, stagger: 0.04, ease: Quad.easeInOut },
		"appear7"
	);
    tl.fromTo(
		".appear9",
		{ scale: 0, opacity: 0},
		{ duration: 2, scale: 1, opacity: 1, stagger: 0.04, ease: Quad.easeInOut },
		"appear8"
	);
*/






