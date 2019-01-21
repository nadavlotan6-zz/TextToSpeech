'use strict';

async function responses() {
  const fs = require('fs');
  const util = require('util');

  // Imports the Google Cloud client library
  const textToSpeech = require('@google-cloud/text-to-speech');

  // Creates a client
  const client = new textToSpeech.TextToSpeechClient();

  // The text to synthesize
  const text = "Yes";

  // ---------------- FIRST QUESTION -------------- //
  // Construct the request
  const request = {
    input: {text: text},
    // Select the language and SSML Voice Gender (optional)
    voice: {languageCode: 'en-US', name:'en-US-Wavenet-C', ssmlGender: 'MALE'},
    // Select the type of audio encoding 
    audioConfig: {audioEncoding: 'LINEAR16'},
  };

  // Performs the Text-to-Speech request
  const [response] = await client.synthesizeSpeech(request);
  // Write the binary audio content to a local file
  const writeFile = util.promisify(fs.writeFile);
  await writeFile('response_yes.wav', response.audioContent, 'binary');
  console.log('Audio content written to file: response_yes.wav');
}
responses().catch(console.error);