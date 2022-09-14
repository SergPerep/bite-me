// Use these to specify behavior of custom error handler middleware
export class AppError extends Error {
    statusCode: number;
    constructor(message = "Internal server error", statusCode = 500) {
      super(message); 
      this.name = "AppError";
      this.statusCode = statusCode;
    }
}

//   export class MovieNotFoundError extends Error {
//     constructor(movieId) {
//       super();
//       this.name = "MovieNotFound";
//       this.message = `Movie with id=${movieId} is not found`;
//       this.statusCode = 404;
//     }
//   }
  
//   export class MissingPropError extends Error {
//     constructor(propName) {
//       super();
//       this.name = "MissingPropError";
//       this.message = `Property ${propName} is missing`;
//       this.statusCode = 400;
//     }
//   }
  
//   export class WrongTypeError extends Error {
//     constructor(propName, prop, expType) {
//       super();
//       this.name = "WrongTypeError";
//       this.message = `Expected ${propName} to be a ${expType} instead of a ${typeof prop}`;
//       this.statusCode = 400;
//     }
//   }
  