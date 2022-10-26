let arr = [
    "https://storage.googleapis.com/gd-wagtail-prod-assets/original_images/design-sprints_3X2.png",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGM6ei8rpQxNcE9AVUTtU1Abx6CXBL51iCzeYsXyulQLdny2cQlngBtyWf0Xc3U4qUJM8&usqp=CAU",
    "https://www.visitflanders.com/ru/binaries/2ab96a31-159b-4e9e-b28b-ec11de55228a_tcm39-158295.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/a/a0/Laptop-coffee-flat-design-by-david-mendoza.png",
    "https://99designs-blog.imgix.net/blog/wp-content/uploads/2019/08/Logo_Design_Process_jpg_4EOOtXuw.jpg?auto=format&q=60&w=1280&h=1280&fit=crop&crop=faces",
    "https://assets.ied.it/wp-content/uploads/sites/5/2015/04/Campagna_430x430px_matite-red.jpg",
    "https://img.urbania.ca/media/2017/02/FB-IMG-design.jpg?fm=webp&q=75&fit=max&w=1400",
    "https://competition.adesignaward.com/images/adesignaward-trophy-multiple-awards.jpg",
    "https://image.architonic.com/pro2-3/20041534/berlin-roomdevider-001-pro-b-arcit18.jpg",
    "https://assets.publishing.service.gov.uk/government/uploads/system/uploads/image_data/file/103532/s960_Design-Strategy-960x640.jpg",
    "https://training.dhis2.org/pluginfile.php/31122/course/overviewfiles/design-grafico2.png",
    "https://fluentdesign.blob.core.windows.net/assets/every-device@1x.jpg",
];
let arr2 = ["https://img2.akspic.ru/previews/5/8/2/8/6/168285/168285-astronavt-risovanie-kosmos-kosmicheskoe_prostranstvo-multfilm-500x.jpg",
    "https://i.pinimg.com/originals/b1/3b/81/b13b81d79fe91e35008feeaf4c5b04d7.jpg",
    "https://i.pinimg.com/736x/b9/59/f1/b959f1670d2631589643575de5a782b7.jpg",
    "https://kartinkin.net/uploads/posts/2022-05/1652228300_1-kartinkin-net-p-nezhnii-kartinki-1.jpg",
    "https://kartinkin.net/uploads/posts/2022-02/1645186692_1-kartinkin-net-p-zhiznennie-kartinki-1.jpg",
    "https://kartinkin.net/uploads/posts/2022-03/1646525519_1-kartinkin-net-p-kartinki-so-stichem-1.jpg",
    "https://telecomdom.com/wp-content/uploads/2020/02/kartinki-na-telefon-5-576x1024.jpg",
    "https://i.pinimg.com/736x/1f/32/de/1f32de75ae0a1ac218a902f6f361a6d7.jpg",
    "https://tableforchange.com/wp-content/uploads/2020/06/%D0%9E%D0%B1%D0%BE%D0%B8-%D0%B4%D0%BB%D1%8F-%D0%B4%D0%B5%D0%B2%D0%BE%D1%87%D0%B5%D0%BA-%D0%BD%D0%B0-%D1%82%D0%B5%D0%BB%D0%B5%D1%84%D0%BE%D0%BD-12-%D0%BB%D0%B5%D1%82-%D0%BA%D1%80%D0%B0%D1%81%D0%B8%D0%B2%D1%8B%D0%B5-%D0%BA%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%BA%D0%B8-16.jpg",
    "https://st.depositphotos.com/2547675/3009/i/450/depositphotos_30094505-stock-photo-time-clock.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT26ALR8a8P6dUG0ZJ4fdcj2Uf3592gMhJigg&usqp=CAU",
    "https://naked-science.ru/wp-content/uploads/2022/08/image-250.png",
];
let arrNameData = ["graphic_design", "web_design", "landing_pages", "wordpress"]
let totalClicked = 0;
let divAnimation = document.getElementById("animation");
const amazingBtn = document.getElementById("amazing_work_btn");


function toArr(array) {
    array.forEach(element => {
        let rand = Math.floor(Math.random() * arrNameData.length);
        const img = `
            <li class="amazing_work_el" data-filter=${arrNameData[rand]}>
                <div class="box_for_el card">
                    <div class="flipper front">
                        <img src=${element} alt="" width="285" height="211" class="section5_img_el img_element_for">
                    </div>
                    <div class="description back">
                        <svg width="88" height="43" viewBox="0 0 88 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="1" y="2" width="41" height="40" rx="20" stroke="#18CFAB"/>
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M26.9131 17.7282L25.0948 15.8913C24.2902 15.0809 22.983 15.0759 22.1768 15.8826L20.1592 17.8926C19.3516 18.6989 19.3482 20.0103 20.1505 20.8207L21.3035 19.689C21.1868 19.3284 21.3304 18.9153 21.6159 18.6295L22.8995 17.3519C23.3061 16.9462 23.9584 16.9491 24.3595 17.3543L25.4513 18.458C25.8528 18.8628 25.8511 19.5171 25.447 19.9232L24.1634 21.2024C23.8918 21.473 23.4461 21.6217 23.1002 21.5263L21.9709 22.6589C22.7745 23.4718 24.0803 23.4747 24.8889 22.6684L26.9039 20.6592C27.7141 19.8525 27.7167 18.5398 26.9131 17.7282ZM19.5261 25.0918C19.6219 25.4441 19.4686 25.8997 19.1909 26.1777L17.9923 27.3752C17.5807 27.7845 16.916 27.7833 16.5067 27.369L15.393 26.2475C14.9847 25.8349 14.9873 25.1633 15.3982 24.7547L16.598 23.5577C16.8903 23.2661 17.3104 23.1202 17.6771 23.2438L18.8335 22.0715C18.0149 21.2462 16.6825 21.2421 15.8606 22.0632L13.9152 24.0042C13.0923 24.8266 13.0884 26.1629 13.9065 26.9886L15.7582 28.8618C16.576 29.6846 17.9072 29.6912 18.7311 28.8701L20.6765 26.9287C21.4985 26.1054 21.5024 24.7717 20.6855 23.9443L19.5261 25.0918ZM19.2579 24.5631C18.9801 24.8419 18.5343 24.8411 18.2618 24.5581C17.9879 24.2743 17.9901 23.8204 18.2661 23.5399L21.5907 20.1611C21.8668 19.8823 22.3117 19.8831 22.5851 20.164C22.8605 20.4457 22.8588 20.9009 22.5817 21.183L19.2579 24.5631Z"
                                  fill="#1FDAB5"/>
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M66.5973 1.99795C77.8653 1.99795 86.9999 10.9523 86.9999 21.9979C86.9999 33.0432 77.8653 41.9979 66.5973 41.9979C55.3292 41.9979 46.1946 33.0432 46.1946 21.9979C46.1946 10.9523 55.3292 1.99795 66.5973 1.99795Z"
                                  fill="#18CFAB"/>
                            <rect x="60" y="17" width="12" height="11" fill="white"/>
                        </svg>
                        <div class="description_img_text">
                            <h3 class="description_heading">creative design</h3>
                            <p class="description_paragraph">Web Design</p>
                        </div>
                    </div>
                </div>
            </li>
        `;
        document.querySelector(".amazing_work_list_img").insertAdjacentHTML("beforeend", img);
    });
}

function addImages() {
    if (totalClicked >= 2) {
        toArr(arr2);
        document.getElementById("amazing_work_btn").remove()
        document.querySelector(".amazing_work_list_img").style.marginBottom = "170px";
    } else if (totalClicked === 1) {
        toArr(arr);
    }
}

function showAnimation() {
    divAnimation.classList.add("show_animation");
    document.getElementById("amazing_work_btn").style.display = "none"
}

function deleteAnimation() {
    divAnimation.classList.remove("show_animation");
    document.getElementById("amazing_work_btn").style.display = "block"
}

amazingBtn.addEventListener('click', (el) => {
    totalClicked++
    showAnimation();
    setTimeout(deleteAnimation, 2000);
    setTimeout(addImages, 2000);
});



