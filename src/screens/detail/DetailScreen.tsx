import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

function DetailScreen({ navigation, route }: any) {
    const { itemId, itemName } = route.params;

    return (
      <View style={styles.container}>
        <Text style={styles.label}>Item ID</Text>
        <Text style={styles.value}>{itemId}</Text>

        <Text style={styles.label}>Item Name</Text>
        <Text style={styles.value}>{itemName}</Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.buttonText}>← Go Back</Text>
        </TouchableOpacity>
      </View>
    );
}

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#F5F7FA', justifyContent: 'center', alignItems: 'center'},
  label: {fontSize: 12, color: '#AAAAAA', marginTop: 16, textTransform: 'uppercase'},
  value: {fontSize: 24, fontWeight: 'bold', color: '#1A1A1A', marginTop: 4},
  button: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 32,
    paddingVertical: 12,
    borderRadius: 24,
    marginTop: 32,
    elevation: 4,
    shadowColor: '#007AFF',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.3,
    shadowRadius: 8,
  },
  buttonText: {color: '#FFFFFF', fontSize: 16, fontWeight: 'bold'},
});

export default DetailScreen;