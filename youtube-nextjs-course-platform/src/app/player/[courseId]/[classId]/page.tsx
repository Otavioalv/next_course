// import { use } from "react"; // 1. Importe o hook use do React
import { IPlayerPlaylistProps, PlayerClassDetails, PlayerHeader, PlayerPlaylist } from "@/src/components/player";
import { APIYouTube } from "@/src/shared/services/api-youtube";
import { Metadata } from "next";

interface IPagePlayerProps {
    params: {
        classId: string;
        courseId: string;
    };
}

export async function generateStaticParams(): Promise<IPagePlayerProps['params'][]> {
    const courses = await APIYouTube.course.getAll();   

    const classesByCourse = await Promise.all([
        ...courses.map(course => APIYouTube.class.getAllByCourseId(course.id)),
    ]);

    
    return classesByCourse
        .flatMap(classes => classes)
        .map(classItem => ({courseId: classItem.courseId, classId: classItem.id}));
}

export async function generateMetadata({params}: IPagePlayerProps):Promise<Metadata> {
    const classDetails = await APIYouTube.class.getById(params.classId);

    return {
        title: classDetails.title, 
        description: classDetails.description,
        openGraph: {
            locale: 'pt-Br',
            type: 'video.episode',
            title: classDetails.title,
            description: classDetails.description,
            videos: [`https://www.youtube.com/watch?v=${classDetails.videoId}`]
        }
    };
}


export default async function PagePlayer({
    params
}: IPagePlayerProps) {
    const { classId, courseId } = await params;
    
    const courseDetails = await APIYouTube.course.getById(courseId);
    const classDetails = await APIYouTube.class.getById(classId);

    const classGroupsData: IPlayerPlaylistProps["classGroups"] = courseDetails.classGroups.map(classGroup => ({
        title: classGroup.title,
        classes: classGroup.classes.map(classItem => ({
            done: false,
            classId: classItem.id,
            title: classItem.title,
        }))
    }));

    
    return (
        <main className="flex flex-col gap-2 h-screen">
            <PlayerHeader
                title={classDetails.title}
                subtitle={classDetails.description}
            />

            <div className="flex gap-2 h-[calc(100vh-74px)]"> 
                <div className="max-w-96 hidden md:block">
                    <PlayerPlaylist
                        playingClassId={classId}
                        playingCourseId={courseId}
                        classGroups={classGroupsData}
                    />
                </div>

                <PlayerClassDetails
                    classItem={{
                        description: classDetails.description,
                        title: classDetails.title,
                        commentsCount: classDetails.commentCount,
                        likesCount: classDetails.likeCount,
                        viewsCount: classDetails.viewsCount,
                        id: classDetails.videoId,
                        // playingClassId={classId},
                    }}
                    course={{
                        description: courseDetails.description,
                        numberOfClasses: courseDetails.numberOfClasses,
                        title: courseDetails.title,
                        classGroups: classGroupsData,
                        id: courseDetails.id,
                        // playingCourseId={courseId}
                    }}
                />
            </div>
        </main>
    );
}
