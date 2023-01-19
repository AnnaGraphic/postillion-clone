import express, { Request, Response } from 'express';
import axios, { AxiosResponse } from 'axios';
import { QuizData } from './interfaces'

require('dotenv').config()
//const { URL, TOKEN } = process.env;

const PORT = 8000;
const app = express();

//console.log("URL, TOKEN", URL, TOKEN)
app.get("/quiz-item", async (req: Request, res: Response) => {
    try {
        //@ts-ignore
        const response: AxiosResponse = await axios.get(process.env.URL, {
            headers: {
                'X-Cassandra-Token': process.env.TOKEN
            }
        })
        if (response.status === 200) {
            const quizItem: QuizData = await response.data.data['2c86225a-3098-47cb-8ceb-2faf576813c4']
            res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000')
            console.log('quizitem', quizItem)
            res.send(quizItem)
        }
    } catch (err) {
        console.error(err)
    }
})

app.listen(PORT, () => console.log('server is running on ', PORT))