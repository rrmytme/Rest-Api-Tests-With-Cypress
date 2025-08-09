// utils/dataFaker.js
import { faker } from "@faker-js/faker";

export function generateJsonPlaceholderTestData() {
  const title = faker.title;
  const body = faker.lorem.words(10);
  const userId = faker.number.int({ max: 1000 });

  return {
    title,
    body,
    userId,
  };
}
