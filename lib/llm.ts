import { ChatOpenAI } from "@langchain/openai";
import { config } from "dotenv";

config();

const apikey = process.env.DEEPINFRA_API_KEY;


const model = new ChatOpenAI({
    model: "meta-llama/Llama-4-Maverick-17B-128E-Instruct-FP8",
    apiKey: apikey,
    temperature: 1.0,
    configuration: {
        baseURL: "https://api.deepinfra.com/v1/openai"
    }
})

export default model;