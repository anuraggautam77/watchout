const connection = require('../dbconnection');
const driver = connection().getInstance();
const request = require('request');
const async = require('async');
const isDebugLocal = false;
AppModel = {
    userRegistration: function (objdata, callback) {
        console.log(objdata);
        var query = ``;
        if (objdata.referredby == '') {
            query = `merge (floor:Floor{fno:${objdata.floorno}})
         merge (location:Location{lid:"${objdata.lid}", projectName:"${objdata.projectname}"})
         merge (user:User{name:"${objdata.name}", devID:"${objdata.deviceid}",phone:"${objdata.mobileno}"})
         merge (referral:Referral{code:"${objdata.referralcode}"})
         merge (referral)-[:REFERRAL_CODE]-(user)
         merge (user)-[:BELONGS_TO]->(location)-[:BELONGS_TO]->(floor) return ID(user) as id`;
        } else {
            query = `merge (floor:Floor{fno:${objdata.floorno}})
         merge (location:Location{lid:"${objdata.lid}", projectName:"${objdata.projectname}"})
         merge (user:User{name:"${objdata.name}", devID:"${objdata.deviceid}",phone:"${objdata.mobileno}"})
         merge (referral:Referral{code:"${objdata.referralcode}"})
         merge (referral)-[:REFERRAL_CODE]-(user)
         merge (user)-[:BELONGS_TO]->(location)-[:BELONGS_TO]->(floor) with user as u
         match (r:Referral{code:"${objdata.referredby}"})
         merge (r)-[:REFERRED_BY]-(u) return ID(u) as id`;
        }
    
        /*
         
         var query = `merge (floor:Floor{fno:${objdata.floorno}})
         merge (location:Location{lid:"${objdata.lid}", projectName:"${objdata.projectname}"})
         merge (user:User{name:"${objdata.name}", devID:"${objdata.deviceid}",phone:"${objdata.mobileno}"})
         merge (user)-[:BELONGS_TO]->(location)-[:BELONGS_TO]->(floor) return ID(user) as id`; 
         */
        driver.cypher({'query': query}, function (err, results) {
            if (err)
                throw err;
            callback(results);
        });


    },
    spotRegistration: function (objdata, callback) {

        var query = `merge (floor:sFloor{fno:${objdata.floorno}})
         merge (location:sLocation{lid:"${objdata.lid}", projectName:"${objdata.projectname}"})
         merge (user:sUser{name:"${objdata.name}", devID:"${objdata.deviceid}",phone:"${objdata.mobileno}"})
         merge (user)-[:BELONGS_TO]->(location)-[:BELONGS_TO]->(floor) return ID(user) as id`;

        driver.cypher({'query': query}, function (err, results) {
            if (err)
                throw err;
            callback(results);
        });
    },
    createQuestion: function (objdata, callback) {

        if (objdata.type === "quiz") {
            var query = `merge (question:Question{status:'${objdata.status}',qus:'${objdata.title}',op1:'${objdata.option1}',op2:'${objdata.option2}', op3:'${objdata.option3}',op4:'${objdata.option4}',ca:['op${objdata.correct}']}) return question`;
        } else {
            var query = `merge (poll:Poll{status:'${objdata.status}',qus:'${objdata.title}',op1:'${objdata.option1}',op2:'${objdata.option2}', op3:'${objdata.option3}',op4:'${objdata.option4}'}) return poll`;
        }

        driver.cypher({'query': query}, (err, results) => {
            if (err)
                throw err;
            if (objdata.status === "publish") {
                this.noticationData(objdata, results, objdata.type);
            }
            callback(results);
        });
    },
    noticationData(objdata, result, type) {

        if (type === "poll") {
            node = "poll";
        } else {
            node = "question";
        }


        var obj = {
            actionUrl: `question/${result[0][node]['_id']}/${type}`,
            title: `New  ${type} is publised !!!!`,
            messgae: `{ ${objdata.title} } Please try to attempt this ${type}`
        };
        this.notificationToAll(obj);
    },
    notificationToAll: function (notificationData) {
        var tokencount = 0, count = 0;
        var query = ` match (u:User) return u.devID as deviceid, u.name as name, u.phone as mobile`;
        driver.cypher({'query': query}, (err, results) => {
            if (err)
                throw err;

            async.each(results, (tokendetail) => {
              //  console.log(JSON.stringify(tokendetail));


                if (tokendetail.hasOwnProperty('deviceid')) {
                    var token = tokendetail.deviceid;
                    if (token !== null) {
                        tokencount++;
                        request({
                            url: 'https://fcm.googleapis.com/fcm/send',
                            method: 'POST',
                            headers: {
                                'Content-Type': ' application/json',
                                'Authorization': 'key=AIzaSyDwbkJd-lz_OLS8Vb62wU3kv55wV500MA8'
                            },
                            body: JSON.stringify(
                                    {
                                        "notification": {
                                            "title": notificationData.title,
                                            "body": `Hi  ${tokendetail.name[0].toLocaleUpperCase() + (tokendetail.name.substring)(1)} , ${notificationData.messgae}`,
                                            "icon": "https://playnwin.herokuapp.com/img/icons/Icon-57.png",
                                            "click_action": notificationData.actionUrl
                                                    // "image": 'https://donotifyme.herokuapp.com/img/promoimages/' + message.selectedimg,

                                        },
                                        "to": token
                                    }
                            )
                        }, function (error, response, body) {

                            if (error) {
                                console.error(error, response, body);
                            } else if (response.statusCode >= 400) {
                                console.error('HTTP Error: ' + response.statusCode + ' - ' + response.statusMessage + '\n' + body);
                            } else {
                                count++;
                                if (count === tokencount) {
                                    // callback({message: "Message send to >>" + count + ' Devices', });
                                    console.log("/////////////////////");
                                    console.log("Message send to >>" + count + ' Devices');
                                    console.log("/////////////////////");
                                }
                            }
                        })
                    }
                }

            });





        });

    },
    pollList: function (objdata, callback) {

        if (objdata.hasOwnProperty("both")) {
            var query = `match (poll:Poll) where poll.status="save" or poll.status="publish" return ID(poll) as pid, poll`;
        } else {
            var query = `match (poll:Poll) where  poll.status="publish" return ID(poll) as pid, poll`;
        }
        driver.cypher({'query': query}, function (err, results) {
            if (err)
                throw err;
            callback(results);
        });
    },
    quizList: function (objdata, callback) {
        var query = '';
        if (objdata.hasOwnProperty("both")) {
            query = `match (question:Question) where question.status="save" or question.status="publish" return ID(question) as qid, question`;
        } else {
            query = `match (question:Question) where question.status="publish" return ID(question) as qid, question`;
        }
        driver.cypher({'query': query}, function (err, results) {
            if (err)
                throw err;
            callback(results);
        });
    },
    queStatus: function (objdata, callback) {
        var query = '', status = "save";
        if (objdata.status === 'save') {
            status = "publish";
        }

        if (objdata.type === 'poll') {
            query = `match (poll:Poll) where ID(poll)=${objdata.id} set poll.status='${status}' return poll.status as status ,ID(poll) as id`;
        } else {
            query = `match (question:Question) where ID(question)=${objdata.id} set question.status='${status}' return question.status as status ,ID(question) as id`;
        }

        driver.cypher({'query': query}, function (err, results) {
            if (err)
                throw err;
            callback(results);
        });
    },
    getQuestion: function (objdata, callback) {
        var query = '', flag = true, str = '';
        if (objdata.type === "quiz") {

            if (objdata.isadmin) {
                str = `where (que.status="save" or que.status="publish")`;
                query = `match (que:Question) ${str} and ID(que)=${objdata.queid} return  que.op1 as op1,que.op2 as op2,que.op3 as op3,que.op4 as op4, que.qus as que,ID(que) as id, que.ca as ca`;
            } else {
                str = `where que.status="publish"`;
                query = `match (que:Question) ${str} and ID(que)=${objdata.queid} return  que.op1 as op1,que.op2 as op2,que.op3 as op3,que.op4 as op4, que.qus as que,ID(que) as id`;
            }


        } else if (objdata.type === "poll") {

            if (objdata.isadmin) {
                str = `where (poll.status="save" or poll.status="publish")`;
            } else {
                str = ` where poll.status="publish"`;
            }
            query = `match (poll:Poll) ${str} and ID(poll)=${objdata.queid} return poll.op1 as op1,poll.op2 as op2,poll.op3 as op3,poll.op4 as op4, poll.qus as que,ID(poll) as id`;
        } else {
            flag = false;
        }

       // console.log(query);
        if (flag) {
            driver.cypher({'query': query}, function (err, results) {
                if (err)
                    throw err;
                results[0].type = objdata.type;
                callback(results);
            });
        } else {
            callback([]);
        }


    },
    checkAlreadyAttempt: function (objdata, callback) {
        var query = `match (u:User)-[]-(n) where ID(n)=${objdata.queid} and ID(u)=${objdata.userid} return u`;
        driver.cypher({'query': query}, function (err, result) {
            if (err)
                throw err;
            callback(result);
        });
    },
    submitQue: function (objdata, callback) {
        var query = '';
        if (objdata.type === 'poll') {
            query = `match (p:Poll) where ID(p)=${objdata.id} match (u:User) where ID(u)=${objdata.userid} merge (u)-[r:ANSWERED_TO{ans:"${objdata.selected}",createdAt:timestamp()}]-(p)`;
        } else {
            query = `match (q:Question) where ID(q)=${objdata.id} match (u:User) where ID(u)=${objdata.userid} merge (u)-[r:ANSWERED_TO{ans:["${objdata.selected}"],createdAt:timestamp()}]-(q) set r.iscorrect =  length(FILTER(x in q.ca WHERE x in r.ans)) = length(q.ca) return r.iscorrect as iscorrect, q.ca as ca,r.ans as attempt`;
        }
        driver.cypher({'query': query}, function (err, results) {
            if (err)
                throw err;
            if (objdata.type === 'poll') {
                var countquery = `match (p:Poll)<-[r]-(u:User) where ID(p)=${objdata.id} return r.ans as rans, count(r.ans) as ansCount,p.op1 as op1,p.op2 as op2,p.op3 as op3,p.op4 as op4`
                driver.cypher({'query': countquery}, function (err, count) {
                    if (err)
                        throw err;
                    callback(count, 'poll');
                });
            } else {
                callback(results, 'quiz');
            }

        });
    },
    getOptionCount: function (objdata, callback) {
        var query = '';
        if (objdata.type === "quiz") {
            query = `match (q:Question) where ID(q)=${objdata.queid}
                     match (u:User)-[r]->(q) 
                     return length(collect(r.ans)) as ansCount ,r.ans as ans, q.op1 as op1,q.op2 as op2 ,q.op3 as op3,q.op4 as op4`;
        } else {
            query = `match (p:Poll) < - [r] - (u:User) 
                     where ID(p) =${objdata.queid} 
                     return r.ans as ans, count(r.ans) as ansCount, p.op1 as op1, p.op2 as op2, p.op3 as op3, p.op4 as op4`;
        }
        //console.log(query);
        driver.cypher({'query': query}, function (err, results) {
            if (err)
                throw err;
            callback(results);
        });
    },
    correctQuizUser: function (objdata, callback) {

        var query = `match (q:Question) where ID(q)=${objdata.queid}  match (u:User)-[r]->(q) where r.iscorrect=true return u.devID as devid, u.name as name, u.phone as mobile , ID(u) as userid`;
        driver.cypher({'query': query}, function (err, results) {
            if (err)
                throw err;
            callback(results);
        });
    },
    notifyToUser: function (objdata, callback) {
        var query = `match (u:User) where ID(u)=${objdata.userid} return u.devID as tokenid`;
        driver.cypher({'query': query}, (err, results) => {
            if (err)
                throw err;
            var token = results[0].tokenid;
            if (token !== null) {
                this.ajaxcall(objdata, token, callback)
            }
        });
    },
    ajaxcall: function (objdata, token, callback) {

        request({
            url: 'https://fcm.googleapis.com/fcm/send',
            method: 'POST',
            headers: {
                'Content-Type': ' application/json',
                'Authorization': 'key=AIzaSyDwbkJd-lz_OLS8Vb62wU3kv55wV500MA8'
            },
            body: JSON.stringify(
                    {
                        "notification": {
                            "title": objdata.title,
                            "body": objdata.message,
                            "icon": "https://playnwin.herokuapp.com/img/icons/Icon-57.png",
                            "click_action": "https://www.google.com"
                        },
                        "to": token
                    }
            )
        }, function (error, response, body) {

            if (error) {
                callback(error);
            } else if (response.statusCode >= 400) {
                callback('HTTP Error: ' + response.statusCode + ' - ' + response.statusMessage + '\n' + body);
            } else {
                callback("sent");
            }
        });
    },
    allusercount: function (objdata, callback) {
        var query = `optional match (u:User)-[]-(l:Location)-[]-(f:Floor) return f.fno as floorno, count(distinct u) as userCount order by userCount desc`;
        //console.log(query)
        driver.cypher({'query': query}, function (err, results) {
            if (err)
                throw err;
            callback(results);
        });
    },
    spotcount: function (objdata, callback) {
        var query = `optional match (u:sUser)-[]-(l:sLocation)-[]-(f:sFloor) return f.fno as floorno, count(distinct u) as userCount order by userCount desc`;
      //  console.log(query)
        driver.cypher({'query': query}, function (err, results) {
            if (err)
                throw err;
            callback(results);
        });
    },
    floorwiseuser: function (objdata, callback) {
        var query = ` match (u:User)-[]-(l:Location)-[]-(f:Floor{fno:${objdata.floorid}}) return count(distinct u) as userCount , l.projectName as projName, l.lid as proid`;
       // console.log(query);
        driver.cypher({'query': query}, function (err, results) {
            if (err)
                throw err;
            callback(results);
        });
    },
    adminRegis: function (objdata, callback) {
        var query = `MERGE (n:user { username: "${objdata.username}", password: "${objdata.password}" })`;
        driver.cypher({'query': query}, function (err, results) {
            if (err)
                throw err;
            callback(results);
        });

    },
    adminLogin: function (objdata, callback) {
        var query = `match (n:user { username: "${objdata.username}" }) return n.password as password, n.username as username`;
        console.log(query);
        driver.cypher({'query': query}, function (err, results) {
            if (err)
                throw err;
            callback(results);
        });

    },
    getrefferalcode: function (objdata, callback) {
        var query = `optional match (ru:User)-[:REFERRAL_CODE]-(r:Referral) optional match (r)-[:REFERRED_BY]-(u:User) return r.code as code,ru.devID  as deviceID,count(u) as userCount, ru.name as name order by userCount desc LIMIT 2`;
        driver.cypher({'query': query}, function (err, results) {
            if (err)
                throw err;
            callback(results);
        });
    },
    
    
    mostdenFloor:function(objdata, callback){
         var query = `match (u:User)-[]-(l:Location)-[]-(f:Floor) return f.fno as fn, count(DISTINCT u) as userCount order by userCount desc limit 1`;
        driver.cypher({'query': query}, function (err, results) {
            if (err)
                throw err;
            callback(results);
        });
        
    },
    
    
     mostdenLoc:function(objdata, callback){
         var query = `match (u:User)-[]-(l:Location) return l.projectName as blockname,l.lid as loc, count(DISTINCT u) as userCount order by userCount desc limit 1`;
        driver.cypher({'query': query}, function (err, results) {
            if (err)
                throw err;
            callback(results);
        });
        
    }

}

module.exports = AppModel;


