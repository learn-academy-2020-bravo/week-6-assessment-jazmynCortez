# ASSESSMENT 6: Interview Practice Questions
Answer the following questions. First, without external resources. Challenge yourself to answer from memory. Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn.

1. In a model called Animal that has_many Sightings, what is the name of the foreign key? Would the foreign key be part of the Animal model or the Sightings model?

  Your answer: the foreign key would be part of the sightings model, and the foreign key would be called animal_id.

  Researched answer: naming conventions for a foreign key the target table name, followed by the source table name. The table containing the foreign key is called the child table, and the table containing the candidate key is called the referenced or parent table.



2. Which routes must always be passed params and why?

  Your answer: the routes that are creating, updating, destroying and showing all need to have params passed through them. This is so the user knows exactly what they are accessing and are creating.

  Researched answer: Parameters are how your Rails server receives information from the user to dynamically modify the view.



3. Write a rails route for a controller called "main" and a page called "game" that takes in a parameter called "guess".

  Your answer:  //@main = params.require(:game).permit(:guess)



4. Name three rails generator commands. What is created by each?

  Your answer:rails s - starts the server
              rails new my_app -d postgresql -T - generates the rails application
              rails g resource model my_model - generates and database table for app

  Researched answer: it's actually - rails g resource model blankets softness:string - both the migration and model that I need to start using guitars as an ActiveRecord class. It created a controller (and a guitar views folder) so that I can start coding up some controller actions. And finally, it plugged in resourced routes for my guitars.



5. Consider the Rails routes below. Describe the responsibility of each route.

/users        method="GET" - gets all the users within this database users

/users/1      method="GET" - gets the user that has the id of 1 within the database users

/users/new    method="GET" - midway point of creating and destroy

/users/       method="POST" - creating a new object within the database

/users/1      method="PUT" - updating a specific user that has the id of 1 within the database users

/users/1      method="DELETE" - deleting the id of 1 within the database of users
