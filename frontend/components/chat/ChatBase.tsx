"use client";
import { getSocket } from "@/lib/socket.config";
import { useEffect, useMemo } from "react";
import { v4 as uuidv4 } from "uuid";
import { Button } from "../ui/button";

export default function ChatBase() {
  let socket = useMemo(() => {
    const socket = getSocket();
    return socket.connect();
  }, []);

  useEffect(() => {
    socket.on("message", (data: any) => {
      console.log("Received message:", data);
    });
    return () => {
      socket.close();
    };
  }, [socket]);

  const handleClick = () => {
    socket.emit("message", {
      name: "John Doe",
      message: "Hello, World!",
      id: uuidv4(),
    });
  };
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <h1 className="text-4xl font-bold">Chat Base</h1>
      <Button onClick={handleClick} className="ml-4">
        Send Message
      </Button>
    </div>
  );
}
