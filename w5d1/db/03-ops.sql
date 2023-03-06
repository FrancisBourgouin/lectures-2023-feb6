-- Basic SELECT

-- SELECT * FROM authors;

-- SELECT * 
-- FROM authors
-- ;

-- SELECT name AS author_name, description AS author_description FROM authors;

-- Single WHERE clause

-- SELECT * FROM authors WHERE description LIKE '%nov%';

-- Multiple WHERE clauses

-- SELECT * FROM authors WHERE description LIKE '%march%' AND name LIKE '%a%';

-- SELECT * FROM authors WHERE description LIKE '%student%' AND name ILIKE '%a%';

-- SELECT * 
-- FROM authors 
-- WHERE 
--   description LIKE '%student%' AND LOWER(name) LIKE '%a%'
-- ;

-- Ordering results

SELECT * FROM jokes ORDER BY rating DESC;

-- select * from jokes order by rating desc;

-- Joining tables

-- SELECT *, jokes.id AS joke_id 
-- FROM jokes 
-- JOIN authors 
--   ON authors.id = jokes.author_id;


-- SELECT *, jokes.id AS joke_id 
-- FROM jokes 
-- RIGHT JOIN authors 
--   ON authors.id = jokes.author_id;

-- SELECT *, jokes.id AS joke_id 
-- FROM jokes 
-- FULL OUTER JOIN authors 
--   ON authors.id = jokes.author_id;


SELECT *, jokes.id AS joke_id 
FROM jokes 
JOIN authors 
  ON authors.id = jokes.author_id
WHERE
  jokes.rating > 4
AND
  authors.name LIKE '%a%'
;


-- Default JOIN is an INNER JOIN
-- JOIN PARTY !

-- LEFT JOIN
-- RIGHT JOIN
-- INNER JOIN
-- FULL OUTER JOIN


-- SELECT jokes.id, jokes.question, jokes.answer, jokes.author_id, jokes.rating

-- Aggregate functions (AVG, MIN, MAX, SUM, COUNT) (HAVING GROUPBY)

SELECT author_id, AVG(rating) AS avg_joke_rating FROM jokes GROUP BY author_id;

SELECT MAX(rating) FROM jokes;

SELECT COUNT(*), author_id FROM jokes GROUP BY author_id;


-- SHOW the jokes of authors having an average of 4 and more in their jokes

-- SELECT jokes.* 
-- FROM jokes
-- JOIN authors
-- ON jokes.author_id = authors.id
-- WHERE author_id IN (1,2,3);


-- SELECT jokes.* 
-- FROM jokes
-- JOIN authors
-- ON jokes.author_id = authors.id
-- WHERE author_id IN (
--   SELECT id FROM authors WHERE name LIKE '%a%'
-- );

SELECT jokes.* 
FROM jokes
JOIN authors
ON authors.id = jokes.author_id
WHERE author_id IN (
  SELECT author_id 
  FROM jokes 
  GROUP BY author_id 
  HAVING AVG(rating) > 4
);

CREATE VIEW jokes_from_funny_authors AS (
  SELECT jokes.* 
FROM jokes
JOIN authors
ON authors.id = jokes.author_id
WHERE author_id IN (
  SELECT author_id 
  FROM jokes 
  GROUP BY author_id 
  HAVING AVG(rating) > 4
)
);
-- Nested selects

-- Views (stretch)

-- VIEW => helper functionish -- urlDatabase => getUrlsForUser'