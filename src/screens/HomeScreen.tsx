import { View, Button } from 'react-native';
import { RootStackParamList } from '../navigation/types/navigation';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

export default function HomeScreen({navigation}: Props){
    return (
        <View>
            <Button
            title="Ir a Detalles"
            onPress={() => navigation.navigate('Details')}
            />
        </View>
    )
}