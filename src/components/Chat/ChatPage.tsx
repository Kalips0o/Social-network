import React, {useEffect, useRef, useState} from 'react'
import {ChatMessageAPIType} from '../../api/chat-api'
import {useDispatch, useSelector} from 'react-redux'
import {sendMessage, startMessagesListening, stopMessagesListening} from '../../redux/chat-reducer'
import {AppStateType} from '../../redux/redux-store'
import s from './ChatPage.module.css'
import UserPhoto from '../../assets/img/UserPhoto/user.webp'


const ChatPage: React.FC = () => {
    return <div className={s.ChatBlock}>
        <Chat/>
    </div>
}

const Chat: React.FC = () => {




    const dispatch = useDispatch()


    const status = useSelector((state: AppStateType) => state.chat.status)

    useEffect(() => {
        // @ts-ignore
        dispatch(startMessagesListening())
        return () => {
            // @ts-ignore
            dispatch(stopMessagesListening())
        }
    }, [])

    return <div>
        {status === 'error' && <div>Some error occured. Please refresh the page</div>}
        <>
            <Messages/>
            <AddMessageForm/>
        </>
    </div>
}

const Messages: React.FC<{}> = ({}) => {
    const messages = useSelector((state: AppStateType) => state.chat.messages)
    const messagesAnchorRef = useRef<HTMLDivElement>(null);
    const [isAutoScroll, setIsAutoScroll] = useState(true)

    const scrollHandler = (e: React.UIEvent<HTMLDivElement, UIEvent>) => {
        const element = e.currentTarget;
        if (Math.abs((element.scrollHeight - element.scrollTop) - element.clientHeight) < 300) {
            !isAutoScroll && setIsAutoScroll(true)
        } else {
            isAutoScroll && setIsAutoScroll(false)
        }
    }

    useEffect(() => {
        if (isAutoScroll) {
            messagesAnchorRef.current?.scrollIntoView({behavior: 'smooth'})
        }
    }, [messages])

    return <div style={{height: '400px', overflowY: 'auto'}} onScroll={scrollHandler}>
        {messages.map((m, index) => <Message key={m.id} message={m}/>)}
        <div ref={messagesAnchorRef}></div>
    </div>
}


const Message: React.FC<{ message: ChatMessageAPIType }> = React.memo(({message}) => {
    console.log(">>>>>>Message")
    return (

        <div className={s.chat}>
            <div className={s.message} style={{justifyContent: 'flex-end'}}>

                <img className={s.senderImg} src={message.photo|| UserPhoto}/>
                <div className={s.angle}/>
                <div className={s.description}>
                    <div className={s.nameSent}>{message.userName}</div>
                    <div className={s.textSent}>{message.message}</div>
                </div>


            </div>
        </div>
    )
})


const AddMessageForm: React.FC<{}> = () => {
    const [message, setMessage] = useState('')
    const dispatch = useDispatch()

    const status = useSelector((state: AppStateType) => state.chat.status)


    const sendMessageHandler = () => {
        if (!message) {
            return
        }
        // @ts-ignore
        dispatch(sendMessage(message))
        setMessage('')
    }

    return <div >
        <div className={s.textarea}  >
            <textarea onChange={(e) => setMessage(e.currentTarget.value)} value={message}></textarea >
            <button disabled={status !== 'ready'} onClick={sendMessageHandler}>Send message</button>

        </div>

    </div>
}

export default ChatPage
