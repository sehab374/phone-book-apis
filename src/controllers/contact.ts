import { Request, Response } from "express";
import { PrismaClient, Contact,User } from "@prisma/client";


export const createContact=async(req:Request,res:Response)=>{

    //   res.send("new contact saved");

    

    // const contact=await PrismaClient.Contact.create(
    //     {
    //         data:{
    //             ...req.body
    //         }
    //     //    {
    //     //     "name":"sara",
    //     //     "phone":"01223232432",
    //     //     "email":"sara@gmail.com",
    //     //     "image":"tguklk"
    //     //    } 
    //     }
    //     )
    //     res.json(contact)


}
export const deleteContact=async(req:Request,res:Response)=>{





}
    