(()=>{var t={75:()=>{function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function e(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function n(e,n){return!n||"object"!==t(n)&&"function"!=typeof n?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(e):n}function r(t){var e="function"==typeof Map?new Map:void 0;return(r=function(t){if(null===t||(n=t,-1===Function.toString.call(n).indexOf("[native code]")))return t;var n;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,r)}function r(){return o(t,arguments,u(this).constructor)}return r.prototype=Object.create(t.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),a(r,t)})(t)}function o(t,e,n){return(o=i()?Reflect.construct:function(t,e,n){var r=[null];r.push.apply(r,e);var o=new(Function.bind.apply(t,r));return n&&a(o,n.prototype),o}).apply(null,arguments)}function i(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function a(t,e){return(a=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function u(t){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var c=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&a(t,e)}(p,t);var r,o,c,l,s=(r=p,o=i(),function(){var t,e=u(r);if(o){var i=u(this).constructor;t=Reflect.construct(e,arguments,i)}else t=e.apply(this,arguments);return n(this,t)});function p(){var t;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,p),(t=s.call(this)).shadowDOM=t.attachShadow({mode:"open"}),t}return c=p,(l=[{key:"render",value:function(){this.shadowDOM.innerHTML='\n        <style>\n\n            .article-item{\n                width:100%:\n                display:flex;\n                color:black;\n                box-shadow:1px 1px 8px rgba(0,0,0,0.5), -1px -1px 8px rgba(0,0,0,0.5);\n                margin:20px auto;\n                background-color:orange;\n                padding:50px;\n                font-family:sans-serif;\n                \n                \n            }\n            img{\n                max-width:300px;\n                object-fit:cover;\n                object-position:center;\n        \n            }\n           \n        </style>\n            <div class="article-item">\n                <h2>'.concat(this._items.title,' </h2>\n                <img src="').concat(this._items.image,'">\n                <p>').concat(this._items.description,"</p>\n            </div>\n        ")}},{key:"items",set:function(t){this._items=t,this.render()}}])&&e(c.prototype,l),p}(r(HTMLElement));customElements.define("article-blog",c)},627:()=>{function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function e(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function n(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function r(e,n){return!n||"object"!==t(n)&&"function"!=typeof n?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(e):n}function o(t){var e="function"==typeof Map?new Map:void 0;return(o=function(t){if(null===t||(n=t,-1===Function.toString.call(n).indexOf("[native code]")))return t;var n;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,r)}function r(){return i(t,arguments,c(this).constructor)}return r.prototype=Object.create(t.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),u(r,t)})(t)}function i(t,e,n){return(i=a()?Reflect.construct:function(t,e,n){var r=[null];r.push.apply(r,e);var o=new(Function.bind.apply(t,r));return n&&u(o,n.prototype),o}).apply(null,arguments)}function a(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function u(t,e){return(u=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function c(t){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var l=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&u(t,e)}(f,t);var o,i,l,s,p=(o=f,i=a(),function(){var t,e=c(o);if(i){var n=c(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return r(this,t)});function f(){return e(this,f),p.apply(this,arguments)}return l=f,(s=[{key:"connectedCallback",value:function(){this.render()}},{key:"render",value:function(){this.innerHTML='\n        \n        <style>\n            navigasi-bar{\n                display:block;\n            }\n            .kotak{  \n                background-color: #a3b9a3;\n                padding:10px 20px 10px 20px;\n                height: 100%;\n                border-top-right-radius:500px ;\n                border-bottom-left-radius: 500px;\n                \n            }\n            .kotak p{\n                color:white;\n                font-size: 24px;\n                \n            }\n\n\n            .navbar-nav li:hover a {\n                border-top-right-radius:300px ;\n                border-bottom-left-radius: 300px;\n                transition: 2s;\n            }\n            .navbar-nav li:hover a{\n            \n                background-color: #a3b9a3;\n            }\n        </style>\n        \n        <nav class="navbar navbar-expand-lg navbar-light bg-transparent">\n                <div class="container-fluid">\n                <div class="kotak">\n                    <p>Agung.p</p>\n                </div>\n            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">\n                <span class="navbar-toggler-icon"></span>\n            </button>\n            <div class="collapse navbar-collapse" id="navbarNav">\n                <ul class="navbar-nav ">\n                <li class="nav-item">\n                    <a class="nav-link active" aria-current="page" href="index.html">profile</a>\n                </li>\n                <li class="nav-item">\n                    <a class="nav-link" href="#work">work</a>\n                </li>\n                <li class="nav-item">\n                    <a class="nav-link" href="#carier">carier</a>\n                </li>\n                <li class="nav-item">\n                    <a class="nav-link" href="#addres">contact</a>\n                </li>\n                <li class="nav-item">\n                    <a class="nav-link" href="blog.html">blog</a>\n                </li>\n                </ul>\n            </div>\n            </div>\n        </nav>\n        '}}])&&n(l.prototype,s),f}(o(HTMLElement));customElements.define("navigasi-bar",l)}},e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={exports:{}};return t[r](o,o.exports,n),o.exports}(()=>{"use strict";function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function e(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function o(e,n){return!n||"object"!==t(n)&&"function"!=typeof n?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(e):n}function i(t){var e="function"==typeof Map?new Map:void 0;return(i=function(t){if(null===t||(n=t,-1===Function.toString.call(n).indexOf("[native code]")))return t;var n;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,r)}function r(){return a(t,arguments,l(this).constructor)}return r.prototype=Object.create(t.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),c(r,t)})(t)}function a(t,e,n){return(a=u()?Reflect.construct:function(t,e,n){var r=[null];r.push.apply(r,e);var o=new(Function.bind.apply(t,r));return n&&c(o,n.prototype),o}).apply(null,arguments)}function u(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function c(t,e){return(c=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function l(t){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}n(627),n(75);var s=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&c(t,e)}(f,t);var n,i,a,s,p=(n=f,i=u(),function(){var t,e=l(n);if(i){var r=l(this).constructor;t=Reflect.construct(e,arguments,r)}else t=e.apply(this,arguments);return o(this,t)});function f(){return e(this,f),p.apply(this,arguments)}return a=f,(s=[{key:"render",value:function(){var t=this;this._articles.forEach((function(e){var n=document.createElement("article-blog");n.items=e,t.appendChild(n)}))}},{key:"articles",set:function(t){this._articles=t,this.render()}}])&&r(a.prototype,s),f}(i(HTMLElement));customElements.define("article-list",s);document.querySelector("article-list").articles=[{id:1,title:"about me",image:"../image/profile.png",description:"hello nama saya agung prayogi, saya siswa smk n 2 karangayar , saya mengambil bidang keahlian rekayasa perangkat lunak . awal mula saya masih bingung dengan kegiatang yg dilakukan jurusan ini , namun waktu demi waktu saya mulai mengerti apa yang harus dilakukan saat ini hingga kedepan nanti , saya menyukai web karena web sanyang berperan penting dalam kehiduan saat ini ,",teks1:"Lorem",teks2:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, eos possimus veniam unde quasi et non, voluptates itaque illo dicta obcaecati nulla quas laborum sunt sed mollitia animi praesentium excepturi?"},{id:2,title:"Lorem",image:"../image/profile.png",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, eos possimus veniam unde quasi et non, voluptates itaque illo dicta obcaecati nulla quas laborum sunt sed mollitia animi praesentium excepturi?",teks1:"lorem",teks2:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, eos possimus veniam unde quasi et non, voluptates itaque illo dicta obcaecati nulla quas laborum sunt sed mollitia animi praesentium excepturi?"},{id:3,title:"lorem",image:"../image/profile.png",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, eos possimus veniam unde quasi et non, voluptates itaque illo dicta obcaecati nulla quas laborum sunt sed mollitia animi praesentium excepturi?",teks1:"Lorem",teks2:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, eos possimus veniam unde quasi et non, voluptates itaque illo dicta obcaecati nulla quas laborum sunt sed mollitia animi praesentium excepturi?"},{id:4,title:"Lorem",image:"../image/profile.png",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, eos possimus veniam unde quasi et non, voluptates itaque illo dicta obcaecati nulla quas laborum sunt sed mollitia animi praesentium excepturi?",teks1:"Lorem",teks2:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, eos possimus veniam unde quasi et non, voluptates itaque illo dicta obcaecati nulla quas laborum sunt sed mollitia animi praesentium excepturi?"}]})()})();