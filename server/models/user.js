import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
  googleID: { type: String, index: true },
  accessToken: { type: String, required: true },
	favorites: { type: Array, default: [] },
  fullName: { type: String }
})


const User = mongoose.model('User', UserSchema)

export default User