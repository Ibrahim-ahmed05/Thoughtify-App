module.exports=(sequelize,DataTypes)=>{
    const posts= sequelize.define("Posts",{
        title:{
            type: DataTypes.STRING,
            allowNULL:false,
        },
        Description:{
            type: DataTypes.STRING,
            allowNULL:false,
        },
        username:{
            type: DataTypes.STRING,
            allowNULL:false,
        },
    })
    return posts;
}