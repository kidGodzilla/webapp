/**
 * Created by guillaumez on 3/22/14.
 */

module.exports = function (sequelize, DataTypes) {
    var User = sequelize.define('User', {
        username: DataTypes.STRING,
        passwordHash: DataTypes.STRING
    }, {
        tableName: 'users',
        classMethods: {
            associate: function (models) {
                User.hasOne(models.Host, { onDelete: 'cascade' })
                User.hasOne(models.Wwoofer, { onDelete: 'cascade' })
            }
        }
    })
    return User
}