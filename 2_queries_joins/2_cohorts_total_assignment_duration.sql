SELECT sum (assignment_submissions.duration) AS total_duration
FROM assignment_submissions
JOIN students ON assignment_submissions.student_id = students.id
JOIN cohorts ON cohort_id = cohorts.id
WHERE cohorts.name  LIKE 'FEB12';