# tagTeam: Team Profile Generator

## Description

tagTeam is a Team Profile Generator; which is a command-line application built with Node.js that allows managers to generate a webpage displaying their team's basic information. The application prompts the user to enter information about the team members, including managers, engineers, and interns. It then generates an HTML webpage with summaries for each team member, providing quick access to their emails and GitHub profiles.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Screenshots](#screenshots)
- [Tests](#tests)


## Installation

1. Clone the repository to your local machine.
2. Navigate to the project directory in your terminal.
3. Install dependencies by running the command:
   ```
   npm install
   ```

## Usage

1. Open your terminal and navigate to the project directory.
2. Run the application by entering the command:
   ```
   node index.js
   ```
3. Follow the prompts to enter information about the team members:
   - Start by entering the manager's information (name, ID, email, office number).
   - Choose to add engineers, interns, or finish building the team.
   - For engineers, provide their name, ID, email, and GitHub username.
   - For interns, provide their name, ID, email, and school.
   - Finish building the team when all members have been added.
4. Once the team is complete, the application will generate an HTML file (`team.html`) in the `output` directory.
5. Open the `team.html` file in your web browser to view the team profile webpage.

## Screenshots

[Insert screenshot later]

## Tests

To run tests for the application, use the following command:
```
npm test
```
This will execute the test suite using Jest to ensure all classes and methods are functioning correctly.

