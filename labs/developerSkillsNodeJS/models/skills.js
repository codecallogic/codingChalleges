const mySkills = [
    {skill: 'Javascript', intermediate: true},
    {skill: 'HTML', intermediate: false},

]

module.exports = {
    getAll,
    getOne,
    create,
    deleteSkill,
    update
}

function getAll(){
    return mySkills
}

function getOne(id){
    return mySkills[id]
}

function create(skill){
    mySkills.push(skill)
}

function deleteSkill(id){
    mySkills.splice(id, 1)
}

function update(skill, id){
    mySkills.splice(id, 1, skill)
}