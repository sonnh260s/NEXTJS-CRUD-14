import { connectDb } from "@/database/db";
import { Employee } from "@/models/Employee";
import { NextResponse } from "next/server";

connectDb();

export async function GET(request) {
    try {
        // Lấy số trang hiện tại và số lượng mục trên mỗi trang từ query params
        const url = new URL(request.url);
        const page = parseInt(url.searchParams.get('page')) || 1; // Mặc định trang 1 nếu không có tham số
        const limit = parseInt(url.searchParams.get('limit')) || 4; // Mặc định 5 mục mỗi trang nếu không có tham số

        // Tính số lượng mục bỏ qua
        const skip = (page - 1) * limit;

        // Lấy tổng số nhân viên và phân trang
        const totalEmployees = await Employee.countDocuments();
        const employees = await Employee.find().sort({ date: -1 }).skip(skip).limit(limit);

        return NextResponse.json({
            totalEmployees,
            totalPages: Math.ceil(totalEmployees / limit),
            currentPage: page,
            employees: employees.length > 0 ? employees : "Not Found"
        });
    } catch (error) {
        console.log(error);
        return NextResponse.json(
            {
                error: "Failed to get employees",
            },
            {
                status: 404,
            }
        );
    }
}