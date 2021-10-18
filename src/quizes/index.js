const quizzes = [{
    uuid: "427a2267-2733-441f-ace6-83f5eac99ae4",
    name: "Toets 3",
    questions: [{
        uuid: "85d3360f-6955-4fd8-a19d-1f67dd73e647",
        question: "Wat betekent Dev in DevOps?",
        correctAnswerNr: 0,
        answers: [
            {
                nr: 0,
                answer:
                    "Development",
            },
            {
                nr: 1,
                answer: "Deployment",
            },
            {
                nr: 2,
                answer: "Delivery",
            },
        ],
    }]
}]

export function getQuizzes() {
    return quizzes;
}

export function getQuizByUuid(uuid) {
    return quizzes.filter(qz => qz.uuid === uuid)[0];
}