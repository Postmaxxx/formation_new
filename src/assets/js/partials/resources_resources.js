const resourcesPreview = document.querySelector(".resources__preview");
const resourcesPreviewPages = document.querySelectorAll(".resources__preview__page");

/*
let resourcePreviewsToShow = [
    { 
      resource_id: "101",
      link_to_img: "../assets/img/resource__preview__blank.png",
      resource_header: "Title of Resource 1",
      resource_text: "Lorem ipsum dolor sit amet. Rem similique fugiat cum iure numquam est quas nulla sit." },
    { 
      resource_id: "102",
      link_to_img: "../assets/img/resource__preview__blank.png",
      resource_header: "Title of Resource 2",
      resource_text: "Lorem ipsum dolor sit amet. Rem similique fugiat cum iure numquam est quas nulla sit." },
    { 
      resource_id: "103",
      link_to_img: "../assets/img/resource__preview__blank.png",
      resource_header: "Title of Resource 3",
      resource_text: "Lorem ipsum dolor sit amet. Rem similique fugiat cum iure numquam est quas nulla sit." },
    { 
      resource_id: "104",
      link_to_img: "../assets/img/resource__preview__blank.png",
      resource_header: "Title of Resource 4",
      resource_text: "Lorem ipsum dolor sit amet. Rem similique fugiat cum iure numquam est quas nulla sit." },
    { 
      resource_id: "105",
      link_to_img: "../assets/img/resource__preview__blank.png",
      resource_header: "Title of Resource 5",
      resource_text: "Lorem ipsum dolor sit amet. Rem similique fugiat cum iure numquam est quas nulla sit." },
    { 
      resource_id: "106",
      link_to_img: "../assets/img/resource__preview__blank.png",
      resource_header: "Title of Resource 6",
      resource_text: "Lorem ipsum dolor sit amet. Rem similique fugiat cum iure numquam est quas nulla sit." },
    { 
      resource_id: "107",
      link_to_img: "../assets/img/resource__preview__blank.png",
      resource_header: "Title of Resource 7",
      resource_text: "Lorem ipsum dolor sit amet. Rem similique fugiat cum iure numquam est quas nulla sit." },
    { 
      resource_id: "108",
      link_to_img: "../assets/img/resource__preview__blank.png",
      resource_header: "Title of Resource 8",
      resource_text: "Lorem ipsum dolor sit amet. Rem similique fugiat cum iure numquam est quas nulla sit." },
    { 
      resource_id: "109",
      link_to_img: "../assets/img/resource__preview__blank.png",
      resource_header: "Title of Resource 9",
      resource_text: "Lorem ipsum dolor sit amet. Rem similique fugiat cum iure numquam est quas nulla sit." },
];
   
*/



function createResourceListeners() {
  const resourcesImg = document.querySelectorAll(".resource_image-link");
  resourcesImg.forEach((resource) => {
    resource.addEventListener('click', (e) => {
        console.log('Moving to resource-page with resource-id=', e.target.dataset.resource_id);
    })
  });  
}
    

function createPageListeners() {
  resourcesPreviewPages.forEach((page) => {
    page.addEventListener('click', (e) => {
      console.log('Reload page with page-number = ', e.target.dataset.page_number);
    })
  })
}



/*
function createPreviews(callbackCreateResourceListeners) {
  
  resourcesPreview.innerHTML = 
  `
    ${ resourcePreviewsToShow.map((preview) => {
      return `
      <div class="resources__preview__item">
        <img src="${preview.link_to_img}" alt="${preview.resource_header}" class="resource_image-link" data-resource_id="${preview.resource_id}">
        <h3>${preview.resource_header}</h3>
        <p>${preview.resource_text}</p>
      </div>
      `
    }).join("")
    }
  `
  callbackCreateResourceListeners()
}
*/

//createPreviews(createResourceListeners);

createResourceListeners();
createPageListeners();






/*
    <!--
        {% for preview in previews %}
        <div class="resources__preview__item">
            {% include "./_resources-block-item.twig" with {resource: preview} %}
        </div>
        {% endfor %}
    -->


        <div class="resources__preview__page">1</div>
    <div class="resources__preview__page">2</div>
    <div class="resources__preview__page">3</div>
*/