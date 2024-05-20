# SuiteReview App for Project 3

## Explanation of Project

The SuiteReview application allows the user to create a travel review journal. The user will be able to create a profile to submit reviews for hotels and be able to view reviews left by others.


This project used the MVC file structure: Models, Views, Controllers.

The full-stack for this application is MERN Stack Node.js, Mongoose, Express and React.

One model has full CRUD and the application includes sign up/log in functionality. 

## User Story and Wireframes

### User Stories:

As a user, I should be able to create a profile, login and log-out.

As a user, I should be able to create, read, update, and delete reviews for the hotels that I have visited.

As a user, I should be able to view other reviews from different users.

As a user, I should be able to view the reviews that I have submitted.


### Wireframes:

(need to add)

## Technologies Used


<h3 align="left">Languages and Tools:</h3>
<p align="left"> <a href="https://expressjs.com" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg" alt="express" width="40" height="40"/> </a> <a href="https://www.mongodb.com/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" alt="mongodb" width="40" height="40"/> </a> <a href="https://nodejs.org" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="40" height="40"/> </a> <a href="https://reactjs.org/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40"/> </a> </p>


## Approach

### Backend Routes

#### Hotels
***
**(In progress - Need all routes)**
|HTTP Verb  |URL   | Action      | Explaination          |
|-----------|------|-------------|-----------------------|
|GET        | /hotels     |Index    | returns all hotels            |
|GET        |  |Show     | returns a particular hotel |

#### Users
***
**(In progress - Need all routes)**
|HTTP Verb  |URL   | Action      | Explaination          |
|-----------|------|-------------|-----------------------|
| GET  | /users          |Index   | returns all users |
| GET  |  |Show    | returns particular user|
| POST |       |Create  | create new user|
| POST |    |Create  | log in - already a user|

#### Reviews
#### *FULL CRUD*
***
**(In progress - Need all routes)**
|HTTP Verb  |URL   | Action      | Explaination          |
|-----------|------|-------------|-----------------------|
| GET   | /reviews               |Index    | returns all reviews|
| GET   |     |Index     | returns list of reviews for particular hotel   |
| GET   |  | Index    | returns list of reviews for particular user|
| GET   |    | Show    | returns one review|
| POST  |     | Create  | create new review|
| PUT   |          | Update  | updates a particular review|
| DELETE|          | Delete  | deletes a particular review|




### Models
***

```mermaid
erDiagram
    USERS ||--o{ REVIEWS : creates
    USERS {
        string userName
        string firstName
        string lastName
        string userImage
        string description
        string password
        number user_Id
    }
    REVIEWS }o--|| HOTELS : contains
    REVIEWS {
        number hotel_Id
        number user_Id
        number rating
        string description
        string images
    }
        HOTELS {
        string name
        string state
        string city
        string address
        string description
        string images
        number hotel_Id  
        number ave_rating
    }



```

### React Diagram (Document Tree)
***

![ReactDiagram](public/images/ReactTreeDiagram.jpg)

### Nested Component Structure of the Application
***
``````
App
│
├── Main
│   ├── HotelIndex
|   |
│   ├── HotelShow
|   |   └── Review
|   |        └── OneReview
|   |            ├── DeleteButton
|   |            └── UpdateButton
|   |                └── UpdateReview
│   |    
│   └── Profile
|       └── Review
|            └── OneReview
|                ├── DeleteButton
|                └── UpdateButton
|                    └── UpdateReview
│       
│
└── Footer?

``````

### Explaination of Components
***


- **App**: The root component. Sends user_Id down stream.
  - **Main**: Contains the routes (Profile, Index, Show, and Update pages)
    - **Page - HotelIndex**: Views all hotels with minimal information.
    - **Page - HotelShow**: Shows a hotel with its details and all of its reviews.
      - **Component - Review**: Section containing all the reviews.
        - **Component - OneReview**: A review for that hotel.
          - **Component - DeleteButton**: Deletes a review.
          - **Component - UpdateButton**: Links to the UpdateReview page.
            - **Page - UpdateReview**: Form to update review.
  - **Page - Profile**: Contains the user's information and all reviews for that user.
      - **Component - Review**: Section containing all the reviews.
        - **Component - OneReview**: A review for that user.
          - **Component - DeleteButton**: Deletes a review.
          - **Component - UpdateButton**: Links to the UpdateReview page.
            - **Page - UpdateReview**: Form to update review.


## Full CRUD (Create, Read, Update, and Delete)

#### Create
***

**(In progress - Needs Component Diagram)**
|HTTP Verb  |URL   | Action      | Explaination          |
|-----------|------|-------------|-----------------------|
| POST  | /reviews/:hotel_ID     | Create  | create new review|

Back End: This action takes the review information from the request sent from the front end and creates a new document:
```javascript
Review.create(newObj)
```
Location in the component diagram:

**(In progress - Needs Component Diagram)**

Illustration of communication:

```mermaid
graph LR;

    
    A{REACT - CreateReview.js}--->| 1 - req to backend| B{Back End Server}
    B-->|2| C[POST route] 
    C-->|3 - query|id1[(Reviews Collection)]
    id1[(Reviews Collection)] -->|4 - success|B
 



```


#### Read
***
There are a few GET routes. This section will focus on the Review.js component under the hotel show page.

|HTTP Verb  |URL   | Action      | Explaination          |
|-----------|------|-------------|-----------------------|
| GET   | /reviews/:hotel_ID     |Index     | returns list of reviews for particular hotel   |


Back End: Used to find all the documents of Hotels for a particular hotel:
```javascript
Review.find({hotel_Id: Number(req.params.hotel_id)})
```
Location in component diagram:
``````
App
│
└──Main
   └── HotelShow
        └── Review

``````
Illustration of communication:

```mermaid
graph LR;

    
    A{REACT - Review.js}--->| 1 - req to backend| B{Back End Server}
    B-->|2| C[GET route] 
    C-->|3 - query|id1[(Reviews Collection)]
    id1[(Reviews Collection)]-->|4| D[reviews/documents]
    D -->|5|B
    B -->|6 - res back to React|A



```

#### Update
***
Although it appears twice on the tree diagram, this section will use the hotel show page branch because the functionality is the same on both branches.

|HTTP Verb  |URL   | Action      | Explaination          |
|-----------|------|-------------|-----------------------|
| PUT   | /reviews/:id           | Update  | updates a particular review|

Back End: Used to find particular the document of Reviews and update it:

```javascript
Review.findByIdAndUpdate(req.params.id, req.body, {new: true})
```
Location in component diagram:
``````
App
│
└──Main
   └── HotelShow
       └── Review
           └── OneReview
               └── UpdateButton
                     └── UpdateReview

``````

Illustration of communication:

```mermaid
graph LR;

    
    A{REACT - UpdateReview.js}--->| 1 - req to backend| B{Back End Server}
    B-->|2| C[PUT route] 
    C-->|3 - query|id1[(Reviews Collection)]
    id1[(Reviews Collection)] -->|4 - success|B
    



```

#### Delete
***
Although it appears twice on the diagram, this section will use the hotel show page branch because the functionality is the same on both branches.

|HTTP Verb  |URL   | Action      | Explaination          |
|-----------|------|-------------|-----------------------|
| DELETE| /reviews/:id           | Delete  | deletes a particular review|

Back End: Used to find a particular the document of Reviews and delete it:

```javascript
Review.findByIdAndDelete(req.params.id)
```

Location in component diagram:
``````
App
│
└──Main
   └── HotelShow
       └── Review
           └── OneReview
               └── DeleteButton
                     

``````

Illustration of communication:

```mermaid
graph LR;

    
    A{REACT - DeleteButton.js}--->| 1 - req to backend| B{Back End Server}
    B-->|2| C[DELETE route] 
    C-->|3 - query|id1[(Reviews Collection)]
    id1[(Reviews Collection)]-->|4 - success| B




```
## Authentification

**(In progress)**

## Unsolved Problems

- Error Handling

**(In progress)**
  
## Forthcoming Features

- Error Handling

**(In progress)**