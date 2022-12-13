import { sequelize } from '../Config/sequelize-config.js';
import { DataTypes, Model } from 'sequelize';

class DescriptionModel extends Model{}

DescriptionModel.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey:true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'description',
    freezeTableName: true,
    underscored: true,
})

export default DescriptionModel