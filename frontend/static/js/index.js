import Dashboard from "./views/Dashboard.js";
import Posts from "./views/Posts.js";
import PostView from "./views/PostView.js";
import Settings from "./views/Settings.js";
// import MicroappUsera from "./views/MicroappUser.js";
import MicroappUser from "https://cdn.jsdelivr.net/gh/elton0214/micro-frontend-demo/frontend/static/js/views/MicroappUser.js"

console.log("document.getElementById(\"userid\").innerHTML:"+document.getElementById("userid").innerHTML);

// const microappUsera = new MicroappUsera(document.getElementById("userid").innerHTML);
// const microappUsera = new MicroappUsera();
// microappUsera.setId(document.getElementById("userid").innerHTML);
// console.log("microappUsera:"+JSON.stringify (microappUsera));

// const microappUserb = new defaultExport();
// microappUserb.setId(document.getElementById("userid").innerHTML);
// console.log("microappUserb:"+JSON.stringify (microappUserb));



//pathToRegex(path)
const pathToRegex = path => new RegExp("^" + path.replace(/\//g, "\\/").replace(/:\w+/g, "(.+)") + "$");

//getParams(match)
const getParams = match => {
    const values = match.result.slice(1);
    const keys = Array.from(match.route.path.matchAll(/:(\w+)/g)).map(result => result[1]);

    return Object.fromEntries(keys.map((key, i) => {
        return [key, values[i]];
    }));
};

// when click the url
const navigateTo = url => {
    history.pushState(null, null, url);
    router();
};

//router()
const router = async () => {

    //微前端註冊與路由
    const routes = [
        { path: "/", view: Dashboard },
        { path: "/posts", view: Posts },
        { path: "/posts/:id", view: PostView },
        { path: "/settings", view: Settings }
        // ,{ path: "/user", view: MicroappUser }
    ];

    // Test each route for potential match
    const potentialMatches = routes.map(route => {
        return {
            route: route,
            result: location.pathname.match(pathToRegex(route.path))
        };
    });
    let match = potentialMatches.find(potentialMatch => potentialMatch.result !== null);
    console.log("match:"+JSON.stringify (match));
    if (!match) {
        match = {
            route: routes[0],
            result: [location.pathname]
        };
    }

    //change the text which id="app" with value "view" in const "routes"
    const view = new match.route.view(getParams(match));
    // view.setName("defaulttName22");
    console.log(view);
    console.log(view.name);
    document.querySelector("#microApp").innerHTML = await view.getHtml();

    // const microappUser = new MicroappUser();
    // microappUser.setId("5");
    const microappUser = new MicroappUser(document.getElementById("userid").innerHTML);
    console.log("microappUser"+JSON.stringify (microappUser));
    console.log("microappUser.userid:"+microappUser.userid);
    document.querySelector(".container").innerHTML = await microappUser.renderUsers();
    
};

//讓上一頁/下一頁也可以運作 | popstate:歷史事件
window.addEventListener("popstate", router);

//DOMContentLoaded() > document.body.click() > if "target" matches "data-link", then invokes "navigateTo(xxx)" & "router()"
document.addEventListener("DOMContentLoaded", () => {
    document.body.addEventListener("click", e => {
        if (e.target.matches("[data-link]")) {
            e.preventDefault();
            navigateTo(e.target.href); // ref the context under <nav> in index.html 
        }
    });

    router();
});


