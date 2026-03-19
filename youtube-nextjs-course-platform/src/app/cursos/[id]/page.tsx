import { Class } from "@/src/components/course-content/components/Class";
import { ClassGroup } from "@/src/components/course-content/components/ClassGroup";
import { CourseContent } from "@/src/components/course-content/CourseContent";
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
                <div className="flex-[2] flex flex-col gap-12 pb-12">
                    
                    <CourseHeader
                        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis molestiae itaque quaerat veritatis ut accusamus est aperiam ducimus rerum amet natus corporis velit voluptatum, earum quas ea omnis optio eius?
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea odio ipsa voluptas assumenda temporibus, vero, facilis iusto cumque, voluptatum accusantium similique a possimus modi cupiditate totam culpa neque numquam aspernatur?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum beatae iure illum, molestias soluta praesentium voluptatum culpa nemo eius aliquam enim a dicta autem nulla ipsam rem. Nobis, esse deleniti."
                        numberOfClasses={48}
                        title="Titulo do curso ou da playlist"
                    />
                    
                    <CourseContent
                        classGroups={[
                            {
                                courseId: "siodfjasd",
                                title: "Titulo do curso",
                                classes: [
                                    {
                                        id: "asoid",
                                        title: "titulo do curso"
                                    },
                                    {
                                        id: "asoidsdf",
                                        title: "titulo do curso"
                                    }
                                ],
                            },
                            {
                                courseId: "siodfjasdsdf",
                                title: "Titulo do curso 2",
                                classes: [
                                    {
                                        id: "asoid",
                                        title: "titulo do curso"
                                    },
                                    {
                                        id: "asoidsdf",
                                        title: "titulo do curso"
                                    }
                                ],
                            }
                        ]}
                    />
                </div>
            </div>
        </main>
    );
}
