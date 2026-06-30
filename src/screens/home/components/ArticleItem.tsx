import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { Article } from "../../../data/articles"

type Props = {
  article: Article;
  onPress: () => void;
};

function ArticleItem({article, onPress}: Props) {
    return (
        <TouchableOpacity style= {styles.card} onPress={onPress}>
            <Text style={styles.title}>{article.title}</Text>
            <Text style={styles.meta}>{article.author} • {article.readTime}</Text>
        </TouchableOpacity>
    )
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
});

export default ArticleItem;