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

## 2. `/api/student`

### _for creating a student_

#### POST `/api/student`

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
    message: string
    student: {
        name: string,
        email: string,
        contact: number,
    },
    token: string,
}
```

The `student` object contains details about the student that is created

The `name` attribute contains name of the student that is created

The `contact` attribute contains contact phoneno. of the student that is created

The `email` attribute contains email of student that is created

The `token` attribute contains the jwt string
