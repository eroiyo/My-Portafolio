import Project from './project.js';
import data from './data.js';

const modal = document.querySelector('.modal-background')
let right = 0;

const myProjects = data;
for (let i = 0; i < myProjects.length; i++) {
    let buffer = myProjects[i];
    let p = new Project(buffer.id, buffer.title, buffer.overview, buffer.description, buffer.big_image, buffer.image, buffer.alt, buffer.alt, undefined, buffer.live, buffer.repo);
    p.appear(right)
    if (right === 0) {
        right = 1;
    } else {
        right = 0;
    }
}