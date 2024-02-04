const zod = require('zod');

// using this for the validation purposes

const createTodo = zod.object({
    title : zod.string(),
    description : zod.string()
})


const updateTodo = zod.object({
    id : zod.string()
})

module.exports = {
    createTodo : createTodo,
    updateTodo : updateTodo
}