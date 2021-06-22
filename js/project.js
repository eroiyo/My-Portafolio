function Project(id,title, overview, description, big_image, image,alt,big_alt, tags, live, repo) {
  if (image !== undefined) {
    this.image = image
  } else {
    this.image = 'assest/placeholder.png';
  }
  if (big_image !== undefined) {
    this.big_image = big_image
  } else {
    this.big_image = 'assest/Big.png';
  }
  if (title !== undefined) {
    this.title = title;
  } else {
    this.title = 'Multi-Post Stories'
  }
  if (alt !== undefined) {
    this.alt = alt;
  } else {
    this.alt = 'placeholder'
  }
  if (big_alt !== undefined) {
    this.big_alt = big_alt;
  } else {
    this.big_alt = 'big_placeholder'
  }
  if (overview !== undefined) {
    this.overview = overview;
  } else {
    this.overview = "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text."
  }
  if (description!==undefined){
    this.description=description;
  } else{
    this.description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scramble.";
  }
  if (tags!==undefined){
    this.tags=tags.split(',');
  }else{
    this.tags='Css,Html,Bootstrap,Ruby'.split(',');
  }
  if(live!==undefined)
  {
    this.live=live;
  }else{
    this.live='#';
  }
  if(repo!==undefined){
    this.repo=repo;
  } else {
    this.repo='#'
  }
  if(id!==undefined){
    this.id=id;
  } else {
    this.id='?'
  }

this.appear= function(right) {
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
  for (i in this.tags){
    let span = document.createElement('span');
    span.innerHTML = this.tags[i];
    var rectangle = document.createElement('img');
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
function message(){
  const modal_title = document.querySelector('modal-title')
  modal_title.textContent(this.title);
  const modal_image = document.querySelector('modal-img');
  modal_image.src= this.big_image;
  const modal_info = document.querySelector('modal_info');
  modal_info.textContent(this.description);
  const modal_tags = document.querySelector('modal_tags')
  while (modal_tags.hasChildNodes()) {
    node.removeChild(modal_tags.lastChild);
  }
  var rectangle = document.createElement('img');
  rectangle.classList.add('rectangle');
  rectangle.src = 'assest/Rectangle.png'
  rectangle.alt = 'Rectangle'
  modal_tags.appendChild(rectangle);
  for (i in this.tags){
    let span = document.createElement('span');
    span.innerHTML = this.tags[i];
    rectangle = document.createElement('img');
    rectangle.classList.add('rectangle');
    rectangle.src = 'assest/Rectangle.png'
    rectangle.alt = 'Rectangle'
    tags.appendChild(span);
    tags.appendChild(rectangle);
  }
  var live = document.querySelector('live');
  live.href=this.live;
  var repo = document.querySelector('repo');
  repo.hreft =this.repo;
}
}

export {Project}