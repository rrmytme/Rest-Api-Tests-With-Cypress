# Rest API Tests With Cypress

This project demonstrates how to use [Cypress](https://www.cypress.io/) for automated REST API testing, including CRUD operations, schema validation, load testing, and data generation with Faker.

## Project Structure

cypress/ config/ # Environment configuration files downloads/ # Downloaded files (if any) e2e/ # End-to-end API test specs fakerData.cy.js jsonPlaceholderCrud.cy.js loadTest.cy.js schemaValidation.cy.js ... fixtures/ # Test data and JSON schemas post.json postSchema.json screenshots/ # Cypress screenshots support/ # Custom commands and utilities commands.js e2e.js fakerUtils.js .gitignore cypress.config.js package.json

## Features

- **CRUD API Tests**: Test create, read, update, and delete operations on the JSONPlaceholder API.
- **Schema Validation**: Validate API responses against JSON schemas using `chai-json-schema`.
- **Load Testing**: Generate multiple requests to test API performance.
- **Dynamic Test Data**: Use Faker to generate random data for tests.

## Setup

1. **Install dependencies:**

   ```sh
   npm install
   ```

   Configure environment (optional):

Edit cypress/config/.env to set the API base URL.
Run Cypress tests:

Open Cypress UI:

```sh
npx cypress open
```

Run tests in headless mode:

```sh
npx cypress run
```

Notable Files
jsonPlaceholderCrud.cy.js: Basic CRUD tests.
fakerData.cy.js: CRUD tests with dynamic data from Faker.
schemaValidation.cy.js: Response schema validation.
loadTest.cy.js: Load testing with multiple requests.
fakerUtils.js: Utility to generate random test data.
postSchema.json: JSON schema for response validation.

Dependencies
Cypress
@faker-js/faker
chai-json-schema
dotenv
License
ISC
