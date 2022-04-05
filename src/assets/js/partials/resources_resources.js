const resourcesImg = document.querySelectorAll(".resource_image-link");

resourcesImg.forEach((resource) => {
    resource.addEventListener('click', (e) => {
        console.log('Moving to resource-page with resource-id=', e.target.dataset.resource_id);
    })
})