module.exports = (sequelize, DataTypes) => {
    const Test = sequelize.define('Test', {
        title: DataTypes.STRING,
        descriptiont: DataTypes.STRING,
        published: DataTypes.STRING,
    })

    Test.associate = function (models) {
    }

    return Test
}
