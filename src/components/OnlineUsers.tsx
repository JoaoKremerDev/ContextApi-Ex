import { CounterContext } from "@/contexts/CountContext"
import { useContext } from "react"

export const OnlineUsers = () => {
    const countCtx = useContext(CounterContext);
    const handleBanAll = () => {
        countCtx?.setOnlineCount(0);
    }
    const handleIncrement = () => {
        countCtx?.setOnlineCount(countCtx.onlineCount + 1)
    }

    return (
        <>
            <p>Online: {countCtx?.onlineCount} </p>
            <button onClick={handleBanAll}>Banir todo mundo</button>
            <button onClick={handleIncrement}>Acrescentar</button>
        </>
    )
}