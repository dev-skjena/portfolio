"use client";
import React, {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { io, Socket } from "socket.io-client";
import { generateRandomCursor } from "../lib/generate-random-cursor"

export type User = {
  socketId: string;
  name: string;
  color: string;
  pos: {
    x: number;
    y: number;
  };
  location: string;
  flag: string;
};
export type Message = {
  socketId: string;
  content: string;
  time: Date;
  username: string;
};

export type UserMap = Map<string, User>;

type SocketContextType = {
  socket: Socket | null;
  users: UserMap;
  setUsers: Dispatch<SetStateAction<UserMap>>;
  msgs: Message[];
  disconnect: () => void;
};

const INITIAL_STATE: SocketContextType = {
  socket: null,
  users: new Map(),
  setUsers: () => {},
  msgs: [],
  disconnect: () => {},
};

export const SocketContext = createContext<SocketContextType>(INITIAL_STATE);

const SocketContextProvider = ({ children }: { children: ReactNode }) => {
  const [socket, setSocket] = useState<Socket | null>(null);
  const [users, setUsers] = useState<UserMap>(new Map());
  const [msgs, setMsgs] = useState<Message[]>([]);

  // SETUP SOCKET.IO
  useEffect(() => {
    const username =  localStorage.getItem("username") || generateRandomCursor().name
    const socket = io(process.env.NEXT_PUBLIC_WS_URL!, {
      query: { username },
      transports: ['websocket'],
    });
    setSocket(socket);
    socket.on("connect", () => {});
    socket.on("msgs-receive-init", (msgs) => {
      setMsgs(msgs);
    });
    socket.on("msg-receive", (msgs) => {
      setMsgs((p) => [...p, msgs]);
    });
    return () => {
      socket.disconnect();
    };
  }, []);

  const disconnect = () => {
    if (socket) {
      socket.disconnect();
      setSocket(null);
      setUsers(new Map());
      setMsgs([]);
    }
  };

  return (
    <SocketContext.Provider value={{ socket, users, setUsers, msgs, disconnect }}>
      {children}
    </SocketContext.Provider>
  );
};

export default SocketContextProvider;
