function getAboutMe(){
    //lägg till innehåll för about-me
    const aboutMeDiv = document.createElement('div');
    aboutMeDiv.classList.add('about-me-div');
    main.appendChild(aboutMeDiv);
    
    const aboutArticle = document.createElement('article');
    aboutArticle.classList.add('article');
    
    const imgDiv = document.createElement('div');
    imgDiv.classList.add('img-logos');
    //bilder
    const stevieImg = document.createElement('img');
    stevieImg.classList.add('stevie-logo');
    stevieImg.src = './images/car.jpg';
    imgDiv.appendChild(stevieImg);
    
    const evaImg = document.createElement('img');
    evaImg.classList.add('eva-logo');
    evaImg.src = './images/profile-test-cropped.jpg';
    imgDiv.appendChild(evaImg);
    
    const stevieGrassImg = document.createElement('img');
    stevieGrassImg.classList.add('stevie-logo');
    stevieGrassImg.src = './images/grass.jpg';
    imgDiv.appendChild(stevieGrassImg);
    
    aboutArticle.appendChild(imgDiv);
    
    const aboutH3 = document.createElement('h3');
    aboutH3.textContent = 'Eva Björling - future developer';
    aboutArticle.appendChild(aboutH3);
    
    const aboutPara = document.createElement('p');
    aboutPara.textContent = "I am a future web developer based in Malmö, excited to take on new challenges in the world of tech. Coding under the alias 'evesteve' I hope to learn many new skills within fullstack development with a special focus on JavaScript. In just two years time, my dog Stevie and I, will be coding full-time. Wanna take us on as part of your team?";
    aboutArticle.appendChild(aboutPara);
    
    const contactBtn = document.createElement('a');
    contactBtn.classList.add('contact-btn');
    contactBtn.textContent = 'CONTACT ME';
    aboutArticle.appendChild(contactBtn);
    
    aboutMeDiv.appendChild(aboutArticle);
}

