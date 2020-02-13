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
logo.src = siteContent['nav']['img-src']

let navLinks = document.querySelectorAll('nav a')
  navLinks[0].text = siteContent.nav['nav-link-1']
  navLinks[1].text = siteContent.nav['nav-link-2']
  navLinks[2].text = siteContent.nav['nav-link-3']
  navLinks[3].text = siteContent.nav['nav-link-4']
  navLinks[4].text = siteContent.nav['nav-link-5']
  navLinks[5].text = siteContent.nav['nav-link-6']

  let navBar = document.querySelector('header nav')


  // adding two new items
  let twitterLink = document.createElement('a')
  twitterLink.innerHTML = 'Twitter'
  navBar.append(twitterLink)
  twitterLink.style.color = 'green'

  let instagramLink = document.createElement('a')
  instagramLink.innerHTML = 'Instagram'
  navBar.prepend(instagramLink)
  instagramLink.style.color = 'green'

  navLinks.forEach(link => {
    link.style.color = 'green'
  })

  let ctaHeader = document.querySelector('.cta-text h1')
  ctaHeader.innerText = siteContent.cta.h1

  let ctaButton = document.querySelector('.cta-text button')
  ctaButton.innerText = siteContent.cta.button

  let ctaImage = document.getElementById('cta-img')
  ctaImage.src = siteContent.cta['img-src']

  let mainHeaders = document.querySelectorAll('.text-content h4')
  mainHeaders[0].innerText = siteContent['main-content']['features-h4']
  mainHeaders[1].innerText = siteContent['main-content']['about-h4']
  mainHeaders[2].innerText = siteContent['main-content']['services-h4']
  mainHeaders[3].innerText = siteContent['main-content']['product-h4']
  mainHeaders[4].innerText = siteContent['main-content']['vision-h4']

  let mainContent = document.querySelectorAll('.text-content p')
  mainContent[0].innerHTML = siteContent['main-content']['features-content']
  mainContent[1].innerHTML = siteContent['main-content']['about-content']
  mainContent[2].innerHTML = siteContent['main-content']['services-content']
  mainContent[3].innerHTML = siteContent['main-content']['product-content']
  mainContent[4].innerHTML = siteContent['main-content']['vision-content']

  let mainImg = document.getElementById('middle-img')
  mainImg.src = siteContent['main-content']['middle-img-src']

  let contactHeading = document.querySelector('.contact h4')
  contactHeading.innerText = siteContent.contact['contact-h4']

  let contactInfo = document.querySelectorAll('.contact p')
  contactInfo[0].innerHTML = siteContent.contact['address']
  contactInfo[1].innerHTML = siteContent.contact['phone']
  contactInfo[2].innerHTML = siteContent.contact['email']