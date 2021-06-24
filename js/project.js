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
    this.overview = "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.";
  }
  if (object.desc !== undefined) {
    this.description = object.desc;
  } else {
    this.description = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scramble.";
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

this.appear = function(right) {
  let rectangle = 0;
  const objetive= document.getElementById('projects');
  const list = document.createElement('li');
  const box = document.createElement('div');
  const first = document.createElement('div');
  first.classList.add('first');
  list.appendChild(box);
  const part_a = document.createElement('div');
  part_a.classList.add('part-a')
  const sm_img= document.createElement('img');
  sm_img.src = this.image;
  sm_img.alt = this.alt;
  sm_img.classList.add('placeholder');
  part_a.appendChild(sm_img);
  const latest = document.createElement('div');
  latest.classList.add('latest');
  const part_b = document.createElement('div');
  part_b.classList.add('part_b');
  const project_title = document.createElement('h2');
  project_title.classList.add('project-title');
  project_title.innerHTML =this.title;
  part_b.appendChild(project_title);
  const project_info = document.createElement('p');
  project_info.classList.add('project-info');
  project_info.innerHTML =this.overview;
  part_b.appendChild(project_info);
  const tags = document.createElement('div');
  tags.classList.add('tags');
  for (let i in this.tags){
    let span = document.createElement('span');
    span.innerHTML = this.tags[i];
    rectangle = document.createElement('img');
    rectangle.classList.add('rectangle');
    rectangle.src = 'assest/Rectangle.png'
    rectangle.alt = 'Rectangle'
    tags.appendChild(span);
    tags.appendChild(rectangle);
  }
  rectangle.remove();
  part_b.appendChild(tags)
  const button = document.createElement('button');
  button.classList.add('button');
  button.type='button';
  console.log(this.id);
  let temp=0+this.id
  button.onclick= function () {callp(temp)}
  const button_span = document.createElement('span');
  button_span.innerHTML = 'See Project';
  button.appendChild(button_span);
  part_b.appendChild(button);

  if(right==0){
    first.appendChild(part_a);
    latest.appendChild(part_b);
    box.appendChild(first);
    box.appendChild(latest)
    box.classList.add('project-card');
  }else{
    first.appendChild(part_b);
    latest.appendChild(part_a);
    box.appendChild(latest);
    box.appendChild(first)
    box.classList.add('project-card2');

  }
  objetive.appendChild(list);
}
this.message = function () {
  let rectangle = 0;
  const modalTitle = document.querySelector('.modal-title');
  modalTitle.textContent = this.title;
  const modalImage = document.querySelector('.modal-img');
  modalImage.src = this.bigImage;
  const modalInfo = document.querySelector('.modal-info');
  modalInfo.textContent = this.description;
  const modalTags = document.querySelector('#modal-tags');
  while (modalTags.hasChildNodes()) {
    modalTags.removeChild(modalTags.lastChild);
  }
  rectangle = document.createElement('img');
  rectangle.classList.add('rectangle');
  rectangle.src = 'assest/Rectangle.png';
  rectangle.alt = 'Rectangle';
  modalTags.appendChild(rectangle);
  const copy = this.tags;
  for (let i = 0; i < copy.length; i += 1) {
    const span = document.createElement('span');
    span.innerHTML = this.tags[i];
    rectangle = document.createElement('img');
    rectangle.classList.add('rectangle');
    rectangle.src = 'assest/Rectangle.png';
    rectangle.alt = 'Rectangle';
    modalTags.appendChild(span);
    modalTags.appendChild(rectangle);
  }
  const live = document.querySelector('.live');
  live.href = this.live;
  const repo = document.querySelector('.repo');
  repo.href = this.repo;
};
const myProjects = data;
const modal =document.querySelector('.modal-background')
const bt =document.querySelector('.modal-buttons')
function callp(num){
    let buffer=myProjects[num];
    let p =new Project(buffer.id,buffer.title,buffer.overview,buffer.description,buffer.big_image,buffer.image,buffer.alt,buffer.alt,undefined,buffer.live,buffer.repo);
    p.message();
    bt.style.display = "flex"
    modal.style.visibility = "visible";
}
}


export default Project