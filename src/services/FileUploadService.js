import http from "../http-common";

class FileUploadService {
  uploadFile(file) {
    let newFile = {
      fileName: file.name,
      size: file.size,
    };
    return http.post("/files", newFile);
  }

  getFiles() {
    return http.get("/files");
  }
}

export default new FileUploadService();
