import React from 'react'; //aca no solo vamos a importar archivos nuestros si no tambien librerias.
import NavHeader from 'components/NavHeader/NavHeader';
import Dashboard from 'components/Dashboard/Dashboard';

const styles = {
    margin: '0',
    backgroundColor: '#f8f8f8',
    display: 'flex',
    flexDirection: 'column'
}

const App = () => (  
  <div 
  style={styles}
  className='App'>
    <NavHeader></NavHeader>
    <Dashboard></Dashboard>
  </div>         
  
)

export default App;
