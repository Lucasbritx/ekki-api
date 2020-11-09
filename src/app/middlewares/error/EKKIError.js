
class EKKIError extends Error {
    constructor(message, customObject) {
      super(message);
      this.name = this.constructor.name;
      this.customObject = customObject;
    }
  }
  
  module.exports = EKKIError;
  