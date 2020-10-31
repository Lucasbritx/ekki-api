module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: true,
      },
    },
    phone: {
      type: DataTypes.DOUBLE,
      validate: {
        len: [8, 12],
      },
    },
    balance: DataTypes.NUMERIC,
    cpf: DataTypes.INTEGER(11),
  }, {
    timestamps: false,
    freezeTableName: true,
    tableName: 'user',
    underscored: false,
  });
  User.associate = (models) => {
    // TODO RETIRAR
  };
  
  return User;
};