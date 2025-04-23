"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Switch } from "@/components/ui/switch"
import { useChat } from "@ai-sdk/react"
import { Send } from "lucide-react"


export default function ChatWindow() {
    const { messages, input, handleInputChange, handleSubmit } = useChat()

    return (
        <div className="w-screen h-[90dvh] flex flex-col justify-center items-center p-20 gap-4">
            <div className="h-min w-full flex items-center justify-center">
                <h1 className="text-5xl font-medium">
                    Chat Window
                </h1>
            </div>

            <div className="h-full w-full flex flex-col bg-zinc-100 rounded-md bg-opacity-40 shadow-lg max-w-4xl">
                <div className="w-full h-20 flex gap-4 items-center justify-center shadow-sm p-4 rounded-t-md">
                    <h2 className="text-2xl font-medium">
                        AI Chat
                    </h2>
                </div>
                <div className="flex-grow overflow-auto p-4 space-y-4">
                    {
                        messages.map((message) => (
                            <Card
                                key={message.id}
                                className={`p-4 max-w-[80%] ${message.role === "user"
                                    ? "ml-auto bg-primary text-primary-foreground"
                                    : "mr-auto bg-card"
                                    }`}
                            >
                                {
                                    message.content
                                }
                            </Card>
                        ))
                    }
                </div>
                <div className="h-20 w-full">
                    <form onSubmit={handleSubmit} className="flex items-center space-x-2 p-4 justify-center">
                        <Input
                            value={input}
                            onChange={handleInputChange}
                            placeholder="Ask a question.."
                            className="flex-grow"
                            onKeyDown={(e) => e.key === 'Enter' && handleSubmit}
                        />
                        <Button onClick={handleSubmit}>
                            <Send />
                        </Button>
                    </form>
                </div>

            </div>
        </div>
    )

}