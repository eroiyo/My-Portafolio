import Project from './project.js';
import data from './data.js';

let right = 0;
const myProjects = data;
for (let i = 0; i < myProjects.length; i++){
  let b = myProjects[i];
  let p = new Project(b.id, b.title, b.view, b.desc, b.bImage, b.image, b.alt, b.bAlt, b.tags, b.live, b.repo);
  p.appear(right);
  if (right === 0){
    right = 1;}
  else{
    right = 0;}}