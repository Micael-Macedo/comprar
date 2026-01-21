import { useState } from 'react'
import { Image, View, TouchableOpacity, Text, FlatList } from 'react-native';

import Button from '@/shared/components/Button';
import Input from '@/shared/components/Input';
import Filter from '@/shared/components/Filter';
import Item from '@/shared/components/Item';

import { styles } from './style';
import { FilterStatusEnum } from '@/shared/types/FilterStatus';
import { IItem } from '@/shared/types/interfaces/item.interface';

const FILTER_STATUS: FilterStatusEnum[] = [FilterStatusEnum.DONE, FilterStatusEnum.PENDING]
const ITEMS: IItem[] = [
  {
    id: "1",
    description: "Comprar café",
    status: FilterStatusEnum.DONE
  },
  {
    id: "2",
    description: "Ir no mercado",
    status: FilterStatusEnum.DONE
  },
  {
    id: "3",
    description: "estudar react native",
    status: FilterStatusEnum.DONE
  },
  {
    id: "4",
    description: "sobreviver",
    status: FilterStatusEnum.PENDING
  },
  {
    id: "5",
    description: "xingar fly",
    status: FilterStatusEnum.PENDING
  },
]

export default function Home() {
  const [filter, setFilter] = useState(FilterStatusEnum.PENDING)

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
              <Filter 
                key={status} 
                status={status} 
                isActive={status === filter} 
                onPress={() => setFilter(status)}
                />
            ))
          }

          <TouchableOpacity style={styles.clearButton}>
            <Text style={styles.clearText}>Limpar</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={ITEMS}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <Item
              data={{ status: item.status, description: item.description }}
              onRemove={() => console.log()}
              onStatus={() => console.log()}
            />
          )}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
          contentContainerStyle={styles.listContent}
          ListEmptyComponent={() => <Text style={styles.empty}>Nenhum item aqui</Text>}
        />
      </View>
    </View>
  );
}


