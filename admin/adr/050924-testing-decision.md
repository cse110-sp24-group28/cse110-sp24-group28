# Choice of Testing Method

## Status: 
Approved

## Context: 
The team needed to choose methods of testing the project code before development begins.

## Decision: 
The team agreed to do parallel unit testing throughout the development process and set up end-to-end tests toward the end of project to fully test its functionality.

## Rationale: 
The team wants to make sure our code works as intended and any buggy code is discovered before it becomes live and test edge cases that may come up. We also want to make sure the overall app works as intended using E2E testing. 

## Consequences: 
- Thorough testing of functions and making sure correct values are returned
- Finding bugs before they get committed to the main repository
- Potential time sink if testing ends up taking longer than expected, especially setting up E2E tests
- Ensures that everything works in any environment before proceeding and making more progress that can build off previous work

## Date: 
May 9th, 2024
