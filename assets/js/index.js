// DOM Printer
const print = (id, data) => (document.getElementById(id).innerHTML = data);

// Create HTML <ul> with links
const createList = links => {
  const createListElement = ({ title, link }) => {
    return `
		  <li>
			  <a
			  target="_blank"
				  a href="${link}"
				  rel="noopener noreferrer"
				  class="link"
				  >${title}</a
			  >
		  </li>
		`;
  };

  let list = ``;
  links.map(link => (list += createListElement({ ...link })));
  list = `<ul>${list}</ul>`;
  return list;
};

// Print the link data list when the page is loaded
window.addEventListener('load', () => {
  print('links', createList(DATA));
});
