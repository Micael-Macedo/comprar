import { Image, View, TouchableOpacity, Text } from 'react-native';

import Button from '@/shared/components/Button';
import Input from '@/shared/components/Input';
import Filter from '@/shared/components/Filter';
import Item from '@/shared/components/Item';

import { styles } from './style';
import { FilterStatusEnum } from '@/shared/types/FilterStatus';

const FILTER_STATUS: FilterStatusEnum[] = [FilterStatusEnum.DONE, FilterStatusEnum.PENDING]

export default function Home() {
  return (
    <View style={styles.container}>
      <Image source={require('@/assets/logo.png')} style={styles.logo} />
      <View style={styles.form}>
        <Input placeholder='O que você precisa comprar?' />
        <Button title='Salvar' />
      </View>
      <View style={styles.content}>
        <View style={styles.header}>
        {
          FILTER_STATUS.map((status) => (
            <Filter key={status} status={status} isActive />
          ))
        }

        <TouchableOpacity style={styles.clearButton}>
          <Text style={styles.clearText}>Limpar</Text>
        </TouchableOpacity>
        </View>
        <Item 
          data={{ status: FilterStatusEnum.DONE, description: "MOCOTÓ" }} 
          onRemove={() => console.log("troca status")} 
          onStatus={() => console.log("remover")} />
      </View>
    </View>
  );
}


