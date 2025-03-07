module.exports=(sequelize,DataTypes)=>{
    const comments= sequelize.define("Comments",{
        CommentBody:{
            type: DataTypes.STRING,
            allowNULL:false,
        },
    })
    return comments;
}