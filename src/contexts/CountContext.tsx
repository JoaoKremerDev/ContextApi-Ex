import { ReactNode, createContext, useState } from "react";

type CountContextType = {
    onlineCount: number;
    setOnlineCount: (n: number) => void;
};


export const CounterContext = createContext<CountContextType | null>(null);

type Props = { children: ReactNode };
export const CountProvider = ({ children }: Props) => {
    const [onlineCount, setOnlineCount] = useState<number>(17);

    return (
        <CounterContext.Provider value={{ onlineCount, setOnlineCount }}>
            {children}
        </CounterContext.Provider>
    )
};
