const QuestionItem = (prop) => {
  return (
    <div className="border">
      <h2>Title</h2>
      <ul className="list-none m-0 p-0 inline-block">
        <li className="inline-block border">tag</li>
        
      </ul>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6 inline-block"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    </div>
  );
};

export default QuestionItem;
