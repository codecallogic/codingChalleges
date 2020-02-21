const Skills = require('../models/skills')

module.exports = {
    index,
    show,
    newSkill,
    create,
    deleteSkill,
    edit,
    update
}

function index(req, res){
    res.render('skills/index', {
        mySkills: Skills.getAll()
    })
}

function show(req, res){
    res.render('skills/show', {
        skill: Skills.getOne(req.params.id),
        skillNum: parseInt(req.params.id) + 1
    })
}

function newSkill(req, res){
    res.render('skills/new')
}

function create(req, res){
    Skills.create(req.body)
    res.redirect('/skills')
}

function deleteSkill(req, res){
    Skills.deleteSkill(req.params.id)
    res.redirect('/skills')
}

function edit(req, res){
    res.render('skills/edit', {
        skill: Skills.getOne(req.params.id),
        idx: req.params.id
    })
}

function update(req, res){
    req.body.intermediate = !!req.body.intermediate
    Skills.update(req.body, req.params.id)
    res.redirect(`/skills/${req.params.id}`)
}