export class Model {
    user;
    items;
    constructor() {
        this.user = "Ali";
        this.items = [
            new TodoItem("Yemek Ye",false),
            new TodoItem("Spor",true),
            new TodoItem("Ders Çalış",false),
            new TodoItem("Sinema",true),
            new TodoItem("Yürüş",true)
        ];
    }
}

export class TodoItem{
    description;
    action;
    constructor(description,action){
        this.description = description;
        this.action = action;
    }
}