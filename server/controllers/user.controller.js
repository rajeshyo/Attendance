const mongoose = require('mongoose');
const passport = require('passport');
const _ = require('lodash');

const User = mongoose.model('User');

//check in
// module.exports.register1 = async (req, res, next )  => {
//     try {
//       const data = {
//         entry: Date.now()
//       };
//       const user = await User.findById(req.params.id);
  
//       //if the user has an attendance array;
     
//       if(user.attendance && user.attendance.length > 0){
//       //for a new checkin attendance, the last checkin
//       //must be at least 24hrs less than the new checkin time;
//           const lastCheckIn = user.attendance[user.attendance.length - 1];
//           const lastCheckInTimestamp = lastCheckIn.date.getTime();
//           // console.log(Date.now(), lastCheckInTimestamp);
//           if (Date.now() > lastCheckInTimestamp + 100) {
//             user.attendance.push(data);
//             await user.save();
//             // req.flash('success','You have been signed in for today');
//             // res.redirect('back')
            
//           } else {
//             // req.flash("error", "You have signed in today already");
//             // res.redirect("back");
//           }
//       }else{
//           user.attendance.push(data);
//           await user.save();
//         //   req.flash('success','You have been signed in for today');
//         //   res.redirect('back')
//       }
    
//     } catch (error) {
//       console.log("something went wrong");
//       console.log(error);
//     }
//   };

module.exports.register1 = (req, res, next) => {
    var user = new User();
    user.fullName = req.body.fullName;
    user.position = req.body.position;
    user.email = req.body.email;
    user.password = req.body.password;
    user.save((err, doc) => {
        if (!err)
            res.send(doc);
        else {
            if (err.code == 11000)
                res.status(422).send(['Duplicate email adrress found.']);
            else
                return next(err);
        }

    });
}


module.exports.register = (req, res, next) => {
    var user = new User();
    user.fullName = req.body.fullName;
    user.position = req.body.position;
    user.email = req.body.email;
    user.password = req.body.password;
    user.save((err, doc) => {
        if (!err)
            res.send(doc);
        else {
            if (err.code == 11000)
                res.status(422).send(['Duplicate email adrress found.']);
            else
                return next(err);
        }

    });
}


module.exports.authenticate = (req, res, next) => {
    // call for passport authentication
    passport.authenticate('local', (err, user, info) => {       
        // error from passport middleware
        if (err) return res.status(400).json(err);
        // registered user
        else if (user) return res.status(200).json({ "token": user.generateJwt() });
        // unknown user or wrong password
        else return res.status(404).json(info);
    })(req, res);
}

module.exports.userProfile = (req, res, next) =>{
    User.findOne({ _id: req._id },
        (err, user) => {
            if (!user)
                return res.status(404).json({ status: false, message: 'User record not found.' });
            else
                return res.status(200).json({ status: true, user : _.pick(user,['fullName','email','position','attendance']) });
        }
    );
}