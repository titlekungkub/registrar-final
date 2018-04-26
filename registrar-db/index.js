var mysql = require('mysql');
var express = require('express');
var bodyParser = require('body-parser');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'Siwakorn1997',
  database : 'registrar'
});
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/login',function (req,res) {
  var username = req.body.username;
  var password = req.body.password;
  connection.query('select * from student where studentID = ' + username, function(err,rows,fields){
    if(rows[0] == null){
      res.json({
        studentID: null,
        fname: null,
        lname: null
      })
    }else if(rows[0].passwords != password){
      res.json({
        studentID: null,
        fname: null,
        lname: null
      })
    }else if(rows[0].passwords == password){
      res.json({
        studentID: username,
        fname: rows[0].fname,
        lname: rows[0].lname
      })
    }
  })
});

app.post('/courses',function (req,res) {
  connection.query("select * from course inner join section on section.courseID = course.courseID inner join teacher on section.teacherID = teacher.teacherID where semester = '2018/2'",function (err,rows,fields) {
      res.json(rows)
   })
 })

 app.post('/courses/register',function (req,res) {
    var studentID = req.body.studentID;
    var courseID = req.body.courseID;
    var sectionNumber = req.body.sectionNumber;
    var semester = req.body.semester;
    connection.query('insert into study(studentID,courseID,sectionNumber,semester,registerTime,registerStatus) value ("'+studentID+'","'+courseID+'","'+sectionNumber+'","'+semester+'",now(),0)',function (err,rows,fields) {
      res.send(rows)
    })
 })

  app.post('/courses/studentRegistered',function (req,res) {
    var studentID = req.body.studentID;
    connection.query("select * from study join course on study.courseID = course.courseID where studentID = "+ studentID+" and semester = '2018/2' and registerStatus = '0'",function (err,rows,fields) {
      res.send(rows)
    })
  })

  app.post('/courses/calculateTotalCredit',function (req,res) {
    var studentID = req.body.studentID;
    connection.query("select sum(credit) as totalCredit from (select distinct studentID,study.courseID,credit from study join course on study.courseID = course.courseID where studentID = "+ studentID+" and semester = '2018/2' and registerStatus = '0') S",function (err,rows,fields) {
      res.send(rows)
    })
  })

  app.post('/courses/calculateTotalRegisteredCredit',function (req,res) {
    var studentID = req.body.studentID;
    connection.query("select sum(credit) as totalCredit from (select distinct studentID,study.courseID,credit from study join course on study.courseID = course.courseID where studentID = "+ studentID+" and semester = '2018/2' and registerStatus = '1') S",function (err,rows,fields) {
      res.send(rows)
    })
  })

  app.post('/courses/provideRegisteredCourse',function (req,res) {
    var studentID = req.body.studentID;
    connection.query("select * from study join course on study.courseID = course.courseID where studentID = '"+ studentID + "' and semester = '2018/2' and registerStatus = '1'",function (err,rows,fields) {
      res.send(rows)
    })
  })

  app.post('/courses/reduceRegisteredCourse',function (req,res) {
    var studentID = req.body.studentID;
    var courseID = req.body.courseID;
    var sectionNumber = req.body.sectionNumber;
    var semester = req.body.semester;
    connection.query("delete from study where studentID = '"+studentID+"' and courseID = '" +courseID+ "' and sectionNumber = '"+sectionNumber +"' and semester = '"+semester+"';",function (err,rows,fields) {
      res.send(rows)
    })
  })

  app.post('/courses/addCourse',function (req,res) {
    var studentID = req.body.studentID;
    var courseID = req.body.courseID;
    var sectionNumber = req.body.sectionNumber;
    var semester = req.body.semester;
    connection.query('insert into study(studentID,courseID,sectionNumber,semester,registerTime,registerStatus) value ("'+studentID+'","'+courseID+'","'+sectionNumber+'","'+semester+'",now(),1)',function (err,rows,fields) {
      res.send(rows)
    })
  })

  app.post('/courses/checkEligibility',function (req,res) {
    var studentID = req.body.studentID;
    var courseID = req.body.courseID;
    connection.query("select * from study where studentID = "+studentID+ " and courseID = "+courseID+ " and semester = '2018/2' and registerStatus = '1'",function (err,rows,fields) {
      res.send(rows)
    })
  })

  app.post('/courses/checkRegisteredStudent',function (req,res) {
    var courseID = req.body.courseID;
    var sectionNumber = req.body.sectionNumber;
    var semester = req.body.semester;
    connection.query("select count(*) as registeredStudent from study where courseID = "+courseID+ " and sectionNumber = "+sectionNumber+" and semester = '"+semester+"'",function (err,rows,fields) {
      res.send(rows)
    })
  })

  app.post('/courses/checkCourseCap',function (req,res) {
    var courseID = req.body.courseID;
    var sectionNumber = req.body.sectionNumber;
    var semester = req.body.semester;
    connection.query("select * from section where courseID = '"+courseID+"' and sectionNumber = '"+sectionNumber+"' and semester = '"+semester+"'",function (err,rows,fields) {
      res.send(rows)
    })
  })

  app.post('/courses/payStatus',function (req,res) {
    var studentID = req.body.studentID;
    connection.query("select * from pay join student on pay.studentID = student.studentID join enrollmentfee on enrollmentfee.facultyID = student.facultyID and enrollmentfee.academicYear = entranceYear where pay.studentID = "+studentID,function (err,rows,fields) {
      res.send(rows)
    })
  })

  app.post('/courses/provideStudentProfile',function (req,res) {
    var studentID = req.body.studentID;
    connection.query("select * from student join faculty on student.facultyID = faculty.facultyID join department on student.departmentID = department.departmentID where student.studentID = "+studentID,function (err,rows,fields) {
      res.send(rows)
    })
  })

  app.post('/courses/providePayHistory',function (req,res) {
    var studentID = req.body.studentID;
    connection.query("select * from pay join student on pay.studentID = student.studentID join enrollmentfee on enrollmentfee.facultyID = student.facultyID and enrollmentfee.academicYear = entranceYear where pay.studentID = "+studentID+" and payStatus = '1';",function (err,rows,fields) {
      res.send(rows)
    })
  })

  app.post('/activities/provideAvailableActivity',function (req,res) {
    connection.query("select * from activity join activityTable on activity.activityID = activityTable.activityID where activityTime > now()",function (err,rows,fields) {
      res.send(rows)
    })
  })

  app.post('/activities/provideActivityRegisteredStudent',function (req,res) {
    var activityID = req.body.activityID;
    var activityNo = req.body.activityNo;
    connection.query("select count(*) as currentStudent from participation where activityID = "+activityID+" and activityNo = "+activityNo,function (err,rows,fields) {
      res.send(rows)
    })
  })

  app.post('/activities/registerActivity',function (req,res) {
    var studentID = req.body.studentID;
    var activityID = req.body.activityID;
    var activityNo = req.body.activityNo;
    connection.query("insert into participation value ("+studentID+","+activityID+","+activityNo+",now(),'0')",function (err,rows,fields) {
      res.send(rows)
    })
  })

  app.post('/activities/registerActivityResult',function (req,res) {
    var studentID = req.body.studentID;
    connection.query("select * from participation join activity on participation.activityNo = activity.activityNo and participation.activityID = activity.activityID join activitytable on activity.activityID = activitytable.activityID where studentID = "+studentID+ " and registerDate > CAST(year(now()) AS char)",function (err,rows,fields) {
      res.send(rows)
    })
  })

  app.post('/activities/provideStudentActivities',function (req,res) {
    var studentID = req.body.studentID;
    var year = req.body.year;
    var nextYear = parseInt(year) + 1
    connection.query("SELECT * FROM participation JOIN activityTable ON participation.activityID = activitytable.activityID JOIN activity ON participation.activityID = activity.activityID AND participation.activityNo = activity.activityNo WHERE studentID = "+studentID+ " AND registerDate > '"+year+ "' AND registerDate < '"+nextYear+ "' AND participationStatus = '1'",function (err,rows,fields) {
      res.send(rows)
    })
  })

  app.post('/courses/provideStudentStudyResult',function (req,res) {
    var studentID = req.body.studentID;
    var semester = req.body.semester
    connection.query("select * from study join course on study.courseID = course.courseID join section on study.courseID = section.courseID and study.sectionNumber = section.sectionNumber and study.semester = section.semester where studentID = '"+studentID+"' and study.semester = '"+semester+"' and registerStatus = '1'",function (err,rows,fields) {
      res.send(rows)
    })
  })

app.listen(3300);
