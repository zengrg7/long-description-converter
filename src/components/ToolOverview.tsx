import React from "react";

const ToolOverview = () => {
  return (
    <div className="bg-white rounded-lg p-6 max-w-4xl mx-auto mt-10">
      <h2 className="text-3xl font-bold mb-4 text-gray-800 text-center">
        Overview
      </h2>
      <p className="text-gray-600 mb-6 text-lg leading-relaxed">
        The <strong>Long Description Converter</strong> is a React-based tool
        that transforms unstructured text into clean, well-formatted HTML. It
        simplifies text by removing unwanted characters and structures it into a
        consistent format for easy use.
      </p>

      <h3 className="text-2xl font-semibold mb-3 text-gray-700">
        Key Features
      </h3>
      <ul className="list-disc pl-5 text-gray-600 space-y-4">
        <li>
          <strong>Text Cleaning:</strong>
          <ul className="list-disc pl-5 mt-2">
            <li>
              <strong>Trimming:</strong> Removes extra spaces at the beginning
              and end of each sentence.
            </li>
            <li>
              <strong>Symbol Removal:</strong> Cleans text by removing:
              <ul className="list-disc pl-5 mt-1">
                <li>
                  Leading dashes (<code>- </code>) from sentences.
                </li>
                <li>
                  Trailing periods (<code>.</code>) from sentences.
                </li>
                <li>
                  Any instances of <code>**</code> within the text.
                </li>
              </ul>
            </li>
          </ul>
        </li>

        <li>
          <strong>Text Formatting:</strong>
          <ul className="list-disc pl-5 mt-2">
            <li>
              <strong>HTML Structure:</strong> Converts cleaned sentences into
              HTML:
              <ul className="list-disc pl-5 mt-1">
                <li>
                  Starts with a <code>&lt;p&gt;</code> tag and an empty{" "}
                  <code>&lt;strong&gt;</code> tag.
                </li>
                <li>
                  Each sentence is placed in an <code>&lt;li&gt;</code> tag, all
                  enclosed in an <code>&lt;ul&gt;</code> tag.
                </li>
              </ul>
            </li>
          </ul>
        </li>

        <li>
          <strong>Validation:</strong>
          <ul className="list-disc pl-5 mt-2">
            <li>
              Ensures there are at least 5 sentences. Displays an error
              notification if there are fewer.
            </li>
          </ul>
        </li>

        <li>
          <strong>Clipboard Integration:</strong>
          <ul className="list-disc pl-5 mt-2">
            <li>Automatically copies the formatted HTML to the clipboard.</li>
            <li>
              Shows success or error notifications based on the clipboard
              operation result.
            </li>
          </ul>
        </li>
      </ul>

      <h3 className="text-2xl font-semibold mt-6 mb-3 text-gray-700">Usage</h3>
      <p className="text-gray-600 mb-6 leading-relaxed">
        - Copy the list of long description form the app.
        <br />
        - Click the &ldquo;Convert&rdquo; button to convert the text to the
        required format.
        <br />- Formatted data is automatically copied to the clipboard.
        <br />- View the formatted HTML in the output area for further
        validation.
        <br />-{" "}
        <strong>
          In Short, Just click the &ldquo;Convert&rdquo; button and paste in the
          work app.
        </strong>
        <br />
        <p className="text-red-600">
          - Note: This tool doesn&rsquo;t check for any grammatical errors so
          use this tool in your discretion.
        </p>
      </p>

      <div className="bg-red-100 p-6 rounded-lg shadow-md max-w-3xl mx-auto my-10">
        <h3 className="text-xl font-semibold text-yellow-800 mb-4">
          Disclaimer
        </h3>
        <p className="text-lg text-gray-700">
          Please use the <strong>Long Description Converter</strong> tool with
          caution. While every effort has been made to ensure the accuracy and
          functionality of this tool, it is provided &quot;as i&quot; without
          any warranties or guarantees. The developer and the creators of this
          tool are not liable for any damages or issues that may arise from the
          use of this tool. By using this tool, you agree to assume all risks
          associated with its use.
        </p>
      </div>
    </div>
  );
};

export default ToolOverview;
