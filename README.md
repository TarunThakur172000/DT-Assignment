
# Event API

A minimal Node.js backend service implementing event-related APIs as part of the DeepThought CultureTech Role Test Drive assignment.
The project focuses on clear API design, disciplined scope control, and predictable behavior.

## Prerequisites

* Node.js (v16 or higher)
* npm



### Steps

* Clone the repository

```
git clone https://github.com/TarunThakur172000/DT-Assignment
```

* Navigate to the project directory
```
cd event-api
```

* Install dependencies
```
npm install
```

* Start the server

```
npm start
```

The server will run on:

```http
http://localhost:3000

```


## API Reference

### Create Event

```http
  POST /api/v3/app/events
```
#### Request Body
``` 
{
  "type": "event",
  "name": "Tech Innovators Meetup",
  "tagline": "Test",
  "schedule": "2026-01-15T18:30:",
  "description": "An evening of networking and tech discussions.",
  "files": {
    "image": "tech_innovators_meetup.jpg"
  },
  "moderator": 5,
  "category": "Technology",
  "sub_category": "Innovation",
  "rigor_rank": 7,
  "attendees": [2, 5, 8, 12]
}
```
#### Responses
```
201 Created -> 201 Created
422 Unprocessable Entity -> Invalid or Missing Field
```


### Get Events (List / Filter)

```http
  GET /api/v3/app/events
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `type` | `string` | Filter events by type (optional) |
| `limit` | `number` | Number of events to return (optional) |
| `page` | `number` | Page number for pagination (optional) |


#### Example:

 ```http
    GET    /api/v3/app/events?type=latest&limit=1&page=1
 ```
### Get Event by ID
```http
  GET /api/v3/app/events

```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of event to fetch |

#### Example
```http
    GET /api/v3/app/events?id=695950fbde9065ba40b51493
```

### Update Event

```http
  PUT /api/v3/app/events/:id
```
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` |**Required**. Unique ID of the event |

#### Request Body

```
{
  "type": "event",
  "name": "Tech Innovators Meetup",
  "tagline": "Test",
  "schedule": "2026-01-15T18:30:",
  "description": "An evening of networking and tech discussions.",
  "files": {
    "image": "tech_innovators_meetup.jpg"
  },
  "moderator": 5,
  "category": "Technology",
  "sub_category": "Innovation",
  "rigor_rank": 7,
  "attendees": [2, 5, 8, 12]
}

```

#### Responses
```
200 OK -> Event updated successfully
404 Not Found -> Event not found
```

### Delete Event

``` http
  DELETE /api/v3/app/events/:id
```

#### Responses
```
200 OK -> Event Deleted successfully
404 Not Found -> Event not found
```
