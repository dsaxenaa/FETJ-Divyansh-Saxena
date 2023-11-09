import express from "express"
import passport from "passport"

export const router = express.Router()

router.get("/login/success",(req,res)=>{
    if(req.user){
        res.status(200).json({
            error:false,
            message:"Logged in!",
            user:req.user
        })
    }else{
        res.status(403).json({error:true, message:"Not Authorized"})
    }

})

router.get("/login/failed",(req,res)=>{
    res.status(401).json({
        error:true,
        message:"Login Failed!"
    })
})

router.get("/google/callback",
passport.authenticate("google",{
    successRedirect:"http://localhost:3000/",
    failureRedirect:"/login/failed"
}))

router.get("/google",passport.authenticate("google",["profile","email"]));

router.get('/logout', function(req, res, next) {
    req.logout(function(err) {
      if (err) { return next(err); }
      res.redirect('http://localhost:3000');
    });
  });


