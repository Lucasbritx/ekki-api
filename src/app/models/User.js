module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: DataTypes.STRING,
    phone: {
      type: DataTypes.DOUBLE,
      validate: {
        len: [8, 12],
      },
    },
    balance: {
      type: DataTypes.NUMERIC,
      defaultValue: 1000.00,
    },
    limit: {
      type: DataTypes.NUMERIC,
      defaultValue: 500.00,
    },
    cpf: DataTypes.INTEGER(11),
  }, {
    timestamps: false,
    freezeTableName: true,
    tableName: 'user',
    underscored: false,
  });  
  return User;
};