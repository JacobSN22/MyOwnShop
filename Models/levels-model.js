import { sequelize } from '../Config/sequelize-config.js';
import { DataTypes, Model } from 'sequelize';

class LevelModel extends Model{}

LevelModel.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey:true
    },
    level: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'levels',
    freezeTableName: true,
    underscored: true,
})

export default LevelModel