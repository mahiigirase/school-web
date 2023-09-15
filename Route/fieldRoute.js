const route = require('express').Router()

const {getField,postField,updateField,deleteField,login} = require('../Controller/fieldController')


route.get('/',getField)

route.post('/',postField)

route.put('/:id',updateField)

route.delete('/:id',deleteField)



module.exports = route