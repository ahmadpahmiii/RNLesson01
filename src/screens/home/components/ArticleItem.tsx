import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Article } from "../../../data/articles"

type Props = {
  article: Article;
  onPress: () => void;
  isBookmarked: boolean;
  onToggleBookmark: () => void;
};

function ArticleItem({article, onPress, isBookmarked, onToggleBookmark}: Props) {
    return (
      <TouchableOpacity style={styles.card} onPress={onPress}>
        <View style={styles.row}>
          <View style={styles.textContainer}>
            <Text style={styles.title}>{article.title}</Text>
            <Text style={styles.meta}>{article.author} • {article.readTime}</Text>
          </View>
          <TouchableOpacity
            onPress={onToggleBookmark}
            hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
          >
            <Text style={styles.star}>{isBookmarked ? '⭐' : '☆'}</Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginHorizontal: 16,
    marginVertical: 6,
    elevation: 2,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
  },
  row: {flexDirection : 'row', justifyContent: 'space-between', alignItems: 'center'},
  textContainer: {flex: 1, marginRight: 12},
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1A1A1A',
  },
  meta: {
    fontSize: 12,
    color: '#888888',
    marginTop: 4,
  },
  star: {fontSize: 22}
});

export default ArticleItem;