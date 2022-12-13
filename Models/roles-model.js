import { sequelize } from '../Config/sequelize-config.js';
import { DataTypes, Model } from 'sequelize';

class RoleModel extends Model{}

RoleModel.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey:true
    },
    role: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'roles',
    freezeTableName: true,
    underscored: true,
})

export default RoleModel