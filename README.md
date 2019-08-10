#TodoMVC (REACT)

A basic To-Do list app created with React. React's create-react-app script was used for bootstrapping the initial build, but no dependencies were used.

##Resources
###1. Temporary bitballoon host of a working app version: http://brave-fermi-e1671d.netlify.com/

##Documentation

Features of this To-Do list creator are limited to spec - ToDo creation, a checkmark button to mark an item as completed, a delete button, and a counter of total items in the list.

###1. Creating a To-do item
An input at the top of the page, with autofocus on page load. Creates an item when you press enter, or click on the + button on the right. Input value is trimmed before submission, and clears after entry.

###2. Completing a To-do item
When hovering over an item in the list, a checkmark button is shown to the right of the list item, which grants the <li> the 'completed' class, which is indicated with a green background.

###3. Deleting a To-do item
When hovering over an item in the list, a red 'X' button is shown to the right of the list item, which removes the item from the list when clicked and updates the list counter.

###4. To-do counter
A counter of the total to-do items is located at the top right of the page, which updates with the addition or removal of items. It pluralizes correctly as the counter moves above and below singular status.

##Implementation

The code structure of the app is limited to two state-full container components - TodoList.js, which manages the overarching logic of the app, and NewTodo.js, which controls the input state with input change and keydown event handlers. There are four stateless presentational components for the destroy button, input bar, list items, and the title, which includes the counter.

When rendering the list, the "complete" and "delete" buttons are given a reference to their corresponding to-do item in the form of their index in the array stored in TodoList's state, which is passed to the complete and delete functions respectively. The one hiccup I ran into was remembering to duplicate the todo array in the delete function, so as not to mutate state with array.splice() 

Deviated from specifications in my Git practices. I started committing directly to master, and continued with this transgression for the rest of the project's implementation. I should note that I am fully aware of the importance of following git flow procedure in production. 

##Credit

Created by Dylan Moylan on 08/09/19
