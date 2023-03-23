const {Sequelize,DataTypes}=require("sequelize")

const sequelize=new Sequelize("bulk","root","nimap123",{
    host:"localhost",
    dialect:"mysql"
})

sequelize.authenticate().then(()=>console.log("DB Connected")).catch(err=>console.log(err))

const fileUpload=require("./fileUpload.model")(sequelize,DataTypes)

sequelize.sync({alter:true})

module.exports={fileUpload}