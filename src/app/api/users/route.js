import { createConnection } from "../../../../lib/db";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const db = await createConnection();
    const sql = "SELECT * FROM users";
    const [users] = await db.query(sql);
    return NextResponse.json({ users });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: error.message });
  }
}

export async function POST(req) {
  try {
    const { name, email } = await req.json();
    const db = await createConnection();
    const sql = "INSERT INTO users (name, email) VALUES (?, ?)";
    await db.query(sql, [name, email]);
    return NextResponse.json({ message: "User added successfully" });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: error.message });
  }
}

export async function DELETE(req) {
  try {
    const { id } = await req.json();
    const db = await createConnection();
    const sql = "DELETE FROM users WHERE user_id = ?";
    await db.query(sql, [id]);
    return NextResponse.json({ message: "User deleted successfully." });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: error.message });
  }
}

export async function PATCH(req) {
  try {
    const { id, name, email } = await req.json(); 
    const db = await createConnection();
    const sql = "UPDATE users SET name = ?, email = ? WHERE user_id = ?";
    await db.query(sql, [name, email, id]);

    return NextResponse.json({ message: "User updated successfully." });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: error.message });
  }
}
