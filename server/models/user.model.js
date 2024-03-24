import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    user_login_name: {
        type: String,
        unique: true
    },
    user_name: {
        type: String,
    },
    user_password: {
        type: String,
        required: true,
    },
    user_email: {
        type: String,
        required: true,
        unique: true
    },
    user_avt_img: {
        type: String,
        default: "https://gcs.tripi.vn/public-tripi/tripi-feed/img/474187OKi/anh-avatar-con-meo-cute_051723184.jpg",
    }
}, {timestamps: true});

const User = mongoose.model('User', userSchema);

export default User;