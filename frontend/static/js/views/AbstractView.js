export default class {
    
    constructor(params) {
        this.params = params;
    }

    setTitle(title) {
        document.title = title;
    }
    
    setName(name){
        // console.log(name);
        this.name = name;
    }

    async getHtml() {
        return "";
    }


}