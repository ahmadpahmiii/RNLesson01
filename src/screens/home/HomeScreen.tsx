import { ActivityIndicator, FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import ArticleItem from "./components/ArticleItem";
import { Post } from "../../data/api";
import { useHomeViewModel } from "./useHomeViewModel";
import { useBookmarks } from "./useBookmarks";

function HomeScreen({navigation}: any) {
  const {posts, loading, error, retry} = useHomeViewModel();
  const {isBookmarked, toggleBookmark} = useBookmarks();

  const renderItem = ({ item }: { item: Post }) => (
    <ArticleItem
      article={{
        id: String(item.id),
        title: item.title,
        author: `User ${item.userId}`,
        readTime: '3 min',
      }}
      onPress={() =>
        navigation.navigate('Detail', { itemId: item.id, itemName: item.title })
      }
      isBookmarked={isBookmarked(String(item.id))}
      onToggleBookmark={() => toggleBookmark(String(item.id))}
    />
  );

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#007AFF" />
      </View>
    );
  }

  if (error) {
    return(
      <View style={styles.center}>
        <Text style={styles.errorText}>{error}</Text>
        <TouchableOpacity style= {styles.retryButton} onPress={retry} >
          <Text style={styles.retryText}>Retry</Text>
        </TouchableOpacity>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Articles</Text>
      <FlatList
        data={posts}
        keyExtractor={item => String(item.id)}
        renderItem={renderItem}
        contentContainerStyle={styles.listContent}
        refreshing={loading}
        onRefresh={retry}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F5F7FA' },
  center: {flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#F5F7FA'},
  header: {fontSize: 28, fontWeight: 'bold', color: '#1A1A1A', marginTop: 16, marginLeft: 16, marginBottom: 8},
  listContent: {paddingBottom: 24},
  errorText: {color: '#FF3B30', fontSize: 14, paddingHorizontal: 24, textAlign: 'center'},
  retryButton: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 24,
    paddingVertical: 10,
    borderRadius: 20,
    marginTop: 16
  },
  retryText: {color: '#FFFFFF', fontWeight: 'bold'}
});

export default HomeScreen;
