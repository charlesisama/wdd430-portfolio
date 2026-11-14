
import { NextRequest, NextResponse } from "next/server";
import { getProjectById } from "@/lib/projects-db";

interface RouteContext {
    params: Promise<{
        id: string;
    }>;
}

export async function GET(
    _request: NextRequest,
    { params }: RouteContext
) {
    try {
        const routeParams = await params;
        const rawId = routeParams.id;

        console.log("Received project ID:", rawId);

        const projectId = Number(rawId);

        console.log("Converted project ID:", projectId);

        if (!Number.isSafeInteger(projectId) || projectId <= 0) {
            return NextResponse.json(
                {
                    error: "Invalid project ID",
                    receivedId: rawId,
                },
                { status: 400 }
            );
        }

        const project = await getProjectById(projectId);

        if (!project) {
            return NextResponse.json(
                { error: "Project not found" },
                { status: 404 }
            );
        }

        return NextResponse.json({
            success: true,
            data: project,
        });
    } catch (error) {
        console.error("Error retrieving project:", error);

        return NextResponse.json(
            { error: "Unable to retrieve project" },
            { status: 500 }
        );
    }
}
