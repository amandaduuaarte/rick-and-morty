import {useNavigation as useNav} from '@react-navigation/native';
import {NavigationParamListBase} from '../models/navigation';

export function useNavigation(): NavigationParamListBase {
  return useNav<NavigationParamListBase>();
}
