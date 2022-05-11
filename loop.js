//protfolio
var d = document.getElementById("works");


const itemsFun = async () => {
   var items0 = await (await fetch('data.json')).json();
   return items0;
}
var items = (await itemsFun()).items;
// console.log(items);

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

//SERVICES
var s = document.getElementById("services");

const servicesFun = async () => {
    var services0 = await (await fetch('data.json')).json();
    return services0;
 }
 var services = (await servicesFun()).services;
//  console.log(services);

function add_2(Allitems) {
    var items = Allitems;
    var div = ""
    if (Allitems) {
        items.forEach((item, i) => {
            div += `
            <div class="col-md-4 col-sm-6 grid col-12">
            <div class="hx-service-item">
                <div class="hx-service-single">
                    <div class="service-img"><img src="${item.src}"></div>
                    <div class="hx-service-content">
                        <h3>${item.title}</h3>
                        <a class="uk-button uk-button-secondary button" href="#services-modal-overflow${i}" uk-toggle>
                            See What I am Expert In
                        </a>

                        <div id="services-modal-overflow${i}" uk-modal>
                            <div class="uk-modal-dialog">
                                <button class="uk-modal-close-default" type="button" uk-close></button>

                                <div class="uk-modal-header">
                                    <h2 class="uk-modal-title">${item.title}</h2>
                                </div>

                                <div class="uk-modal-body" uk-overflow-auto>

                                    <div class="row">
                                    ${add_features(item.features)}
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
            `
        });
    }
    return div;
}
function add_features(Allitems) {
    var items = Allitems;
    var div = "";
    var len=4;
    switch(items.length){
        case 2:
        len=6;
        break;
        case 1:
        len=12;
        break;
        default:
            len=4;
    }
    if (Allitems) {
        items.forEach((item, i) => {
            div += `
            <div class="col-lg-${len} col-md-6 col-sm-12">
            <div class="service-section">
                <div class="services-wrapper">
                    <div class="services-icon-wrapper">
                        <div class="service-dot">
                            <div class="dots"></div>
                            <div class="dots2"></div>
                        </div>
                        <i>
                        ${item.photo}

                        </i>
                    </div>
                    <div class="service-content">
                        <h2> ${item.feature}</h2>
                        <p> ${item.description}.
                        </p>
                    </div>
                </div>
            </div>
        </div>
            `
        });
    }
    return div;
}

s.innerHTML = add_2(services)