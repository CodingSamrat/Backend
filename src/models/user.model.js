import { model, Schema } from "mongoose";


const UserSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        roll: {
            type: String,
            required: true,
            unique: true,
        },
        course: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

export const UserModel = model('users', UserSchema);



// UserModel.create()

// UserModel.find({})
// UserModel.findById(userId)
// UserModel.findOne({})

// UserModel.findOneAndUpdate({}, {})
// UserModel.findByIdAndUpdate(id, {})

// UserModel.findOneAndDelete({})
// UserModel.findByIdAndDelete(id)


// Not necessary
// UserModel.updateMany({}, {})
// UserModel.updateOne({}, {})
// UserModel.deleteOne({})
// UserModel.deleteMany({})