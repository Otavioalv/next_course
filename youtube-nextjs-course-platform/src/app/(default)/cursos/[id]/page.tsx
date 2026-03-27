import { CourseContent } from "@/src/components/course-content/CourseContent";
import { CourseHeader } from "@/src/components/course-header/CourseHeader";
import { StartCourse } from "@/src/components/StartCourse";
import { APIYouTube } from "@/src/shared/services/api-youtube";
import { Metadata } from "next";


interface Props {
    params: {id: string},
}


export async function generateMetadata({params}: Props): Promise<Metadata> {
    const { id } = await params;
    const courseDetail = await APIYouTube.course.getById(id);

    return {
        title: courseDetail.title,
        description: courseDetail.description,
        openGraph: {
            locale: 'pt-BR',
            type: 'video.other',
            title: courseDetail.title,
            description: courseDetail.description,
            videos: courseDetail.classGroups
                .reduce<string[]>((previous, current) => [
                    ...previous,
                    ...current.classes.map(classItem => `https://codarse.com/player/${current.courseId}/${classItem.id}`),
                ], [])
        }
    };
}


export default async function PageCourseDetail({params}: Props) {

    const { id } = await params;

    const courseDetail = await APIYouTube.course.getById(id);

    const firstClass = courseDetail.classGroups.at(0)?.classes.at(0);

    return (
        <main className="mt-8 flex justify-center">
            <div
                className="w-full max-w-[880px] px-2 lg:px-0 flex flex-col  gap-4 md:flex-row-reverse"
            >
                <div className="flex-1">
                    {firstClass && (
                        <StartCourse
                            idClass={firstClass.id}
                            title={firstClass.title}
                            idCourse={courseDetail.id}
                            imageUrl={courseDetail.image}
                        />
                    )}
                </div>
                <div className="flex-[2] flex flex-col gap-12 pb-12">
                    
                    <CourseHeader
                        title={courseDetail.title}
                        description={courseDetail.description}
                        numberOfClasses={courseDetail.numberOfClasses}
                    />
                    
                    <CourseContent
                        classGroups={courseDetail.classGroups}
                    />
                </div>
            </div>
        </main>
    );
}
