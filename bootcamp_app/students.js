const {Pool} = require('pg');

const pool = new Pool ({
user: 'vagrant',
password: '123',
host: 'localhost',
database: 'bootcampx',
port: 5432
});



pool.connect().then(() => {
  console.log('connected')
}).catch (e => {
console.log("errorrrrrrrr")
console.log(e)

});


const args = process.argv.slice(2);

pool.query(`
SELECT students.id as student_id, students.name as name, cohorts.name as cohort
FROM students
JOIN cohorts ON cohorts.id = students.cohort_id
WHERE cohorts.name LIKE ('${args[0]}%')
LIMIT ${args[1]};
`)
.then(res => {
  res.rows.forEach(user => {
    console.log(`${user.name} has an id of ${user.student_id} and was in the ${user.cohort} cohort`);
  })
})
.catch((error) => {
  console.log('ERRORRRRRRRRR')
  console.log(error)
});