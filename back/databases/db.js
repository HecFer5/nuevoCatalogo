import {Sequelize} from 'sequelize'

const db = new Sequelize('agenda', 'root', '',{
    host:'localhost',
    dialect: 'mysql'
})

export default db