import React, { useState, useContext } from "react";
import { QuizContext } from "../Helpers/Context";
//import axios from "axios";
import { db } from "../firebase";
import { uid } from "uid";
import {set, ref, remove } from "firebase/database";

function QuizChange() {


    const { quizState, setQuizState, score, setScore } = useContext(QuizContext);

    const [quiz, setQuiz] = useState({
        question: "",
        answer: "",
        options: [],
    });


    const [message, setMessage] = useState("");
    const writeToDatabase = () => {
        const uuid = uid();
        set(ref(db, `${uuid}`), {
            quiz,
            uuid,
        });
        setQuiz("");
    };

    const handleAddQuiz = async(e) => {
        e.preventDefault();

        // try {
        //  const response = await axios.post("/api/quiz", quiz);
        setMessage("Quiz added successfully!");
        //} catch (error) {
        //   setMessage(error.message);
        //}
    };

    const handleDeleteQuiz = async(quiz) => {
        remove(ref(db, `/${quiz.uuid}`));
        // try {
        //const response = await axios.delete(`/api/quiz/${id}`);
        setMessage("Quiz deleted successfully!");
        // } catch (error) {
        //   setMessage(error.message);
        //  }
    };

    return ( <
        >
        <
        div >
        <
        h2 > Quiz Change < /h2>{" "} <
        form className = "quiz-form"
        onSubmit = { handleAddQuiz } >
        <
        label className = "label" >
        Question:
        <
        input className = "input"
        type = "text"
        value = { quiz.question }
        onChange = {
            (e) => setQuiz({...quiz, question: e.target.value })
        }
        required /
        >
        <
        /label>{" "} <
        br / >
        <
        label className = "label" >
        Answer:
        <
        input className = "input"
        type = "text"
        value = { quiz.answer }
        onChange = {
            (e) => setQuiz({...quiz, answer: e.target.value })
        }
        required /
        >
        <
        /label>{" "} <
        br / >
        <
        label className = "label" >
        Options(separate with commas):
        <
        input className = "input"
        type = "text"
        value = { quiz.options }
        onChange = {
            (e) =>
            setQuiz({...quiz, options: e.target.value.split(",") })
        }
        required /
        >
        <
        /label>{" "} <
        br / >
        <
        button onClick = { writeToDatabase }
        type = "submit" > { " " }
        Add Quiz { " " } <
        /button>{" "} < /
        form > { " " }

        <
        br / >
        <
        br / >
        <
        label className = "label" >
        Delete quiz by ID:
        <
        input className = "input"
        type = "text"
        id = "quizId"
        required / >
        <
        /label>{" "} <
        button onClick = {
            () =>
            handleDeleteQuiz(document.getElementById("quizId").value)
        } >
        Delete Quiz { " " } <
        /button>{" "} {
        message && < p > { message } < /p>}{" "} <
        button onClick = {
            () => setQuizState("menu")
        } > Return to Menu < /button>{" "} < /
        div > { " " } <
        />
    );
}

export default QuizChange;