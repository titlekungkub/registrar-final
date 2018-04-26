INSERT INTO course(courseID,CourseName,credit)
VALUES ('2100111','EXPL ENG WORLD1',3);
INSERT INTO course(courseID,CourseName,credit)
VALUES ('2100112','EXPL ENG WORLD2',3);
INSERT INTO course(courseID,CourseName,credit)
VALUES ('2100113','EXPL ENG WORLD3',3);
INSERT INTO course(courseID,CourseName,credit)
VALUES ('2100114','EXPL ENG WORLD4',3);
INSERT INTO course(courseID,CourseName,credit)
VALUES ('2100115','EXPL ENG WORLD5',3);
INSERT INTO course(courseID,CourseName,credit)
VALUES ('2100116','EXPL ENG WORLD6',3);
INSERT INTO course(courseID,CourseName,credit)
VALUES ('2100117','EXPL ENG WORLD7',3);
INSERT INTO course(courseID,CourseName,credit)
VALUES ('2100118','EXPL ENG WORLD8',3);
INSERT INTO course(courseID,CourseName,credit)
VALUES ('2100119','EXPL ENG WORLD9',3);
INSERT INTO course(courseID,CourseName,credit)
VALUES ('2100110','EXPL ENG WORLD0',3);
INSERT INTO course(courseID,CourseName,credit)
VALUES ('2100499','SENIOR PROJECT',2);
INSERT INTO course(courseID,CourseName,credit)
VALUES ('2100603','RES METH INSTR',3);

INSERT INTO faculty
VALUES (1,'Engineering');
INSERT INTO faculty
VALUES (2,'Accounting');
INSERT INTO faculty
VALUES (3,'Medicine');

INSERT INTO department
VALUES (1,'Computer Engineering',1);
INSERT INTO department
VALUES (2,'Electrical Engineering',1);
INSERT INTO department
VALUES (3,'Reverse Engineering',1);

INSERT INTO student
VALUES ('5831069621','123456','Siwakorn','Luangcharoenpong',2015,1,1,1,0);
INSERT INTO student
VALUES ('5830503421','hello','Wichayut','Utarasak',2015,1,1,1,0);
INSERT INTO student
VALUES ('5830503422','hello','Wichayut','Utarasak',2015,1,1,1,0);
INSERT INTO student
VALUES ('5830503423','hello','Wichayut','Utarasak',2015,1,1,1,0);
INSERT INTO student
VALUES ('5830503424','hello','Wichayut','Utarasak',2015,1,1,1,0);
INSERT INTO student
VALUES ('5830503425','hello','Wichayut','Utarasak',2015,1,1,1,0);
INSERT INTO student
VALUES ('5830503426','hello','Wichayut','Utarasak',2015,1,1,1,0);
INSERT INTO student
VALUES ('5830503427','hello','Wichayut','Utarasak',2015,1,1,1,0);
INSERT INTO student
VALUES ('5830503428','hello','Wichayut','Utarasak',2015,1,1,1,0);
INSERT INTO student
VALUES ('5830503429','hello','Wichayut','Utarasak',2015,1,1,1,0);
INSERT INTO student
VALUES ('5830503420','hello','Wichayut','Utarasak',2015,1,1,1,0);

INSERT INTO dormitory
VALUES (1,'Jumpa','M');
INSERT INTO dormitory
VALUES (2,'Jumpee','F');

INSERT INTO dormitoryRoom
VALUES (1,'2018/2','7015',4,7);
INSERT INTO dormitoryRoom
VALUES (1,'2018/2','7016',2,7);
INSERT INTO dormitoryRoom
VALUES (1,'2018/2','7017',4,7);

INSERT INTO teacher
VALUES ('1234567890123','Kunanon','Yuwapun',1,1,1);
INSERT INTO teacher
VALUES ('1234567890133','Kunnapat','Hemhem',1,1,2);
INSERT INTO teacher
VALUES ('1234567890143','Ariya','Ariwong',1,1,1);

INSERT INTO section
VALUES ('1',40,'2015/1','2018-02-12 12:12:12','Building 4','1234567890123','2100111');
INSERT INTO section
VALUES ('2',40,'2015/1','2018-02-12 12:12:12','Building 4','1234567890123','2100111');
INSERT INTO section
VALUES ('3',40,'2015/1','2018-02-12 12:12:12','Building 4','1234567890133','2100111');
INSERT INTO section
VALUES ('33',30,'2015/1','2018-02-12 12:12:12','Building 4','1234567890143','2100111');
INSERT INTO section
VALUES ('1',10,'2015/1','2018-02-12 12:12:12','Building 1','1234567890123','2100499');
INSERT INTO section
VALUES ('2',10,'2015/1','2018-02-12 12:12:12','Building 1','1234567890133','2100499');
INSERT INTO section
VALUES ('1',30,'2015/1','2018-02-12 12:12:12','Building 3','1234567890123','2100603');
INSERT INTO section
VALUES ('2',30,'2015/1','2018-02-12 12:12:12','Building 3','1234567890123','2100603');
INSERT INTO section
VALUES ('3',30,'2015/1','2018-02-12 12:12:12','Building 3','1234567890123','2100603');
INSERT INTO section
VALUES ('1',30,'2015/1','2018-02-12 12:12:12','Building 3','1234567890123','2100112');
INSERT INTO section
VALUES ('1',30,'2015/1','2018-02-12 12:12:12','Building 3','1234567890123','2100113');

insert into study
value ('5831069621','2100111','1','2015/1','A',now(),1);
insert into study
value ('5831069621','2100112','1','2015/1','A',now(),1);
insert into study
value ('5831069621','2100113','1','2015/1','A',now(),1);
insert into study
value ('5831069621','2100499','1','2015/1','A',now(),1);
insert into study
value ('5830503421','2100499','1','2015/1','A',now(),1);
insert into study
value ('5830503422','2100499','1','2015/1','A',now(),1);
insert into study
value ('5830503423','2100499','1','2015/1','A',now(),1);
insert into study
value ('5830503424','2100499','1','2015/1','A',now(),1);
insert into study
value ('5830503425','2100499','1','2015/1','A',now(),1);
insert into study
value ('5830503426','2100499','1','2015/1','A',now(),1);
insert into study
value ('5830503427','2100499','1','2015/1','A',now(),1);
insert into study
value ('5830503428','2100499','1','2015/1','A',now(),1);
insert into study
value ('5830503429','2100499','1','2015/1','A',now(),1);

insert into enrollmentfee
value (2015,21000,1);
insert into enrollmentfee
value (2016,23000,1);
insert into enrollmentfee
value (2017,25000,1);

insert into pay
value ('5831069621',2015,'2016/1',now(),1);
insert into pay
value ('5831069621',2015,'2016/2',now(),1);
insert into pay
value ('5831069621',2015,'2017/1',now(),1);
insert into pay
value ('5831069621',2015,'2017/2',now(),1);
insert into pay
value ('5831069621',2015,'2018/1',now(),1);
insert into pay
value ('5831069621',2015,'2018/2',now(),0);

insert into activityTable
value (1,'กิจกรรมปลูกป่าชายเลน','กิจกรรมปลูกป่าชายเลน ณ จังหวัดกรุงเทพมหานคร');
insert into activityTable
value (2,'กิจกรรมพี่สอนน้องชนบท','กิจกรรมช่วยเหลือสังคม ออกอาสาสอนหนังสือน้องโรงเรียนชนบท');
insert into activityTable
value (3,'กิจกรรมนั่งสมาธิ','กิจกรรมนั่งทำสมาธิ ณ วัดป่า');
insert into activityTable
value (4,'กิจกรรมจิตอาสาเก็บขยะตามชายหาด','กิจกรรมจิตอาสาเก็บขยะตามชายหาดจังหวัดขลบุรี');

insert into activity
value (1,1,'บางขุนเทียน กรุงเทพฯ','2016-06-15 16:00:00',50);
insert into activity
value (1,2,'บางขุนเทียน กรุงเทพฯ','2017-06-15 16:00:00',50);
insert into activity
value (1,3,'บางขุนเทียน กรุงเทพฯ','2018-06-15 16:00:00',50);

insert into activity
value (2,1,'โรงเรียนหนองจอก จังหวัดหนองคาย','2017-04-15 08:00:00',20);
insert into activity
value (2,2,'โรงเรียนหนองจอก จังหวัดหนองคาย','2018-04-15 08:00:00',20);

insert into activity
value (3,1,'วัดป่า จังหวัดน่าน','2015-08-15 08:00:00',200);
insert into activity
value (3,2,'วัดป่า จังหวัดน่าน','2016-08-15 08:00:00',200);
insert into activity
value (3,3,'วัดป่า จังหวัดน่าน','2017-08-15 08:00:00',200);
insert into activity
value (3,4,'วัดป่า จังหวัดน่าน','2018-08-15 08:00:00',200);


insert into activity
value (4,1,'ทะเลบางแสน จังหวัดชลบุรี','2017-03-15 15:00:00',30);
insert into activity
value (4,2,'ทะเลบางแสน จังหวัดชลบุรี','2018-03-15 15:00:00',30);

insert into participation
value ('5831069621',3,1,'2015-08-15 08:00:00','1');
insert into participation
value ('5831069621',3,2,'2016-08-15 08:00:00','1');
insert into participation
value ('5831069621',1,1,'2016-06-15 16:00:00','1');


# assign course to student who register in first round
#UPDATE study SET registerStatus = '1' WHERE studentID = '5831069621' and courseID = '2100111' and sectionNumber = '1' and semester = '2015/1';

# delete registration of student in first round who didn't get the course
#delete from study where registerStatus = '0';