import {DataTypes} from "sequelize";

import sequelize from "../sequelize";

const Todo = sequelize.define('todo', {
    id: {type: DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    task: {type: DataTypes.STRING, allowNull: false},
    done: {type: DataTypes.BOOLEAN, allowNull: false},
    due_date: {type: DataTypes.DATE}
});

const Lists = sequelize.define('lists', {
    id: {type: DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    title: {type: DataTypes.STRING, allowNull: false},
});


Todo.belongsTo(Lists);
Lists.hasMany(Todo);


export default {
    Lists, Todo
};