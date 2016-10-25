var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
  googleID: { 
    type: String, 
    index: true 
  },
  accessToken: {
    type: String,
    required: true
  },
	favorites: {
    type: Array,
    default: []
  },
  fullName: {
    type: String
  }
});


var User = mongoose.model('User', UserSchema);
module.exports = User;