<template>
  <div class="random-bible-text">
    <button @click="fetchRandomVerse">Fetch Random Verse</button>
    <div v-if="verse">
      <p><strong>Book:</strong> {{ verse.bookname }}</p>
      <p><strong>Chapter:</strong> {{ verse.chapter }}</p>
      <p><strong>Verse:</strong> {{ verse.verse }}</p>
      <p><strong>Text:</strong> {{ verse.text }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "RandomBibleText",
  data() {
    return {
      verse: null,
    };
  },
  methods: {
    async fetchRandomVerse() {
      try {
        const response = await fetch(
          "https://labs.bible.org/api/?passage=random&type=json"
        );
        const data = await response.json();
        if (data && data.length > 0) {
          const verseData = data[0];
          this.verse = {
            bookname: verseData.bookname,
            chapter: verseData.chapter,
            verse: verseData.verse,
            text: verseData.text,
          };
        } else {
          this.verse = "Error: Could not retrieve a random verse.";
        }
      } catch (error) {
        this.verse = "Error: Unable to fetch random verse.";
      }
    },
  },
};
</script>

<style scoped>
.random-bible-text {
  background-color: #f0f0f0;
  padding: 20px;
  border-radius: 10px;
  margin: 20px;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
}

button {
  padding: 12px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  margin-bottom: 15px;
}

button:hover {
  background-color: #388e3c;
}

p {
  margin: 8px 0;
  font-size: 1.1em;
  line-height: 1.4;
}

strong {
  color: #333;
}
</style>
