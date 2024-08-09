import dotenv from "dotenv";
dotenv.config({path: ".env.local"});

import { DirectoryLoader } from "langchain/document_loaders/fs/directory";
import { TextLoader } from "langchain/document_loaders/fs/text";
import { DocumentInterface } from "@langchain/core/documents";
import { RecursiveCharacterTextSplitter } from 'langchain/text_splitter';
import { getEmbeddingsCollection, getVectorStore } from "../lib/astradb";
import { Redis } from "@upstash/redis";

async function generateEmbeddings(){
    
    await Redis.fromEnv().flushdb();

    const vectorstore = await getVectorStore();

    (await getEmbeddingsCollection()).deleteMany({});

    const loader = new DirectoryLoader(
      "app",
      {
        ".jsx": (path) => new TextLoader(path)
      },
      true
    );


    const docs = (await loader.load())
                 .filter(doc => doc.metadata.source.endsWith("page.jsx"))
                 .map((doc): DocumentInterface => {
                 const url = doc.metadata.source
                            .replace(/\\/g, "/")
                            .split("app")[1]
                            .split("/page.")[0] || "/";

    const pageContentFinal = doc.pageContent
                                .replace(/^import.*$/gm, "")
                                .replace(/ className=(["']).*?\1| className={.*?}/g, "")
                                .replace(/ btnStyles=(["']).*?\1| btnStyles={.*?}/g, "")
                                .replace(/ containerStyles=(["']).*?\1| containerStyles={.*?}/g, "")
                                .replace(/ iconStyles=(["']).*?\1| iconStyles={.*?}/g, "")
                                .replace(/ initial=(["']).*?\1| initial={.*?}/g, "")
                                .replace(/ animate=(["']).*?\1| animate={.*?}/g, "")
                                .replace(/ transition=(["']).*?\1| transition={.*?}/g, "")
                                .replace(/ wrapper=(["']).*?\1| wrapper={.*?}/g, "")
                                .replace(/ speed=([{]).*?\1| speed={.*?}/g, "")
                                .replace(/ repeat=([{]).*?\1| repeat={.*?}/g, "")
                                .replace(/ sequence=([{]).*?\1| sequence={.*?}/g, "")
                                .replace(/"use client"\s*/g, "")
                                .replace(/^\s*[\r]/gm, "")
                                .trim();

                      return {
                        pageContent: pageContentFinal,
                        metadata: {url}
                      }

    });

    const splitter = RecursiveCharacterTextSplitter.fromLanguage("html");
    const splitDocs = await splitter.splitDocuments(docs);
    // console.log(splitDocs);

    // const db = getEmbeddingsCollection();
    // (await db).insertMany(splitDocs);
    await vectorstore.addDocuments(splitDocs);

    // console.log('Documents successfully added to vectorstore.');
    // Verify the insertion by fetching some data back
    // const collection = await getEmbeddingsCollection();
    // const insertedDocs = await collection.find({}).toArray();
    // console.log(`Number of documents in collection: ${insertedDocs.length}`);
}

generateEmbeddings();


// import fs from "fs/promises";
// import { WebPDFLoader } from "@langchain/community/document_loaders/web/pdf";
// import path from "path";

// // Function to load PDF and process it
// async function loadPDF() {
//   try {
//     const pdfPath = path.join(process.cwd(), "public", "Sai_Sunny_Resume.pdf");

//     // Read the file as a buffer
//     const buffer = await fs.readFile(pdfPath);

//     // Create a Blob from the buffer
//     const pdfBlob = new Blob([buffer], { type: "application/pdf" });

//     // Initialize the loader with the Blob
//     const loader = new WebPDFLoader(pdfBlob, {
//       // required params = ...
//       // optional params = ...
//     });

//     // Load the data from the PDF
//     const data = await loader.load();

//     console.log("PDF Data Loaded:", data);
//   } catch (error) {
//     console.error("Error loading PDF:", error);
//   }
// }

// // Call the function to load the PDF
// loadPDF();