import React, { useState, useContext, useEffect } from "react";
import { Questions } from "../Helpers/QuestionStore";
import { QuizContext } from "../Helpers/Context";

function Quiz() {
    const { score, setScore, setQuizState } = useContext(QuizContext);
    const [time, setTime] = useState(0);
    const [graded, setGraded] = useState(false);
    const [timeLeft, setTimeLeft] = useState(60);

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [optoinChosen, setOptionchosen] = useState("");

    const nextQuestion = () => {
        if (Questions[currentQuestion].Answer === optoinChosen) {
            setScore(score + 1);
        }

        setCurrentQuestion(currentQuestion + 1);
    };
    const finishQuiz = () => {
        if (Questions[currentQuestion].Answer === optoinChosen) {
            setScore(score + 1);
        }
        setQuizState("endScreen");
    };
    useEffect(() => {
        // define a function to be called every second
        const intervalId = setInterval(() => {
            setTimeLeft((prevTime) => {
                // decrement the time left by 1 second
                const newTime = prevTime - 1;

                // if the time has run out, clear the interval and return 0
                if (newTime === 0) {
                    clearInterval(intervalId);
                    return 0;
                }

                // return the updated time left
                return newTime;
            });
        }, 1000);

        // cleanup function to clear the interval when the component unmounts or when the timer runs out
        return () => clearInterval(intervalId);
    }, []); // run the effect only once when the component mounts

    return ( <
        div className = "quiz" >
        <
        h1 > { Questions[currentQuestion].prompt } < /h1>{" "} <
        div >
        <
        h2 > Time Left: { timeLeft }
        s < /h2> {/ * rest of the quiz * /}{" "} < /
        div > { " " } <
        div className = "option" >
        <
        button onClick = {
            () => setOptionchosen("A")
        } > { " " } { Questions[currentQuestion].OptionA } { " " } <
        /button>{" "} <
        button onClick = {
            () => setOptionchosen("B")
        } > { " " } { Questions[currentQuestion].OptionB } { " " } <
        /button>{" "} <
        button onClick = {
            () => setOptionchosen("C")
        } > { " " } { Questions[currentQuestion].OptionC } { " " } <
        /button>{" "} <
        button onClick = {
            () => setOptionchosen("D")
        } > { " " } { Questions[currentQuestion].OptionD } { " " } <
        /button>{" "} < /
        div > { " " } {
            currentQuestion === Questions.length - 1 ? ( <
                button onClick = { finishQuiz } > Finish Quiz < /button>
            ) : ( <
                button onClick = { nextQuestion } > Next Question < /button>
            )
        } { " " } <
        /div>
    );
}

export default Quiz;