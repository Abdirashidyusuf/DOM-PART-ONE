const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

const navItems = document.querySelectorAll('nav a');
navItems.forEach((item, index) => {
    const navItemKey = `nav-item-${index + 1}`;
    item.textContent = siteContent["nav"][navItemKey];
});

const bigTitle=document.querySelector(".cta-text h1");
bigTitle.textContent=siteContent["cta"]["h1"];

const bigImg=document.querySelector("#cta-img");
bigImg.setAttribute('src', siteContent["cta"]["img-src"]);

const button=document.querySelector("button");
button.textContent=siteContent["cta"]["button"];

// main content top content
const texts = document.querySelectorAll('.top-content .text-content');

texts.forEach((text, index) => {
  const h4Element = text.querySelector('h4');
  const pElement = text.querySelector('p');

  if (index === 0) {
    h4Element.textContent = siteContent["main-content"]["features-h4"];
    pElement.textContent = siteContent["main-content"]["features-content"];
  } else if (index === 1) {
    h4Element.textContent = siteContent["main-content"]["about-h4"];
    pElement.textContent = siteContent["main-content"]["about-content"];
  }
});

const middleImg=document.querySelector(".middle-img");
middleImg.setAttribute("src", siteContent["main-content"]["middle-img-src"]);

// main content bottom content
const bottomTexts= document.querySelectorAll(".bottom-content .text-content");
bottomTexts.forEach((bottomText, index) =>{
  const h4Element=bottomText.querySelector("h4");
  const pElement=bottomText.querySelector("p");

  if(index===0){
    h4Element.innerText=siteContent["main-content"]["services-h4"];
    pElement.innerText=siteContent["main-content"]["services-content"];
  }else if(index === 1){
    h4Element.innerText=siteContent["main-content"]["product-h4"];
    pElement.innerText=siteContent["main-content"]["product-content"];
  }else if(index === 2){
    h4Element.innerText=siteContent["main-content"]["vision-h4"];
    pElement.innerText=siteContent["main-content"]["vision-content"];
  }
})

//contact
const contacts=document.querySelector(".contact h4");
contacts.textContent=siteContent["contact"]["contact-h4"];

const contectsInfo=document.querySelectorAll(".contact p");
contectsInfo.forEach((contectInfo,index)=>{
  const pElement=contectInfo.querySelector("p");

  if(index===0){
    contectInfo.textContent = siteContent["contact"]["address"];
  }else if(index===1){
    contectInfo.textContent = siteContent["contact"]["phone"];
  }else if(index===2){
    contectInfo.textContent = siteContent["contact"]["email"];
  }
})

//footer
const footer=document.querySelector("footer p");
footer.textContent=siteContent["footer"]["copyright"];

