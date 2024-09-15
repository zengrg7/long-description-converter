"use client";

import { useState } from "react";
import { SiConvertio } from "react-icons/si";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Notification from "@/components/Notification";
import ToolOverview from "@/components/ToolOverview";

// import { FaRegCopy } from "react-icons/fa6";
// import { MdOutlineContentPaste } from "react-icons/md";

export default function Home() {
  const [unformattedText, setUnformattedText] = useState("");
  const [formattedText, setFormattedText] = useState("");

  // function handlePaste() {
  //   navigator.clipboard
  //     .readText()
  //     .then((text) => {
  //       setUnformattedText(text);
  //     })
  //     .catch((err) => {
  //       console.error("Failed to read clipboard contents:", err);
  //     });
  // }

  function cleanAndTrimText(text: string) {
    // Split text into sentences by using multiple line breaks or periods followed by space/newline
    const sentences = text.split(/\n+/).map((sentence) => sentence.trim());
    console.log(sentences);

    // Join the cleaned sentences back together with a single newline between each
    const cleanedText = sentences
      .filter((sentence) => sentence !== "")
      .join("\n\n");

    return cleanedText;
  }
  function handleConvert(text: string) {
    const sentences = text
      .trim()
      .split(/\n/)
      .filter((sentence: string) => sentence.trim() !== "");

    // Check if there are fewer than 5 sentences
    if (sentences.length < 5) {
      setFormattedText("");
      toast.error("Less than 5 points");
      return;
    }

    // Format each sentence according to the given rules
    const formattedSentences = sentences.map((sentence) => {
      let trimmedSentence = sentence.trim();

      // Remove "- " if the sentence starts with it
      if (trimmedSentence.startsWith("- ")) {
        trimmedSentence = trimmedSentence.slice(2);
      }

      // Remove "." if the sentence ends with it
      if (trimmedSentence.endsWith(".")) {
        trimmedSentence = trimmedSentence.slice(0, -1);
      }

      // Remove "**" from the sentence
      trimmedSentence = trimmedSentence.replace(/\*\*/g, "");

      return trimmedSentence;
    });

    // Format the final HTML output
    let result = "<p><strong></strong></p>\n\n<ul>\n";
    formattedSentences.forEach((sentence) => {
      result += `<li>${sentence}</li>\n`;
    });
    result += "</ul>";

    setFormattedText(result);
    navigator.clipboard
      .writeText(result)
      .then(() => {
        toast.success("Copied to clipboard");
      })
      .catch(() => {
        toast.error("Unable to copy to clipboard");
      });
  }

  // function handleCopy() {
  //   navigator.clipboard
  //     .writeText(formattedText)
  //     .then(() => {
  //       toast.success("Copied to clipboard");
  //     })
  //     .catch(() => {
  //       toast.error("Unable to copy to clipboard");
  //     });
  // }

  function handleAll() {
    navigator.clipboard
      .readText()
      .then((text) => {
        setUnformattedText(cleanAndTrimText(text));
        handleConvert(text);
      })
      .catch((err) => {
        console.error("Failed to read clipboard contents:", err);
      });
  }

  return (
    <div className="flex flex-col justify-center items-center w-full min-h-screen font-[family-name:var(--font-geist-sans)] pt-20">
      <main className="flex flex-col gap-8 justify-center items-center w-4/5">
        <h1 className="text-4xl font-bold text-center ">
          Long Description Converter
        </h1>
        <div className="flex gap-6 justify-center items-center mr-1">
          {/* <button
            className="text-base flex items-center justify-center gap-2 py-2 w-36 rounded-md  bg-slate-500 text-slate-100 hover:bg-slate-800"
            onClick={handlePaste}>
            <span>Paste</span>
            <MdOutlineContentPaste />
          </button> */}
          <button
            className="text-base w-36 py-2 flex gap-2 items-center justify-center rounded-md bg-green-500 text-white hover:bg-green-700"
            onClick={handleAll}>
            <span>Convert</span>
            <SiConvertio />
          </button>
          {/* <button
            className="text-base w-36 py-2 flex gap-2 items-center justify-center rounded-md bg-cyan-500 text-white hover:bg-cyan-700"
            onClick={handleCopy}>
            <span>Copy</span>
            <FaRegCopy />
          </button> */}
        </div>
        <div className="w-full flex justify-between text-sm">
          <div className="w-[48%] aspect-[4/3] relative flex items-center justify-center">
            <textarea
              value={unformattedText}
              onChange={(e) => setUnformattedText(e.target.value)}
              className="w-full h-full border-slate-300 border-2 rounded-md px-6 py-4"
            />
          </div>
          <div className="w-[48%] aspect-[4/3] relative flex items-center justify-center">
            <textarea
              value={formattedText}
              onChange={(e) => setFormattedText(e.target.value)}
              className="w-full h-full border-slate-300 border-2 rounded-md px-6 py-4"
              placeholder="Converted Text"
            />
          </div>
        </div>
      </main>
      <ToolOverview />
      <Notification />
    </div>
  );
}
