const isAuth=(req,res,next)=>{
const date=new Date()
//date.getHours()
    let auth=false
    if(!auth){
        res.status(401).send("not authorized")
    }
    else{
        next()
    }
}

module.exports=isAuth