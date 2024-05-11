# Choice of Database 

## Status: 
Approved

## Context: 
The team needed to choose a database to store user information from the app locally.

## Decision: 
The team unanimously voted to use localStorage to store user data locally.

## Rationale: 
Using the simple key-value system of localStorage will preserve the simplicity of the project and make interaction with the database and debugging code much easier and more efficient. Because we are storing relatively small amounts of data, we believe this is the best choice.

## Consequences: 
- Simplicity of code that interacts with the database
- Ease of debugging
- Risk of being unable to store more data if the user manages to fill up the capacity of localStorage
- Possibility of slower performance as the amount of data stored grows over time

## Date: 
May 9th, 2024
