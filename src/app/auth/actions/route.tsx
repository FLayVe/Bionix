import { NextResponse } from 'next/server';
import { collection, getDocs, query, where, addDoc} from "firebase/firestore";
import { db } from "@/app/lib/firebaseConfig.js";

async function loginHandler(body: { email: string; password: string }) {
  
    const { email, password } = body;

    try {

        const usersRef = collection(db, "usersWeb"); 
        const q = query(usersRef, where("email", "==", email));
        const querySnapshot = await getDocs(q);

        if(querySnapshot.empty) {

            return NextResponse.json({success: false, message: "User not found"}, { status: 404 });
        }

        const userDoc = querySnapshot.docs[0];
        const userData = userDoc.data();
        const userId = userDoc.id;
        
        // Validate the password
        if (userData.password !== password) {

            return NextResponse.json({ success: false, message: "Invalid credentials" }, { status: 401 });
        }

        const response = NextResponse.json({success: true, message: "Login successful!", userId: userId});
        return response;

    } catch (error) {

        console.error("Error logging in:", error);
        return NextResponse.json( { success: false, message: "Server error" }, { status: 500 });
    }
}

async function signUpHandler(body: { email: string; password: string; referralCode?: string; username: string}) {
    
    const { email, password, referralCode, username } = body;

    try {

        const usersRef = collection(db, "usersWeb");
        const userQuery = query(usersRef, where("email", "==", email));
        const querySnapshot = await getDocs(userQuery);

        if (!querySnapshot.empty) {
            
            return NextResponse.json({ success: false, message: "User already exists" }, { status: 400 });
        }

        const newUser = {
            email: email,
            password: password,
            username: username,
            referralCode:  referralCode || null,
            balance: referralCode ? 3000 : 0, 
        }

        const docRef = await addDoc(usersRef, newUser);

        return NextResponse.json({success: true,  message: "Sign-up successful!"})
    } catch (error) {

        console.error("Error signing up:", error);
        return NextResponse.json( { success: false, message: "Server error"}, { status: 500 });
    }
}
  

export async function POST(req: Request) {
  
    const url = new URL(req.url);
    const action = url.searchParams.get('action');
    const body = await req.json();

    if (action === 'login') {
        return loginHandler(body);
    }

    if (action === 'signUp') {
        return signUpHandler(body);
    }

    return NextResponse.json({ success: false, message: 'Invalid action' }, { status: 400 });
}
