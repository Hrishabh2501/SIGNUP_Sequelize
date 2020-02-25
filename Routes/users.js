const models = require('../models')




async function createUser (req, res, next) {
    try {
        const user = await models.User.create(req.body)
        


        const sgMail = require('@sendgrid/mail');
        sgMail.setApiKey(process.env.SENDGRID_API_KEY);
        const msg = {
        to: 'hrishabh.b@westagilelabs.com',
        from: 'hrishabhjain67@gmail.com',
        subject: 'Sending with Twilio SendGrid is Fun',
        text: 'Hello plain world!',
        html: '<p>Hello HTML world!</p>',
        };
        sgMail.send(msg).then(() => {}, console.error);
        // (async () => {
        //       try {
        //         await sgMail.send(msg);
        //       } catch (err) {
        //         console.error(err.toString());
        //       }
        //     })();

        res.status(200).json({
            user
            
        })
    } catch (error) {
        res.status(404);
        next({error})
    }
}
async function updateUser (req, res, next) {
    try {
        const user = await models.User.update(req.body, {
            where: {
                id: req.params.userId
            }
        })
    } catch (error) {
        next(error)
    }
}
async function getUsers (req, res, next) {
    try{
    const users = await models.User.findAll({})
    res.status(200).json({
        users
    })
}
catch(error)
{
    next(error)
}
}
async function getUserDetails (req, res, next) {
    const user = await models.User.findOne({
        where: {
            id: req.params.userId
        }
    })
    res.status(200).json({
        user
    })
}

async function loggedIn(req, res, next) {
    try{
    const user = await  models.User.findOne({
        where: {
            userEmail: req.params.userId,
            userPass: req.params.userPassword
        }
    })
    res.status(200).json({
       user
    })
}
catch(error)
{
    next(error)
}
}





async function deleteUser (req, res, next) {
    const deletedUser = await models.Users.destroy({
        where: {
            id: req.params.userId
        }
    })
    res.status(200).json({
        deletedUser
    })
}
module.exports = {
    createUser,
    updateUser,
    getUserDetails,
    getUsers,
    deleteUser,
    loggedIn
}

//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 API KEY


//ES6

//ES8
// (async () => {
//   try {
//     await sgMail.send(msg);
//   } catch (err) {
//     console.error(err.toString());
//   }
// })();