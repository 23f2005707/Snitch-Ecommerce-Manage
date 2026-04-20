import mongoose from "mongoose";
import bcrypt from "bcryptjs"

const userSchema = new mongoose.Schema ({
    email: { type: String, required: true, unique: true},
    contact: { type: String, required: true, unique: true},
    password: {type: String, required: true},
    fullname: {type: String, required: true},
    role: {
        type: String,
        enum: ["buyer", "seller"],
        default: "buyer"
    }
})


// Run before saving in database and hash the password 
userSchema.pre("save", async function () {
    if(!this.isModified("password")) return;

    // hash the password
     // -- 10(salt rounds) -> how many times to process the hash.
    const hash = await bcrypt.hash(this.password, 10);
    this.password = hash;
})

userSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password)
}

const userModel = mongoose.model("user", userSchema);

export default userModel;