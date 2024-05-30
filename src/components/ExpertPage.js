import { useState, useRef, useEffect } from 'react';
import styles, { layout } from '../constants/style';
import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import { MainContainer, ChatContainer, MessageList, Message, MessageInput, TypingIndicator } from '@chatscope/chat-ui-kit-react';


const API_KEY = "apikiey";
const systemMessage = {
    //  Explain things like you're talking to a software professional with 5 years of experience.
    "role": "system",
    "content":
        "answer in a line.",
};

const ExpertPage = () => {

    const [messages, setMessages] = useState([
        {
            message: "Hello, I'm your personal Assistant, how may I help you?",
            sentTime: "just now",
            sender: "ChatGPT"
        }
    ]);

    const messageEl = useRef(null);

    useEffect(() => {
        if (messageEl) {
            messageEl.current.addEventListener("DOMNodeInserted", (event) => {
                const { currentTarget: target } = event;
                target.scroll({ top: target.scrollHeight, behavior: "smooth" });
            });
        }
    }, []);


    const [isTyping, setIsTyping] = useState(false);

    const handleSend = async (message) => {
        const newMessage = {
            message,
            direction: 'outgoing',
            sender: "user"
        };

        const newMessages = [...messages, newMessage];

        setMessages(newMessages);

        setIsTyping(true);
        await processMessageToChatGPT(newMessages);
    };

    async function processMessageToChatGPT(chatMessages) {

        let apiMessages = chatMessages.map((messageObject) => {
            let role = "";
            if (messageObject.sender === "ChatGPT") {
                role = "assistant";
            } else {
                role = "user";
            }
            return { role: role, content: messageObject.message }
        });


        // Get the request body set up with the model we plan to use
        // and the messages which we formatted above. We add a system message in the front to'
        // determine how we want chatGPT to act. 
        const apiRequestBody = {
            "model": "gpt-3.5-turbo",
            "messages": [
                systemMessage,  // The system message DEFINES the logic of our chatGPT
                ...apiMessages // The messages from our chat with ChatGPT
            ]
        }

        await fetch("https://api.openai.com/v1/chat/completions",
            {
                method: "POST",
                headers: {
                    "Authorization": "Bearer " + API_KEY,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(apiRequestBody)
            }).then((data) => {
                return data.json();
            }).then((data) => {
                console.log(data);
                setMessages([...chatMessages, {
                    message: data.choices[0].message.content,
                    sender: "ChatGPT"
                }]);
                setIsTyping(false);
            });
    }


    return (
        <>
            <section className={`${layout.section} p-32 mt-16`}>
                <div className={layout.sectionInfo}>
                    <h2 className={styles.heading2}>
                        Ask our <br className="sm:block hidden" />
                        <p className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-custom ss:leading-[90px] leading-[70px]">
                            Expert!!
                        </p>
                    </h2>
                    <p className={`${styles.paragraph} max-w-[470px] mt-5 ml-2`}>
                        Welcome to our AI Expert service! Here, cutting-edge artificial intelligence meets your questions and challenges. Meet our resident AI guru, ready to assist you with all your queries.
                    </p>
                </div>

                <div className="w-1/2 mt-6">
                    <div
                        ref={messageEl}
                        style={{ position: "relative", height: "400px", width: "500px", overflow: "auto" }}>
                        <MainContainer>
                            <ChatContainer>
                                <MessageList
                                    scrollBehavior="auto"
                                    typingIndicator={isTyping ? <TypingIndicator content="Fetching the right solution for you" /> : null}
                                >
                                    {messages.map((message, i) => {
                                        console.log(message);
                                        return <Message key={i} model={message} />;
                                    })}
                                </MessageList>
                                <MessageInput placeholder="Ask your query" onSend={handleSend} />
                            </ChatContainer>
                        </MainContainer>
                    </div>
                </div>
            </section>
        </>
    );
}

export default ExpertPage;