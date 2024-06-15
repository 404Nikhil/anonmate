import { Message } from "@/model/User";

export interface ApiResponse{
    success: boolean;
    message: string;
    isAcceptingMessagess?: boolean;
    messages?: Array<Message>
}