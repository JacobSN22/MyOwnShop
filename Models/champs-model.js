import { sequelize } from '../Config/sequelize-config.js';
import { DataTypes, Model } from 'sequelize';

class ChampModel extends Model{}

ChampModel.init({
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
    role_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    level_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    price: {
        type: DataTypes.DOUBLE(16,2),
        allowNull: false
    },
    image: {
        type: DataTypes.STRING,
        allowNull: false
    },
}, {
    sequelize,
    modelName: 'champs',
    freezeTableName: true,
    underscored: true,
})

export default ChampModel