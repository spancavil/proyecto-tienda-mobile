import { MainNavigator } from './navigation/Main';

import {Provider} from 'react-redux';
import store from './store';
import { getProducts } from './store/actions/products.action';
import { getCategories } from './store/actions/category.action';
import {useFonts} from 'expo-font';
import { Apploading } from './components/Apploading';

export default function App() {
  //Ejecutamos la función de obtener productos
  store.dispatch(getProducts);
  store.dispatch(getCategories);

  
  let [fontsLoaded] = useFonts({
      'ubuntu-regular': require('./assets/Fonts/Ubuntu-Regular.ttf'),
      'ubuntu-bold': require('./assets/Fonts/Ubuntu-Bold.ttf')
    })
  
  if (!fontsLoaded) return <Apploading/>

  else {
    return (
      <Provider store={store}>
        <MainNavigator/>
      </Provider>
    )
  }
}
