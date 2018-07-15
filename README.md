<h1>Automate My Dinner</h1>

<h2>Overview</h2>
Automate My Dinner is a web app for creating weekly meal plans and shopping lists from user generated meals and recipes. Useful for those who can never decide what to eat, or forget to pick up ingredients.

<h2>Installation Instructions</h2>
<h4>1. Create Database</h4>
Install mysql on the host machine:
<i>sudo apt-get install mysql-server</i> 
then run the queries in DDL script (src/main/SQL/DDL.sql) to create the database, user and tables.

<h4>2. Create Package</h4>
Run maven 'package' command to create an executable jar.

<h4>3. Run the Application</h4>
Execute the jar and open the local web front end at: http://localhost:8089
