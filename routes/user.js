import express from "express"

import {v4 as uuidv4} from "uuid"

const router=express.Router()

let db=[{name:"nihal ahmad",age:24,city:"Delhi",state:"delhi"
,country:"India",yob:1997}]


router.get("/",(req,res)=>{
    res.send(db)
})
// create operation
router.post("/",(req,res)=>{
    const user=req.body
    console.log(user);
    const userid=uuidv4()
    const userwithid={...user,id:userid}
    db.push(userwithid)
    res.send(`user with this ${userid}and  has been created`)
})



























export default router