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

    async getUsers() {
        let url = 'https://healthcare-bysean.herokuapp.com/viewprofile/3';
        try {
            let res = await fetch(url);
            return await res.json();
        } catch (error) {
            console.log(error);
        }
    }
    
    async renderUsers() {
        let user = await getUsers();
        let html = '';
        // users.forEach(user => {
            let htmlSegment = `<div class="user">
                                <h2>${user.username1} </h2>
                                <div class="email"><a href="email:${user.useremail}">${user.useremail}</a></div>
                                <div>${user.location}</div>
                                <div>${user.user_mobile}</div>
                            </div>`;
    
            html += htmlSegment;
        // }
        // );
    
        let container = document.querySelector('.container');
        container.innerHTML = html;

        return html;
    }

}