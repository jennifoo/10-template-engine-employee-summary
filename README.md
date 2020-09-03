# Unit 10 OOP Homework: Template Engine - Employee Summary

## Description

A Node CLI has been built that takes in information about employees and generates an HTML webpage that displays summaries for each person. It's a software engineering team generator command line application. The application will prompt the user for information about the team manager and then information about the team members. The user can input any number of team members, and they may be a mix of engineers and interns. This application passes all unit tests.

When the user has completed building the team, the application will create an HTML file that displays a nicely formatted team roster based on the information provided by the user.

### Screenshot of the Template Engine For Employee Summary on Node:
<img src="10-template-engine-employee-summary-node.png" alt="Node application in use prompting for employee data">

### See a demo of my Template Engine Employee Summary at any of the following video links:
* [Vimeo Link](https://vimeo.com/454214713) – choose highest quality setting
* [Link to Video on Github](https://github.com/jennifoo/10-template-engine-employee-summary/blob/master/10-template-engine-employee-summary-video-sm.mov)

The challenge is framed in this manner:

```
As a manager
I want to generate a webpage that displays my team's basic info
so that I have quick access to emails and GitHub profiles
```

### Guidelines:

* The inquirer package is used to prompt the user for their email, id, and specific information based on their role with the company. For instance, an intern may provide their school, whereas an engineer may provide their GitHub username.

* The app runs as a Node CLI to gather information about each employee.
