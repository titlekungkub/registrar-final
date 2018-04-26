use registrar;

#drop every table first
drop table if exists pay;
drop table if exists study;
drop table if exists liveIn;
drop table if exists participation;
drop table if exists dormitoryStaff;
drop table if exists section;
drop table if exists course;
drop table if exists teacher;
drop table if exists dormitoryRoom;
drop table if exists dormitory;
drop table if exists activity;
drop table if exists activityTable;
drop table if exists enrollmentFee;
drop table if exists relative;
drop table if exists student;
drop table if exists department;
drop table if exists faculty;

create table faculty(
	facultyID int not null,
    facultyName varchar(20) null,
    primary key(facultyID)
);

create table department(
	departmentID int not null,
    departmentName varchar(30) null,
    facultyID int not null,
    primary key(departmentID,facultyID),
    foreign key(facultyID) references faculty(facultyID) on delete cascade
);

create table student(
	studentID varchar(10) not null,
    passwords varchar(12) not null,
    fname varchar(20) null,
    lname varchar(20) null,
    entranceYear int null,
    facultyID int not null,
    departmentID int not null,
    undergradFlag varchar(1) null,
    gradFlag varchar(1) null,
    primary key(studentID),
    foreign key(facultyID,departmentID) references department(facultyID,departmentID) on delete cascade
);

create table relative(
	ID varchar(13) not null,
    fname varchar(20) null,
    lname varchar(20) null,
    phone varchar(10) null,
    salary int null,
    relationship varchar(10) null,
    studentID varchar(10) not null,
    primary key(ID,studentID),
    foreign key(studentID) references Student(studentID) on delete cascade
);

create table enrollmentFee(
	academicYear int not null,
    price double null,
    facultyID int,
    primary key(academicYear,facultyID),
    foreign key(facultyID) references faculty(facultyID) on delete cascade
);

create table activityTable(
	activityID int not null,
	activityName varchar(40) null,
    description varchar(100) null,
    primary key(activityID)
);

create table activity(
	activityID int not null,
	activityNo int not null,
    location varchar(50) null,
    activityTime datetime null,
    capacity int null,
    primary key(activityID,activityNo),
    foreign key(activityID) references activityTable(activityID) on delete cascade
);

create table dormitory(
	dormitoryID int not null,
    dormitoryName varchar(20) null,
    dormitoryType varchar(1) null,
    primary key(dormitoryID)
);


create table dormitoryRoom(
	dormitoryID int not null,
    semester varchar(6) not null,
    roomNumber varchar(5) not null,
    capacity int null,
    floor varchar(2) null,
    primary key(dormitoryID,semester,roomNumber),
    foreign key(dormitoryID) references dormitory(dormitoryID) on delete cascade
);


create table teacher(
	teacherID varchar(13) not null,
    fname varchar(20) null,
    lname varchar(20) null,
    facultyID int not null,
    departmentID int not null,
    dormitoryID int null,
    primary key(teacherID),
    foreign key(facultyID,departmentID) references department(facultyID,departmentID) on delete cascade,
    foreign key(dormitoryID) references dormitory(dormitoryID) on delete cascade
);


create table course(
	courseID varchar(7) not null,
    courseName varchar(20) null,
    credit int null,
    midtermDate datetime null,
    finalDate datetime null,
    primary key(courseID)
);

create table section(
	sectionNumber varchar(2) not null,
    capacity int null,
    semester varchar(6) not null,
    classTime datetime null,
    location varchar(20) null,
    teacherID varchar(13) not null,
    courseID varchar(7) not null,
    primary key(sectionNumber,semester,courseID),
    foreign key(teacherID) references Teacher(teacherID) on delete cascade,
    foreign key(courseID) references Course(courseID) on delete cascade
);

create table dormitoryStaff(
	ID varchar(13) not null,
    fname varchar(20) not null,
    lname varchar(20) not null,
    duty varchar(10) null,
    salary int null,
    phone varchar(10) null,
    dormitoryID int not null,
    primary key(ID),
    foreign key(dormitoryID) references dormitory(dormitoryID) on delete cascade
);

create table participation(
	studentID varchar(10) not null,
	activityID int not null,
	activityNo int not null,
    registerDate datetime null,
    participationStatus varchar(1) not null default '0',
    primary key(studentID,activityID,activityNo),
    foreign key(studentID) references student(studentID) on delete cascade,
    foreign key(activityID,activityNo) references activity(activityID,activityNo) on delete cascade
);

create table liveIn(
	studentID varchar(10) not null,
    dormitoryID int not null,
    roomNumber varchar(5) not null,
    semester varchar(6) not null,
    primary key(studentID,dormitoryID,semester,roomNumber),
    foreign key(studentID) references student(studentID) on delete cascade,
    foreign key(dormitoryID,semester,roomNumber) references dormitoryRoom(dormitoryID,semester,roomNumber) on delete cascade
);

create table study(
	studentID varchar(10) not null,
    courseID varchar(7) not null,
    sectionNumber varchar(2) not null,
    semester varchar(6) not null,
    grade varchar(1) null,
    registerTime datetime not null,
    registerStatus varchar(1) not null,
    primary key(studentID,courseID,sectionNumber,semester),
	foreign key(studentID) references student(studentID) on delete cascade,
    foreign key(courseID,sectionNumber,semester) references section(courseID,sectionNumber,semester) on delete cascade
);

create table pay(
	studentID varchar(10) not null,
    academicYear int not null,
	semester varchar(6) not null,
    transactionDate datetime null,
    payStatus varchar(1) not null default '0',
    primary key(studentID,academicYear,semester),
    foreign key(studentID) references student(studentID) on delete cascade,
    foreign key(academicYear) references enrollmentfee(academicYear) on delete cascade
);