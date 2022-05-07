var d = document.getElementById("works");
var con = document.getElementById("contents");

var items = [
    {
        title: "Shop System",
        subTitle: "<b style='color: rgb(255, 0, 0);'>Laravel</b> and Php",
        src: "media/img-1.a1f6d022.jpg",
        href: "http://shops1.herokuapp.com/public/login",
        content: [
            { items: "Bootstarp3", des: "Bootstrap includes a responsive, mobile first fluid grid system that appropriately scales up to 12 columns as the device or viewport size increases." },
            { items: "CSS3 3", des: "Responsive web design provides an optimal experience, easy reading and easy navigation with a minimum of resizing on different devices such as  desktops, mobiles and tabs." },
            { items: "uikit 3", des: "uikit web design provides an optimal experience, easy reading and easy navigation with a minimum of resizing on different devices such as  desktops, mobiles and tabs." },
        ]
    },
    {
        title: "Shop System2",
        subTitle: "<b style='color: rgb(255, 0, 0);'>Laravel</b> and Php",
        src: "media/img-1.a1f6d022.jpg",
        href: "http://shops1.herokuapp.com/public/login",
        content: [
            { items: "Bootstarp3", des: "Bootstrap includes a responsive, mobile first fluid grid system that appropriately scales up to 12 columns as the device or viewport size increases." },
            { items: "CSS3 3", des: "Responsive web design provides an optimal experience, easy reading and easy navigation with a minimum of resizing on different devices such as  desktops, mobiles and tabs." },
            { items: "uikit 3", des: "uikit web design provides an optimal experience, easy reading and easy navigation with a minimum of resizing on different devices such as  desktops, mobiles and tabs." },
        ]
    },
    {
        title: "Shop System3",
        subTitle: "<b style='color: rgb(255, 0, 0);'>Laravel</b> and Php",
        src: "media/img-1.a1f6d022.jpg",
        href: "http://shops1.herokuapp.com/public/login",
        content: [
            { items: "Bootstarp3", des: "Bootstrap includes a responsive, mobile first fluid grid system that appropriately scales up to 12 columns as the device or viewport size increases." },
            { items: "CSS3 3", des: "Responsive web design provides an optimal experience, easy reading and easy navigation with a minimum of resizing on different devices such as  desktops, mobiles and tabs." },
            { items: "uikit 3", des: "uikit web design provides an optimal experience, easy reading and easy navigation with a minimum of resizing on different devices such as  desktops, mobiles and tabs." },
        ]
    }
];

d.innerHTML = "";
items.forEach((item, i) => {
    d.innerHTML += `
    <div class="col-lg-4 col-md-6 col-sm-12 custom-grid">
    <div class="">
        <div class="tp-protfolio-single">
            <div class="tp-protfolio-img"><img src=" ${item.src}"
                    alt=""></div>
            <div class="tp-protfolio-text">
                <h2> ${item.title}</h2>
                <span>
                ${item.subTitle}
                </span>
                <a href="#modal-overflow${i}" uk-toggle
                    >View Work</a>

                    // model

                    <div id="modal-overflow${i}" uk-modal>
                    <div class="uk-modal-dialog">
                        <button class="uk-modal-close-default" type="button" uk-close></button>

                        <div class="uk-modal-header">
                            <h2 class="uk-modal-title">${item.title}</h2>
                        </div>

                        <div class="uk-modal-body" uk-overflow-auto>
                            <div class="row" id="contents">
            ${item.content.forEach((it) => {
        con.innerHTML = `
                <div class="col-lg-4 col-md-6 col-sm-12">
                    <div class="service-section">
                        <div class="services-wrapper">
                            <div class="services-icon-wrapper">
                                <div class="service-dot">
                                    <div class="dots"></div>
                                    <div class="dots2"></div>
                                </div>
                                <i>
                                    <!-- <i class="fab fa-btc" style="color: rgba(191, 0, 255, 0.455);"></i> -->
                                    <img src="media/bootstrap-4.svg" alt=""
                                        width="50px"
                                        style="vertical-align:baseline;">


                                </i>
                            </div>
                            <div class="service-content">
                                <h2></h2>
                                <p>
                            
                                </p>
                            </div>
                   
                        </div>
                    </div>
                </div>          
                `
    })}


                            </div>
                        </div>

                    </div>
                </div>


            </div>
        </div>
    </div>
    </div>
    `;
});


