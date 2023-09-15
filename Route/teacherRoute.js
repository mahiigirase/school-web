const route = require('express').Router()

const {getTeacher,postTeacher,updateTeacher,deleteTeacher,login} = require('../Controller/teacherController')


route.get('/',getTeacher)

route.post('/',postTeacher)

route.put('/:id',updateTeacher)

route.delete('/:id',deleteTeacher)

route.post('/login',login)

module.exports = route