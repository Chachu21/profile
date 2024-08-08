import connectMongoDB from "@/libs/mongo";
import Contact from "@/models/contacts";
import { NextResponse } from "next/server";

// Define the expected data structure
interface Feedback {
  name: string;
  email: string;
  message: string; // Updated field name to match the model
}

// Handle the POST request
export async function POST(request: Request) {
  try {
    // Connect to MongoDB
    await connectMongoDB();

    // Parse the incoming JSON data
    const feedback: Feedback = await request.json();
    const { name, email, message } = feedback;

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }

    // Create a new Contact document
    const newContact = new Contact({
      fullName: name,
      email,
      message, // Use 'message' to match the model
    });

    // Save the contact document to the database
    await newContact.save();

    // Respond with success
    return NextResponse.json({ message: "Feedback submitted successfully!" });
  } catch (error) {
    console.error("Error handling feedback:", error);
    return NextResponse.json(
      { error: "Something went wrong." },
      { status: 500 }
    );
  }
}
