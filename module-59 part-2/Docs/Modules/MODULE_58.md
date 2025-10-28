## 58-1 Analysis of Project Requirements

- [Project Overview](HIGH_LEVEL_PROJECT_OVERVIEW.md)

## 58-2 Identifying Database Table Names

Database Tables:

1. User — email, password
2. Admin
3. Doctor
4. Patient
5. Schedule (created by admin)
6. Doctor Schedule (created by doctor — Appointment slot)
7. Appointment
8. Medical Report (TO KEEP ALL REPORT)
9. Patient health Data (to keep medical history)
10. Prescription
11. Payment
12. Review
13. Specialities (SPECIFICATION OF EACH DOCTOR IN DIFFERENT SECTOR)
14. Doctor Specialities

## 58-3 Discussion on Entity-Relationship Diagram (ERD)

- [ERD](./Docs/PH_HealthCare_ERD.pdf)

## 58-4 Project Initialization

```bash
yarn init
```

- `package.json` will be created.

```bash
prisma typescript tsx @types/node --save-dev
```

- node modules and yarn.lock will be created.

```bash
npx tsc --init
```

- Created a new tsconfig.json
- modified tsconfig.json : set root directory

```bash
npx prisma init
```

- prisma folder with schema.prisma and .env created

```bash
yarn add express
```

```bash
yarn add ts-node-dev -D
```

```bash
yarn add cors
```

- create src folder and server.ts file
- create an app of express

```bash
yarn add @types/express -D
```

- write script into package.json file to run the application to
- [ts-node-dev](https://www.npmjs.com/package/ts-node-dev)
- run command:

```bash
yarn dev
```

## 58-5 Project Setup

- create app.ts file to keep middlewires

```bash
yarn add @types/cors -D
```

```bash
yarn add -D @types/cors
```

## 58-6 Migration of User & Admin Models/Prisma Schema

- to generate unique id: [uuid npm](https://www.npmjs.com/package/uuid)

- user and admin : one-to-one relation through email

```bash
yarn add @prisma/client
```

```bash
npx prisma migrate dev user-admin
```

| Side                    | Model   | Relation Field | Notes                                    |
| ----------------------- | ------- | -------------- | ---------------------------------------- |
| **Parent (referenced)** | `User`  | `Admin?`       | One user may have one admin              |
| **Child (foreign key)** | `Admin` | `user`         | Each admin belongs to a user via `email` |

## 58-7 Implementation of User Routes, Controllers, and Services

- create app/modules/User/user.ts within src folder

## 58-8 User & Admin Creation: Part 1

- create user.service.ts
- create user.route.ts
- create user.controller.ts

- use api from postman

## 58-9 User & Admin Creation: Part 2

- parser added to app.ts
- post data from postman

**10 Oct, 25**

## 58-10 Implementation of Password Hashing

- [node.bcrypt.js](https://www.npmjs.com/package/bcrypt)

```bash
yarn add bcrypt
```
