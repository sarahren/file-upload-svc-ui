<template>
  <div id="app">
    <h3>Upload Your File Here</h3>
    <b-container class="bv-example-row">
      <b-row>
        <b-col sm="6" offset="3">
          <section v-if="errored">
            <p>
              We're sorry, we're not able to retrieve this information at the
              moment, please try again later.
            </p>
          </section>
          <section v-else>
            <div v-if="loading">Loading...</div>
            <FilesTable :files="files" />
          </section>
        </b-col>
      </b-row>
    </b-container>
    <UploadButton :disableButton="disableButton" :loadFiles="loadFiles" />
  </div>
</template>

<script>
import FilesTable from "./components/FilesTable.vue";
import UploadButton from "./components/UploadButton.vue";
import FileUploadService from "./services/FileUploadService";

export default {
  name: "App",
  components: {
    FilesTable,
    UploadButton,
  },
  data() {
    return {
      files: [],
      errored: false,
      loading: true,
      disableButton: false,
      refreshId: null,
    };
  },
  mounted() {
    this.loadFiles();
    this.refreshFiles();
  },
  methods: {
    refreshFiles() {
      this.refreshId = setInterval(() => {
        this.loadFiles();
      }, 5000);
    },
    loadFiles() {
      FileUploadService.getFiles()
        .then((response) => {
          this.files = response.data;
          this.disableButton = this.files.length >= 3;
          this.errored = false;
        })
        .catch((err) => {
          console.log(err);
          this.errored = true;
          this.disableButton = true;
        })
        .finally(() => (this.loading = false));
    },
  },
  beforeDestroy() {
    clearInterval(this.refreshId);
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
