
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message'
import Count from './components/Count'
import FunctionClick from './components/FunctionClick'
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind'
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';


function App() {
    return ( <
        div className = "App" >
        <
        Greet  name="Dutta" heroName="superman">
        <p>This is children</p>
        </Greet>
        <
        Welcome name="Dutta" heroName="superman"> < /Welcome> <
        Hello > < /Hello> 
        <Message></Message>
        <Count></Count>
        <FunctionClick></FunctionClick>
        <ClassClick></ClassClick>
        <EventBind></EventBind>
        <ParentComponent></ParentComponent>
        <UserGreeting></UserGreeting>
        <NameList></NameList>
        <
        /div>
    );
}

export default App;