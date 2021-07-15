# ThingsGoSocial

Create a `student` Schema with
`name` `contact` `subjects` `class` `society`

Each Student can be a part of multiple societies

Dynamic fields to be added as per the user's input:
create a request updating the schema on input, by entering society field

Share mongo and node projects and github repo

## 1. `/`

### _To test the service is running or not_

#### GET `/`

#### Responses

```ts
{
  message: "API is running";
}
```

## 2. `/api/students`

### _for creating a student_

#### POST `/api/students`

| Parameter              | Type            | Description |
| :--------------------- | :-------------- | :---------- |
| `name`                 | `string`        | _Required_  |
| `contact`              | `number`        | _Required_  |
| `subjects`             | `Array[string]` | _Required_  |
| `class`                | `string`        | _Required_  |
| `society`              | `Array[string]` | _Required_  |
| `password`             | `string`        | _Required_  |
| `passwordConfirmation` | `string`        | _Required_  |
| `email`                | `string`        | _Required_  |

#### Request Body in JSON

```json
{
  "name": "Ayush",
  "contact": 1231231231,
  "subjects": ["Mathematics", "Art", "History"],
  "class": "11B",
  "society": ["Showbaazi, Historama"],
  "password": "ayush1234",
  "passwordConfirmation": "ayush1234",
  "email": "ayush.paharia.18@gmail.com"
}
```

#### Response in JSON

```ts
{
  subjects : Array<ObjectId>
  societies : Array<ObjectId>
  _id : ObjectId,
  name : string
  email : string
  contact : number
  class : string
  createdAt : Date
  updatedAt : Date
}
```

The `name` attribute contains name of the student

The `contact` attribute contains contact phoneno. of the student

The `email` attribute contains email of the student

The `subjects` attribute contains an array of subjects of student

The `societies` attribute contains an array of societies of student

The `class` attribute contains class of the student

The `createdAt` attribute contains creation timestamp of the student

The `updatedAt` attribute contains last updated timestamp of the student

## 3. `/api/students`

### _for getting a list of all students_

#### GET `/api/students`

#### Request Body in JSON

#### Response in JSON

```ts
{
    students : [
      {
        _id : ObjectId,
        subjects : Array[ObjectId]
        societies : Array[ObjectId]
        name : string
        email : string
        contact : number
        class : string
        createdAt : Date
        updatedAt : Date
      }...
    ]
```

The `students` array contains list of all students

The `name` attribute contains name of a student

The `contact` attribute contains contact phoneno. of a student

The `email` attribute contains email of a student

The `subjects` attribute contains an array of subjects

The `societies` attribute contains an array of societies

The `class` attribute contains class of a student

The `createdAt` attribute contains creation timestamp of a student

The `updatedAt` attribute contains last updated timestamp of a student

## 4. `/api/subjects`

### _for creating a subject_

#### POST `/api/subjects`

| Parameter | Type     | Description |
| :-------- | :------- | :---------- |
| `name`    | `string` | _Required_  |
| `type`    | `string` | _Required_  |

#### Request Body in JSON

```json
{
  "name": "Painting",
  "type": "art"
}
```

#### Response in JSON

```ts
{
  students : Array[ObjectId]
  _id : ObjectId,
  name : string
  type : string
}
```

The `name` attribute contains name of the subject

The `type` attribute contains type of subject

The `email` attribute contains email of the student

The `students` attribute contains an array of students who have chosen the subject

## 5. `/api/subjects`

### _for getting all subjects_

#### GET `/api/subjects`

#### Response in JSON

```ts
{
  subjects:[
    students : Array[ObjectId]
    _id : ObjectId,
    name : string
    type : string
  ]...
}
```

The `subjects` array contains list of all subjects

The `name` attribute contains name of a subject

The `type` attribute contains type of subject

The `email` attribute contains email of a student

The `students` attribute contains an array of students who have chosen a subject

## 6. `/api/students/add_subjects/:studentId`

### _for choosing subjects for a student_

#### POST `/api/students/add_subjects/:studentId`

| Parameter | Type     | Description |
| :-------- | :------- | :---------- |
| `name`    | `string` | _Required_  |
| `type`    | `string` | _Required_  |

_**req.params**_
| Parameter | Type | Description |
| :---------- | :------- | :---------- |
| `studentId` | `string` | _Required_ |

#### Request Body in JSON

```json
{
  "subjects": [
    {
      "name": "Mathematics",
      "type": "math"
    },
    {
      "name": "English",
      "type": "eng"
    }
  ]
}
```

#### Response in JSON

```ts
{
  student : {
    _id : ObjectId,
    subjects : Array[ObjectId]...
    societies : Array[ObjectId]
    name : string
    email : string
    contact : number
    class : string
    createdAt : Date
    updatedAt : Date
  }
}
```

The `student` object contains the student

The `name` attribute contains name of the student

The `contact` attribute contains contact phoneno. of the student

The `email` attribute contains email of the student

The `subjects` attribute contains an array of subjects

The `societies` attribute contains an array of societies

The `class` attribute contains class of the student

The `createdAt` attribute contains creation timestamp of the student

The `updatedAt` attribute contains last updated timestamp of the student

## 6. `/api/students/societies`

### _for creating a society_

#### POST `/api/students/societies`

| Parameter | Type     | Description |
| :-------- | :------- | :---------- |
| `name`    | `string` | _Required_  |
| `type`    | `string` | _Required_  |
| `details` | `string` | _Required_  |

#### Request Body in JSON

```json
{
  "name": "Picasso",
  "type": "art",
  "details": "modernart"
}
```

#### Response in JSON

```ts
{
  students : Array[ObjectId]
  _id : ObjectId,
  name : string
  type : string
  details : string
}
```

The `students` array contains the students in the society

The `name` attribute contains name of the society

The `type` attribute contains type of society

The `details` attribute contains details of the society

## 7. `/api/students/societies`

### _for a list of all societies_

#### GET `/api/students/societies`

| Parameter | Type     | Description |
| :-------- | :------- | :---------- |
| `name`    | `string` | _Required_  |
| `type`    | `string` | _Required_  |
| `details` | `string` | _Required_  |

#### Response in JSON

```ts
{
  societies : [
    {
      students : Array[ObjectId]
      _id : ObjectId,
      name : string
      type : string
      details : string
    }...
  ]
}
```

The `students` array contains the students in the society

The `name` attribute contains name of the society

The `type` attribute contains type of society

The `details` attribute contains details of the society

## 8. `/api/students/add_society/:studentId`

### _for choosing a societies for a student_

#### POST `/api/students/societies`

| Parameter | Type     | Description |
| :-------- | :------- | :---------- |
| `name`    | `string` | _Required_  |
| `type`    | `string` | _Required_  |
| `details` | `string` | _Required_  |

_**req.params**_
| Parameter | Type | Description |
| :---------- | :------- | :---------- |
| `studentId` | `string` | _Required_ |

#### Request Body in JSON

```json
{
  "societies": [
    {
      "name": "Kaarnaama",
      "type": "drama",
      "details": "We do drama"
    }
  ]
}
```

#### Response in JSON

```ts
{
  student : {
    _id : ObjectId,
    subjects : Array[ObjectId]
    societies : Array[ObjectId]...
    name : string
    email : string
    contact : number
    class : string
    createdAt : Date
    updatedAt : Date
  }
}
```

The `student` object contains the student

The `name` attribute contains name of the student

The `contact` attribute contains contact phoneno. of the student

The `email` attribute contains email of the student

The `subjects` attribute contains an array of subjects

The `societies` attribute contains an array of societies

The `class` attribute contains class of the student

The `createdAt` attribute contains creation timestamp of the student

The `updatedAt` attribute contains last updated timestamp of the student
