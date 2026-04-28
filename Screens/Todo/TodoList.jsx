import { Text } from "react-native"
import { View } from "react-native"
import TodoData from "../../data/TodoData.json"
import TodoItem from "../../component/TodoItem"
import { FlatList } from "react-native"
const TodoList=()=>{
    return(
        <View>
            <Text>TodoList</Text>
            <FlatList data={TodoData}
            renderItem={({item})=><TodoItem  item={item}/>}
            />
                    </View>
    )
}
export default TodoList;