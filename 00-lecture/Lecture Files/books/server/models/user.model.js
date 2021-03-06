const uniquePlugin = require('mongoose-unique-validator');
const validator = require('validator');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const { Schema } = mongoose;

const UserSchema = new Schema(
  {
    username: {
      type: String,
      required: [true, 'username is required'],
      trim: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      validate: {
        validator(value) {
          return validator.isEmail(value);
        },
      },
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

UserSchema.plugin(uniquePlugin, { message: '{VALUE} is not unique' });

UserSchema.pre('validate', function(next) {
  if (!this.isModified('password')) {
    return next();
  }

  bcrypt
    .hash(this.password, 10)
    .then(hashedPassword => {
      this.password = hashedPassword;
      next();
    })
    .catch(next);
});

UserSchema.static('validatePassword', function(
  candidatePassword,
  hashedPassword
) {
  return bcrypt.compare(candidatePassword, hashedPassword);
});

module.exports = mongoose.model('User', UserSchema);
