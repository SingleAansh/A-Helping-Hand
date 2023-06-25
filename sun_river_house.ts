import { ServiceGroup } from './ServiceGroup';

// initializing ServiceGroup class
let serviceGroup = new ServiceGroup();

// creating a new service project with given details
serviceGroup.createNewProject("Cleanup the park", "This project will involve removing litter from a local park", "Littering", ["Garbage bags", "Gloves", "Trash pickers"], ["1st June, 2021", "2nd June, 2021"], 10, 5);

// retrieving all current projects
let currentProjects = serviceGroup.getProjects();

// updating an existing project with new details
serviceGroup.updateProject(currentProjects[0], "Cleanup the park", "This project will involve removing litter from a local park and planting trees", ["Garbage bags", "Gloves", "Trash pickers", "Tree saplings"], ["1st June, 2021", "2nd June, 2021"], 12, 8);

// deleting an existing project
serviceGroup.deleteProject(currentProjects[1]);

// retrieving details of all volunteers
let volunteers = serviceGroup.getVolunteers();

// creating a new volunteer using given details
serviceGroup.createNewVolunteer("John Smith", 19, "johnsmith@example.com", ["Planting Trees", "Painting Fences"]);

// updating an existing volunteer with new details
serviceGroup.updateVolunteer(volunteers[0], "John Smith", 20, "johnsmith@example.com", ["Painting Fences", "Painting Murals"]);

// deleting an existing volunteer
serviceGroup.deleteVolunteer(volunteers[1]);

// retrieving details of all sponsors
let sponsors = serviceGroup.getSponsors();

// creating a new sponsor using given details
serviceGroup.createNewSponsor("ABC Pvt Ltd", "abc@example.com", 100000);

// updating an existing sponsor with new details
serviceGroup.updateSponsor(sponsors[0], "ABC Pvt Ltd", "abc@example.com", 200000);

// deleting an existing sponsor
serviceGroup.deleteSponsor(sponsors[1]);

// scheduling an upcoming event
serviceGroup.scheduleEvent("Annual Fundraiser", "16th June 2021", "ABC Hall");

// retrieving all upcoming events
let upcomingEvents = serviceGroup.getEvents();

// posting an announcement
serviceGroup.postAnnouncement("Annual Fundraiser", "16th June 2021", "ABC Hall");

// retrieving all announcements
let announcements = serviceGroup.getAnnouncements();

// adding a new task to an existing project
serviceGroup.addTaskToProject(currentProjects[0], "Design flyers for the upcoming fundraiser");

// retrieving all tasks associated with a project
let tasks = serviceGroup.getTasksForProject(currentProjects[0]);

// adding a comment to a task
serviceGroup.addCommentToTask(tasks[0], "Let's ask the design team to work on this");

// retrieving all comments for a task
let comments = serviceGroup.getCommentsForTask(tasks[0]);

// assigning a volunteer to a task
serviceGroup.assignVolunteerToTask(tasks[0], volunteers[0]);

// retrieving all volunteers assigned to a task
let volunteersAssigned = serviceGroup.getVolunteersForTask(tasks[0]);

// approving a task
serviceGroup.approveTask(tasks[0]);

// retrieving all approved tasks
let approvedTasks = serviceGroup.getApprovedTasks();

// retrieving details of the service group
let serviceGroupDetails = serviceGroup.getDetails();