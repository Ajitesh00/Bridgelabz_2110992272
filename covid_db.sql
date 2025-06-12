CREATE DATABASE CovidDB;
USE CovidDB;

DROP TABLE IF EXISTS covid_india;

CREATE TABLE covid_india (
    Sno INT,
    Date DATE,
    Time VARCHAR(10),
    `State/UnionTerritory` VARCHAR(100),
    ConfirmedIndianNational INT,
    ConfirmedForeignNational INT,
    Cured INT,
    Deaths INT,
    Confirmed INT
);

LOAD DATA INFILE 'C:/ProgramData/MySQL/MySQL Server 8.0/Uploads/covid_19_india.csv'
INTO TABLE covid_india
FIELDS TERMINATED BY ',' 
ENCLOSED BY '"' 
LINES TERMINATED BY '\n'
IGNORE 1 ROWS
(
    Sno,
    @Date,
    Time,
    `State/UnionTerritory`,
    @ConfirmedIndianNational,
    @ConfirmedForeignNational,
    @Cured,
    @Deaths,
    @Confirmed
)
SET
    Date = STR_TO_DATE(@Date, '%d-%m-%Y'),
    ConfirmedIndianNational = NULLIF(@ConfirmedIndianNational, ''),
    ConfirmedForeignNational = NULLIF(@ConfirmedForeignNational, ''),
    Cured = NULLIF(@Cured, ''),
    Deaths = NULLIF(@Deaths, ''),
    Confirmed = NULLIF(@Confirmed, '');
    
SELECT COUNT(*) FROM covid_india;  -- Check total rows
SELECT * FROM covid_india LIMIT 20000;

DROP TABLE IF EXISTS statewise_testing;

CREATE TABLE statewise_testing (
    Date DATE,
    State VARCHAR(100),
    TotalSamples INT,
    Negative INT,
    Positive INT
);

LOAD DATA INFILE 'C:/ProgramData/MySQL/MySQL Server 8.0/Uploads/StatewiseTestingDetails.csv'
INTO TABLE statewise_testing
FIELDS TERMINATED BY ',' 
ENCLOSED BY '"' 
LINES TERMINATED BY '\n'
IGNORE 1 ROWS
(
    @Date,
    State,
    @TotalSamples,
    @Negative,
    @Positive
)
SET
    Date = NULLIF(TRIM(@Date), ''),
    TotalSamples = NULLIF(TRIM(@TotalSamples), ''),
    Negative = NULLIF(TRIM(@Negative), ''),
    Positive = NULLIF(TRIM(@Positive), '');
    
SELECT * FROM statewise_testing LIMIT 100000;


-- Q1a Death Percentage Locally
SELECT 
    `State/UnionTerritory` AS State,
    MAX(Deaths) AS Total_Deaths,
    MAX(Confirmed) AS Total_Confirmed,
    ROUND(MAX(Deaths) * 100.0 / NULLIF(MAX(Confirmed), 0), 2) AS Death_Percentage
FROM covid_india
GROUP BY `State/UnionTerritory`;

-- Q1b Death Percentage Globally
SELECT 
    SUM(latest_deaths) AS Total_Deaths,
    SUM(latest_confirmed) AS Total_Confirmed,
    ROUND(SUM(latest_deaths) * 100.0 / NULLIF(SUM(latest_confirmed), 0), 2) AS Death_Percentage
FROM (
    SELECT 
        `State/UnionTerritory`,
        MAX(Deaths) AS latest_deaths,
        MAX(Confirmed) AS latest_confirmed
    FROM covid_india
    GROUP BY `State/UnionTerritory`
) AS state_totals;


-- Q2a Infected Population Locally
SELECT 
    t.State,
    MAX(i.Confirmed) AS Total_Confirmed,
    MAX(t.TotalSamples) AS Total_Tested,
    ROUND(MAX(i.Confirmed) * 100.0 / NULLIF(MAX(t.TotalSamples), 0), 2) AS Infected_Percentage
FROM covid_india i
JOIN statewise_testing t
  ON i.`State/UnionTerritory` = t.State
GROUP BY t.State;

-- Q2b Infected Population Globally
SELECT 
    SUM(Total_Confirmed) AS Total_Confirmed,
    SUM(Total_Tested) AS Total_Tested,
    ROUND(SUM(Total_Confirmed) * 100.0 / NULLIF(SUM(Total_Tested), 0), 2) AS Infected_Percentage
FROM (
    SELECT 
        t.State,
        MAX(i.Confirmed) AS Total_Confirmed,
        MAX(t.TotalSamples) AS Total_Tested
    FROM covid_india i
    JOIN statewise_testing t
      ON i.`State/UnionTerritory` = t.State
    GROUP BY t.State
) AS state_data;


-- Q3 States with Highest Infection Rates
SELECT 
    `State/UnionTerritory` AS State,
    MAX(Confirmed) AS Total_Cases
FROM covid_india
GROUP BY `State/UnionTerritory`
ORDER BY Total_Cases DESC
LIMIT 10;


-- Q4 States with Highest Death Counts
SELECT 
    `State/UnionTerritory` AS State,
    MAX(Deaths) AS Total_Deaths
FROM covid_india
GROUP BY `State/UnionTerritory`
ORDER BY Total_Deaths DESC
LIMIT 10;


-- Q5 Average number of deaths by day (per state)
SELECT 
    `State/UnionTerritory` AS State,
    ROUND(AVG(Deaths), 2) AS Avg_Deaths_Per_Day
FROM covid_india
GROUP BY `State/UnionTerritory`;


-- Q6 Confirmed Cases per Sample Tested
SELECT 
    t.State,
    MAX(i.Confirmed) AS Total_Confirmed,
    MAX(t.TotalSamples) AS Total_Tested,
    ROUND(MAX(i.Confirmed) * 1.0 / NULLIF(MAX(t.TotalSamples), 0), 4) AS Confirmed_Per_Sample
FROM covid_india i
JOIN statewise_testing t
  ON i.`State/UnionTerritory` = t.State
GROUP BY t.State
ORDER BY Confirmed_Per_Sample DESC
LIMIT 10;