import AbstractView from "./AbstractView.js";

export default class extends AbstractView {    
    constructor(params) {
        super(params);
        this.setTitle("Dashboard");
        // this.setName("nammmmme");
    }

    // async setName = (name) => {
    //     // console.log(name);
    //     this.name = name;
    // }

    name="123";

    // setName(name){
    //     // console.log(name);
    //     this.name = name;
    // }

    // userid = document.getElementById("userid");

    

    async getHtml() {
        // var a = await renderUsers();
        // return a;
        return `
            <h1>Welcome back, Dom ${this.name}</h1>
            <p>
                Fugiat voluptate et nisi Lorem cillum anim sit do eiusmod occaecat irure do. Reprehenderit anim fugiat sint exercitation consequat. Sit anim laborum sit amet Lorem adipisicing ullamco duis. Anim in do magna ea pariatur et.
            </p>
            <p>
                <a href="/posts" data-link>View recent posts</a>.
            </p>
        `;

        

        
    }

    

}