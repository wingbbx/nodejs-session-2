import { DataTypes } from "sequelize";
import database from "../config/database.js";

const User = database.define('users', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

export default User;