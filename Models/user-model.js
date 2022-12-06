import { sequelize } from '../Config/sequelize-config.js'
import { DataTypes, Model } from 'sequelize'
import bcrypt from 'bcrypt'

class UserModel extends Model{}

UserModel.init({
    id: {
        type:DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey:true
    },
    firstname: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastname: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    is_actice: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    }
}, {
    sequelize,
    modelName : 'user',
    freezeTableName: true,
    underscored: true,
    hooks: {
        beforeCreate: async(user, options) => {
            user.password = await createHash(user.password)
        }
    }
    // createdAt: false,
    // updatedAt: false
})

const createHash = async string => {
    const salt = await bcrypt.genSalt(10)
    const hashed_string = await bcrypt.hash(string, salt)
    return hashed_string
}

export default UserModel