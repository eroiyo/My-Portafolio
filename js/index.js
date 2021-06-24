import Project from './project.js';
import data from './data.js';

const modal = document.querySelector('.modal-background')
let right = 0;

const myProjects = data;
for (let i = 0; i < myProjects.length; i++) {
  let b = myProjects[i]; //b==
  const p = new Project(b.id, b.title, b.view, b.desc, b.big_img, b.img, b.alt, b.big_Alt, b.tag, b.live, b.repo);
  p.appear(right);
  if (right === 0) {
      right = 1;
    }
  else
  {
    right = 0;
  }
}