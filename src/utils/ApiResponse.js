class ApiResponse {
  constructor(statusCode, message, data, success = true, errors = []) {
    this.statusCode = statusCode;
    this.message = message;
    this.data = data;
    this.success = statusCode < 400;
    this.errors = errors;
  }
}
