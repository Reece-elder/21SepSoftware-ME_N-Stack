# Middleware

Middleware is software that allows communication between multiple technologies.
Provides extra functionality to software it is placed between, generally doesnt do anything on its own.

When creating middleware, we create as an arrow function including our req, res, next

## Installing CORS
 `npm i cors`

Exercise

Create 2 pieces of custom middleware within your app
1) Print a random number (1 - 100)
2) Print a random snake (using the snake-names package)