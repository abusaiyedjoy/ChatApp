import type { Server } from "socket.io";


export function setupSocket(io: Server) {
    io.on("connection", (socket) => {
        console.log("A user connected with id", socket.id);

        socket.on("message", (data) => {
            console.log("Received message:", data);
            socket.broadcast.emit("message", data);
        });

        socket.on("disconnect", () => {
            console.log("A user disconnected with id", socket.id);
        });
    });

}