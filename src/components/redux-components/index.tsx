import { FC } from 'react';
import { Provider } from 'react-redux';
import { store } from '../../redux';
import RepositoriesList from './RepositoriesList';

interface Props { }

const ReduxComponents: FC<Props> = () => {
   return (
      <Provider store={store}>
         <RepositoriesList />
      </Provider>
   );
}

export default ReduxComponents;