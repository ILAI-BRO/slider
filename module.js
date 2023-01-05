let images = [{
    img: "./image/img-1.jpg",
	title: "Rostov-on-Don, Admiral",
	city: "Rostov-on-Don LCD admiral",
	apartment: "81 m2",
	time: "3.5 months",
	cost: "Upon request"

  }, {
    img: "./image/img-2.jpg",
	title: "Sochi Thieves",
	city: "Sochi Thieves",
	apartment: "105 m2",
	time: "4 months",
	cost: "Upon request"
  }, {
    img: "./image/img-3.jpg",
	title: "Rostov-on-Don Patriotic",
	city: "Rostov-on-Don Patriotic",
	apartment: "93 m2",
	time: "3 months",
	cost: "Upon request"
}];

function initSlider() {
	
	
	let sliderImages = document.querySelector(".slider__images");
	let sliderDots = document.querySelector(".slider__dots");
	let navItem = document.querySelector(".nav__item");

	let getCity = document.querySelector(".information-item__city");
	let getApartment = document.querySelector(".information-item__apartment");
	let getTime = document.querySelector(".information-item__repair-time");
	let getRepair = document.querySelector(".information-item__repair");
	
	

	

	initImages();
	initArrows();
	initDots();
	initLink();
	initContent();
	
	function initImages() {
	  images.forEach((image, index) => {
		let imageDiv = `<img  class="slider-content__img n${index} ${index === 0? "active" : ""}" src="${images[index].img}" data-index="${index}" alt="photo" />`;
		sliderImages.innerHTML += imageDiv;
	  });
	}

	
	

	function initArrows() {
	  document.querySelectorAll(".slider__arrow").forEach(arrow => {
		arrow.addEventListener("click", function() {
		  let curNumber = +sliderImages.querySelector(".active").dataset.index;
		 
		  let nextNumber;
		  
		  if (arrow.classList.contains("left")) {
			nextNumber = curNumber === 0? images.length - 1 : curNumber - 1;
			
		  } else {
			nextNumber = curNumber === images.length - 1? 0 : curNumber + 1;
		  }
		  moveSlider(nextNumber);
		 
		});
	  });
	}
	
	function initDots() {
	  images.forEach((image, index) => {
		let dot = `<div class="slider__dots-item n${index} ${index === 0? "active" : ""}" data-index="${index}"></div>`;
		sliderDots.innerHTML += dot;
	  });
	  sliderDots.querySelectorAll(".slider__dots-item").forEach(dot => {
		dot.addEventListener("click", function() {
		  moveSlider(this.dataset.index);
		})
	  })
	}

	function initLink() {
		images.forEach((image, index) => {
			let link = `<span class="nav-item__link n${index} ${index === 0? "active" : ""}" data-index="${index}">${images[index].title}</span>`;
			navItem.innerHTML += link;
		  });
		  navItem.querySelectorAll(".nav-item__link").forEach(link => {
			link.addEventListener("click", function() {
			  moveSlider(this.dataset.index);
			})
		  })
	}





	
	function moveSlider(num) {
	  sliderImages.querySelector(".active").classList.remove("active");
	  sliderImages.querySelector(".n" + num).classList.add("active");
	  
	  
		sliderDots.querySelector(".active").classList.remove("active");
		sliderDots.querySelector(".n" + num).classList.add("active");

		navItem.querySelector(".active").classList.remove("active");
		navItem.querySelector(".n" + num).classList.add("active");

		changeContent(num)

	}

	function initContent(index) {
		
		let cityText = `<p class="information-content__city   data-index="${index}">${images[0].city}</p>`;
		getCity.innerHTML += cityText;
		let apartmentText = `<p class="information-content__apartment   data-index="${index}">${images[0].apartment}</p>`;
		getApartment.innerHTML += apartmentText;
		let timeText = `<p class="information-content__time  data-index="${index}">${images[0].time}</p>`;
		getTime.innerHTML += timeText;
		let repairText = `<p class="information-content__repair data-index="${index}">${images[0].cost}</p>`;
		getRepair.innerHTML += repairText;
	  ;
	}
	function changeContent(num) {
		let titleCity = getCity.querySelector(".information-content__city");
		titleCity.innerHTML = images[num].city;
		let titleApartment = getApartment.querySelector(".information-content__apartment");
		titleApartment.innerHTML = images[num].apartment;
		let titleTime = getTime.querySelector(".information-content__time");
		titleTime.innerHTML = images[num].time;
		let titleRepair = getRepair.querySelector(".information-content__repair");
		titleRepair.innerHTML = images[num].cost;
	}
  }



  document.addEventListener("DOMContentLoaded", function() {
	initSlider();
  });




