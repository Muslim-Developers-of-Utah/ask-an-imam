import QuestionItem from "./QuestionItem";

const QuestionsList = () => {
    return (
        <div className="max-w-screen-xl items-center justify-between mx-auto p-4 border rounded-lg">
            <h1 className="text-center">Recently Asked Questions</h1>
            <QuestionItem />
        </div>
    )
}

export default QuestionsList;