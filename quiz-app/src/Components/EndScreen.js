import React, { useContext, useState } from "react";
import { QuizContext } from "../Helpers/Context";
import { Questions } from "../Helpers/QuestionStore";

function EndScreen() {
    const { score, setScore, setQuizState } = useContext(QuizContext);
    const restartQuiz = () => {
        setScore(0);
        setQuizState("menu");
    };

    return ( <
        div className = "endquiz" >
        <
        >
        <
        h1 > Finished Quiz < /h1>{" "} <
        h3 > { " " } { score }
        / {Questions.length}{" "} < /
        h3 > { " " } <
        button onClick = { restartQuiz } > Restart Quiz < /button>{" "} < /
        > { " " } <
        /div>
    );
}

export default EndScreen;