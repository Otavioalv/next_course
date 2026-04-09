import { Comment, ICommentProps } from "./Comment";


export interface ICommentsProps {
    comments: ICommentProps[],
}

export const Comments = ({comments}: ICommentsProps) => {
    return (
        <div className="flex flex-col gap-2">
            {comments.map((comment) => (
                <Comment 
                    key={comment.author.userName}
                    {...comment}
                />
            ))}
        </div>
    );
}; 
