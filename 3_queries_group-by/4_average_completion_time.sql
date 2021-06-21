SELECT students.name AS student, AVG(assignment_submissions.duration) AS average_assignment_duration
FROM assignment_submissions
JOIN students ON   assignment_submissions.student_id = students.id 
WHERE end_date is NULL
GROUP BY students.name
ORDER BY average_assignment_duration DESC;
