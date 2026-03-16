import { CourseHeader } from "@/src/components/course-header/CourseHeader";
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
                className="w-full max-w-[880px]"
            >
                <CourseHeader/>
            </div>
        </main>
    );
}
