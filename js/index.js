import Project from './project.js';
import data from './data.js';

let right = 0;
const myProjects = data;
for (let i = 0; i < myProjects.length; i += 1) {
  const b = myProjects[i];
  const p = new Project(b);
  p.appear(right);
  if (right === 0) {
    right = 1;
  } else {
    right = 0;
  }
}