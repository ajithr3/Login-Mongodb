const express=require('express');
const router=express.Router();

const Usercontroller=require('../controllers/user_controller');

router.get('/',Usercontroller.home);
router.post('/sign_up',Usercontroller.store);
router.post('/sign_in',Usercontroller.show);

module.exports=router;