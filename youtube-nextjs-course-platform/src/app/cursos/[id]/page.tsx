import { Class } from "@/src/components/course-content/Class";
import { CourseHeader } from "@/src/components/course-header/CourseHeader";
import { StartCourse } from "@/src/components/StartCourse";
import { Metadata } from "next";


interface Props {
    params: {id: string},
}


export async function generateMetadata({params}: Props): Promise<Metadata> {
    return {
        title: "Codarse - Nome do curso",
    };
}


// export const metadata: Metadata = {
//   title: "Codarse - Nome do curso",
// };


export default async function PageCourseDetai ({params}: Props) {

    const { id } = await params;

    return (
        <main className="mt-8 flex justify-center">
            <div
                className="w-full max-w-[880px] px-2 lg:px-0 flex flex-col  gap-4 md:flex-row-reverse"
            >
                <div className="flex-1">
                    <StartCourse
                        idClass="123"
                        idCourse="123"
                        title="Titulo"
                        imageUrl="https://img.youtube.com/vi/UB1O30fR-EE/hqdefault.jpg"
                    />
                </div>
                <div className="flex-[2]">
                    <CourseHeader/>
                    <Class
                        playerUrl="/playes/{courseId}/{classId}"
                        title="titulo da aula"
                    />
                </div>
            </div>
        </main>
    );
}
