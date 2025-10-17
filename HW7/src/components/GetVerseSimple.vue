<template>
  <div class="get-verse-simple">
    <input v-model="inputVerse" placeholder="Enter a verse" />
    <button @click="fetchSpecificVerse">Get Verse</button>
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
  name: "GetVerseSimple",
  data() {
    return {
      inputVerse: "",
      verse: null,
    };
  },
  methods: {
    async fetchSpecificVerse() {
      if (this.inputVerse.trim() === "") {
        this.verse = "Please enter a valid verse reference.";
        return;
      }
      try {
        const response = await fetch(
          `https://labs.bible.org/api/?passage=${this.inputVerse}&type=json`
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
          this.verse = "Error: Could not retrieve the specified verse.";
        }
      } catch (error) {
        this.verse = "Error: Unable to fetch the specified verse.";
      }
    },
  },
};
</script>

<style scoped>
.get-verse-simple {
  background-color: #e6f7ff;
  padding: 20px;
  border-radius: 10px;
  margin: 20px;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
}

input {
  padding: 10px;
  border: 1px solid #333;
  border-radius: 4px;
  margin-right: 10px;
}

button {
  padding: 12px;
  background-color: #2196f3;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
}

button:hover {
  background-color: #1976d2;
}

p {
  margin-top: 10px;
  font-size: 1.1em;
  line-height: 1.5;
}

strong {
  color: #111;
}
</style>
