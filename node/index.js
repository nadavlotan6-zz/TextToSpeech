
'use strict';

async function main() {
  const fs = require('fs');
  const util = require('util');

  // Imports the Google Cloud client library
  const textToSpeech = require('@google-cloud/text-to-speech');

  // Creates a client
  const client = new textToSpeech.TextToSpeechClient();

  // The text to synthesize
  const text = "Hey Gil. I have detected an accident. Don't worry, I'm here to help you. Are you hurt?";
  const text_no = "I'm happy to hear you are OK. If you'll change your mind, I will send over help immediately. I have contact the autorities and they are alreay on their way to help you.";
  const text_no_1 = "Please turn on your emergency lights and carefully move your vehicle to the shoulders or side of the road. Don't worry, I have successfully saved your original location.";
  const text_yes = "I have successfully privided MADA with your location and medical information, and they are already on their way. A MADA operator will call you soon.";
  const text_yes_1 = "Do you feel any pain in your head, back or neck??";

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
  await writeFile('first.wav', response.audioContent, 'binary');
  console.log('Audio content written to file: first.wav');

  // ---------------- RESPONDED YES -------------- //
  // Construct the request
  const request_yes = {
    input: {text: text_yes},
    // Select the language and SSML Voice Gender (optional)
    voice: {languageCode: 'en-US', name:'en-US-Wavenet-C', ssmlGender: 'MALE'},
    // Select the type of audio encoding 
    audioConfig: {audioEncoding: 'LINEAR16'},
  };

  // Performs the Text-to-Speech request
  const [response_yes] = await client.synthesizeSpeech(request_yes);
  // Write the binary audio content to a local file
  const writeFile_yes = util.promisify(fs.writeFile);
  await writeFile_yes('yes.wav', response_yes.audioContent, 'binary');
  console.log('Audio content written to file: yes.wav');

  // ---------------- YES 1 -------------- //
  // Construct the request
  const request_yes_1 = {
    input: {text: text_yes_1},
    // Select the language and SSML Voice Gender (optional)
    voice: {languageCode: 'en-US', name:'en-US-Wavenet-C', ssmlGender: 'MALE'},
    // Select the type of audio encoding 
    audioConfig: {audioEncoding: 'LINEAR16'},
  };

  // Performs the Text-to-Speech request
  const [response_yes_1] = await client.synthesizeSpeech(request_yes_1);
  // Write the binary audio content to a local file
  const writeFile_yes_1 = util.promisify(fs.writeFile);
  await writeFile_yes_1('yes_1.wav', response_yes_1.audioContent, 'binary');
  console.log('Audio content written to file: yes_1.wav');

    // ---------------- RESPONDED NO -------------- //
  // Construct the request
  const request_no = {
    input: {text: text_no},
    // Select the language and SSML Voice Gender (optional)
    voice: {languageCode: 'en-US', name:'en-US-Wavenet-C', ssmlGender: 'MALE'},
    // Select the type of audio encoding 
    audioConfig: {audioEncoding: 'LINEAR16'},
  };

  // Performs the Text-to-Speech request
  const [response_no] = await client.synthesizeSpeech(request_no);
  // Write the binary audio content to a local file
  const writeFile_no = util.promisify(fs.writeFile);
  await writeFile_no('no.wav', response_no.audioContent, 'binary');
  console.log('Audio content written to file: no.wav');

    // ---------------- NO 1 -------------- //
  // Construct the request
  const request_no_1 = {
    input: {text: text_no_1},
    // Select the language and SSML Voice Gender (optional)
    voice: {languageCode: 'en-US', name:'en-US-Wavenet-C', ssmlGender: 'MALE'},
    // Select the type of audio encoding 
    audioConfig: {audioEncoding: 'LINEAR16'},
  };

  // Performs the Text-to-Speech request
  const [response_no_1] = await client.synthesizeSpeech(request_no_1);
  // Write the binary audio content to a local file
  const writeFile_no_1 = util.promisify(fs.writeFile);
  await writeFile_no_1('no_1.wav', response_no_1.audioContent, 'binary');
  console.log('Audio content written to file: no_1.wav');
}
main().catch(console.error);