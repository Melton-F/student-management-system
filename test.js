const arr = [
    {
        name:"melton",
        age:20,
    },
    {
        name:"preethu",
        age:05,
    },
    {
        name:"dinesh",
        age:26,
    },
    {
        name:"amutha",
        age:36,
    }
]

const object = arr.reduce(
        (obj, item) => Object.assign(obj, { [item.name]: item.age }), {});

console.log(object);