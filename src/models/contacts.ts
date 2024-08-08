import mongoose, { Document, Model, Schema } from "mongoose";

// Define an interface representing a document in MongoDB
interface IContact extends Document {
  fullName: string;
  email: string;
  message: string;
}

// Create the schema corresponding to the document interface
const ContactSchema: Schema<IContact> = new Schema({
  fullName: {
    type: String,
    required: [true, "Full name is required"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Please enter a valid email address",
    ],
  },
  message: {
    type: String,
    required: [true, "Message is required"],
  },
});

// Export the model or use an existing one if it exists
const Contact: Model<IContact> =
  mongoose.models.Contact || mongoose.model<IContact>("Contact", ContactSchema);

export default Contact;
