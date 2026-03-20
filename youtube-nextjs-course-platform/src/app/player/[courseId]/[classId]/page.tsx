import { PlayerHeader } from "@/src/components/player";

interface IPagePlayerProps {
    params: {
        classId: string,
        courseId: string,
    },
}

export default async function PagePlayer({
    params
}: IPagePlayerProps) {
    const {classId, courseId} = await params;

    return (
        <>
            <PlayerHeader
                title="titulo da aula"
                subtitle="descriçaõ aula"
            />
            Player {courseId} {classId}
        </>
    );
}
