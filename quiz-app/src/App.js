import React, { useState, useContext, useEffect } from "react";
import Quiz from "./Components/Quiz";
import "./App.css";
import DashBoard from "./Components/DashBoard";
import EndScreen from "./Components/EndScreen";
import { QuizContext } from "./Helpers/Context";
import QuizChange from "./Components/QuizChange";
import firebase from "firebase/app";
import "firebase/firestore";

function App() {
    const [quizState, setQuizState] = useState("menu");
    const [score, setScore] = useState(0);
    const { quizzes, setQuizzes } = useContext(QuizContext);


    useEffect(() => {
        const db = firebase.firestore();
        const quizzesRef = db.collection("quizzes");

        quizzesRef.onSnapshot((snapshot) => {
            const quizzesData = [];
            snapshot.forEach((doc) => {
                const quiz = doc.data();
                quizzesData.push(quiz);
            });
            setQuizzes(quizzesData);
        });
    }, []);

    return ( <
        div className = "App" >
        <
        h1 > Quiz App < /h1>{" "} <
        QuizContext.Provider value = {
            { quizState, setQuizState, score, setScore, quizzes }
        } > { " " } { quizState === "menu" && < DashBoard / > } { " " } { quizState === "endScreen" && < EndScreen / > } { " " } { quizState === "quiz" && < Quiz / > } { " " } { quizState === "quizChange" && < QuizChange / > } { " " } <
        /QuizContext.Provider>{" "} < /
        div >
    );
}

export default App;