module.exports = (sequelize, DataTypes) => {
    const Transaction = sequelize.define('Transaction', {
        senderId: {
            type: DataTypes.INTEGER,
            references: {
                model: 'User',
                key: 'id',
            },
            allowNull: false,
        },
        receiverId: {
            type: DataTypes.INTEGER,
            references: {
                model: 'User',
                key: 'id',
            },
            allowNull: false,
        },
        value: DataTypes.NUMERIC,
        transactionDate: DataTypes.DECIMAL(16 ,0),
    }, { 
        timestamps: false, 
        freezeTableName: true,
        tableName: 'transaction',
        underscored: false,
    });
    Transaction.associate = (models) => {
        models.Transaction.belongsTo(models.User, {as: 'RECEIVER_TRANSACTION', foreignKey: 'receiverId', targetKey: 'id' });
        models.Transaction.belongsTo(models.User, {as: 'SENDER_TRANSACTION', foreignKey: 'senderId', targetKey: 'id' });
        models.User.hasMany(models.Transaction, { foreignKey: 'senderId', targetKey: 'id' });
        models.User.hasMany(models.Transaction, { foreignKey: 'receiverId', targetKey: 'id' });
    };
    return Transaction;
};