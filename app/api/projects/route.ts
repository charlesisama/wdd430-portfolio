
import { NextRequest, NextResponse } from "next/server";
import { getProjects } from "@/lib/projects-db";

export async function GET(request: NextRequest) {
    try {
        const { searchParams } = new URL(request.url);

        const type = searchParams.get("type");

        if (type && type !== "opensource" && type !== "school") {
            return NextResponse.json(
                { error: "Invalid project type" },
                { status: 400 }
            );
        }

        const filteredProjects = await getProjects(
            type as "opensource" | "school" | null
        );

        return NextResponse.json({
            success: true,
            count: filteredProjects.length,
            data: filteredProjects,
        });
    } catch (error) {
        console.error("Error retrieving projects:", error);

        return NextResponse.json(
            { error: "Unable to retrieve projects" },
            { status: 500 }
        );
    }
}
