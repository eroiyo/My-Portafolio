import data from './data.js';
function Project(id, title, view, description, big_Image, image, alt, big_Alt, tags, live, repo) {
  if (image !== undefined) {
    this.image = image;
  } else {
    this.image = 'assest/placeholder.png';
  }
  if (big_Image !== undefined) {
    this.big_Image = big_Image;
  } else {
    this.big_Image = 'assest/Big.png';
  }
  if (title !== undefined) {
    this.title = title;
  } else {
    this.title = 'Multi-Post Stories';
  }
  if (alt !== undefined) {
    this.alt = alt;
  } else {
    this.alt = 'placeholder';
  }
  if (big_Alt !== undefined) {
    this.big_Alt = big_Alt;
  } else {
    this.big_Alt = 'big_placeholder';
  }
  if (view !== undefined) {
    this.overview = view;
  } else {
    this.overview = "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.";
  }
  if (description !== undefined) {
    this.description = description;
  } else {
    this.description = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scramble.";
  }
  if (tags !== undefined) {
    this.tags = tags.split(',');
  } else {
    this.tags = 'Css,Html,Bootstrap,Ruby'.split(',');
  }
  if (live !== undefined) {
    this.live = live;
  } else {
    this.live = '#';
  }
  if (repo !== undefined) {
    this.repo = repo;
  } else {
    this.repo = '#';
  }
  if (id !== undefined) {
    this.id = id;
  } else {
    this.id = '?';
  }

  this.appear = function (right) {
    const objetive = document.getElementById('projects');
    const list = document.createElement('li');
    const box = document.createElement('div');
    const first = document.createElement('div');
    first.classList.add('first');
    list.appendChild(box);
    const part_A = document.createElement('div');
    part_A.classList.add('part-a')
    const sm_img = document.createElement('img');
    sm_img.src = this.image;
    sm_img.alt = this.alt;
    sm_img.classList.add('placeholder');
    part_A.appendChild(sm_img);
    const latest = document.createElement('div');
    latest.classList.add('latest');
    const part_B = document.createElement('div');
    part_B.classList.add('part-b');
    const project_Title = document.createElement('h2');
    project_Title.classList.add('project-title');
    project_Title.innerHTML = this.title;
    part_B.appendChild(project_Title);
    const project_Info = document.createElement('p');
    project_Info.classList.add('project-info');
    project_Info.innerHTML = this.overview;
    part_B.appendChild(project_Info);
    const tags = document.createElement('div');
    tags.classList.add('tags');
    for (let i=0; i<tags.length; i++) {
      const span = document.createElement('span');
      span.innerHTML = this.tags[i];
      const rectangle = document.createElement('img');
      rectangle.classList.add('rectangle');
      rectangle.src = 'assest/Rectangle.png';
      rectangle.alt = 'Rectangle';
      tags.appendChild(span);
      tags.appendChild(rectangle);
    }
    rectangle.remove();
    part_B.appendChild(tags)
    const button = document.createElement('button');
    button.classList.add('button');
    button.type = 'button';
    console.log(this.id);
    let temp = 0 + this.id
    button.onclick = function () { callp(temp) }
    const button_span = document.createElement('span');
    button_span.innerHTML = 'See Project';
    button.appendChild(button_span);
    part_B.appendChild(button);

    if (right == 0) {
      first.appendChild(part_A);
      latest.appendChild(part_B);
      box.appendChild(first);
      box.appendChild(latest)
      box.classList.add('project-card');
    } else {
      first.appendChild(part_B);
      latest.appendChild(part_A);
      box.appendChild(latest);
      box.appendChild(first)
      box.classList.add('project-card2');

    }
    objetive.appendChild(list);
    return button;
  }
  this.message = function () {
    const modal_title = document.querySelector('.modal-title')
    modal_title.textContent = this.title;
    const modal_image = document.querySelector('.modal-img');
    modal_image.src = this.big_Image;
    const modal_info = document.querySelector('.modal-info');
    modal_info.textContent = this.description;
    const modal_tags = document.querySelector('#modal-tags')
    while (modal_tags.hasChildNodes()) {
      modal_tags.removeChild(modal_tags.lastChild);
    }
    var rectangle = document.createElement('img');
    rectangle.classList.add('rectangle');
    rectangle.src = 'assest/Rectangle.png'
    rectangle.alt = 'Rectangle'
    modal_tags.appendChild(rectangle);
    for (let i in this.tags) {
      let span = document.createElement('span');
      span.innerHTML = this.tags[i];
      rectangle = document.createElement('img');
      rectangle.classList.add('rectangle');
      rectangle.src = 'assest/Rectangle.png'
      rectangle.alt = 'Rectangle'
      modal_tags.appendChild(span);
      modal_tags.appendChild(rectangle);
    }
    var live = document.querySelector('.live-link');
    live.href = this.live;
    var repo = document.querySelector('.repo-link');
    repo.hreft = this.repo;
  }
  const myProjects = data;
  const modal = document.querySelector('.modal-background')
  const bt = document.querySelector('.modal-buttons')
  function callp(num) {
    let buffer = myProjects[num];
    let p = Project(b.id, b.title, b.view, b.desc, b.big_img, b.img, b.alt, b.big_Alt, b.tag, b.live, b.repo);
    p.message();
    bt.style.display = "flex"
    modal.style.visibility = "visible";
  }
}


export default Project