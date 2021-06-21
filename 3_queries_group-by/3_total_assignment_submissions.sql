SELECT cohorts.name AS cohort, count(students.id) AS total_submission
FROM cohorts
JOIN students ON cohorts.id = students.cohort_id 
JOIN assignment_submissions ON student_id = students.id
GROUP BY cohorts.name
ORDER BY total_submission DESC;
