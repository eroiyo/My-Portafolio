import data from './data.js';

function Project(object) {
  if (object.img !== undefined) {
    this.image = object.img;
  } else {
    this.image = 'assest/placeholder.png';
  }
  if (object.bImg !== undefined) {
    this.bigImage = object.bImg;
  } else {
    this.bigImage = 'assest/Big.png';
  }
  if (object.title !== undefined) {
    this.title = object.title;
  } else {
    this.title = 'Multi-Post Stories';
  }
  if (object.alt !== undefined) {
    this.alt = object.alt;
  } else {
    this.alt = 'placeholder';
  }
  if (object.bAlt !== undefined) {
    this.bigAlt = object.bAlt;
  } else {
    this.bigAlt = 'big_placeholder';
  }
  if (object.view !== undefined) {
    this.overview = object.view;
  } else {
    this.overview =
      "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.";
  }
  if (object.desc !== undefined) {
    this.description = object.desc;
  } else {
    this.description =
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scramble.";
  }
  if (object.tags !== undefined) {
    this.tags = object.tags.split(',');
  } else {
    this.tags = ['Css', 'Html', 'Bootstrap', 'Ruby'];
  }
  if (object.live !== undefined) {
    this.live = object.live;
  } else {
    this.live = '#';
  }
  if (object.repo !== undefined) {
    this.repo = object.repo;
  } else {
    this.repo = '#';
  }
  if (object.id !== undefined) {
    this.id = object.id;
  } else {
    this.id = '?';
  }

  this.appear = function (right) {
    let rectangle = 0;
    const objetive = document.getElementById('projects');
    const list = document.createElement('li');
    const box = document.createElement('div');
    const first = document.createElement('div');
    first.classList.add('first');
    list.appendChild(box);
    const partA = document.createElement('div');
    partA.classList.add('part-a');
    const smImg = document.createElement('img');
    smImg.src = this.image;
    smImg.alt = this.alt;
    smImg.classList.add('placeholder');
    partA.appendChild(smImg);
    const latest = document.createElement('div');
    latest.classList.add('latest');
    const partB = document.createElement('div');
    partB.classList.add('part-b');
    const projectTitle = document.createElement('h2');
    projectTitle.classList.add('project-title');
    projectTitle.innerHTML = this.title;
    partB.appendChild(projectTitle);
    const projectInfo = document.createElement('p');
    projectInfo.classList.add('project-info');
    projectInfo.innerHTML = this.overview;
    partB.appendChild(projectInfo);
    const tags = document.createElement('div');
    tags.classList.add('tags');
    const tagsCurrentValues = this.tags;
    for (let i = 0; i < tagsCurrentValues.length; i++) {
      const span = document.createElement('span');
      span.innerHTML = this.tags[i];
      rectangle = document.createElement('img');
      rectangle.classList.add('rectangle');
      rectangle.src = 'assest/Rectangle.png';
      rectangle.alt = 'Rectangle';
      tags.appendChild(span);
      if (tagsCurrentValues.length !== i + 1) tags.appendChild(rectangle);
    }
    partB.appendChild(tags);
    const button = document.createElement('button');
    button.classList.add('button');
    button.type = 'button';
    let temp = 0 + this.id;
    button.onclick = function () {
      callp(temp);
    };
    const button_span = document.createElement('span');
    button_span.innerHTML = 'See Project';
    button.appendChild(button_span);
    partB.appendChild(button);

    if (right == 0) {
      first.appendChild(partA);
      latest.appendChild(partB);
      box.appendChild(first);
      box.appendChild(latest);
      box.classList.add('project-card');
    } else {
      first.appendChild(partB);
      latest.appendChild(partA);
      box.appendChild(latest);
      box.appendChild(first);
      box.classList.add('project-card2');
    }
    objetive.appendChild(list);
    return button;
  };
  this.message = function () {
    const modal_title = document.querySelector('.modal-title');
    modal_title.textContent = this.title;
    const modal_image = document.querySelector('.modal-img');
    modal_image.src = this.bigImage;
    const modal_info = document.querySelector('.modal-info');
    modal_info.textContent = this.description;
    const modal_tags = document.querySelector('#modal-tags');
    while (modal_tags.hasChildNodes()) {
      modal_tags.removeChild(modal_tags.lastChild);
    }
    var rectangle = document.createElement('img');
    rectangle.classList.add('rectangle');
    rectangle.src = 'assest/Rectangle.png';
    rectangle.alt = 'Rectangle';
    modal_tags.appendChild(rectangle);
    for (let i in this.tags) {
      let span = document.createElement('span');
      span.innerHTML = this.tags[i];
      rectangle = document.createElement('img');
      rectangle.classList.add('rectangle');
      rectangle.src = 'assest/Rectangle.png';
      rectangle.alt = 'Rectangle';
      modal_tags.appendChild(span);
      modal_tags.appendChild(rectangle);
    }
    const live = document.querySelector('.live');
    live.href = this.live;
    const repo = document.querySelector('.repo');
    repo.href = this.repo;
  };
  const myProjects = data;
  const modal = document.querySelector('.modal-background');
  const bt = document.querySelector('.modal-buttons');

  function callp(num) {
    const b = myProjects[num];
    const p = new Project(myProjects[num]);
    p.message();
    bt.style.display = 'flex';
    modal.style.visibility = 'visible';
  }
}

export default Project;
