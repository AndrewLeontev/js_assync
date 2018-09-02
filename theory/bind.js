// Ранее связывание
const user = {
    name: 'Tony',
    printName() {
        console.log(this.name);
    },
};

function bind(context, ...args) {
    return () => this.apply(context, args); // Wrapper
}

Function.prototype.bind = bind;

setTimeout(user.printName.bind(user), 100);

const f = user.printName.bind(user);
f();