var d = document.getElementById("works");

var items = [
    {
        title: "Shop System",
        subTitle: "<b style='color: rgb(255, 0, 0);'>Laravel</b> and Php",
        src: "media/img-1.a1f6d022.jpg",
        Demo_href: "http://shops1.herokuapp.com/public/login",
        Project_Description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.Perspiciatis praesentium soluta recusandae cupiditate natus possimus optio ipsa consequuntur laborum nulla, quidem, obcaecati",
        video_src: "https://www.youtube.com/embed/tgbNymZ7vqY",
        Github_href: "https://github.com/abanoubsamirnaguib/pos-app/",
        Project_Details: ["list item", "list item", "list item", "list item"],
        languages_Used: ["php", "laravel", "Html", "Css", "Bootstrap" ],
        links: {}
    },
    {
        title: "Corna Api",
        subTitle: "<b style='color: rgb(255, 0, 0);'>Angular </b> And Api",
        Project_Description: "Lorem 2, ipsum dolor sit amet consectetur adipisicing elit.Perspiciatis praesentium soluta recusandae cupiditate natus possimus optio ipsa consequuntur laborum nulla, quidem, obcaecati",
        src: "media/img-1.b96b5edf.jpg",
        video_src: "https://www.youtube.com/embed/tgbNymZ7vqY",
        Github_href: "http://shops1.herokuapp.com/public/login",
        Demo_href: "http://shops1.herokuapp.com/public/login",
        Project_Details: ["list item", "list item", "list item", "list item"],
        languages_Used: ["Html", "Css", "Bootstrap", "javascript"],
        links: {}
    },
    {
        title: "libratory Book",
        subTitle: "Html, Css and <b style='color: rgb(255, 0, 0);'>javascript </b>",
        Project_Description: "Lorem 2, ipsum dolor sit amet consectetur adipisicing elit.Perspiciatis praesentium soluta recusandae cupiditate natus possimus optio ipsa consequuntur laborum nulla, quidem, obcaecati",
        src: "media/img-1.8b6be712.jpg",
        video_src: "https://www.youtube.com/embed/tgbNymZ7vqY",
        Github_href: "http://shops1.herokuapp.com/public/login",
        Demo_href: "https://abanoub-a001e.web.app/",
        Project_Details: ["list item", "list item", "list item", "list item"],
        languages_Used: ["Html", "Css", "Bootstrap", "javascript"],
        links: {}
    },
    {
        title: "Skills Hub",
        subTitle: "<b style='color: rgb(255, 0, 0);'> Laravel </b> and Php",
        Project_Description: "Lorem 2, ipsum dolor sit amet consectetur adipisicing elit.Perspiciatis praesentium soluta recusandae cupiditate natus possimus optio ipsa consequuntur laborum nulla, quidem, obcaecati",
        src: "media/img-1.c70a817c.jpg",
        video_src: "https://www.youtube.com/embed/tgbNymZ7vqY",
        Github_href: "http://shops1.herokuapp.com/public/login",
        Demo_href: "http://shops1.herokuapp.com/public/login",
        Project_Details: ["list item", "list item", "list item", "list item"],
        languages_Used: ["Html", "Css", "Bootstrap", "javascript"],
        links: {}
    },
    {
        title: "Visual Design",
        subTitle: "Illustration . Art Direction",
        Project_Description: "Lorem 2, ipsum dolor sit amet consectetur adipisicing elit.Perspiciatis praesentium soluta recusandae cupiditate natus possimus optio ipsa consequuntur laborum nulla, quidem, obcaecati",
        src: "media/img-1.532b98fd.jpg",
        video_src: "https://www.youtube.com/embed/tgbNymZ7vqY",
        Github_href: "http://shops1.herokuapp.com/public/login",
        Demo_href: "http://shops1.herokuapp.com/public/login",
        Project_Details: ["list item", "list item", "list item", "list item"],
        languages_Used: ["Html", "Css", "Bootstrap", "javascript"],
        links: {}
    },
    {
        title: "Product Design",
        subTitle: "Illustration . Art Direction",
        Project_Description: "Lorem 2, ipsum dolor sit amet consectetur adipisicing elit.Perspiciatis praesentium soluta recusandae cupiditate natus possimus optio ipsa consequuntur laborum nulla, quidem, obcaecati",
        src: "media/img-1.1c7b924e.jpg",
        video_src: "https://www.youtube.com/embed/tgbNymZ7vqY",
        Github_href: "http://shops1.herokuapp.com/public/login",
        Demo_href: "http://shops1.herokuapp.com/public/login",
        Project_Details: ["list item", "list item", "list item", "list item"],
        languages_Used: ["Html", "Css", "Bootstrap", "javascript"],
        links: {}
    },
];

function add_1(Allitems) {
    var items = Allitems;
    var div = ""
    if (Allitems) {
        items.forEach((item, i) => {
            div += `
       <div class="col-lg-4 col-md-6 col-sm-12 custom-grid">
       <div class="">
           <div class="tp-protfolio-single">
               <div class="tp-protfolio-img"><img src="${item.src}"
                       alt=""></div>
               <div class="tp-protfolio-text">
                   <h2>${item.title}</h2>
                   <span>
                   ${item.subTitle}
                   </span>
                   <a href="#Work-modal-overflow${i}" uk-toggle>View Work</a>

                   <div id="Work-modal-overflow${i}" uk-modal>
                       <div class="uk-modal-dialog">
                           <button class="uk-modal-close-default" type="button"
                               uk-close></button>

                           <div class="uk-modal-header">
                               <h2 class="uk-modal-title">Title</h2>
                           </div>

                           <div class="uk-modal-body ">
                               <h2 class="text-center text-light text-capitalize">
                               ${item.title}</h2>
                               <div class="row" id="contents">
                                   <div class="col-lg-12 col-md-12 col-sm-12">
                                       <div class="service-section">
                                           <div class="services-wrapper">
                                               <iframe width="560" height="340"
                                                   src="${item.video_src}">
                                               </iframe>
                                               <div class="service-content text-left">
                                                   <h2>Project Description</h2>
                                                   <p>
                                                   ${item.Project_Description}
                                                   </p>
                                                   <h2>Project Details</h2>
                                                   <ul class="text-capitalize"
                                                       style="list-style-position: inside;">
                                                       ${add_li(item.Project_Details, " ")}
                                                   </ul>
                                                   <h2>Programming Technologies Used</h2>
                                                   <ul class="text-capitalize  d-inline"
                                                       style="list-style-position: inside;">
                                                       ${add_li(item.languages_Used, "class='d-inline mr-5'")}
                                                   </ul>
                                                   <div>
                                                       <h2>Websites Links</h2>
                                                       <h5 class="divSubTitle">
                                                           <a href="${item.Github_href}">GITHUB</a> Link
                                                       </h5>
                                                       <h5 class="divSubTitle">
                                                           <a href="${item.Demo_href}">DEMO</a> Link
                                                       </h5>
                                                       ${add_liNKS(item.links)}
                                                   </div>
                                               </div>
                                           </div>
                                       </div>
                                   </div>

                               </div>
                           </div>

                       </div>
                   </div>


               </div>
           </div>
       </div>
   </div>`
        });
    }
    return div;
}
function add_li(Allitems, style) {
    var items = Allitems;
    var div = ""
    if (Allitems) {
        items.forEach((item, i) => {
            div += `<li ${style}>${item}</li>`
        });
    }
    return div;
}

function add_liNKS(Allitems) {
    var items = Allitems;
    var div = ""
    if (Allitems) {
        for (item in items) {
            div += `
            <h5 class="divSubTitle">
            <a href="${items[item]}"> ${item} </a> Link
            </h5>`
        };
    }
    return div;
}
d.innerHTML = add_1(items)