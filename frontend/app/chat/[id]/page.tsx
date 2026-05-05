import ChatBase from "@/components/chat/ChatBase";


export default function ChatPage({ params }: { params: { id: string } }) {
    console.log("Chat ID:", params.id);
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <h1 className="text-4xl font-bold">Chat Page</h1>
      <ChatBase />
    </div>
  );
};