import { FC } from 'react';
import { Provider } from '../../context';
import RepositoriesList from './RepositoriesList';

interface Props { }

const ContextComponents: FC<Props> = () => {
   return (
      <Provider>
         <RepositoriesList />
      </Provider>
   );
};

export default ContextComponents;