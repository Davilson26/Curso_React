import logo from './logo.svg';
import './App.css';
// import TaskListComponent from './components/container/task_list';
// import Greeting from './components/pure/greeting';
// import GreetingF from './components/pure/greetingF';
import ContactoListComponent from './components/container/contacto_list';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* Componente propio greeting */}
        {/* <Greeting name="Davilson"></Greeting> */}

        {/* Componente de listado funcional */}
        {/* <GreetingF name="Davilson"></GreetingF>  */}

        {/* Componente de listado de tareas */}
        {/* <TaskListComponent></TaskListComponent> */}

        {/* Componente de Contacto */}
        <ContactoListComponent></ContactoListComponent>
      </header>
    </div>
  );
}

export default App;
