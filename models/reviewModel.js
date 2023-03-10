module.exports =(sequelize, DataTypes)=>{

    const Review = sequelize.define("review",{
       
        rating: {
            type: DataTypes.INTEGER
        },
        Description : {
            type : DataTypes.TEXT
        }
    })
 return Review
}