

let man = {
    name: 'Dmitry',
    age: 31,
    sayName() {
        alert(this.name)
    }

}

console.log(man.age);
console.log(man.name);
man.sayName();

let page = {
    title: 'samuraiJS',
    content: '',
    render() {
        document.title = this.title;
        document.write(this.content);
    }
}

page.content = `<div>Content about React JS </div>`;
page.render();

let page2 = {

    title: 'samuraiJS',
    setContent(content) {
        this.content = this.content;
    },

    getContent() {
        return this._content;
    },

    render: function () {
        document.write(this._content);
    },
}
}
