import mongoose, { Schema } from "mongoose";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';


const userSchema = new Schema({

    username: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
        index: true,
    },
    watchHistory: [{
        type: Schema.Types.ObjectId,
        ref: "Video",
    }],
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
    },
    fullName: {
        type: String,
        required: true,
        lowercase: true,
        trim: true,
        index: true,
    },
    avtar: {
        type: String,  // we will take url from cloudinary
        required: true,

    },
    coverImage: {
        type: String,
    },
    password: {
        type: String,
        required: [true, "Password is required"],
        // unique: true,

    },
    refreshToken: {
        type: String,
    },
}, { timestamps: true })

// password encryption before save

userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next();
    this.password = await bcrypt.hash(this.password, 10)
    next()
})

// creating a method in mongoose to compare user entered password and already saved password in database

userSchema.methods.isPasswordCorrect = async function
    (password) {
    return await bcrypt.compare(password, this.password)
}

// Generating access token via userSchema method
userSchema.methods.generateAccessToken = function () {
    return jwt.sign({
        _id: this._id,
        email: this.email,
        username: this.username,
        fullName: this.fullName

    },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY,
        }
    )
}
// Generating refresh token via userSchema method
userSchema.methods.generateRefreshToken = function () {
    return jwt.sign({
        _id: this._id,
    },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn: process.env.REFRESH_TOKEN_EXPIRY,
        }
    )
}

export const User = mongoose.model("User", userSchema)