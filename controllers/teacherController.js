
const connection =  require('./../connection');
const util = require('util');
const catchAsync = require('./../utils/catchAsync');
const appError = require('./../utils/appError');

const queryFunc = util.promisify(connection.query).bind(connection);

exports.getTeachers = catchAsync ( async (req, res, next) => {
    // const query = `select * from teachers 
    // where full_name like '%${req.body.name}%'
    // order by full_name`;

    // const teachers = await queryFunc(query);

    // if (teachers.length === 0) return (next(new appError(404, 'No result')))
    var teachers = [
        {
            a: 'name'
        }
    ]

    res.status(200).render('teachers',{
        teachers,
        title: 'Teachers'
    })
});

exports.renderTeachers = (req, res) => {
    res.status(200).render('inputBoxTeacher', {
        title: 'Teacher'
    })
}

exports.getTeacher = catchAsync (async (req, res, next) => {
    // const query = `select *, DATE_FORMAT(date_of_birth, "%M %D %Y") as birthDay from teachers 
    // where teacher_Id = '${req.params.id}'`;

    // const teachers = await queryFunc(query);

    // if (teachers.length === 0) return (next(new appError(500, 'system error')));

    // const teacher = teachers[0];
    var teacher = {
        teacher_Id: "18020979",
        full_name: 'Ngo Sach Nhat',
        birthDay: '01/06/2000',
        gender: 'Nam',
        department: 'abcxyz',
        role: 'role',
        other_details: 'none',
        address: 'Khuc Thua Du, Cau Giay, Ha Noi',
        phone: '0384721376',
        email: 'nhatngo11a1@gmail.com'
    }

    res.status(200).render('teacher-detail', {
        teacher,
        title: 'Teacher'
    })
})