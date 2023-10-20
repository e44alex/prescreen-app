import generateQuestionsRequest from "./generateQuestionsRequest.json";

function generateQuestions(): Promise<string> {
  return fetch("https://www.blackbox.chat/api/chat",{
    method: "POST",
    body: JSON.stringify(generateQuestionsRequest)
  }).then(value => value.json());
}

const aiService = {
  generateQuestions
}

export default aiService;
