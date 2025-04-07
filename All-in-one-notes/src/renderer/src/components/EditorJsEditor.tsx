import React, { useEffect, useRef } from 'react';
import EditorJS from '@editorjs/editorjs';
import Header from '@editorjs/header';
import List from '@editorjs/list';
import Quote from '@editorjs/quote';
import Code from '@editorjs/code';
import { useMarkdownEditor } from '@renderer/hooks/useMarkdownEditor';

export const EditorJsMarkdownEditor = () => {
  const { selectedNote, handleAutoSaving, handleBlur } = useMarkdownEditor();
  const editorRef = useRef<EditorJS | null>(null);

  useEffect(() => {
    if (!selectedNote) return;

    // Initialize Editor.js
    editorRef.current = new EditorJS({
      holder: 'editorjs', // The ID of the container where the editor will be rendered
      placeholder: 'Start writing your note...',
      tools: {
        header: Header,
        list: List,
        quote: Quote,
        code: Code,
      },
      data: selectedNote.content ? JSON.parse(selectedNote.content) : {}, // Load saved content
      onChange: async () => {
        if (editorRef.current) {
          const savedData = await editorRef.current.save();
          handleAutoSaving(JSON.stringify(savedData)); // Save the editor content
        }
      },
      onBlur: () => {
        handleBlur(); // Handle blur event
      },
    });

    return () => {
      // Cleanup Editor.js instance
      if (editorRef.current) {
        editorRef.current.destroy();
        editorRef.current = null;
      }
    };
  }, [selectedNote, handleAutoSaving, handleBlur]);

  if (!selectedNote) return null;

  return (
    <div
      id="editorjs"
      className="outline-none min-h-screen max-w-none text-lg px-8 py-5 caret-yellow-500 prose prose-invert prose-p:my-3 prose-p:leading-relaxed prose-headings:my-4 prose-blockquote:my-4 prose-ul:my-2 prose-li:my-0 prose-code:px-1 prose-code:text-red-500 prose-code:before:content-[''] prose-code:after:content-['']"
    ></div>
  );
};
