"use client";
import MdEditor from "react-markdown-editor-lite";
import "react-markdown-editor-lite/lib/index.css";
import { BlogContext } from "../context/blog-context";
import { useContext, useEffect } from "react";
import "react-markdown-editor-lite/lib/index.css";
import "@/app/styles/editor.css";

const Write = () => {
  // @ts-ignore
  const { blog, setBlog } = useContext(BlogContext);

  function setupMarkdown(content: string) {
    var md = require("markdown-it")();
    var result = md.render(content || "");
    return result;
  }

  useEffect(() => {
    return () => {
      setBlog({
        title: "",
        summary: null,
        content: "",
        image: null,
        identifier: null,
        publishedAt: null,
        titleValid: true,
        contentValid: true,
      });
    };
  }, [setBlog]);

  const handleTitleChange = (evn: any) => {
    setBlog({ ...blog, title: evn.target.value, titleValid: true });
  };

  const handleContentChange = (evn: any) => {
    setBlog({ ...blog, content: evn.text, contentValid: true });
  };

  return (
    <div className="editor my-8 rounded-box border overflow-hidden">
      <input
        className="w-full p-4 text-lg font-bold focus:outline-none editor-title"
        placeholder="Title..."
        value={blog.title}
        onChange={handleTitleChange}
      />
      <MdEditor
        style={{ border: "none" }}
        className="min-h-[50vh]"
        value={blog.content}
        renderHTML={(text) => setupMarkdown(text)}
        onChange={handleContentChange}
      />
    </div>
  );
};

export default Write;
