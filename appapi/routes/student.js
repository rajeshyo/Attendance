const router = require("express").Router();
const mongoose = require("mongoose");

const Student = mongoose.model("Student");
// const Comment = mongoose.model("Comment");
// const Replay = mongoose.model("Replay");
// const Country = mongoose.model("Country");

//view get operation
// router.post("/",async(req, res)=>{
//     const posts = await Post.find({})
//     res.send(posts)
//     // res.send({ok:true});
// });
router.post("/",async(req, res)=>{
    const student =new Student();
    // post.title =req.body.title;
    student.content =req.body.content;
    await student.save();
    res.send(student)
 });

 router.get("/",async(req, res)=>{
    const student = await Student.find({})
    res.send(student)
    res.send(student)
});

router.delete("/",async(req, res)=>{
    const student= await Student.remove()
res.send({message:"student delete successfull"})
});

router.put("/:studentId",async(req, res)=>{
    const student= await Student.findByIdAndUpdate({
        _id: req.params.studentId},
        req.body,{
            new:true,
            runValidators:true
        });
res.send(student)
    // res.send({ok:true});
});


module.exports= router;