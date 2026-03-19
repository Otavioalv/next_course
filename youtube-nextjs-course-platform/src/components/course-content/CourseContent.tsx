import { ClassGroup, IClassGroup } from "./components/ClassGroup";

interface ICourseContent {
    classGroups: IClassGroup[]
}

export const CourseContent = ({classGroups}: ICourseContent) => {
    return (
        <div 
            className="flex flex-col gap-4"
        >
            <h2
                className="text-lg font-extrabold"
            >
                Conteúdo do curso
            </h2>
            <ul 
                className="flex flex-col rounded-lg overflow-clip"
            >
                {classGroups.map(classGroup => (
                        <li 
                            key={classGroup.title}
                            className="flex flex-col"
                        >
                            <ClassGroup
                                {...classGroup}
                            />
                        </li>
                ))}
            </ul>
        </div>
    );
};
