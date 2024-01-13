// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

let fileContent = null;

function uploadFile() {
  const fileInput = document.getElementById("fileInput");

  if (fileInput.files.length > 0) {
    const file = fileInput.files[0];
    const reader = new FileReader();

    reader.onload = function (e) {
      fileContent = e.target.result;
      console.log("File content:", fileContent);
      alert("File uploaded successfully!");
    };
    reader.readAsText(file);
  } else {
    alert("Please select a file before uploading.");
  }
}



function downloadFile() {
  if (fileContent) {

    let content = fileContent.toLowerCase().split(/\s+/).join(" ");

    const blob = new Blob([content], { type: "text/plain" });
    const link = document.createElement("a");

    link.href = window.URL.createObjectURL(blob);
    link.download = "downloaded_file.txt";

    document.body.appendChild(link);
    link.click();

    document.body.removeChild(link);
  } else {
    alert("No file available for download. Please upload a file first.");
  }
}

function Grid() {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="flex items-center justify-center flex-col">
        <div className="flex items-center justify-center gap-4 flex-col">
          <div className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ">
            <input type="file" id="fileInput" class="cursor-pointer"></input>
          </div>

          <button
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded "
            onClick={uploadFile}
          >
            Upload file
          </button>
          <div>
            <button
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={downloadFile}
            >
              Download file
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Grid;
