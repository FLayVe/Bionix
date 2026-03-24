// /app/api/getUser/route.ts
import { NextResponse } from "next/server";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/app/lib/firebaseConfig";

export async function GET(req: Request) {
  try {

    const { searchParams } = new URL(req.url);
    const userId = searchParams.get("userId");

    console.log("Received userId:", userId);  // Debugging


    if (!userId) {
      return NextResponse.json({ message: "User ID is required" }, { status: 400 });
    }

    const userRef = doc(db, "usersWeb", userId);
    const userSnap = await getDoc(userRef);

    if (userSnap.exists()) {

      const userData = userSnap.data();

      console.log("User data retrieved:", userData);  // Debugging

      return NextResponse.json({ userData:userData }, { status: 200 });

    } else {

      console.error(`User document with ID ${userId} not found`);
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

  } catch (error) {

    console.error("Error fetching user data:", error);
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}
