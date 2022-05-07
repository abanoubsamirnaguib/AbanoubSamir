//protfolio
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
        languages_Used: ["php", "laravel", "Html", "Css", "Bootstrap"],
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

//SERVICES
var s = document.getElementById("services");

var services = [
    {
        title: "Web Design",
        src: "media/2.72bf783e.jpg",
        features: [
            {
                feature: "Photo Shop",
                photo: `<img src="media/photoshop.svg" alt="" width="50px" style="vertical-align: baseline;">`,
                description: "Photo Shop , Create Beautiful Images, Graphics, Paintings, and 3D Artwork on Your Desktop and iPad. If You Can Dream It, You Can Make It with Photoshop"
            },
            {
                feature: "Illustrator",
                photo: `<img src="media/illustrator.svg" alt="" width="50px" style="vertical-align: baseline;">`,
                description: "Adobe Illustrator is a professional vector-based design and drawing program. Used as part of a larger design workflow, Illustrator to create logos, patterns, icons,"
            },
            {
                feature: "Flicker",
                photo: `<i class="fas fa-atom" style="color: red;"></i>`,
                description: `Flicker is used for create the illusion of more objects or colors/shades than are actually possible on the system, or as a speedy way of simulating transparency.`
            },
        ]
    },
    {
        title: "Web Development",
        src: "media/1.850fe720.jpg",
        features: [
            {
                feature: "HTML ,CSS ,javascript",
                photo: `<i class="fab fa-html5" style="color: rgba(0, 157, 255, 0.496);"></i>`,
                description: `HTML is a markup language and
                CSS is a styling language.
                however, is a programming language.
                Hence, they are all web languages.`
            },
            {
                feature: "Angular",
                photo: `<img src="media/angular-icon-1.svg" alt="" width="50px" style="vertical-align: baseline;">`,
                description: `Angular is a platform and framework for building
                single-page client applications using HTML and
                TypeScript. Angular is written in TypeScript.`
            },
            {
                feature: "VUE",
                photo: `<i class="fab fa-vuejs" style="color: rgba(0, 255, 166, 0.696);"></i>`,
                description: `Vue. js is a progressive framework for JavaScript
                used to build web interfaces and one-page
                applications.
                Vue. js is also used both for desktop and mobile
                app development.`
            },
                        {
                feature: "PHP , Laravel",
                photo: `<img src="media/php.svg" alt="" width="50px" style="vertical-align:baseline;">`,
                description: `Laravel, is incredibly scalable.
                Thanks to the scaling-friendly nature of PHP .
                In fact,
                Laravel applications have been easily scaled to
                handle hundreds of millions of requests per
                month.`
            },
            {
                feature: "NOSQL DATBASE",
                photo: `<i class="fas fa-code-branch" style="color: rgb(255, 145, 0);"></i>`,
                description: `NoSQL databases are non-tabular databases and store data differently than relational tables. NoSQL databases come in a variety of types based on their data model.`
            },
            {
                feature: "MYSQL",
                photo: `<i class="fas fa-database" style="color: rgb(255, 187, 0);"></i>`,
                description: `MySQL, the most popular Open Source SQL database management system, is developed and supported by Oracle Corporation.MySQL is a database management system.`
            },
            {
                feature: "NODE JS",
                photo: `<img src="media/nodejs.png" alt="" width="50px" style="vertical-align:baseline;">`,
                description: `Node. js is primarily used for non-blocking, event-driven servers, It's used for traditional web sites and back-end API services, real-time, push-based architectures in mind.`
            },
            {
                feature: "mongodb",
                photo: `<img src="media/mongodb.png" alt="" width="50px" style="vertical-align:baseline;">`,
                description: `MongoDB is built on a scale-out architecture that has become popular with developers.MongoDB makes it easy for developers to store structured or unstructured data.`
            },
        ]
    },
    {
        title: "Creative Design",
        src: "media/3.741cffd5.jpg",
        features: [
            {
                feature: "Creative Design",
                photo: `  <img src="media/paint-palette-artist.png" alt="" width="50px" style="vertical-align:baseline;">`,
                description: `I Can generate graphics and digital animation
                which is designed to envision a future product.
                It also involves projects that are creative,
                powerful and unforgettable.
                It's about thinking out of the box to make it
                exclusive.`
            },
            {
                feature: "Modern Looking ",
                photo: `<img src="media/paint-roller.png" alt="" width="50px" style="vertical-align:baseline;">`,
                description: `Web design is at the center of providing a
                satisfactory online experience. Modern web
                design has come a long way. No site stands a
                chance if it cannot look sophisticated and
                function flawlessly.`
            },
            
        ]
    },
    {
        title: "Responsive Design",
        src: "media/4.6ac5afe4.jpg",
        features: [
            {
                feature: "Bootstarp",
                photo: `<img src="media/bootstrap-4.svg" alt="" width="50px" style="vertical-align:baseline;">`,
                description: `Bootstrap includes a responsive,
                mobile first fluid grid system that
                appropriately scales up to 12 columns as the
                device or viewport size increases.`
            },
            {
                feature: "uikit ",
                photo: `<i class="fab fa-uikit" style="color: rgba(0, 145, 255, 0.986);"></i>`,
                description: `UIkit typically include the user interface
                components that convey meaning , Some kits may
                also provide a framework to underpin your site
                or app\’s layout.`
            },
            {
                feature: "Tailwind ",
                photo: `<img src="media/tailwind.svg" alt="" width="50px" style="vertical-align:baseline;">`,
                description: `What is Tailwind? The Tool That Feels Like a Marketing Team, Tailwind automates the most difficult parts of your social media marketing so you can grow smarter and faster. Save time with content creation.`
            },
            {
                feature: "CSS3",
                photo: `<i class="fab fa-css3-alt" style="color: rgb(246, 255, 0);"></i>`,
                description: `Responsive web design provides an optimal
                experience,
                easy reading and easy navigation with a minimum
                of resizing on different devices such as
                desktops, mobiles and tabs.`
            },
        ]
    },
    {
        title: "Branding Identity",
        src: "media/5.e40574c5.jpg",
        features: [
            {
                feature: "Branding",
                photo: `<i class="fas fa-copyright" style="color: rgb(112, 127, 128);"></i>`,
                description: `Brand identity is the visible elements of a
                brand, such as color, design, and logo, that
                identify and distinguish the brand in consumers'
                minds. Brand identity is distinct from brand
                image. ... Designs its logo. Uses colors,
                shapes, and other visual elements in its
                products and promotions.`
            },
        ]
    },
    {
        title: "24/Support",
        src: "media/6.da2598ca.jpg",
        features: [
            {
                feature: "24/Support",
                photo: `<i class="fas fa-headset" style="color: rgba(78, 133, 174, 0.757);"></i>`,
                description: `24/Support , support service that is provided 24
                hours a day and 7 days a week. ... This support
                generally includes support for those services
                that require running without disruption and
                downtime.`
            },
        ]
    },
];

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