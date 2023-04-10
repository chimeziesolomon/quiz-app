import React, { useContext } from "react";
import { QuizContext } from "../Helpers/Context";

function DashBoard() {
    const { quizState, setQuizState } = useContext(QuizContext);
    return ( <
        div className = "dashBoard" >
        <
        button onClick = {
            () => {
                setQuizState("quiz");
            }
        } >
        Start Quiz { " " } <
        /button>{" "} <
        button onClick = {
            () => {
                setQuizState("quizChange");
            }
        } >
        Change Quiz { " " } <
        /button>{" "} <
        /div>
    );
}

export default DashBoard;