
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
            Player {courseId} {classId}
        </>
    );
}
