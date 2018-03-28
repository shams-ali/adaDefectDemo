# Title

ADA Ensure JavaScript functionality is accessible from the keyboard

# Product

Accessibility

# Classification

Bug

# Bug Type

UI/Usability

# Reproducibility

Always

# Description

## Summary:

Users of VoiceOver cannot select a different option on the dropdown.

If the dropdown has optgroup where there are other option label, the VoiceOver cannot select any value.

Level Access (Mike):

This is a known iOS limitation on the picker control used on iPhones (that does not occur on iPads, where a different iOS control is used). Recommend Wells file a defect with Apple (to supplement Level Access doing so) and hope Apple addresses this deficient support for an HTML element that has been around since before Y2K.

## Steps to Reproduce:

* Turn on voiceover on your ios device (not ipad, or mac, only iphone)
* Double click on the select dropdown

## Expected Results:

* Expect either:
  1.  proper voiceover direction to double click to select item
  2.  select value without having to double click

## Actual Results:

* No instruction to double click item is given
* Item must be double clicked

## Version/Build:

* VoiceOver Iphone 6, 7, X OS-11.2.5

## Configuration:

* Install: node v8+; git; ngrok

```bash
$ git clone https://github.com/shams-ali/adaDefectDemo.git
$ cd adaDefectDemo && npm i
$ npm start
```

* In another terminal

```bash
$ ngrok http 3000
```

* Go to ngrok url shown in your terminal from your iphone device then turn on voiceover
