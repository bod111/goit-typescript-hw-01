

type User = {
  name: string;
  surname: string;
  email: string;
  password: string;
}

export function createOrUpdateUser(initialValues: Partial<User>) {
  console.log("createOrUpdateUser ~ initialValues:", initialValues)
  // Оновлення користувача
}

createOrUpdateUser({ 
  email: 'user@mail.com', 
  password: 'password123' 
});