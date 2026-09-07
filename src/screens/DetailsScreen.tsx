
import { View, Button } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types/navigation';

type Props = NativeStackScreenProps<RootStackParamList, 'Details'>;

export default function DetailsScreen({navigation}: Props) {

    return (
        <View>
            <Button
            title="Ir a Home"
            onPress={() => navigation.navigate('Home')}
            />
        </View>
    )
}