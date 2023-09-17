const express = require("express")

const server = express()
const PORT = process.env.PORT || 3000

server.get("/", (req, res)=>{
    res.status(200).json({message: "API UP!"})
})

server.listen(PORT, ()=>{
    console.log(`Server is listening at: ${PORT}`)
})

//Greeting
server.get("/greeting/:name", (req, res))=>{
    const name = req.params.name
    res.status(200).json ({
        message: `What's up, ${name}?`})}
    

//8 Ball
server.get("/magic/:question", (req, res)=>{
    const question = req.params.question
    const ballResponse = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"]
    const randomBallResponse = ballResponse[Math.floor(Math.random()*ballResponse.length)];
    console.log(question, randomBallResponse);
    res.json({message: `The answer to '${question}?' is: ${randomBallResponse}.`
    })
})

//Tip Calculator Express Application
server.get("/tip/:total/:tipPercentage", (req, res)=>{
    const total = req.params.total
    const tipPercentage = req.params.tipPercentage / 100
    const tipTotal = total * tipPercentage
    res.status(200).json({message: `Please leave a tip of $${tipTotal}`})
})

//Pass It Around
const express = require("express")

const bodyParser = require("body-parser")

const server = express()
const PORT = process.env.PORT || 5000

server.use(express.json())
server.use(bodyParser.json())


server.get("/", (req, res)=>{
    let counter = 99
    res.status(200).json({message: `${counter} Bottles of beer on the wall`})
    // next()
})

server.get("/multiple/:bottleNumber", (req, res)=>{
    let counter = 99 - 1
    let bottleNumber = req.params.bottleNumber
    
    let numberBottles = bottles(bottleNumber)
    res.status(200).json({message: numberBottles, link: `localhost:5000/${bottleNumber-1}`})
})

function bottles (num) {
    let numberBottles = []
    // let bottles = bottles
    for(let counter = num; counter >= 1; counter--) 
    {
        // if (counter == 1) {
        //     bottles = 'bottle';
        // }
        numberBottles.push(counter + " bottles of beer on the wall. " + counter + " bottles of beer. Take one down. Pass It Around." + (counter-1) + " bottles of beer on the wall" )
    }
    return numberBottles
}

server.get("/single/:singleNumber", (req, res)=>{
    let counter = 99 - 1
    let singleNumber = req.params.singleNumber
    res.status(200).json({message: singleNumber + " bottles of beer on the wall. " + singleNumber + " bottles of beer. Take one down. Pass It Around." + (singleNumber-1) + " bottles of beer on the wall", link: `localhost:5000/${singleNumber-1}`
    })
})

server.listen(PORT, ()=>{
    console.log(`Server is listening at: ${PORT}`)
})
