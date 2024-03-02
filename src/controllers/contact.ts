import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient({
    log: ['query']
  });


export const createContact=async(req:Request,res:Response)=>{

    //   res.send("new contact saved");

    try{
        const contact=await prisma.contact.create(
            {
                data:{
                    ...req.body
                }
            }
            )

            res.json(contact)
    }catch(error)
    {
        console.log(error)
    }

}
export const deleteContact=async(req:Request,res:Response)=>{





}
    