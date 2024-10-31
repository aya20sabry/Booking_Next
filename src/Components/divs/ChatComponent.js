"use client";

import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import { jwtDecode } from "jwt-decode";

const ChatComponent = ({ hotelId, ownerId, hotelName }) => {
  const [socket, setSocket] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [currentUserId, setCurrentUserId] = useState(null);
  const [connectionError, setConnectionError] = useState(false);
  const [decodedToken, setDecodedToken] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const decoded = jwtDecode(token);
    setCurrentUserId(decoded.id);
    setDecodedToken(decoded);

    const fetchMessages = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/messages/${decoded.id}`
        );
        if (!response.ok) throw new Error("Failed to fetch messages");

        const allMessages = await response.json();

        const hotelMessages = allMessages.filter(
          (message) => message.hostId?._id === hotelId
        );

        const sortedMessages = hotelMessages.sort(
          (a, b) => new Date(a.timestamp) - new Date(b.timestamp)
        );

        setMessages(sortedMessages);

        const unreadMessages = sortedMessages.filter(
          (msg) => !msg.read && msg.sender._id !== decoded.id
        );

        for (const message of unreadMessages) {
          await markMessageAsRead(message._id);
        }
      } catch (error) {
        console.error("Error fetching messages:", error);
      }
    };

    fetchMessages();

    const newSocket = io("http://localhost:3000", {
      transports: ["websocket", "polling"],
      timeout: 10000,
      reconnectionAttempts: 5,
      reconnectionDelay: 1000,
    });

    newSocket.on("connect", () => {
      console.log("Socket connected successfully");
      setConnectionError(false);
    });

    newSocket.on("connect_error", (error) => {
      console.error("Socket connection error:", error);
      setConnectionError(true);
    });

    newSocket.on("new_message", (message) => {
      if (message.hostId === hotelId) {
        const formattedMessage = {
          ...message,
          sender: {
            _id: message.senderId || message.sender._id,
          },
          timestamp: message.timestamp || new Date().toISOString(),
        };

        setMessages((prev) => {
          // Check if message already exists by content and timestamp
          const messageExists = prev.some(
            (msg) =>
              msg.content === formattedMessage.content &&
              Math.abs(
                new Date(msg.timestamp) - new Date(formattedMessage.timestamp)
              ) < 1000
          );

          if (messageExists) {
            return prev;
          }
          return [...prev, formattedMessage];
        });

        if (formattedMessage.sender._id !== decoded.id) {
          markMessageAsRead(formattedMessage._id);
        }
      }
    });

    newSocket.on("message_read", (messageId) => {
      setMessages((prev) =>
        prev.map((msg) =>
          msg._id === messageId ? { ...msg, read: true } : msg
        )
      );
    });

    setSocket(newSocket);

    return () => {
      if (newSocket) {
        newSocket.removeAllListeners();
        newSocket.close();
      }
    };
  }, [hotelId, ownerId]);

  const markMessageAsRead = async (messageId) => {
    try {
      await fetch(`http://localhost:3000/messages/${messageId}/read`, {
        method: "PATCH",
      });
    } catch (error) {
      console.error("Error marking message as read:", error);
    }
  };

  const sendMessage = async () => {
    if (!newMessage.trim()) return;

    try {
      const messageData = {
        senderId: currentUserId,
        receiverId: ownerId,
        hostId: hotelId,
        content: newMessage,
      };

      const localMessage = {
        _id: Date.now().toString(),
        content: newMessage,
        sender: {
          _id: currentUserId,
        },
        timestamp: new Date().toISOString(),
        hostId: hotelId,
        read: false,
      };
      setMessages((prev) => [...prev, localMessage]);
      setNewMessage("");

      const response = await fetch("http://localhost:3000/messages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(messageData),
      });

      if (!response.ok) throw new Error("Failed to send message");
    } catch (error) {
      console.error("Error sending message:", error);
      setMessages((prev) => prev.filter((msg) => msg._id !== localMessage._id));
    }
  };

  return (
    <div className="flex flex-col h-screen min-w-[700px]">
      {connectionError && (
        <div
          className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
          role="alert"
        >
          <strong className="font-bold">Connection Error! </strong>
          <span className="block sm:inline">
            Unable to connect to chat server. Retrying...
          </span>
        </div>
      )}

      <div className="p-4 border-b">
        <h2 className="text-xl font-bold">{hotelName}</h2>
        <p className="text-sm text-gray-600">Chat with hotel owner</p>
      </div>

      <div className="flex-1 overflow-y-auto p-4">
        {messages.map((message) => {
          const isCurrentUser = message.sender._id === currentUserId;
          return (
            <div
              key={message._id}
              className={`mb-4 ${isCurrentUser ? "text-right" : "text-left"}`}
            >
              <div
                className={`inline-block p-2 rounded-lg ${
                  isCurrentUser ? "bg-gray-200" : "bg-blue-500 text-white"
                }`}
              >
                <p>{message.content}</p>
                <small className="text-xs opacity-75">
                  {new Date(message.timestamp).toLocaleString()}
                </small>
                {message.read && isCurrentUser && (
                  <small className="text-xs ml-2">✓</small>
                )}
              </div>
            </div>
          );
        })}
      </div>

      <div className="p-4 border-t">
        <div className="flex gap-2">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && sendMessage()}
            className="flex-1 p-2 border rounded"
            placeholder="Type a message..."
            disabled={connectionError}
          />
          <button
            onClick={sendMessage}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:bg-gray-400"
            disabled={connectionError}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatComponent;
