
export default class {
    constructor() {
    }

    async getUsers() {
        let url = 'https://healthcare-bysean.herokuapp.com/viewprofile/3';
        try {
            let res = await fetch(url,{
                method : "GET",
                mode: 'cors'
            });
            return await res.json();
        } catch (error) {
            console.log(error);
        }
    }
    
    async getHtml() {
    // async renderUsers() {
        let user = await this.getUsers();
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

        return html;
    }
}
