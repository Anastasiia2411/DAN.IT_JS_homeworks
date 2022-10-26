document.querySelectorAll('.services_list_element').forEach(el => {
    el.addEventListener('click', selectPanel)
});

function selectPanel(e) {
    const clickedTabHeader = e.target;
    const tabToActivate = e.target.dataset.target;

    document.querySelectorAll(".services_elem_container")
        .forEach(el => el.classList.remove('active_services'));
    document.querySelectorAll(".services_list_element")
        .forEach(el => el.classList.remove('active_services_list'));

    clickedTabHeader.classList.add('active_services_list');
    document.querySelector(tabToActivate).classList.add('active_services');
}

