
export default class MicroappUser{
    
    userid;
    // userid=3;
    // setId(userid) {
    //     this.userid = userid;
    // }
    // constructor(){};

    constructor(userid) {
        this.userid = userid;
    }

    async getUsers() {
        let url = 'https://healthcare-bysean.herokuapp.com/viewprofile/'+this.userid;
        try {
            let res = await fetch(url);
            return await res.json();
        } catch (error) {
            console.log(error);
        }
    }
    
    // async getHtml() {
    async renderUsers() {
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
