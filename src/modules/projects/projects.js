import projectsList from "../../mocks/projects.js";
import Element from "../Element/index.js";

const projects = () => {
  const $ul = document.querySelector(".container-projects--list");

  projectsList.forEach((project) => {
    console.log(project);
    const _container = Element({
      type: "li",
      classList: ["container-projects--list--project"],
      children: [
        Element({
          type: "div",
          classList: ["container-projects--list--project--languages"],
          children: project.stacks.map((proj) =>
            Element({
              type: "div",
              classList: [
                `container-projects--list--project--languages--${proj}`,
              ],
            })
          ),
        }),
        Element({
          type: "img",
          classList: ["container-projects--list--project--img"],
          src: project.image,
        }),
        Element({
            type: 'h3',
            classList: ['container-projects--list--project--title'],
            textContent: project.title
        }),
        Element({
            type: 'p',
            classList: ['container-projects--list--project--description'],
            textContent: project.description
        }),
        Element({
            type: 'div',
            classList: ['container-projects--list--project--links'],
            children: project.links.map(link => 
                Element({
                    type: 'a',
                    classList: ['container-projects--list--project--links--all'],
                    href: link.url,
                    children: [
                        Element({
                            type: 'i',
                            classList: link.icon,
                        })
                    ]
                }))
        })
      ],
    });

    $ul.appendChild(_container);
  });
};

export default projects;
