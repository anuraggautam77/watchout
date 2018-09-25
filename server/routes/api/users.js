const AppModel = require('../../models/appModel');

const request = require('request');
const path = require('path');
var jwt = require('jsonwebtoken');
var bcrypt = require('bcrypt-nodejs');

const Cryptr = require('cryptr');
let cryptr = new Cryptr('user_id_incrption_decription');

var settings = require('../../config/settings');




const SERVICE_CONST = {
    REGISTER: 'users',
    CREATE_QUESTION: "createque",
    POLL_QUIZ_LIST: 'pollquizlist',
    CHANGE_STATUS: 'chnagestatus',
    GET_QUESTION: 'getque',
    ADMIN_GET_QUESTION: "admingetque",
    SUBMIT_QUESTION: "submitquestion",
    USER_REGISTRATION: 'userregistration',
    SPOT_REGISTRATION: 'spotreg',
    NOTIFY_QUIZ_WINNER: 'notifyquiz',
    ALL_USER_COUNT: 'alluserdetail',
    FLOOR_WISE_COUNT: 'floorwsie',
    ADMIN_REGISTER: 'register',
    ADMIN_LOGIN: 'adminlogin'
};

module.exports = (apiRoutes) => {


    function tokenVerify(req, res) {

        let token = req.headers['x-access-token'], userid = req.headers['id'];
        obj = {};
        if (token) {
            jwt.verify(token, settings.secret, function (err, decoded) {
                if (decoded === undefined) {
                    obj.status = 403;
                    obj.message = 'No token provided>>';
                } else if (decoded) {//=== cryptr.decrypt(userid)) {
                   // console.log(decoded);
                    if (bcrypt.compareSync(decoded.username, userid)) {
                     //   console.log("valid");
                        obj.status = 200;
                        obj.message = 'valid token>>>>>';
                    }

                } else {
                    obj.status = 403;
                    obj.message = 'Invalid token>>>>>';
                }

            });
        } else {
            obj.status = 403;
            obj.message = 'Invalid token';
        }

        return obj;
    }


    apiRoutes.post('/authvalidate', function (req, res) {
        console.log(">>>>>>>>>>");
        console.log(req.headers['x-access-token']);
        let objCheck = tokenVerify(req, res);
        res.status(objCheck.status).json({status: objCheck.status, message: objCheck.message});

    });



    apiRoutes.post(`/${SERVICE_CONST.ADMIN_REGISTER}`, function (req, res) {
        if (!req.body.username || !req.body.password) {
            res.json({success: false, msg: 'Please pass username and password.'});
        } else {

            bcrypt.genSalt(10, function (err, salt) {
                if (err) {
                    return (err);
                }
                bcrypt.hash(req.body.password, salt, null, function (err, hash) {
                    req.body.password = hash;
                  //  console.log(hash)
                    AppModel.adminRegis(req.body, function (result) {
                        res.json({data: result});
                    });
                });
            });

        }
    });

    apiRoutes.post(`/${SERVICE_CONST.ADMIN_LOGIN}`, function (req, res) {


        AppModel.adminLogin(req.body, function (result) {
            if (result.length > 0) {
                bcrypt.compare(req.body.password, result[0].password, function (err, isMatch) {
                    if (err) {
                        res.status(401).send({success: false, msg: err});
                    }
                    if (isMatch) {

                        var token = jwt.sign({username: result[0].username}, settings.secret);

                        bcrypt.genSalt(10, function (err, salt) {
                            if (err) {
                                return (err);
                            }
                            bcrypt.hash(result[0].username, salt, null, function (err, hash) {
                                res.json({success: true, token: token, userid: hash});
                            });
                        });

                    } else {

                        res.status(401).send({success: false, msg: 'Incorrect Password.'});
                    }
                });

            } else {

                res.status(401).send({success: false, msg: 'Authentication failed.'});
            }
        });
    });




    apiRoutes.post(`/${SERVICE_CONST.USER_REGISTRATION}`, (req, res) => {
        AppModel.userRegistration(req.body, function (result) {
            res.json({data: result});
        });
    });

    apiRoutes.post(`/${SERVICE_CONST.SPOT_REGISTRATION}`, (req, res) => {
        AppModel.spotRegistration(req.body, function (result) {
            res.json({data: result});
        });
    });

    apiRoutes.post(`/${SERVICE_CONST.NOTIFY_QUIZ_WINNER}`, (req, res) => {
        AppModel.notifyToUser(req.body, function (result) {
            res.json({data: result});
        });
    });


    apiRoutes.post(`/${SERVICE_CONST.CREATE_QUESTION}`, (req, res) => {
        AppModel.createQuestion(req.body, function (result) {
            res.json({status: `${req.body.type} ${req.body.status} successfully !!!`, data: result});
        });

    });


    apiRoutes.post(`/${SERVICE_CONST.POLL_QUIZ_LIST}`, (req, res) => {
        var getPollList = new Promise(function (resolve, reject) {
            AppModel.pollList(req.body, function (results) {
                var pollList = [];
                results.map((obj, i) => {
                    pollList.push({
                        id: obj.pid,
                        type: "Poll",
                        detail: obj.poll.properties
                    });
                });
                resolve(pollList);

            });
        });

        var getQuizList = new Promise(function (resolve, reject) {
            AppModel.quizList(req.body, function (results) {
                var quizlist = [];
                results.map((obj, i) => {
                    quizlist.push({
                        id: obj.qid,
                        type: "Quiz",
                        detail: obj.question.properties
                    });
                });
                resolve(quizlist);
            });
        });

        Promise.all([getPollList, getQuizList]).then(function (values) {
            res.json({status: "success", pollList: values[0], quizList: values[1]});

        });

    });


    apiRoutes.post(`/${SERVICE_CONST.CHANGE_STATUS}`, (req, res) => {
        AppModel.queStatus(req.body, (results) => {
            res.json({status: "success", changeto: results});
        });
    });

    apiRoutes.get(`/${SERVICE_CONST.GET_QUESTION}/:queid/:type/:userid`, (req, res) => {

        var alreadyAttempt = new Promise(function (resolve, reject) {
            AppModel.checkAlreadyAttempt(req.params, (results) => {
                var obj = false;
                if (results.length > 0) {
                    obj = true
                }
                resolve(obj)
            });
        });

        var getQuestionData = new Promise(function (resolve, reject) {
            AppModel.getQuestion(req.params, (results) => {
                results[0].options = [results[0].op1, results[0].op2, results[0].op3, results[0].op4];
                resolve(results);
            });
        });

        Promise.all([alreadyAttempt, getQuestionData]).then(function (values) {
            res.json({status: "success", already: values[0], que: values[1]});

        });
    });

    apiRoutes.get(`/${SERVICE_CONST.ADMIN_GET_QUESTION}/:queid/:type`, (req, res) => {
        req.params.isadmin = true;

        var getQuestion = new Promise(function (resolve, reject) {

            AppModel.getQuestion(req.params, (results) => {
                results[0].options = [results[0].op1, results[0].op2, results[0].op3, results[0].op4];
                resolve(results);

            });
        });


        var getuserforCorrectQuiz = new Promise(function (resolve, reject) {
            AppModel.correctQuizUser(req.params, (results) => {
                resolve(results);
            });
        });


        var optionsCount = new Promise(function (resolve, reject) {
            AppModel.getOptionCount(req.params, (results) => {
                var arraycount = []
                results.map((obj) => {
                    var ob = {};
                    ob[obj.ans] = obj.ansCount;
                    arraycount.push(ob)
                })

                resolve({arrCount: arraycount, result: results});
            });
        });

        if (req.params.type === "quiz") {
            Promise.all([getQuestion, getuserforCorrectQuiz, optionsCount]).then(function (values) {
                res.json({status: "success", que: values[0], users: values[1], count: values[2]});

            });

        } else {
            Promise.all([getQuestion, optionsCount]).then(function (values) {
                res.json({status: "success", que: values[0], count: values[1]});
            });
        }
    });

    apiRoutes.post(`/${SERVICE_CONST.SUBMIT_QUESTION}`, (req, res) => {
        AppModel.submitQue(req.body, (results, type) => {
            res.json({status: "success", result: results, type});
        });
    });


    /* apiRoutes.get(`/${SERVICE_CONST.ALL_USER_COUNT}`, (req, res) => {
     AppModel.allusercount(req.body, (results) => {
     res.json({status: "success", result: results});
     });
     });*/

    apiRoutes.get(`/${SERVICE_CONST.FLOOR_WISE_COUNT}/:floorid`, (req, res) => {
        AppModel.floorwiseuser(req.params, (results) => {
            res.json({status: "success", result: results});
        });

    });


    apiRoutes.get(`/${SERVICE_CONST.ALL_USER_COUNT}`, (req, res) => {

        var alluserCount = new Promise(function (resolve, reject) {
            AppModel.allusercount(req.body, (results) => {
                resolve(results);
            });
        });

        var spotCountData = new Promise(function (resolve, reject) {
            AppModel.spotcount(req.body, (results) => {
                resolve(results);
            });
        });

        var refferalCode = new Promise(function (resolve, reject) {
            AppModel.getrefferalcode(req.body, (results) => {
                resolve(results);
            });
        });

        var mostDenLoc = new Promise(function (resolve, reject) {
            AppModel.mostdenLoc(req.body, (results) => {
                resolve(results);
            });
        });

        var mostDenFloor = new Promise(function (resolve, reject) {
            AppModel.mostdenFloor(req.body, (results) => {
                resolve(results);
            });
        });


        Promise.all([alluserCount, spotCountData, refferalCode, mostDenLoc, mostDenFloor]).then(function (values) {
            res.json({status: "success",
                result: values[0],
                spotcount: values[1],
                refferal: values[2],
                mostDenLoc: values[3],
                mostDenFloor: values[4]
            });

        });
    });


};
