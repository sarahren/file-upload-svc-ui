<template>
  <div>
    <b-table striped hover :items="files">
      <template v-slot:cell(processedDate)="data">
        {{
          data.item.processedDate
            | dateParse("YYYY-MM-DD HH:mm:ss")
            | dateFormat("YYYY-MM-DD HH:mm:ss")
        }}
      </template>
    </b-table>
  </div>
</template>

<script>
export default {
  name: "FilesTable",
  props: ["files"],
};
</script>

<style scoped></style>
