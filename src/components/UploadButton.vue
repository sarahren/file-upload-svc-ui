<template>
  <div>
    <label for="file" class="btn" :class="disableButton ? 'disable-btn' : ''"
      >Upload</label
    >
    <input
      id="file"
      type="file"
      style="display: none;"
      ref="file"
      :disabled="disableButton"
      @change="change"
    />
  </div>
</template>

<script>
import FileUploadService from "../services/FileUploadService";

export default {
  name: "UploadBox",
  props: ["disableButton", "loadFiles"],
  data() {
    return {
      selectedFile: {},
    };
  },
  methods: {
    change() {
      if (!this.$refs.file.files) return;
      this.selectedFile = this.$refs.file.files.item(0);

      FileUploadService.uploadFile(this.selectedFile)
        .then((response) => {
          console.log(response + Date());
          this.loadFiles();
        })
        .catch((err) => {
          alert("Something went wrong! Please try again later.");
          console.log(err);
        });

      this.selectedFile = {};
    },
  },
};
</script>

<style scoped>
.btn {
  background-color: lightblue;
}
.disable-btn {
  background-color: grey;
}
</style>
