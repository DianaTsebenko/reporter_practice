export function generateUser(overrides = {}) {
  const user = {
    firstName: "Test",
    lastName: "User",
    dob: "12.09.2000",
    street: "1234 Main St",
    postalCode: "12345",
    city: "lviv",
    state: "lviv",
    country: "Aruba",
    phone: "0972090743",
    email: `user${Date.now()}@example.com`,
    password: "Password123%pas",
  };

  return { ...user, ...overrides };
}
