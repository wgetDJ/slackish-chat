import { ChatEngine } from 'react-chat-engine'
import './App.css'
import ChatFeed from './components/ChatFeed'

const App = () => {
    return (
        <ChatEngine
            height = '100vh'
            projectID = '9202ddd0-10ed-42e6-8c2a-8a3659c0e415'
            userName = 'wgetdj'
            userSecret = '123123'
            renderChatFeed = {(chatAppProps) => <ChatFeed {... chatAppProps}/>}
        />
    )
}

export default App
