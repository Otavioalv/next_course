import { CollapsibleText } from "./components/CollapsibleText";


export const CourseHeader = () => {
    return (
        <div className="flex flex-col gap-2">
            <h1 className="font-extrabold text-xl">
                Titulo
            </h1>


            <CollapsibleText
                numberOfLinesWhenClosed={3}
            >
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis officiis, unde veritatis perferendis fugiat iusto minus alias adipisci consequatur illum repellat, amet voluptate dignissimos enim facere molestias odit ad consectetur?
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit hic quidem culpa ea dolorum ad fuga, minima, nulla, dignissimos sint veniam distinctio totam est optio quia dolores dolor quasi? Quis?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt impedit eveniet, aliquid ipsam atque autem itaque! Rerum cum, alias amet, voluptates doloribus qui ab dolorem sed repellendus, voluptas expedita obcaecati.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae obcaecati iste voluptate numquam cum earum at error commodi architecto exercitationem! Ratione enim culpa iure asperiores accusamus necessitatibus, molestiae qui suscipit?
            </CollapsibleText>

            <div className="flex gap-2 items-center">
                <button
                    className="py-2 px-4 bg-paper rounded-full"
                >
                    Compartilhar
                </button>

                <span>
                    48 aulas
                </span>
            </div>
        </div>
    );
};