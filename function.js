

const messageForBee = "buzz buzz\n"; // Content of the file
const filename = "bumbleBee.txt"; // File name

// Create a Blob (file-like object)
const blob = new Blob([messageForBee], { type: "text/plain" });

// Create a temporary link element
const link = document.createElement("a");
link.href = URL.createObjectURL(blob);
link.download = filename;

document.getElementById('beeBtn').addEventListener('click', function() {
    const hiddenMessage = document.getElementById('hiddenMessage');
    if (hiddenMessage.style.display === 'block') {
        hiddenMessage.style.display = 'none';

    } else {
        hiddenMessage.style.display = 'block';

    }
window.confirm("Do you want to download a secret message from Jaws?");
if (window.confirm) {
    document.body.appendChild(link);
    link.click();
}

});

    document.getElementById('beeBtn').addEventListener('mouseenter', function() {
        console.log("buzz buzz 🐝");
   });


            // Cleanup
            document.body.removeChild(link);



//! other unnecessary stuff



//    document.getElementById('beeBtn').addEventListener('click', async function () {
//     const hiddenMessage = document.getElementById('hiddenMessage');
//     hiddenMessage.style.display = hiddenMessage.style.display === 'block' ? 'none' : 'block';

//     // Handle file writing
//     const fileHandle = await getFileHandle();
//     if (fileHandle) {
//         await writeToFile(fileHandle, 'buzz buzz\n its me, jaws');
//     }
// });

// document.getElementById('beeBtn').addEventListener('mouseenter', function () {
//     console.log("buzz buzz 🐝");
// });

// // File System Access API
// async function getFileHandle() {
//     try {
//         // Prompt user to open or create a file
//         const fileHandle = await window.showOpenFilePicker({
//             suggestedName: "bumblebee.txt",
//             types: [{ description: "Text Files", accept: { "text/plain": [".txt"] } }]
//         }).then(handles => handles[0]);

//         return fileHandle;
//     } catch (error) {
//         console.warn("File selection canceled.");
//         return null;
//     }
// }

// async function writeToFile(fileHandle, content) {
//     try {
//         const writable = await fileHandle.createWritable();
//         await writable.write(content);
//         await writable.close();
//         console.log("File updated: " + content);
//     } catch (error) {
//         console.error("Error writing to file:", error);
//     }
// }

