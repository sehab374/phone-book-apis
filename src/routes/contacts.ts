import { Router } from 'express';
import * as contact from '../controllers/contact';



const contactsRoutes:Router = Router();

contactsRoutes.post('/',contact.createContact);

// contactsRoutes.get('/',contact.createContact);



export default contactsRoutes;

